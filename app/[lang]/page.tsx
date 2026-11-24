import { siteConfig } from '../../site.config';
import { siteOrigin } from '../../lib/site';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredDirectory, featuredMedicines } from '../../lib/catalogue';
import { isLanguage, local, sections, words, type Language, type Section } from '../../lib/content';
import { catalogueFacets } from '../../lib/facets';
import { jsonLd, seo } from '../../lib/seo';
import { AdSlot, RecordGrid, Search, Sponsor } from './components';
import { CatalogueRail } from './catalogue-rail';
import { TypeChipRail } from './type-chip-rail';
import { RecordIcon } from './record-icon';
import { searchCategories } from '../../lib/search-scope';

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const { title, description } = siteConfig.seo.homepage[lang];
  return seo(lang, '', title, description);
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = words[lang];
  const l = (en: string, bn: string) => local(lang, en, bn);
  const origin = siteOrigin();
  return <main id="main" className="shell home">
    {origin && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
      '@context': 'https://schema.org', '@type': 'WebSite', url: origin + '/', name: siteConfig.name,
    }) }} />}
    <section className="hero glass">
      <div className="hero-content">
        <h1>{l('Healthcare, easier to find', 'সহজেই খুঁজুন স্বাস্থ্যসেবার তথ্য')}</h1>
        <p className="hero-sub">{l('Search medicines, doctors, test prices and hospitals across Bangladesh.',
          'সারা বাংলাদেশের ওষুধ, চিকিৎসক, পরীক্ষার মূল্য ও হাসপাতাল খুঁজুন।')}</p>
        <Search lang={lang} hero />
      </div>
      </section>
    <nav className="hero-categories" aria-label={t.directory}>{searchCategories.map(section => <Link key={section}
        href={'/' + lang + '/' + section} prefetch={false}>
        <RecordIcon section={section} data={{}} />
        <span className="hero-category-copy">
          <strong>{sections[section][lang]}</strong>
          <small>{lang === 'bn' ? sections[section].bnHint : sections[section].enHint}</small>
        </span><span aria-hidden>↗</span>
      </Link>)}</nav>
    {searchCategories.map(section =>
      <HomeDirectory key={section} lang={lang} section={section} />)}
    <Sponsor lang={lang} />
    <AdSlot />
  </main>;
}

function HomeDirectory({ lang, section }: { lang: Language; section: Section }) {
  const l = (en: string, bn: string) => local(lang, en, bn);
  const info = siteConfig.seo.directories[section];
  const title = sections[section][lang];
  const path = '/' + lang + '/' + section;
  return <section className="directory home-directory" aria-labelledby={'featured-' + section}>
    <div className="section-head">
      <div className="home-section-title"><RecordIcon section={section} data={{}} />
        <div><h2 id={'featured-' + section}>{title}</h2><p>{l(info.description[0], info.description[1])}</p></div>
      </div>
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
