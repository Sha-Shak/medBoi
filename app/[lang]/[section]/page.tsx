import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, isSection, local, sectionDiscovery, sections, words } from '../../../lib/content';
import { seo } from '../../../lib/seo';
import { directoryTypeFacets, doctorFacets, medicineFacets, selectedFacets, type FacetKey, type Selections } from '../../../lib/facets';
import { CatalogueFilters } from '../catalogue-filters';
import { CatalogueRail } from '../catalogue-rail';
import { AdSlot, LanguageLink, RecordGrid, Search } from '../components';

type Props = { params: Promise<{ lang: string; section: string }>; searchParams: Promise<Record<string, string | undefined>> };

const typeChips = {
  doctors: { key: 'specialty', en: 'Specialties', bn: 'বিশেষত্ব' },
  medicines: { key: 'form', en: 'Dosage forms', bn: 'ওষুধের ধরন' },
  tests: { key: 'category', en: 'Test categories', bn: 'পরীক্ষার বিভাগ' },
  facilities: { key: 'type', en: 'Facility types', bn: 'প্রতিষ্ঠানের ধরন' },
} satisfies Record<string, { key: FacetKey; en: string; bn: string }>;

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
  const facets = section === 'doctors' ? await doctorFacets() : section === 'medicines' ? await medicineFacets()
    : await directoryTypeFacets(section === 'tests' ? 'diagnostic_tests' : 'facilities');
  const selections = selectedFacets(paramsValues, facets);
  const selected = Object.keys(selections).length > 0;
  const { rows, hasMore } = await searchCatalogue(section, query, current, undefined, mode, selections);
  const t = words[lang];
  const href = (page: number, filters: Selections = selections) => {
    const params = new URLSearchParams({ ...(query ? { q: query } : {}),
      ...(mode !== 'all' ? { mode } : {}), ...filters, ...(page > 1 ? { page: String(page) } : {}) });
    return '/' + section + (params.size ? '?' + params : '');
  };
  const prefix = '/' + lang;
  const typeFacet = typeChips[section];
  const activeType = selections[typeFacet.key];
  const title = typeFacet[lang];
  const collator = new Intl.Collator(lang, { numeric: true, sensitivity: 'base' });
  const options = (facets[typeFacet.key] ?? []).map(option => ({
    value: option.value, label: local(lang, option.en, option.bn || option.en),
  })).sort((a, b) => collator.compare(a.label, b.label) || a.value.localeCompare(b.value));
  function typeHref(value?: string) {
    const filters = { ...selections };
    if (value) filters[typeFacet.key] = value;
    else delete filters[typeFacet.key];
    return prefix + href(1, filters);
  }
  return <main id="main" className="shell inner">
    <div className="crumbs"><Link href={'/' + lang}>{t.home}</Link><span>/</span><span>{sections[section][lang]}</span></div>
    <header className="page-head"><div><h1>{sections[section][lang]}</h1><p>{local(lang, sectionDiscovery[section].description[0], sectionDiscovery[section].description[1])}</p></div>
      <LanguageLink lang={lang} path={href(current)} /></header>
    {options.length > 0 && <nav className="type-chip-rail" aria-label={title}>
      <h2>{title}</h2>
      <CatalogueRail title={title} previous={local(lang, 'Scroll filters left', 'ফিল্টার বামে দেখুন')}
        next={local(lang, 'Scroll filters right', 'ফিল্টার ডানে দেখুন')} activeKey={activeType ?? 'all'}>
        <ul className="type-chips">
          <li><Link className="pill" prefetch={false} href={typeHref()} aria-current={!activeType || undefined}>
            {local(lang, 'All', 'সব')}</Link></li>
          {options.map(({ value, label }) => <li key={value}>
            <Link className="pill" prefetch={false} href={typeHref(value)} aria-current={value === activeType || undefined}>{label}</Link>
          </li>)}
        </ul>
      </CatalogueRail>
    </nav>}
    <Search lang={lang} section={section} query={query} mode={mode}>
      {directoryType ? activeType && <input type="hidden" name={typeFacet.key} value={activeType} />
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
