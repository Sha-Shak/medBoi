'use client';

import Link from 'next/link';
import { useState } from 'react';
import { local, type Language } from '../../lib/content';
import { CatalogueRail } from './catalogue-rail';

type Chip = { value: string; label: string; alternative?: string; href: string };

export function ChipList({ lang, title, chips, active }: {
  lang: Language; title: string; chips: Chip[]; active?: string;
}) {
  const [search, setSearch] = useState('');
  const l = (en: string, bn: string) => local(lang, en, bn);
  const normalize = (value: string) => value.normalize('NFKC').toLowerCase();
  const needle = normalize(search.trim());
  const matching = chips.filter(chip => !needle || !chip.value
    || [chip.label, chip.alternative].some(value => value && normalize(value).includes(needle)));
  return <nav className="type-chip-rail" aria-label={title}>
    <div className="type-chip-header">
      <h2>{title}</h2>
      {active !== undefined && chips.length > 20 && <input type="search" value={search}
        onChange={event => setSearch(event.target.value)} placeholder={l('Find a filter', 'ফিল্টার খুঁজুন')}
        aria-label={l('Find a filter in ' + title, title + ' থেকে ফিল্টার খুঁজুন')} />}
    </div>
    <CatalogueRail title={title} previous={l('Scroll filters left', 'ফিল্টার বামে দেখুন')}
      next={l('Scroll filters right', 'ফিল্টার ডানে দেখুন')}
      activeKey={needle || (active === undefined ? undefined : active || 'all')}>
      <ul className="type-chips">
        {matching.map(({ value, label, href }) => <li key={value}>
          <Link className="pill" prefetch={false} href={href} aria-current={value === active || undefined}>{label}</Link>
        </li>)}
      </ul>
    </CatalogueRail>
    {needle && matching.length === 1 && <p className="chip-empty" role="status">{l('No matching filters', 'মিল আছে এমন ফিল্টার নেই')}</p>}
  </nav>;
}
