import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, isSection, local, sectionDiscovery, sections, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';
import { catalogueFacets, selectedFacets, type Selections } from '../../../lib/facets';
import { CatalogueFilters } from '../catalogue-filters';
import { TypeChipRail, typeChips } from '../type-chip-rail';
import { AdSlot, LanguageLink, RecordGrid, Search } from '../components';

type Props = { params: Promise<{ lang: string; section: string }>; searchParams: Promise<Record<string, string | undefined>> };

export async function generateMetadata({ params, searchParams }: Props) {
  const { lang, section } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const paramsValues = await searchParams;
  const { q, page, mode: requestedMode } = paramsValues;
  const query = cleanQuery(q);
  const info = sectionDiscovery[section];
  return seo(lang, '/' + section, query ? words[lang].results + ' · ' + query : local(lang, info.title[0], info.title[1]),
    local(lang, info.description[0], info.description[1]), !query && (!page || page === '1') && (!requestedMode || requestedMode === 'all')
      && !['specialty', 'city', 'hospital', 'manufacturer', 'form', 'category', 'type'].some(key => paramsValues[key]));
}

export default async function Browse({ params, searchParams }: Props) {
  const { lang, section } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const paramsValues = await searchParams;
  const { q, page, mode: requestedMode } = paramsValues;
  const mode = section === 'medicines' && (requestedMode === 'brand' || requestedMode === 'generic') ? requestedMode : 'all';
  const query = cleanQuery(q);
  const current = Math.max(1, Math.min(2000, Number.parseInt(page ?? '1', 10) || 1));
  const directoryType = section === 'tests' || section === 'facilities';
  const facets = await catalogueFacets(section);
  const selections = selectedFacets(paramsValues, facets);
  const selected = Object.keys(selections).length > 0;
  const { rows, hasMore } = await searchCatalogue(section, query, current, undefined, mode, selections);
  const t = words[lang];
  const search = (filters: Selections = selections) => new URLSearchParams({ ...(query ? { q: query } : {}),
    ...(mode !== 'all' ? { mode } : {}), ...filters });
  const href = (page: number, filters = selections) => {
    const params = search(filters);
    if (page > 1) params.set('page', String(page));
    return '/' + section + (params.size ? '?' + params : '');
  };
  const prefix = '/' + lang;
  const typeFacet = typeChips[section].key;
  const activeType = selections[typeFacet];
  return <main id="main" className="shell inner">
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><span>{sections[section][lang]}</span></div>
    <header className="page-head"><div><h1>{sections[section][lang]}</h1><p>{local(lang, sectionDiscovery[section].description[0], sectionDiscovery[section].description[1])}</p></div>
      <LanguageLink lang={lang} path={href(current)} /></header>
    <TypeChipRail lang={lang} section={section} facets={facets} filters={search()} />
    <Search lang={lang} section={section} query={query} mode={mode}>
      {directoryType ? activeType && <input type="hidden" name={typeFacet} value={activeType} />
        : <CatalogueFilters key={JSON.stringify(selections)} lang={lang} facets={facets} selected={selections}
          resetHref={prefix + href(1, {})} />}
    </Search>
    {(query || selected) && <h2 className="list-heading">{t.results}{query && <> · {query}</>}</h2>}
    {rows.length ? <RecordGrid lang={lang} section={section} rows={rows} /> : <p className="glass panel">{t.empty}</p>}
    <nav className="pager" aria-label={local(lang, 'Catalogue pages', 'নির্দেশিকার পৃষ্ঠা')}>
      {current > 1 && <Link className="pill glass" href={prefix + href(current - 1)} prefetch={false}>{t.previous}</Link>}
      <span aria-current="page">{local(lang, 'Page', 'পৃষ্ঠা')} {new Intl.NumberFormat(lang).format(current)}</span>
      {hasMore && current < 2000 && <Link className="pill glass" href={prefix + href(current + 1)} prefetch={false}>{t.next}</Link>}
    </nav>
    {rows.length > 0 && <AdSlot />}
  </main>;
}
