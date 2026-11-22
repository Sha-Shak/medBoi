import { medicineReferenceStages, medicineReferenceProjection, medicineSearchFields } from './shared/medicine-references';
import type { Collection, Document, Filter } from 'mongodb';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { sections, type Section } from './content';
import type { ImageSection } from './media';
import type { Picture } from './hosted-photo';
import { readCatalogue } from './mongo';
import { doctorFacets, type Selections } from './facets';

type Row = Document & { _id: string; name: string };
function readSection<T>(section: Section, read: (collection: Collection<Row>) => Promise<T>) {
  return readCatalogue(sections[section].collection, db => read(db.collection<Row>(sections[section].collection)));
}

const pictureFields = [ 'picture.removedAt', 'picture.cloudinary.type'];

const summaries: Record<Section, string[]> = {
  medicines: ['name', 'nameBn', ...Object.keys(medicineReferenceProjection), 'strength', ...pictureFields],
  tests: ['name', 'nameBn', 'categories'],
  doctors: ['name', 'nameBn', 'nameEn', 'specialties', ...pictureFields, 'chambers.name', 'chambers.address'],
  facilities: ['name', 'nameBn', 'type', 'location.district', 'location.upazila', ...pictureFields],
};
const details: Record<Section, string[]> = {
  medicines: ['packageDescription', 'packageSize', 'therapeuticSystem', 'dgdaRegistry.registrationNumber', 'dgdaRegistry.registeredFor', 'labelScope', 'labelSections',
    'price.mrp', 'price.currency', 'price.mrpPackageUnit', 'price.offers.price', 'price.offers.currency', 'price.offers.packageUnit',
    'price.offers.priceDate', 'price.offers.priceType', 'price.offers.mrp', 'price.offers.observedAt'],
  tests: ['aliases', ...['government', 'private'].flatMap(sector => [
    'providerName', 'facilityId', 'branchName', 'price', 'currency', 'sample', 'reportTime', 'updatedAt',
    'eligibleGovernmentOrDependentPrice', 'patientCategory', 'isFree', 'dateBasis', 'sources.dateBasis',
  ].map(field => 'prices.' + sector + '.' + field))],
  doctors: ['degrees', ...['education', 'workExperience', 'expertise', 'specializations', 'awards', 'achievements',
    'publications', 'experienceYears', 'designation', 'workplace', 'bio', 'about', 'affiliation', 'institute']
    .map(field => 'professionalDetails.' + field), 'bmdc.number', 'bmdc.status', 'qualifications.originalText', 'chambers.name', 'chambers.address',
    'chambers.mapUrl', 'chambers.facilityId', 'chambers.visitingHours.raw', 'chambers.appointmentPhone', 'chambers.room', 'chambers.fee'],
  facilities: ['address', 'location.upazila', 'location.division', 'registryCode', 'isPrivate', 'ownership', 'services', 'emergency.available',
    'emergency.open24Hours', 'emergency.status', 'contact.phoneNumbers', 'contact.emails', 'email', 'capacity.beds',
    'facilityLevel', 'healthcareLevel', 'facilityFunction', 'establishmentYear', 'government.licence.number',
    'directory.specialtyBreakdown.specialty', 'directory.specialtyBreakdown.doctorCount', 'directory.servicesAsListed'],
};
const fields: Record<Section, string[]> = {
  medicines: ['nameKey', 'name', 'nameBn', 'genericName', 'manufacturerName', 'strength', 'dosageForm'],
  tests: ['name', 'nameBn', 'aliases', 'searchAliases'],
  doctors: ['name', 'nameEn', 'nameBn', 'specialties', 'chambers.name', 'chambers.address'],
  facilities: ['nameKey', 'name', 'nameBn', 'location.district', 'location.upazila', 'address', 'registryCode'],
};

const projection = (paths: string[]) => Object.fromEntries(paths.map(path => [path, 1]));
const escape = (value: string) => value.replace(/[.*+?^$${}()|[\]\\]/g, '\\$&');

export function cleanQuery(value: unknown) {
  return typeof value === 'string' ? value.normalize('NFKC').trim().replace(/\s+/g, ' ').slice(0, 90) : '';
}

export const getRecord = cache(unstable_cache(async (section: Section, id: string) => {
  if (section === 'medicines') return readSection(section, collection => collection.aggregate<Row>([
    { $match: { _id: id } }, { $project: {
      ...projection([...summaries.medicines, ...details.medicines]),
      dgdaEvidenceType: '$source.registry.evidenceType',
    } }, ...medicineReferenceStages,
  ], { maxTimeMS: 5000 }).next());
  return readSection(section, collection => collection.findOne(section === 'tests'
    ? { $or: [{ _id: id }, { mergedTestIds: id }] } : { _id: id }, {
    projection: projection([...summaries[section], ...details[section]]), maxTimeMS: 5000,
  }));
}, ['medboi-public-detail-v7'], { revalidate: 300 }));

