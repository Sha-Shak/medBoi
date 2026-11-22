import { unstable_cache } from 'next/cache';
import { readCatalogue } from './mongo';

export type FacetKey = 'specialty' | 'city' | 'hospital' | 'manufacturer' | 'form' | 'category' | 'type';
export type FacetOption = { value: string; en: string; bn?: string; city?: string; matches?: string[] };
export type Facets = Partial<Record<FacetKey, FacetOption[]>>;
export type Selections = Partial<Record<FacetKey, string>>;

const cityNames: Record<string, string> = {
  Dhaka: 'ঢাকা', Chattogram: 'চট্টগ্রাম', Sylhet: 'সিলেট', Rajshahi: 'রাজশাহী', Khulna: 'খুলনা',
  Barishal: 'বরিশাল', Rangpur: 'রংপুর', Mymensingh: 'ময়মনসিংহ', Cumilla: 'কুমিল্লা',
  Bogura: 'বগুড়া', Jashore: 'যশোর', Dinajpur: 'দিনাজপুর', Feni: 'ফেনী', Gazipur: 'গাজীপুর',
  Narayanganj: 'নারায়ণগঞ্জ', Tangail: 'টাঙ্গাইল', Faridpur: 'ফরিদপুর', Pabna: 'পাবনা',
  Kushtia: 'কুষ্টিয়া', Noakhali: 'নোয়াখালী', Chandpur: 'চাঁদপুর', 'Cox’s Bazar': 'কক্সবাজার',
};
const formNames: Record<string, string> = {
  tablet: 'ট্যাবলেট', capsule: 'ক্যাপসুল', injection: 'ইনজেকশন', syrup: 'সিরাপ',
  suspension: 'সাসপেনশন', cream: 'ক্রিম', ointment: 'মলম', gel: 'জেল',
  'eye drops': 'চোখের ড্রপ', 'ear drops': 'কানের ড্রপ', 'nasal spray': 'নাকের স্প্রে',
  inhaler: 'ইনহেলার', suppository: 'সাপোজিটরি', powder: 'পাউডার', solution: 'সলিউশন',
};
const ordered = (options: FacetOption[]) => options.sort((a,b) => a.en.localeCompare(b.en) || a.value.localeCompare(b.value));

export const doctorFacets = unstable_cache(async (): Promise<Facets> => readCatalogue('doctors', async db => {
  const doctors = db.collection('doctors');
  const [specialtyIds, hospitalIds] = await Promise.all([
    doctors.distinct('specialtyIds', { specialtyIds: { $type: 'string' } }),
    doctors.distinct('chambers.facilityId', { 'chambers.facilityId': { $type: 'string' } }),
  ]);
  const [specialties, hospitals] = await Promise.all([
    db.collection<{ _id: string; nameEn: string; nameBn?: string }>('specialties')
      .find({ _id: { $in: specialtyIds } }, { projection: { nameEn: 1, nameBn: 1 } }).toArray(),
    db.collection<{ _id: string; name: string; nameBn?: string; location?: { district?: string } }>('facilities')
      .find({ _id: { $in: hospitalIds } }, { projection: { name: 1, nameBn: 1, 'location.district': 1 } }).toArray(),
  ]);
  const hospital = ordered(hospitals.filter(row => row.name).map(row => ({
    value: row._id, en: row.name, bn: row.nameBn, city: row.location?.district || undefined,
  })));
  const cities = [...new Set(hospital.flatMap(row => row.city ? [row.city] : []))];
  return {
    specialty: ordered(specialties.filter(row => row.nameEn).map(row => ({ value: row._id, en: row.nameEn, bn: row.nameBn }))),
    city: ordered(cities.map(city => ({ value: city, en: city, bn: cityNames[city] }))),
    hospital,
  };
}), ['medboi-doctor-facets-v1'], { revalidate: 600 });

export const medicineFacets = unstable_cache(async (): Promise<Facets> => readCatalogue('medicines', async db => {
  const refs = db.collection('medicines');
  const [manufacturers, forms] = await Promise.all([
    refs.distinct('manufacturerId', { manufacturerId: { $type: 'string' } }),
    refs.distinct('dosageFormId', { dosageFormId: { $type: 'string' } }),
  ]);
  async function options(collection: string, ids: string[]) {
    const rows = await db.collection<{ _id: string; name: string; nameBn?: string }>(collection)
      .find({ _id: { $in: ids } }, { projection: { name: 1, nameBn: 1 } }).toArray();
    return ordered(rows.filter(row => row.name).map(row => ({
      value: row._id, en: row.name, bn: row.nameBn || (collection === 'dosage_forms' ? formNames[row.name.toLowerCase()] : undefined),
    })));
  }
  const [manufacturer, form] = await Promise.all([options('manufacturers', manufacturers), options('dosage_forms', forms)]);
  return { manufacturer, form };
}), ['medboi-medicine-facets-v1'], { revalidate: 600 });

