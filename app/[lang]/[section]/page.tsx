import { siteConfig } from '../../../site.config';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, isSection, local, sections, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';
import { catalogueFacets, selectedFacets, type FacetKey, type Selections } from '../../../lib/facets';
import { CatalogueFilters } from '../catalogue-filters';
import { TypeChipRail, typeChips } from '../type-chip-rail';
import { AdSlot, Search } from '../components';
import { DirectoryResults } from '../directory-results';
import { RecordIcon } from '../record-icon';
import { recordCard } from '../../../lib/record-card';

type Props = { params: Promise<{ lang: string; section: string }>; searchParams: Promise<Record<string, string | undefined>> };

export async function generateMetadata({ params, searchParams }: Props) {
  const { lang, section } = await params;
  if (!isLanguage(lang) || !isSection(section)) notFound();
  const paramsValues = await searchParams;
  const { q, page, mode: requestedMode } = paramsValues;
  const query = cleanQuery(q);
  const info = siteConfig.seo.directories[section];
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
  const activeFilters = (Object.keys(selections) as FacetKey[]).flatMap(key => {
    const option = facets[key]?.find(item => item.value === selections[key]);
    if (!option) return [];
    const remaining = { ...selections };
    delete remaining[key];
    return [{ key, label: local(lang, option.en, option.bn || option.en), href: prefix + href(1, remaining) }];
  });
  return <main id="main" className="shell inner directory-page">
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><span>{sections[section][lang]}</span></div>
    <header className="page-head directory-heading"><RecordIcon section={section} data={{}} /><div><h1>{sections[section][lang]}</h1><p>{local(lang, siteConfig.seo.directories[section].description[0], siteConfig.seo.directories[section].description[1])}</p></div>
      </header>
    <div className="directory-tools">
    <Search lang={lang} section={section} query={query} mode={mode}>
      {directoryType ? activeType && <input type="hidden" name={typeFacet} value={activeType} />
        : <CatalogueFilters key={JSON.stringify(selections)} lang={lang} facets={facets} selected={selections}
          resetHref={prefix + href(1, {})} />}
    </Search>
    <TypeChipRail lang={lang} section={section} facets={facets} filters={search()} />
    </div>
    {(query || selected) && <div className="result-heading">
      <h2>{query || t.results}</h2>
      <Link className="subtle" href={prefix + '/' + section} prefetch={false}
        aria-label={local(lang, 'Reset search and filters', 'অনুসন্ধান ও ফিল্টার মুছুন')}>
        {local(lang, 'Reset', 'মুছুন')}
      </Link>
    </div>}
    {activeFilters.length > 0 && <ul className="applied-filters" aria-label={local(lang, 'Applied filters', 'প্রয়োগ করা ফিল্টার')}>
      {activeFilters.map(({ key, label, href }) => <li key={key}>
        <Link prefetch={false} href={href} aria-label={local(lang, `Remove ${label} filter`, `${label} ফিল্টার সরান`)}>
          {label}<span aria-hidden>×</span>
        </Link>
      </li>)}
    </ul>}
    {current > 1 && <Link className="subtle" href={prefix + href(1)} prefetch={false}>
      {local(lang, 'Back to first results', 'শুরুর ফলাফলে ফিরে যান')}
    </Link>}
    {rows.length ? <DirectoryResults key={href(current)} lang={lang} section={section}
      initial={rows.map(row => recordCard(lang, section, row))} query={search().toString()}
      page={current} more={hasMore && current < 2000} />
      : <div className="glass panel search-empty"><h2>{local(lang, 'No results', 'কোনো ফলাফল নেই')}</h2>
        <p>{local(lang, 'Try another name or clear the filters.', 'অন্য নাম দিয়ে খুঁজুন অথবা ফিল্টার মুছুন।')}</p>
        <Link className="pill" href={prefix + '/' + section}>{local(lang, 'Browse all', 'সব দেখুন')}</Link>
      </div>}
    {rows.length > 0 && <AdSlot />}
  </main>;
}