const pageSize = 20;
export type MedicineSearchMode = 'all' | 'brand' | 'generic';

async function browse(section: Section, query: string, page: number, limit = pageSize, mode: MedicineSearchMode = 'all', selections: Selections = {}) {
  const tokens = query.split(' ').filter(Boolean).slice(0, 6);
  if (section === 'medicines') return readCatalogue('medicines', async db => {
    const clauses = await Promise.all(tokens.map(async token => {
      const term = escape(token);
      const match = { $regex: term, $options: 'i' };
      if (mode === 'brand') return { $or: [{ name: match }, { nameBn: match }, { strength: match }] };
      if (mode === 'generic') {
        const ids = await db.collection('generics').distinct('_id', { $or: [{ name: match }, { aliases: match }] });
        return { $or: [{ genericId: { $in: ids } }, { strength: match }] };
      }
      return { $or: await medicineSearchFields(db, term) };
    }));
    const filter = {
      ...(clauses.length ? { $and: clauses } : {}),
      ...(selections.manufacturer ? { manufacturerId: selections.manufacturer } : {}),
      ...(selections.form ? { dosageFormId: selections.form } : {}),
    };
    return db.collection<Row>('medicines').aggregate<Row>([
      { $match: filter }, { $sort: { name: 1, _id: 1 } },
      { $skip: (page - 1) * limit }, { $limit: limit + 1 },
      { $project: projection(summaries.medicines) }, ...medicineReferenceStages,
    ], { maxTimeMS: 5500 }).toArray();
  });
  const specialtyIds = section === 'doctors' && tokens.length
    ? await readCatalogue('doctors', db => Promise.all(tokens.map(token => {
      const pattern = { $regex: escape(token), $options: 'i' };
      return db.collection('specialties').distinct('_id', {
        $or: [{ nameEn: pattern }, { nameBn: pattern }, { aliases: pattern }],
      }, { maxTimeMS: 3500 });
    }))) : [];
  const filter: Filter<Row> = tokens.length ? {
    $and: tokens.map((token, index) => ({
      $or: [...fields[section].map(field => ({ [field]: { $regex: escape(token), $options: 'i' } })),
        ...(specialtyIds[index]?.length ? [{ specialtyIds: { $in: specialtyIds[index] } }] : [])],
    })),
  } : {};
  if (section === 'doctors') {
    if (selections.specialty) filter.specialtyIds = selections.specialty;
    if (selections.city) {
      const { hospital } = await doctorFacets();
      filter['chambers.facilityId'] = { $in: (hospital ?? [])
        .filter(location => location.city === selections.city && (!selections.hospital || location.value === selections.hospital))
        .map(location => location.value) };
    } else if (selections.hospital) {
      filter['chambers.facilityId'] = selections.hospital;
    }
  }
  return readSection(section, collection => collection.find(filter, { projection: projection(summaries[section]), maxTimeMS: 5500 })
    .sort({ name: 1, _id: 1 }).skip((page - 1) * limit).limit(limit + 1).toArray());
}

const cachedBrowse = unstable_cache(browse, ['medboi-public-list-v5'], { revalidate: 120 });
export async function searchCatalogue(section: Section, query: string, page: number, limit = pageSize, mode: MedicineSearchMode = 'all', selections: Selections = {}) {
  const rows = await (page > 5 ? browse : cachedBrowse)(section, query, page, limit, mode, selections);
  return { rows: rows.slice(0, limit), hasMore: rows.length > limit };
}

export const sitemapChunkSize = 5000;
export const sitemapCounts = unstable_cache(async (section: Section) => readSection(section, collection => collection.estimatedDocumentCount()),
  ['medboi-sitemap-count-v1'], { revalidate: 3600 });
export const sitemapEntries = unstable_cache(async (section: Section, page: number) =>
  readSection(section, collection => collection.find({}, { projection: { name: 1, strength: 1 } }).sort({ _id: 1 })
    .skip(page * sitemapChunkSize).limit(sitemapChunkSize).toArray()), ['medboi-sitemap-v1'], { revalidate: 3600 });

export const doctorsAtFacility = unstable_cache(async (facilityId: string) =>
  readSection('doctors', collection => collection.find({ 'chambers.facilityId': facilityId }, {
    projection: projection(['name', 'nameBn', 'specialties', ...pictureFields]), maxTimeMS: 3000,
  }).sort({ name: 1, _id: 1 }).limit(6).toArray()), ['medboi-public-facility-doctors-v1'], { revalidate: 300 });

export const relatedMedicines = unstable_cache(async (id: string, generic: string) => {
  if (!generic) return [];
  return readSection('medicines', collection => collection.aggregate<Row>([
    { $match: { genericId: generic, _id: { $ne: id } } }, { $sort: { name: 1, _id: 1 } }, { $limit: 5 },
    { $project: projection(summaries.medicines) }, ...medicineReferenceStages,
  ], { maxTimeMS: 3000 }).toArray());
}, ['medboi-public-related-v3'], { revalidate: 300 });

