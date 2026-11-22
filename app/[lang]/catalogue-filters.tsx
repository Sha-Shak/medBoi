'use client';

import { useState } from 'react';
import Link from 'next/link';
import { local, type Language } from '../../lib/content';
import type { FacetKey, FacetOption, Facets, Selections } from '../../lib/facets';

const labels: Record<FacetKey, [string, string]> = {
  specialty: ['Specialty', 'বিশেষত্ব'],
  city: ['City or district', 'শহর বা জেলা'],
  hospital: ['Hospital or chamber facility', 'হাসপাতাল বা চেম্বারের প্রতিষ্ঠান'],
  manufacturer: ['Manufacturer', 'প্রস্তুতকারক'],
  form: ['Dosage form', 'ওষুধের ধরন'],
};

function FacetSelect({ name, options, value, lang, cityLabels, onChange }: {
  name: FacetKey; options: FacetOption[]; value: string; lang: Language; onChange: (value: string) => void;
  cityLabels: Map<string, string>;
}) {
  const [search, setSearch] = useState('');
  const l = (en: string, bn: string) => local(lang, en, bn);
  const label = l(...labels[name]);
  const location = (item: FacetOption) => item.city ? cityLabels.get(item.city) || item.city : '';
  const display = (item: FacetOption) => (lang === 'bn' ? item.bn || item.en : item.en) + (item.city ? ' · ' + location(item) : '');
  const query = search.trim().normalize('NFKC').toLowerCase();
  const matching = options.filter(item => item.value === value || !query
    || [item.en, item.bn, item.city, location(item)].some(text => text?.normalize('NFKC').toLowerCase().includes(query)));
  return <div className="catalogue-filter">
    <label htmlFor={'facet-' + name}>{label}</label>
    {options.length > 25 && <input type="search" aria-label={l('Find option for ' + label, label + ' তালিকায় খুঁজুন')}
      placeholder={l('Find an option', 'তালিকায় খুঁজুন')} value={search}
      onChange={event => setSearch(event.target.value)} />}
    <select id={'facet-' + name} name={name} value={value} onChange={event => onChange(event.target.value)}>
      <option value="">{l('Any', 'সব')}</option>
      {matching.map(option => <option value={option.value} key={option.value}>{display(option)}</option>)}
    </select>
    {query && !matching.some(option => option.value !== value) && <small role="status">{l('No matching options', 'মিল নেই')}</small>}
  </div>;
}

export function CatalogueFilters({ lang, facets, selected, resetHref }: {
  lang: Language; facets: Facets; selected: Selections; resetHref: string;
}) {
  const [values, setValues] = useState(selected);
  const l = (en: string, bn: string) => local(lang, en, bn);
  const keys = Object.keys(facets) as FacetKey[];
  const cityLabels = new Map(facets.city?.map(city => [city.value, l(city.en, city.bn || city.en)]));
  if (!keys.length) return null;
  return <fieldset className="catalogue-filters glass">
    <legend>{l('Filters', 'ফিল্টার')}</legend>
    <div className="catalogue-filter-grid">{keys.map(key => {
      const options = (facets[key] ?? []).filter(option => key !== 'hospital' || !values.city || option.city === values.city || option.value === values.hospital);
      return <FacetSelect key={key} name={key} options={options} value={values[key] || ''} lang={lang} cityLabels={cityLabels} onChange={value => {
        setValues(current => {
          const next = { ...current, [key]: value };
          if (key === 'city' && value && facets.hospital?.find(option => option.value === current.hospital)?.city !== value) {
            delete next.hospital;
          }
          return next;
        });
      }} />;
    })}</div>
    {facets.city && <p>{l('Location filters use the facilities linked to each doctor’s chambers.',
      'অবস্থান ফিল্টারে চিকিৎসকের চেম্বারের সঙ্গে যুক্ত প্রতিষ্ঠান ব্যবহার করা হয়।')}</p>}
    <div className="catalogue-filter-actions">
      <button className="pill" type="submit">{l('Apply filters', 'ফিল্টার প্রয়োগ করুন')}</button>
      {Object.values(values).some(Boolean) && <Link className="subtle" href={resetHref}>{l('Clear filters', 'ফিল্টার মুছুন')}</Link>}
    </div>
  </fieldset>;
}
