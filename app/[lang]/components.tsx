import Link from 'next/link';
import { type Document } from 'mongodb';
import { Adsense } from './ads';
import { Photo } from './photo';
import { imagePath } from '../../lib/media';
import { local, recordPath, sections, siteOrigin, words, type Language, type Section } from '../../lib/content';

export function Search({ lang, section, query = '', hero = false }: { lang: Language; section: Section; query?: string; hero?: boolean }) {
  const t = words[lang];
  return <form action={'/' + lang + '/' + section} className={hero ? 'search glass hero-search' : 'search glass'} role="search">
    <span className="magnify" aria-hidden />
    <input name="q" type="search" aria-label={t.search} defaultValue={query} maxLength={90}
      placeholder={section === 'medicines' ? t.placeholder : local(lang, 'Search by name', 'নাম দিয়ে খুঁজুন')} />
    <button>{t.search}</button>
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
    const image = imagePath(section, row._id, row.picture?.url);
    return <Link key={row._id} className="record glass" prefetch={false} href={recordPath(lang, section, row._id, row.name, row.strength)}>
      {image ? <Photo src={image} alt="" icon={sections[section].icon} className={'result-photo ' + section} />
        : <span className={'category-icon ' + section} aria-hidden>{sections[section].icon}</span>}
      <span className="record-content"><strong>{name}</strong>{parts.length > 0 && <small>{parts.join(' · ')}</small>}</span>
      <span className="chevron" aria-hidden />
    </Link>;
  })}</div>;
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
