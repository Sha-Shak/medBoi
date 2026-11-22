export const languages = ['en', 'bn'] as const;
export type Language = typeof languages[number];

export const sections = {
  medicines: { collection: 'medicines', icon: '✚', en: 'Medicines', bn: 'ওষুধ', enHint: 'Search brands, generics and strengths', bnHint: 'ব্র্যান্ড, জেনেরিক ও মাত্রা খুঁজুন' },
  tests: { collection: 'diagnostic_tests', icon: '◇', en: 'Diagnostic tests', bn: 'পরীক্ষা', enHint: 'Compare test prices and patient rates', bnHint: 'পরীক্ষার মূল্য ও রোগীভেদে মূল্য দেখুন' },
  doctors: { collection: 'doctors', icon: '⊕', en: 'Doctors', bn: 'চিকিৎসক', enHint: 'Explore specialties and chambers', bnHint: 'বিশেষত্ব ও চেম্বার দেখুন' },
  facilities: { collection: 'facilities', icon: '▦', en: 'Hospitals & clinics', bn: 'হাসপাতাল ও ক্লিনিক', enHint: 'Find addresses and available services', bnHint: 'ঠিকানা ও উপলভ্য সেবা দেখুন' },
} as const;

export type Section = keyof typeof sections;
export const sectionKeys = Object.keys(sections) as Section[];
export const isLanguage = (value: string): value is Language => value === 'en' || value === 'bn';
export const isSection = (value: string): value is Section => Object.hasOwn(sections, value);

export const words = {
  en: {
    title: 'Clear answers start here.', subtitle: 'Explore medicines, test prices, doctors and hospitals across Bangladesh.',
    overline: 'Your Bangladesh healthcare guide', search: 'Search', placeholder: 'Try Napa, paracetamol or a brand name',
    explore: 'Explore the guide', common: 'Look up a medicine', home: 'Home', results: 'Search results', browse: 'Browse all',
    empty: 'No matching records. Try a shorter name or search by generic.', previous: 'Previous', next: 'Next page',
    featured: 'Browse medicines', keyFacts: 'At a glance', prices: 'Prices', price: 'Price', mrp: 'Listed MRP', pack: 'Pack / unit',
    date: 'Price date', checked: 'Date checked', historical: 'Historical price', facility: 'Facility', rate: 'Patient rate',
    eligible: 'Eligible staff and dependents', standard: 'Standard', unknown: 'Unavailable', free: 'Free',
    caution: 'Prices are indicative and subject to change. Confirm the current price before purchase or booking.',
    noPrices: 'No prices are listed for this entry.', chambers: 'Chambers', maps: 'Open map', qualifications: 'Qualifications',
    sponsor: 'Sponsored', info: 'Healthcare information for Bangladesh', language: 'Language',
    directory: 'Directory', shortlist: 'Browse by category', privacy: 'Privacy', unavailable: 'The directory is temporarily unavailable.',
  },
  bn: {
    title: 'স্বাস্থ্যতথ্য এখন হাতের কাছে।', subtitle: 'বাংলাদেশের ওষুধ, পরীক্ষার মূল্য, চিকিৎসক ও হাসপাতালের তথ্য খুঁজুন।',
    overline: 'বাংলাদেশের স্বাস্থ্যতথ্য নির্দেশিকা', search: 'খুঁজুন', placeholder: 'Napa, paracetamol বা ব্র্যান্ডের নাম লিখুন',
    explore: 'তথ্যের বিভাগ', common: 'ওষুধ খুঁজুন', home: 'প্রচ্ছদ', results: 'অনুসন্ধানের ফলাফল', browse: 'সব দেখুন',
    empty: 'কোনো তথ্য মেলেনি। ছোট নাম বা জেনেরিক দিয়ে খুঁজুন।', previous: 'আগের পাতা', next: 'পরের পাতা',
    featured: 'ওষুধের তালিকা', keyFacts: 'এক নজরে', prices: 'মূল্য', price: 'দাম', mrp: 'তালিকাভুক্ত সর্বোচ্চ মূল্য', pack: 'প্যাক / একক',
    date: 'মূল্যের তারিখ', checked: 'যাচাইয়ের তারিখ', historical: 'পুরোনো মূল্য', facility: 'প্রতিষ্ঠান', rate: 'রোগীর শ্রেণি',
    eligible: 'যোগ্য কর্মী ও নির্ভরশীল', standard: 'সাধারণ', unknown: 'তথ্য নেই', free: 'বিনামূল্যে',
    caution: 'দাম আনুমানিক ও পরিবর্তনশীল। কেনার বা বুকিংয়ের আগে বর্তমান মূল্য জেনে নিন।',
    noPrices: 'এই তথ্যের জন্য কোনো মূল্য তালিকাভুক্ত নেই।', chambers: 'চেম্বার', maps: 'মানচিত্র দেখুন', qualifications: 'যোগ্যতা',
    sponsor: 'স্পনসরকৃত', info: 'বাংলাদেশের স্বাস্থ্যসেবা সম্পর্কিত তথ্য', language: 'ভাষা',
    directory: 'তথ্যভাণ্ডার', shortlist: 'বিভাগ অনুযায়ী দেখুন', privacy: 'গোপনীয়তা', unavailable: 'তথ্যভাণ্ডার সাময়িকভাবে বন্ধ আছে।',
  },
} as const;

