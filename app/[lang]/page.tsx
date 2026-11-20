import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredMedicines } from '../../lib/catalogue';
import { isLanguage, local, recordPath, sectionKeys, sections, words } from '../../lib/content';
import { imagePath } from '../../lib/media';
import { seo } from '../../lib/seo';
import { AdSlot, Search, Sponsor } from './components';
import { Photo } from './photo';

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return seo(lang, '', local(lang, 'Medicine Prices, Doctors & Medical Test Prices in Bangladesh',
    'বাংলাদেশে ওষুধের দাম, চিকিৎসক ও মেডিকেল পরীক্ষার মূল্য'),
  local(lang, 'Look up Bangladesh medicine prices by brand or generic, find doctors by specialty and chamber, and compare medical test prices by hospital.',
    'ব্র্যান্ড বা জেনেরিক দিয়ে ওষুধের দাম খুঁজুন, বিশেষত্ব ও চেম্বার অনুযায়ী চিকিৎসক দেখুন এবং হাসপাতালভেদে পরীক্ষার মূল্য তুলনা করুন।'));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = words[lang];
  const l = (en: string, bn: string) => local(lang, en, bn);
  const medicines = await featuredMedicines().catch(() => []);
  return <main id="main" className="shell home">
    <section className="hero glass">
      <div className="halo" aria-hidden><i /><i /><i /></div>
      <div className="hero-content"><p className="eyebrow"><span aria-hidden />{t.overline}</p>
        <h1>{t.title}</h1><p className="hero-sub">{t.subtitle}</p>
        <Search lang={lang} section="medicines" hero />
        <div className="popular">{['Napa', 'Seclo', 'Paracetamol'].map(query => <Link key={query}
          href={'/' + lang + '/medicines?q=' + encodeURIComponent(query)} prefetch={false}>{query}</Link>)}</div>
      </div>
    </section>
    {medicines.length > 0 && <section className="directory" aria-labelledby="featured">
      <div className="section-head"><h2 id="featured">{l('Medicines in Bangladesh', 'বাংলাদেশের ওষুধ')}</h2>
        <Link className="subtle" href={'/' + lang + '/medicines'}>{t.browse}</Link></div>
      <div className="featured-grid">{medicines.map(row => {
        const photo = imagePath('medicines', row._id, row.picture?.url);
        return <Link className="featured-card glass" key={row._id} prefetch={false}
          href={recordPath(lang, 'medicines', row._id, row.name, row.strength)}>
          {photo ? <Photo className="featured-photo medicines" src={photo} alt="" icon={sections.medicines.icon} />
            : <span className="featured-photo photo photo-fallback" aria-hidden>{sections.medicines.icon}</span>}
          <span className="featured-copy"><strong>{row.nameBn && lang === 'bn' ? row.nameBn : row.name}</strong>
            <small>{[row.strength, row.dosageForm].filter(Boolean).join(' · ')}</small><small>{row.genericName}</small></span>
        </Link>;
      })}</div>
    </section>}
    <section className="directory"><div className="section-head"><h2>{l('Bangladesh healthcare directory', 'বাংলাদেশের স্বাস্থ্যসেবা নির্দেশিকা')}</h2></div>
      <div className="category-grid">{sectionKeys.map(section => {
        const titles = {
          medicines: l('Medicine prices in Bangladesh', 'বাংলাদেশে ওষুধের দাম'),
          tests: l('Medical test prices', 'মেডিকেল পরীক্ষার মূল্য'),
          doctors: l('Find doctors in Bangladesh', 'বাংলাদেশে চিকিৎসক খুঁজুন'),
          facilities: l('Hospitals and clinics in Bangladesh', 'বাংলাদেশের হাসপাতাল ও ক্লিনিক'),
        };
        const descriptions = {
          medicines: l('Look up brands, generics, strengths and dated prices.', 'ব্র্যান্ড, জেনেরিক, মাত্রা ও তারিখসহ দাম দেখুন।'),
          tests: l('Compare diagnostic test prices by facility and patient rate.', 'প্রতিষ্ঠান ও রোগীর শ্রেণি অনুযায়ী পরীক্ষার মূল্য তুলনা করুন।'),
          doctors: l('Find specialists by name, specialty or chamber location.', 'নাম, বিশেষত্ব বা চেম্বারের ঠিকানা দিয়ে চিকিৎসক খুঁজুন।'),
          facilities: l('Browse government and private hospitals, addresses and services.', 'সরকারি ও বেসরকারি হাসপাতাল, ঠিকানা এবং সেবা দেখুন।'),
        };
        return <Link key={section} href={'/' + lang + '/' + section} className="category glass">
          <span className={'category-icon ' + section} aria-hidden>{sections[section].icon}</span>
          <div><h3>{titles[section]}</h3><p>{descriptions[section]}</p></div>
          <span className="chevron" aria-hidden />
        </Link>;
      })}</div>
    </section>
    <Sponsor lang={lang} />
    <AdSlot />
  </main>;
}
