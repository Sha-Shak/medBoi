import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredDirectory, featuredMedicines } from '../../lib/catalogue';
import { isLanguage, local, sectionDiscovery, sectionKeys, sections, words, type Language, type Section } from '../../lib/content';
import { seo } from '../../lib/seo';
import { AdSlot, RecordGrid, Search, Sponsor } from './components';
import { CatalogueRail } from './catalogue-rail';

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
      <div className="halo" aria-hidden><i /><i /><i /></div>
      <div className="hero-content"><p className="eyebrow"><span aria-hidden />{t.overline}</p>
        <h1>{l('Find healthcare in Bangladesh', 'বাংলাদেশে স্বাস্থ্যসেবা খুঁজুন')}</h1><p className="hero-sub">{l('Look up medicines, find doctors and hospitals, and compare medical test prices.', 'ওষুধ, চিকিৎসক ও হাসপাতাল খুঁজুন এবং মেডিকেল পরীক্ষার মূল্য তুলনা করুন।')}</p>
        <Search lang={lang} hero />
        <div className="popular">{sectionKeys.map(section => <Link key={section}
          href={'/' + lang + '/' + section} prefetch={false}>{sections[section][lang]}</Link>)}</div>
      </div>
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
  const title = l(info.title[0], info.title[1]);
  const path = '/' + lang + '/' + section;
  return <section className="directory home-directory" aria-labelledby={'featured-' + section}>
    <div className="section-head">
      <div><h2 id={'featured-' + section}>{title}</h2><p>{l(info.description[0], info.description[1])}</p></div>
      <Link className="subtle" href={path}>{words[lang].browse} <span aria-hidden>↗</span></Link>
    </div>
    <nav className="directory-shortcuts" aria-label={l('Suggested searches', 'খোঁজার পরামর্শ')}>
      {info.examples.map(([query, bn]) => <Link key={query} className="pill" prefetch={false}
        href={path + '?' + new URLSearchParams({ q: query })}>{l(query, bn)}</Link>)}
    </nav>
    <Suspense fallback={<div className="catalogue-rail-skeleton" aria-hidden />}>
      <FeaturedRecords lang={lang} section={section} title={title} />
    </Suspense>
  </section>;
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
