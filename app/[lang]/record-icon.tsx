import type { Section } from '../../lib/content';

const artwork = {
  medicine: <><rect x="6" y="7" width="12" height="14" rx="3"/><path d="M8 7V3h8v4M9 14h6m-3-3v6"/></>,
  capsule: <><path d="M5.5 18.5a4.2 4.2 0 0 1 0-6L12.5 5.5a4.2 4.2 0 0 1 6 6l-7 7a4.2 4.2 0 0 1-6 0Z"/><path d="m9 9 6 6"/></>,
  tablet: <><circle cx="12" cy="12" r="8"/><path d="m6.35 17.65 11.3-11.3"/></>,
  injection: <path d="m16 3 5 5m-7-3 5 5-8 8H6v-5l8-8Zm-5 5 2 2m1-5 2 2m-8 8-3 3"/>,
  liquid: <><path d="M8 3h8v4H8zm1 4v3l-3 3v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6l-3-3V7"/><path d="M6 15h12"/></>,
  drops: <path d="M12 3c-2 3.8-6 7.6-6 12a6 6 0 0 0 12 0c0-4.4-4-8.2-6-12Zm-3 12a3 3 0 0 0 3 3"/>,
  spray: <path d="M9 8h6v4H9zM11 8V5h7m-2-2h3m-10 9-2 3v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4l-2-3M21 5h1"/>,
  tube: <path d="M6 4h12l-2 11-2 2v3h-4v-3l-2-2L6 4Zm4 13h4m-5-7h6m-3-2v4"/>,
  doctor: <path d="M4 4v5a4 4 0 0 0 8 0V4M4 4h2m4 0h2M8 13v2a5 5 0 0 0 10 0v-1m2-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>,
  hospital: <path d="M3 21h18M5 21V4h14v17m-9 0v-4h4v4M9 10h6m-3-3v6"/>,
  clinic: <path d="M3 12 12 5l9 7M5 11v10h14V11m-10 4h6m-3-3v6"/>,
  lab: <path d="M9 3h6m-5 0v7l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3M8 15h8"/>,
  imaging: <path d="M4 5h16v12H4zM8 21h8m-4-4v4M7 11h2l2-3 2 6 2-3h2"/>,
};

type IconKind = keyof typeof artwork;
type IconData = Record<string, unknown>;
const label = (value: unknown) => typeof value === 'string' ? value.normalize('NFKC').toLowerCase() : '';

function iconKind(section: Section, data: IconData): IconKind {
  if (section === 'doctors') return 'doctor';
  if (section === 'facilities') {
    const type = label(data.type);
    if (/diagnostic|pathology|laboratory/.test(type)) return 'lab';
    if (/hospital|medical college/.test(type)) return 'hospital';
    return /clinic|health cent(?:er|re)|health complex/.test(type) ? 'clinic' : 'hospital';
  }
  if (section === 'tests') {
    const category = Array.isArray(data.categories) ? data.categories.map(label).join(' ') : label(data.categories);
    return /imaging|radiology|ultrasound|x[ -]ray|\bmri\b|\bct scan\b/.test(category) ? 'imaging' : 'lab';
  }
  const form = label(data.dosageForm) || label(data.dosageFormId);
  if (/\b(?:injection|injectable|infusion|vial|ampoule|penfill)\b|ইনজেকশন/.test(form)) return 'injection';
  if (/\b(?:capsule|softgel)\b|ক্যাপসুল/.test(form)) return 'capsule';
  if (/\btablet\b|ট্যাবলেট/.test(form)) return 'tablet';
  if (/\b(?:spray|inhaler|aerosol)\b|স্প্রে|ইনহেলার/.test(form)) return 'spray';
  if (/\bdrops?\b|ড্রপ/.test(form)) return 'drops';
  if (/\b(?:cream|ointment|gel|paste)\b|ক্রিম|মলম|জেল/.test(form)) return 'tube';
  if (/\b(?:syrup|suspension|solution|elixir|liquid|lotion)\b|সিরাপ|সাসপেনশন/.test(form)) return 'liquid';
  return 'medicine';
}

export function RecordIcon({ section, data }: { section: Section; data: IconData }) {
  const kind = iconKind(section, data);
  return <span className={'category-icon record-icon ' + section} data-icon={kind} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
      strokeLinecap="round" strokeLinejoin="round" focusable="false">{artwork[kind]}</svg>
  </span>;
}
