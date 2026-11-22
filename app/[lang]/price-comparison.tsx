'use client';

import { useState, type ReactNode } from 'react';
import { local, words, type Language } from '../../lib/content';

export type PriceComparisonRow = {
  key: string;
  group: string;
  groupLabel: string;
  amount: number;
  comparisonKey: string;
  date: number;
  cells: ReactNode;
};

export function PriceComparison({ lang, test, rows }: { lang: Language; test: boolean; rows: PriceComparisonRow[] }) {
  const [group, setGroup] = useState('');
  const [sort, setSort] = useState('default');
  const t = words[lang];
  const l = (en: string, bn: string) => local(lang, en, bn);
  const groups = [...new Map(rows.map(row => [row.group, row.groupLabel])).entries()];
  const filtered = group ? rows.filter(row => row.group === group) : rows;
  const comparable = (offers: PriceComparisonRow[]) => new Set(offers.map(row => row.comparisonKey)).size === 1;
  const canSortByPrice = comparable(filtered);
  const visible = sort === 'price' && canSortByPrice
    ? [...filtered].sort((a, b) => a.amount - b.amount || b.date - a.date)
    : sort === 'date' ? [...filtered].sort((a, b) => b.date - a.date) : filtered;
  return <>
    {rows.length > 1 && <div className="comparison-tools">
      <label>{test ? t.facility : t.pack}
        <select value={group} onChange={event => {
          const value = event.target.value;
          setGroup(value);
          if (sort === 'price' && !comparable(value ? rows.filter(row => row.group === value) : rows)) setSort('default');
        }}>
          <option value="">{test ? l('All facilities', 'সব প্রতিষ্ঠান') : l('All pack sizes', 'সব প্যাকের আকার')}</option>
          {groups.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </label>
      <label>{l('Sort by', 'সাজান')}
        <select value={sort} onChange={event => setSort(event.target.value)}>
          <option value="default">{l('Listed order', 'তালিকার ক্রম')}</option>
          <option value="date">{l('Newest date', 'নতুন তারিখ আগে')}</option>
          {canSortByPrice && <option value="price">{l('Lowest price', 'কম মূল্য আগে')}</option>}
        </select>
      </label>
      <span role="status">{new Intl.NumberFormat(lang).format(visible.length)} {l('rates shown', 'টি মূল্য দেখানো হচ্ছে')}</span>
    </div>}
    <div className="table-scroll"><table>
      <thead><tr>{test && <th scope="col">{t.facility}</th>}<th scope="col">{test ? t.rate : t.pack}</th>
        <th scope="col">{t.price}</th><th scope="col">{t.date}</th></tr></thead>
      <tbody>{visible.map(row => <tr key={row.key}>{row.cells}</tr>)}</tbody>
    </table></div>
  </>;
}
