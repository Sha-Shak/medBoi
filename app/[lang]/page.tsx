import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredDirectory, featuredMedicines } from '../../lib/catalogue';
import { isLanguage, local, sectionDiscovery, sectionKeys, sections, words, type Language, type Section } from '../../lib/content';
import { catalogueFacets } from '../../lib/facets';
import { seo } from '../../lib/seo';
import { AdSlot, RecordGrid, Search, Sponsor } from './components';
import { CatalogueRail } from './catalogue-rail';
import { TypeChipRail } from './type-chip-rail';
import { RecordIcon } from './record-icon';

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
  return <main id="main" className="shell home">
    <section className="hero glass">
      <div className="hero-content">
        <h1>{l('Find healthcare in Bangladesh', 'বাংলাদেশে স্বাস্থ্যসেবা খুঁজুন')}</h1>
        <p className="hero-sub">{l('Find a medicine, check a test price, or look up a doctor or hospital.',
          'ওষুধ, পরীক্ষার মূল্য, চিকিৎসক বা হাসপাতাল খুঁজুন।')}</p>
        <Search lang={lang} hero />
      </div>
      <nav className="hero-categories" aria-label={t.directory}>{sectionKeys.map(section => <Link key={section}
        href={'/' + lang + '/' + section} prefetch={false}>
        <RecordIcon section={section} data={{}} />
        <strong>{sections[section][lang]}</strong><span aria-hidden>↗</span>
      </Link>)}</nav>
    </section>
    {(['medicines', 'doctors', 'tests', 'facilities'] as const).map(section =>
      <HomeDirectory key={section} lang={lang} section={section} />)}
    <Sponsor lang={lang} />
    <AdSlot />
  </main>;
}

function HomeDirectory({ lang, section }: { lang: Language; section: Section }) {
  const l = (en: string, bn: string) => local(lang, en, bn);
  const info = sectionDiscovery[section];
  const title = sections[section][lang];
  const path = '/' + lang + '/' + section;
  return <section className="directory home-directory" aria-labelledby={'featured-' + section}>
    <div className="section-head">
      <div><h2 id={'featured-' + section}>{title}</h2><p>{l(info.description[0], info.description[1])}</p></div>
      <Link className="subtle" href={path}>{words[lang].browse} <span aria-hidden>↗</span></Link>
    </div>
    <Suspense>
      <HomeTypeChips lang={lang} section={section} />
    </Suspense>
    <Suspense fallback={<div className="catalogue-rail-skeleton" aria-hidden />}>
      <FeaturedRecords lang={lang} section={section} title={title} />
    </Suspense>
  </section>;
}

async function HomeTypeChips({ lang, section }: { lang: Language; section: Section }) {
  const facets = await catalogueFacets(section).catch(() => null);
  return facets ? <TypeChipRail lang={lang} section={section} facets={facets} /> : null;
}

async function FeaturedRecords({ lang, section, title }: { lang: Language; section: Section; title: string }) {
  const rows = await (section === 'medicines' ? featuredMedicines() : featuredDirectory(section)).catch(() => []);
  if (!rows.length) return null;
  return <CatalogueRail title={title}
    previous={local(lang, 'Scroll cards backwards', 'আগের কার্ড দেখুন')}
    next={local(lang, 'Scroll cards forwards', 'পরের কার্ড দেখুন')}>
    <RecordGrid rows={rows} lang={lang} section={section} rail />
  </CatalogueRail>;
}
