import { unstable_cache } from 'next/cache';
import { readCatalogue } from './mongo';

export type FacetKey = 'specialty' | 'city' | 'hospital' | 'manufacturer' | 'form';
export type FacetOption = { value: string; en: string; bn?: string; city?: string };
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

export function selectedFacets(params: Record<string, unknown>, facets: Facets): Selections {
  const selected: Selections = {};
  for (const key of Object.keys(facets) as FacetKey[]) {
    const value = params[key];
    if (typeof value === 'string' && facets[key]?.some(option => option.value === value)) selected[key] = value;
  }
  return selected;
}