export async function getImage(section: ImageSection, id: string, thumbnail = false): Promise<Picture | undefined> {
  const row = await readSection(section, collection => collection.findOne({ _id: id }, {
    projection: { 'picture.url': 1, 'picture.removedAt': 1, 'picture.cloudinary': 1,
      ...(thumbnail ? { 'picture.cloudinarySource.role': 1, 'picture.sourceKey': 1, 'source.photos': 1, pictureHistory: { $slice: -1 } } : {}) }, maxTimeMS: 3500,
  }));
  const picture = row?.picture;
  const previous = thumbnail && row?.pictureHistory?.[0];
  const evidence = thumbnail && (row?.source?.photos?.[picture?.sourceKey] ?? picture);
  const previousEvidence = previous && (row?.source?.photos?.[previous.sourceKey] ?? previous);
  if (picture && !picture.removedAt && evidence?.cloudinarySource?.role === 'profile-original'
    && evidence.url && previousEvidence?.url === evidence.url && previous?.cloudinary?.type === 'authenticated'
    && previous.cloudinary.width * previous.cloudinary.height < picture.cloudinary.width * picture.cloudinary.height) {
    return { cloudinary: previous.cloudinary };
  }
  return picture ?? undefined;
}

export const getGenericInformation = unstable_cache(async (id: string) =>
  readCatalogue('generics', db => db.collection<Row>('generics').findOne({ _id: id }, {
    projection: { name: 1, drugClass: 1, indications: 1, labelSections: 1 }, maxTimeMS: 3500,
  })), ['medboi-public-generic-v1'], { revalidate: 300 });

export async function getPriceFacilities(ids: string[]) {
  if (!ids.length) return [];
  return readSection('facilities', collection => collection.find(
    { _id: { $in: ids } }, { projection: { name: 1, nameBn: 1 }, maxTimeMS: 3500 },
  ).toArray());
}

export const featuredMedicines = unstable_cache(async () => {
  const preferred = ['napa', 'seclo', 'ace', 'maxpro', 'fexo', 'monas'];
  const fields = projection([...summaries.medicines, 'price.mrp', 'price.currency', 'price.mrpPackageUnit']);
  const hosted = { 'picture.cloudinary.type': 'authenticated', 'picture.removedAt': { $exists: false } };
  const get = (filter: Document, limit: number) => readSection('medicines', collection => collection.aggregate<Row>([
    { $match: { ...filter, ...hosted } }, { $sort: { name: 1, strength: 1, _id: 1 } }, { $limit: limit },
    { $project: fields }, ...medicineReferenceStages,
  ], { maxTimeMS: 5000 }).toArray());
  const results = await get({ nameKey: { $in: preferred } }, 60);
  const selected = preferred.flatMap(name => {
    const matches = results.filter(row => row.name.toLowerCase() === name);
    return matches.sort((a, b) => Number(/tablet|capsule/i.test(b.dosageForm || '')) - Number(/tablet|capsule/i.test(a.dosageForm || '')))[0] ?? [];
  });
  if (selected.length >= 4) return selected;
  const fallback = await get({ _id: { $nin: selected.map(row => row._id) } }, 6 - selected.length);
  return [...selected, ...fallback];
}, ['medboi-public-featured-v3'], { revalidate: 900 });

export const featuredDirectory = unstable_cache(async (section: Exclude<Section, 'medicines'>) => {
  const fields = projection(summaries[section]);
  if (section === 'doctors') return readSection(section, collection => collection.find({
    'picture.cloudinary.type': 'authenticated', 'picture.removedAt': { $exists: false }, 'chambers.facilityId': { $type: 'string' },
  }, { projection: fields, maxTimeMS: 5000 }).sort({ _id: 1 }).limit(8).toArray());
  return readSection(section, async collection => {
    const preferred = section === 'tests'
      ? { name: { $in: [/^complete blood count/i, /^hba1c/i, /^serum creatinine/i, /^thyroid stimulating hormone/i,
        /^lipid profile/i, /^chest x-ray/i] } }
      : { registryCode: { $in: ['10040146', '10038280', '10025620', '10025628', '10025635', '10037667'] } };
    const selected = await collection.find(preferred, { projection: fields, maxTimeMS: 5000 }).sort({ name: 1, _id: 1 }).limit(8).toArray();
    if (selected.length >= 6) return selected;
    const fallback = await collection.find({ _id: { $nin: selected.map(row => row._id) } },
      { projection: fields, maxTimeMS: 5000 }).sort({ _id: 1 }).limit(6 - selected.length).toArray();
    return [...selected, ...fallback];
  });
}, ['medboi-public-featured-directory-v1'], { revalidate: 900 });
