import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, local, sectionKeys, sections, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';
import { RecordGrid, Search } from '../components';

type Props = { params: Promise<{ lang: string }>; searchParams: Promise<{ q?: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return seo(lang, '/search', words[lang].search, words[lang].subtitle, false);
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const query = cleanQuery((await searchParams).q);
  const suffix = query ? '?' + new URLSearchParams({ q: query }) : '';
  const results = query ? await Promise.allSettled(sectionKeys.map(section => searchCatalogue(section, query, 1, 4))) : [];
  const t = words[lang];
  const l = (en: string, bn: string) => local(lang, en, bn);
  const hasMatches = results.some(result => result.status === 'fulfilled' && result.value.rows.length);
  const failed = results.some(result => result.status === 'rejected');
  return <main id="main" className="shell inner">
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><span>{t.search}</span></div>
    <header className="page-head"><div><h1>{query ? t.results : t.search}</h1></div>
      </header>
    <Search lang={lang} query={query} />
    {query && <nav className="directory-shortcuts" aria-label={t.directory}>{sectionKeys.map(section =>
      <Link className="pill glass" key={section} href={'/' + lang + '/' + section + suffix}>{sections[section][lang]}</Link>)}</nav>}
    {failed && <p className="glass panel" role="status">{l('Some sections could not be loaded. Try refreshing the page.', 'কিছু বিভাগের ফলাফল লোড হয়নি। পাতাটি আবার লোড করুন।')}</p>}
    {query && !hasMatches && !failed && <p className="glass panel">{t.empty}</p>}
    {results.map((result, i) => {
      if (result.status !== 'fulfilled' || !result.value.rows.length) return null;
      const section = sectionKeys[i]!;
      return <section className="directory" key={section} aria-labelledby={'results-' + section}>
        <div className="section-head"><h2 id={'results-' + section}>{sections[section][lang]}</h2>
          <Link className="subtle" href={'/' + lang + '/' + section + suffix}>
            {l('See all results', 'সব ফলাফল দেখুন')}</Link></div>
        <RecordGrid lang={lang} section={section} rows={result.value.rows} />
      </section>;
    })}
  </main>;
}