export const local = (lang: Language, english: string, bangla: string) => lang === 'bn' ? bangla : english;

export function recordPath(lang: Language, section: Section, id: string, name: string, strength?: string) {
  const slug = [name, strength].filter(Boolean).join(' ').normalize('NFKD').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 92).replace(/-$/, '');
  return '/' + lang + '/' + section + '/' + (slug || section) + '--' + encodeURIComponent(id);
}

export function siteOrigin() {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  try { const parsed = new URL(value); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.origin : undefined; } catch { return undefined; }
}

export const sectionDiscovery = {
  medicines: {
    title: ['Medicine Prices, Brands and Generics in Bangladesh', 'বাংলাদেশে ওষুধের দাম, ব্র্যান্ড ও জেনেরিক'],
    description: ['Search medicines by brand, generic name or strength. View formulation details and dated prices.',
      'ব্র্যান্ড, জেনেরিক বা মাত্রা দিয়ে ওষুধ খুঁজুন। ওষুধের বিবরণ ও তারিখসহ মূল্য দেখুন।'],
    examples: [['Napa', 'Napa'], ['Paracetamol', 'প্যারাসিটামল'], ['Seclo', 'Seclo']],
  },
  doctors: {
    title: ['Find Doctors and Specialists in Bangladesh', 'বাংলাদেশে চিকিৎসক ও বিশেষজ্ঞ খুঁজুন'],
    description: ['Find doctors by name, specialty or chamber location. See qualifications, visiting hours and clinic details where available.',
      'নাম, বিশেষত্ব বা চেম্বারের অবস্থান দিয়ে চিকিৎসক খুঁজুন। যোগ্যতা, রোগী দেখার সময় ও চেম্বারের তথ্য দেখুন।'],
    examples: [['Cardiology', 'হৃদরোগ'], ['Pediatrics', 'শিশুরোগ'], ['Dermatology', 'চর্মরোগ']],
  },
  tests: {
    title: ['Medical and Diagnostic Test Prices in Bangladesh', 'বাংলাদেশে মেডিকেল ও ডায়াগনস্টিক পরীক্ষার মূল্য'],
    description: ['Look up medical test prices and compare dated rates by hospital or diagnostic centre.',
      'মেডিকেল পরীক্ষার দাম খুঁজুন এবং হাসপাতাল বা ডায়াগনস্টিক সেন্টার অনুযায়ী তারিখসহ মূল্য তুলনা করুন।'],
    examples: [['CBC', 'সিবিসি'], ['HbA1c', 'HbA1c'], ['TSH', 'TSH']],
  },
  facilities: {
    title: ['Hospitals, Clinics and Diagnostic Centres in Bangladesh', 'বাংলাদেশের হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টার'],
    description: ['Find public and private healthcare facilities by name, area or DGHS code. See addresses and published services.',
      'নাম, এলাকা বা ডিজিএইচএস কোড দিয়ে সরকারি ও বেসরকারি প্রতিষ্ঠান খুঁজুন। ঠিকানা এবং প্রকাশিত সেবা দেখুন।'],
    examples: [['Dhaka', 'ঢাকা'], ['Chattogram', 'চট্টগ্রাম'], ['Sylhet', 'সিলেট']],
  },
} as const satisfies Record<Section, {
  title: readonly [string, string]; description: readonly [string, string]; examples: readonly (readonly [string, string])[];
}>;
