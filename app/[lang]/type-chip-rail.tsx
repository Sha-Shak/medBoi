import { local, type Language, type Section } from '../../lib/content';
import type { FacetKey, Facets } from '../../lib/facets';
import { ChipList } from './chip-list';

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
    value: option.value, label: local(lang, option.en, option.bn || option.en), alternative: local(lang, option.bn || option.en, option.en),
  })).sort((a, b) => collator.compare(a.label, b.label) || a.value.localeCompare(b.value));
  if (!options.length) return null;

  const directory = '/' + lang + '/' + section;
  const chips = [{ value: '', label: local(lang, 'All', 'সব') }, ...options].map(option => {
    const params = new URLSearchParams(filters);
    if (option.value) params.set(type.key, option.value);
    else params.delete(type.key);
    return { ...option, href: directory + (params.size ? '?' + params : '') };
  });
  return <ChipList key={active} lang={lang} title={title} chips={chips} active={filters ? active : undefined} />;
}
