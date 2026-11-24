export const siteConfig = {
  name: 'Medবই',
  url: 'https://mediboi.vercel.app',

  // Local asset paths are relative to the public folder.
  branding: {
    logo: { src: '/brand/medboi-wordmark.png', width: 125, height: 44 },
    loadingMark: '/brand/medboi-mark.png',
    favicon: '/favicon.ico',
    appleIcon: '/brand/medboi-mark.png',
    socialImage: { src: '/brand/medboi-social.png', width: 1200, height: 630 },
  },

  seo: {
    indexable: true,
    googleVerification: '',
    homepage: {
      en: {
        title: 'Medicine Prices, Doctors & Medical Test Prices in Bangladesh',
        description: 'Look up Bangladesh medicine prices by brand or generic, find doctors by specialty and chamber, and compare medical test prices by hospital.',
      },
      bn: {
        title: 'বাংলাদেশে ওষুধের দাম, চিকিৎসক ও মেডিকেল পরীক্ষার মূল্য',
        description: 'ব্র্যান্ড বা জেনেরিক দিয়ে ওষুধের দাম খুঁজুন, বিশেষত্ব ও চেম্বার অনুযায়ী চিকিৎসক দেখুন এবং হাসপাতালভেদে পরীক্ষার মূল্য তুলনা করুন।',
      },
    },
    directories: {
      medicines: {
        title: ['Medicine Prices, Brands and Generics in Bangladesh', 'বাংলাদেশে ওষুধের দাম, ব্র্যান্ড ও জেনেরিক'],
        description: ['Search medicines by brand, generic name or strength. View formulation details and dated prices.',
          'ব্র্যান্ড, জেনেরিক বা মাত্রা দিয়ে ওষুধ খুঁজুন। ওষুধের বিবরণ ও তারিখসহ মূল্য দেখুন।'],
      },
      doctors: {
        title: ['Find Doctors and Specialists in Bangladesh', 'বাংলাদেশে চিকিৎসক ও বিশেষজ্ঞ খুঁজুন'],
        description: ['Find doctors by name, specialty or chamber location. See qualifications, visiting hours and clinic details where available.',
          'নাম, বিশেষত্ব বা চেম্বারের অবস্থান দিয়ে চিকিৎসক খুঁজুন। যোগ্যতা, রোগী দেখার সময় ও চেম্বারের তথ্য দেখুন।'],
      },
      tests: {
        title: ['Medical and Diagnostic Test Prices in Bangladesh', 'বাংলাদেশে মেডিকেল ও ডায়াগনস্টিক পরীক্ষার মূল্য'],
        description: ['Look up medical test prices and compare dated rates by hospital or diagnostic centre.',
          'মেডিকেল পরীক্ষার দাম খুঁজুন এবং হাসপাতাল বা ডায়াগনস্টিক সেন্টার অনুযায়ী তারিখসহ মূল্য তুলনা করুন।'],
      },
      facilities: {
        title: ['Hospitals, Clinics and Diagnostic Centres in Bangladesh', 'বাংলাদেশের হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টার'],
        description: ['Find public and private healthcare facilities by name, area or DGHS code. See addresses and published services.',
          'নাম, এলাকা বা ডিজিএইচএস কোড দিয়ে সরকারি ও বেসরকারি প্রতিষ্ঠান খুঁজুন। ঠিকানা এবং প্রকাশিত সেবা দেখুন।'],
      },
    },
  },
};
