import { MongoClient, type Document, type Filter } from 'mongodb';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { sections, type Section } from './content';
import type { ImageSection } from './media';

type Row = Document & { _id: string; name: string };
const globalState = globalThis as typeof globalThis & { publicCatalogue?: MongoClient };

function database() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Catalogue connection is unavailable.');
  const client = globalState.publicCatalogue ??= new MongoClient(uri, { serverSelectionTimeoutMS: 6500, maxPoolSize: 12 });
  return client.db(process.env.MONGODB_DATABASE || 'medicine_catalog_prod');
}
function collection(section: Section) {
  return database().collection<Row>(sections[section].collection);
}

const summaries: Record<Section, string[]> = {
  medicines: ['name', 'nameBn', 'genericName', 'manufacturerName', 'strength', 'dosageForm', 'picture.url'],
  tests: ['name', 'nameBn', 'categories'],
  doctors: ['name', 'nameBn', 'nameEn', 'specialties', 'picture.url', 'chambers.name', 'chambers.address'],
  facilities: ['name', 'nameBn', 'type', 'location.district'],
};
const details: Record<Section, string[]> = {
  medicines: ['genericId', 'packageDescription', 'packageSize', 'therapeuticSystem', 'dgdaRegistry.registrationNumber', 'dgdaRegistry.registeredFor', 'labelScope', 'labelSections',
    'price.mrp', 'price.currency', 'price.mrpPackageUnit', 'price.offers.price', 'price.offers.currency', 'price.offers.packageUnit',
    'price.offers.priceDate', 'price.offers.priceType', 'price.offers.mrp', 'price.offers.observedAt'],
  tests: ['aliases', ...['government', 'private'].flatMap(sector => [
    'providerName', 'facilityId', 'branchName', 'price', 'currency', 'sample', 'reportTime', 'updatedAt',
    'eligibleGovernmentOrDependentPrice', 'patientCategory', 'isFree', 'sources.dateBasis',
  ].map(field => 'prices.' + sector + '.' + field))],
  doctors: ['degrees', ...['education', 'workExperience', 'expertise', 'specializations', 'awards', 'achievements',
    'publications', 'experienceYears', 'designation', 'workplace', 'bio', 'about', 'affiliation', 'institute']
    .map(field => 'professionalDetails.' + field), 'bmdc.number', 'bmdc.status', 'qualifications.originalText', 'chambers.name', 'chambers.address',
    'chambers.mapUrl', 'chambers.facilityId', 'chambers.visitingHours.raw', 'chambers.appointmentPhone', 'chambers.fee'],
  facilities: ['address', 'location.upazila', 'location.division', 'registryCode', 'isPrivate', 'ownership', 'services', 'emergency.available',
    'emergency.open24Hours', 'emergency.status', 'contact.phoneNumbers', 'contact.emails', 'email', 'capacity.beds',
    'facilityLevel', 'healthcareLevel', 'facilityFunction', 'establishmentYear', 'government.licence.number',
    'directory.specialtyBreakdown.specialty', 'directory.specialtyBreakdown.doctorCount', 'directory.servicesAsListed'],
};
const fields: Record<Section, string[]> = {
  medicines: ['nameKey', 'name', 'nameBn', 'genericName', 'manufacturerName', 'strength', 'dosageForm'],
  tests: ['name', 'nameBn', 'aliases'],
  doctors: ['name', 'nameEn', 'nameBn', 'specialties', 'chambers.name', 'chambers.address'],
  facilities: ['nameKey', 'name', 'nameBn', 'location.district', 'registryCode'],
};

const projection = (paths: string[]) => Object.fromEntries(paths.map(path => [path, 1]));
const escape = (value: string) => value.replace(/[.*+?^$${}()|[\]\\]/g, '\\$&');

export function cleanQuery(value: unknown) {
  return typeof value === 'string' ? value.normalize('NFKC').trim().replace(/\s+/g, ' ').slice(0, 90) : '';
}

