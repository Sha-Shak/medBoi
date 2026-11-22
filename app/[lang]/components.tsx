import Link from 'next/link';
import type { ReactNode } from 'react';
import { type Document } from 'mongodb';
import { Adsense } from './ads';
import { Photo } from './photo';
import { RecordIcon } from './record-icon';
import { SearchInput } from './search-input';
import { RecordCards } from './record-cards';
import { recordCard, strings } from '../../lib/record-card';
export { strings } from '../../lib/record-card';
import { imagePath } from '../../lib/media';
import type { MedicineSearchMode } from '../../lib/catalogue';
import { local, recordPath, sections, siteOrigin, words, type Language, type Section } from '../../lib/content';

export function Search({ lang, section, query = '', hero = false, mode = 'all', children }: {
  lang: Language; section?: Section; query?: string; hero?: boolean; mode?: MedicineSearchMode; children?: ReactNode;
}) {
  const t = words[lang];
  return <form action={'/' + lang + '/' + (section ?? 'search')} role="search">
    <div className={hero ? 'search hero-search' : 'search'}>
    <span className="magnify" aria-hidden />
    <SearchInput key={query} lang={lang} section={section} label={t.search} initial={query}
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
    <button type="submit">{t.search}</button>
    </div>
    {children}
  </form>;
}

export function RecordList({ lang, section, rows }: { lang: Language; section: Section; rows: (Document & {_id: string; name: string})[] }) {
  return <div className="record-list">{rows.map(row => {
    const name = lang === 'bn' && row.nameBn ? row.nameBn : row.name;
    const parts = [row.name !== name ? row.name : undefined, row.genericName, row.strength, row.dosageForm, row.manufacturerName,
      row.type, row.location?.district, row.chambers?.[0]?.name, ...strings(row.specialties).slice(0, 2), ...strings(row.categories).slice(0, 2)].filter(Boolean);
    const photo = imagePath(section, row._id, row.picture);
    const image = photo && section === 'doctors' ? photo + '?size=thumbnail' : photo;
    return <Link key={row._id} className="record glass" prefetch={false} href={recordPath(lang, section, row._id, row.name, row.strength)}>
      {image ? <Photo src={image} alt="" icon={<RecordIcon section={section} data={row} />} className={'result-photo ' + section} />
        : <RecordIcon section={section} data={row} />}
      <span className="record-content"><strong>{name}</strong>{parts.length > 0 && <small>{parts.join(' · ')}</small>}</span>
      <span className="chevron" aria-hidden />
    </Link>;
  })}</div>;
}

export function RecordGrid({ lang, section, rows, rail = false }: {
  lang: Language; section: Section; rows: (Document & { _id: string; name: string })[]; rail?: boolean;
}) {
  return <ul className={rail ? 'catalogue-grid catalogue-rail' : 'catalogue-grid'}>
    <RecordCards section={section} cards={rows.map(row => recordCard(lang, section, row))} />
  </ul>;
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
