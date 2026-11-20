import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, isSection, sections, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';
import { AdSlot, LanguageLink, RecordList, Search } from '../components';

type Props = { params: Promise<{ lang: string; section: string }>; searchParams: Promise<{ q?: string; page?: string }> };

export async function generateMetadata({ params, searchParams }: Props) {
  const { lang, section } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const { q, page } = await searchParams;
  const query = cleanQuery(q);
  return seo(lang, '/' + section, query ? words[lang].results + ' · ' + query : sections[section][lang],
    lang === 'en' ? sections[section].enHint : sections[section].bnHint, !query && (!page || page === '1'));
}

export default async function Browse({ params, searchParams }: Props) {
  const { lang, section } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const { q, page } = await searchParams;
  const query = cleanQuery(q);
  const current = Math.max(1, Math.min(2000, Number.parseInt(page ?? '1', 10) || 1));
  const { rows, hasMore } = await searchCatalogue(section, query, current);
  const t = words[lang];
  const href = (page: number) => '?' + new URLSearchParams({ ...(query ? { q: query } : {}), ...(page > 1 ? { page: String(page) } : {}) });
  return <main id="main" className="shell inner">
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><span>{sections[section][lang]}</span></div>
    <header className="page-head"><div><h1>{sections[section][lang]}</h1><p>{lang === 'en' ? sections[section].enHint : sections[section].bnHint}</p></div>
      <LanguageLink lang={lang} path={'/' + section + href(current)} /></header>
    <Search lang={lang} section={section} query={query} />
    {query && <h2 className="list-heading">{t.results} · {query}</h2>}
    {rows.length ? <RecordList lang={lang} section={section} rows={rows} /> : <p className="glass panel">{t.empty}</p>}
    <nav className="pager" aria-label={t.browse}>
      {current > 1 && <Link className="pill glass" href={href(current - 1)} prefetch={false}>{t.previous}</Link>}
      {hasMore && current < 2000 && <Link className="pill glass" href={href(current + 1)} prefetch={false}>{t.next}</Link>}
    </nav>
    {rows.length > 0 && <AdSlot />}
  </main>;
}