export const getRecord = cache(unstable_cache(async (section: Section, id: string) => {
  const row = await collection(section).findOne({ _id: id }, { projection: projection([...summaries[section], ...details[section]]), maxTimeMS: 5000 });
  return row;
}, ['medboi-public-detail-v2'], { revalidate: 300 }));

const pageSize = 20;

async function browse(section: Section, query: string, page: number) {
  const tokens = query.split(' ').filter(Boolean).slice(0, 6);
  const filter: Filter<Row> = tokens.length ? {
    $and: tokens.map(token => ({
      $or: fields[section].map(field => ({ [field]: { $regex: escape(token), $options: 'i' } })),
    })),
  } : {};
  return collection(section).find(filter, { projection: projection(summaries[section]), maxTimeMS: 5500 })
    .sort({ name: 1, _id: 1 }).skip((page - 1) * pageSize).limit(pageSize + 1).toArray();
}

const cachedBrowse = unstable_cache(browse, ['medboi-public-list-v2'], { revalidate: 300 });
export async function searchCatalogue(section: Section, query: string, page: number) {
  const rows = await (query ? browse : cachedBrowse)(section, query, page);
  return { rows: rows.slice(0, pageSize), hasMore: rows.length > pageSize };
}

export const sitemapChunkSize = 5000;
export const sitemapCounts = unstable_cache(async (section: Section) => collection(section).estimatedDocumentCount(),
  ['medboi-sitemap-count-v1'], { revalidate: 3600 });
export const sitemapEntries = unstable_cache(async (section: Section, page: number) =>
  collection(section).find({}, { projection: { name: 1, strength: 1 } }).sort({ _id: 1 })
    .skip(page * sitemapChunkSize).limit(sitemapChunkSize).toArray(), ['medboi-sitemap-v1'], { revalidate: 3600 });

export const relatedMedicines = unstable_cache(async (id: string, generic: string) => {
  if (!generic) return [];
  return collection('medicines').find({ genericName: generic, _id: { $ne: id } },
    { projection: projection(summaries.medicines), maxTimeMS: 3000 }).sort({ name: 1 }).limit(5).toArray();
}, ['medboi-public-related-v2'], { revalidate: 300 });

export const getImage = unstable_cache(async (section: ImageSection, id: string) =>
  (await collection(section).findOne({ _id: id }, { projection: { 'picture.url': 1 }, maxTimeMS: 3500 }))?.picture?.url,
  ['medboi-image-link-v1'], { revalidate: 1800 });

export const getGenericInformation = unstable_cache(async (id: string) =>
  database().collection<Row>('generics').findOne({ _id: id }, {
    projection: { name: 1, drugClass: 1, indications: 1, labelSections: 1 }, maxTimeMS: 3500,
  }), ['medboi-public-generic-v1'], { revalidate: 300 });

export const featuredMedicines = unstable_cache(async () => {
  const preferred = ['napa', 'seclo', 'ace', 'maxpro', 'fexo', 'monas'];
  const fields = projection([...summaries.medicines, 'price.mrp', 'price.currency', 'price.mrpPackageUnit']);
  const results = await collection('medicines').find({ nameKey: { $in: preferred }, 'picture.url': /^https:\/\// },
    { projection: fields, maxTimeMS: 5000 }).sort({ name: 1, strength: 1 }).limit(60).toArray();
  const selected = preferred.flatMap(name => {
    const matches = results.filter(row => row.name.toLowerCase() === name);
    return matches.sort((a, b) => Number(/tablet|capsule/i.test(b.dosageForm || '')) - Number(/tablet|capsule/i.test(a.dosageForm || '')))[0] ?? [];
  });
  if (selected.length >= 4) return selected;
  const fallback = await collection('medicines').find({ _id: { $nin: selected.map(row => row._id) }, 'picture.url': /^https:\/\// },
    { projection: fields, maxTimeMS: 5000 }).sort({ name: 1 }).limit(6 - selected.length).toArray();
  return [...selected, ...fallback];
}, ['medboi-public-featured-v1'], { revalidate: 900 });