const categoryNames: Record<string, [string, string]> = {
  pathology: ['Pathology', 'প্যাথলজি'],
  'clinical pathology': ['Clinical pathology', 'ক্লিনিক্যাল প্যাথলজি'],
  radiology: ['Radiology', 'রেডিওলজি'],
  ultrasound: ['Ultrasound', 'আল্ট্রাসাউন্ড'],
  'x-ray': ['X-ray', 'এক্স-রে'],
  'digital x-ray': ['Digital X-ray', 'ডিজিটাল এক্স-রে'],
  mri: ['MRI', 'এমআরআই'],
  'ct scan': ['CT scan', 'সিটি স্ক্যান'],
  endoscopy: ['Endoscopy', 'এন্ডোস্কোপি'],
  colonoscopy: ['Colonoscopy', 'কোলনোস্কোপি'],
  hematology: ['Hematology', 'হেমাটোলজি'],
  biochemistry: ['Biochemistry', 'বায়োকেমিস্ট্রি'],
  microbiology: ['Microbiology', 'মাইক্রোবায়োলজি'],
  neurology: ['Neurology', 'নিউরোলজি'],
  virology: ['Virology', 'ভাইরোলজি'],
  ecg: ['ECG', 'ইসিজি'],
  echo: ['Echocardiography', 'ইকোকার্ডিওগ্রাফি'],
  eeg: ['EEG', 'ইইজি'],
  vaccination: ['Vaccination', 'টিকাদান'],
};

const facilityTypeNames: Record<string, [string, string]> = {
  'private hospital / clinic': ['Private hospital / clinic', 'বেসরকারি হাসপাতাল / ক্লিনিক'],
  'consultancy & diagnostic center': ['Consultancy & diagnostic center', 'পরামর্শ ও ডায়াগনস্টিক সেন্টার'],
  'medical college hospital': ['Medical college hospital', 'মেডিকেল কলেজ হাসপাতাল'],
  'upazila health complex': ['Upazila health complex', 'উপজেলা স্বাস্থ্য কমপ্লেক্স'],
  'community clinic': ['Community clinic', 'কমিউনিটি ক্লিনিক'],
  'district hospital': ['District hospital', 'জেলা হাসপাতাল'],
};

const categoryAliases = new Map([
  ['haematology', 'hematology'],
  ['ultrasonography', 'ultrasound'],
  ['echocardiogram', 'echo'],
]);

export const directoryTypeFacets = unstable_cache(async (collection: 'diagnostic_tests' | 'facilities'): Promise<Facets> =>
  readCatalogue(collection, async db => {
    const test = collection === 'diagnostic_tests';
    const field = test ? 'categories' : 'type';
    const values = await db.collection(collection).distinct(field, { [field]: { $type: 'string' } });
    const options = new Map<string, FacetOption>();
    for (const original of values) {
      if (typeof original !== 'string') continue;
      const normalized = original.normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
      if (!normalized) continue;
      const value = (test ? categoryAliases.get(normalized) : undefined) ?? normalized;
      const existing = options.get(value);
      if (existing) {
        existing.matches?.push(original);
      } else {
        const translated = (test ? categoryNames : facilityTypeNames)[value];
        const en = translated?.[0] ?? (original === original.toUpperCase() && original.length > 4
          ? original.trim().toLowerCase().replace(/^\p{L}/u, letter => letter.toUpperCase()) : original.trim());
        options.set(value, { value, en, bn: translated?.[1], matches: [original] });
      }
    }
    return { [test ? 'category' : 'type']: ordered([...options.values()]) };
  }), ['medboi-directory-type-facets-v1'], { revalidate: 600 });

export function selectedFacets(params: Record<string, unknown>, facets: Facets): Selections {
  const selected: Selections = {};
  for (const key of Object.keys(facets) as FacetKey[]) {
    const value = params[key];
    if (typeof value === 'string' && facets[key]?.some(option => option.value === value)) selected[key] = value;
  }
  return selected;
}
