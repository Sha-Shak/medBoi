import Link from 'next/link';
import { local, type Language, type Section } from '../../lib/content';
import type { FacetKey, Facets } from '../../lib/facets';
import { CatalogueRail } from './catalogue-rail';

export const typeChips = {
  doctors: { key: 'specialty', en: 'Specialties', bn: 'বিশেষত্ব' },
  medicines: { key: 'form', en: 'Dosage forms', bn: 'ওষুধের ধরন' },
  tests: { key: 'category', en: 'Test categories', bn: 'পরীক্ষার বিভাগ' },
  facilities: { key: 'type', en: 'Facility types', bn: 'প্রতিষ্ঠানের ধরন' },
} satisfies Record<Section, { key: FacetKey; en: string; bn: string }>;

export function TypeChipRail({ lang, section, facets, filters }: {
  lang: Language; section: Section; facets: Facets; filters?: URLSearchParams;
}) {
  const type = typeChips[section];
  const title = type[lang];
  const active = filters?.get(type.key) ?? '';
  const collator = new Intl.Collator(lang, { numeric: true, sensitivity: 'base' });
  const options = (facets[type.key] ?? []).map(option => ({
    value: option.value, label: local(lang, option.en, option.bn || option.en),
  })).sort((a, b) => collator.compare(a.label, b.label) || a.value.localeCompare(b.value));
  if (!options.length) return null;

  const directory = '/' + lang + '/' + section;
  const chips = [{ value: '', label: local(lang, 'All', 'সব') }, ...options];
  return <nav className="type-chip-rail" aria-label={title}>
    <h2>{title}</h2>
    <CatalogueRail title={title} previous={local(lang, 'Scroll filters left', 'ফিল্টার বামে দেখুন')}
      next={local(lang, 'Scroll filters right', 'ফিল্টার ডানে দেখুন')} activeKey={filters ? active || 'all' : undefined}>
      <ul className="type-chips">
        {chips.map(({ value, label }) => {
          const params = new URLSearchParams(filters);
          if (value) params.set(type.key, value);
          else params.delete(type.key);
          return <li key={value}>
            <Link className="pill" prefetch={false} href={directory + (params.size ? '?' + params : '')}
              aria-current={Boolean(filters && value === active) || undefined}>{label}</Link>
          </li>;
        })}
      </ul>
    </CatalogueRail>
  </nav>;
}
