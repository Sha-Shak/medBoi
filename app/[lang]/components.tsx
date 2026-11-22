import Link from 'next/link';
import type { ReactNode } from 'react';
import { type Document } from 'mongodb';
import { Adsense } from './ads';
import { Photo } from './photo';
import { imagePath } from '../../lib/media';
import type { MedicineSearchMode } from '../../lib/catalogue';
import { local, recordPath, sections, siteOrigin, words, type Language, type Section } from '../../lib/content';

export function Search({ lang, section, query = '', hero = false, mode = 'all', children }: {
  lang: Language; section?: Section; query?: string; hero?: boolean; mode?: MedicineSearchMode; children?: ReactNode;
}) {
  const t = words[lang];
  return <form action={'/' + lang + '/' + (section ?? 'search')} role="search">
    <div className={hero ? 'search glass hero-search' : 'search glass'}>
    <span className="magnify" aria-hidden />
    <input name="q" type="search" aria-label={t.search} defaultValue={query} maxLength={90}
      placeholder={section === 'medicines' ? t.placeholder
        : section === 'doctors' ? local(lang, 'Doctor, specialty or chamber', 'চিকিৎসক, বিশেষত্ব বা চেম্বার')
        : section === 'tests' ? local(lang, 'Test name or abbreviation', 'পরীক্ষার নাম বা সংক্ষিপ্ত রূপ')
        : section === 'facilities' ? local(lang, 'Hospital, area or DGHS code', 'হাসপাতাল, এলাকা বা ডিজিএইচএস কোড')
        : local(lang, 'Medicine, doctor, test or hospital', 'ওষুধ, চিকিৎসক, পরীক্ষা বা হাসপাতাল')} />
    {section === 'medicines' && <select className="medicine-search-mode" name="mode" aria-label={local(lang, 'Search medicines by', 'ওষুধ খোঁজার ধরন')} defaultValue={mode}>
      <option value="all">{local(lang, 'All fields', 'সব তথ্য')}</option>
      <option value="brand">{local(lang, 'Brand', 'ব্র্যান্ড')}</option>
      <option value="generic">{local(lang, 'Generic', 'জেনেরিক')}</option>
    </select>}
    <button>{t.search}</button>
    </div>
    {children}
  </form>;
}

export function LanguageLink({ lang, path }: { lang: Language; path: string }) {
  const other = lang === 'en' ? 'bn' : 'en';
  return <Link href={'/' + other + path} hrefLang={other} className="subtle">{other === 'bn' ? 'এই পাতাটি বাংলায়' : 'This page in English'}</Link>;
}

export function RecordList({ lang, section, rows }: { lang: Language; section: Section; rows: (Document & {_id: string; name: string})[] }) {
  return <div className="record-list">{rows.map(row => {
    const name = lang === 'bn' && row.nameBn ? row.nameBn : row.name;
    const parts = [row.name !== name ? row.name : undefined, row.genericName, row.strength, row.dosageForm, row.manufacturerName,
      row.type, row.location?.district, row.chambers?.[0]?.name, ...strings(row.specialties).slice(0, 2), ...strings(row.categories).slice(0, 2)].filter(Boolean);
    const photo = imagePath(section, row._id, row.picture);
    const image = photo && section === 'doctors' ? photo + '?size=thumbnail' : photo;
    return <Link key={row._id} className="record glass" prefetch={false} href={recordPath(lang, section, row._id, row.name, row.strength)}>
      {image ? <Photo src={image} alt="" icon={sections[section].icon} className={'result-photo ' + section} />
        : <span className={'category-icon ' + section} aria-hidden>{sections[section].icon}</span>}
      <span className="record-content"><strong>{name}</strong>{parts.length > 0 && <small>{parts.join(' · ')}</small>}</span>
      <span className="chevron" aria-hidden />
    </Link>;
  })}</div>;
}

export function RecordGrid({ lang, section, rows, rail = false }: {
  lang: Language; section: Section; rows: (Document & { _id: string; name: string })[]; rail?: boolean;
}) {
  const l = (en: string, bn: string) => local(lang, en, bn);
  const actions = {
    medicines: l('View medicine', 'ওষুধ দেখুন'),
    doctors: l('View profile', 'প্রোফাইল দেখুন'),
    tests: l('View test prices', 'পরীক্ষার মূল্য দেখুন'),
    facilities: l('View facility', 'প্রতিষ্ঠান দেখুন'),
  };
  return <ul className={rail ? 'catalogue-grid catalogue-rail' : 'catalogue-grid'}>
    {rows.map(row => {
      const title = lang === 'bn' ? row.nameBn || row.name : row.name;
      const photo = imagePath(section, row._id, row.picture);
      const image = photo && section === 'doctors' ? photo + '?size=thumbnail' : photo;
      const details = section === 'medicines' ? [
        [row.strength, row.dosageForm].filter(Boolean).join(' · '), row.genericName, row.manufacturerName,
      ] : section === 'doctors' ? [
        strings(row.specialties).slice(0, 2).join(' · '), row.chambers?.[0]?.name,
      ] : section === 'tests' ? strings(row.categories).slice(0, 2) : [
        row.type, [row.location?.upazila, row.location?.district].filter(Boolean).join(', '),
      ];
      return <li key={row._id}>
        <Link className={'catalogue-card glass ' + section} prefetch={false}
          href={recordPath(lang, section, row._id, row.name, row.strength)}>
          {image ? <Photo className={'catalogue-image ' + section} src={image} alt="" icon={sections[section].icon} />
            : <span className="catalogue-card-icon"><span className={'category-icon ' + section} aria-hidden>{sections[section].icon}</span></span>}
          <div className="catalogue-card-copy"><strong>{title}</strong>
            {title !== row.name && <small>{row.name}</small>}
            {details.filter(Boolean).map((value, index) => <small key={index}>{value}</small>)}
            <span className="catalogue-card-action">{actions[section]} <span aria-hidden>↗</span></span>
          </div>
        </Link>
      </li>;
    })}
  </ul>;
}

export function strings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string' && Boolean(item.trim())) : [];
}

export function webUrl(raw: string | undefined) {
  if (!raw) return undefined;
  try { const url = new URL(raw); return url.protocol === 'https:' ? url.href : undefined; } catch { return undefined; }
}

export function Sponsor({ lang }: { lang: Language }) {
  const name = process.env.SPONSOR_NAME;
  const title = lang === 'bn' ? process.env.SPONSOR_TITLE_BN || process.env.SPONSOR_TITLE_EN : process.env.SPONSOR_TITLE_EN;
  const url = webUrl(process.env.SPONSOR_URL);
  if (!name || !title || !url) return null;
  return <aside className="sponsor glass" aria-label={words[lang].sponsor}>
    <div><span>{words[lang].sponsor}</span><strong>{title}</strong></div>
    <a href={url} rel="sponsored noopener noreferrer" target="_blank" className="pill">{name}</a>
  </aside>;
}

export function AdSlot() {
  const client = process.env.ADSENSE_CLIENT ?? '';
  const slot = process.env.ADSENSE_SLOT ?? '';
  if (!siteOrigin() || !/^ca-pub-\d{16}$/.test(client) || !/^\d{5,20}$/.test(slot)) return null;
  return <aside className="ad-slot"><Adsense client={client} slot={slot} /></aside>;
}
