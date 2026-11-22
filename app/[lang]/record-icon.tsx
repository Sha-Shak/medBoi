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
  sachet: <path d="M5 3h14v18H5zm0 4h14M5 17h14m-10-4h6m-3-2v4"/>,
  patch: <><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 12h6m-3-3v6m3 5 5-5"/></>,
  suppository: <path d="M7 18v-4c0-4 2-7 5-11 3 4 5 7 5 11v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Zm0-2h10"/>,
  bag: <path d="M10 3h4m-2 0v3M7 6h10l1 12H6L7 6Zm3 12v3m4-3v3m-4-9h4"/>,
  tubing: <path d="M5 3v8a4 4 0 0 0 8 0V8a3 3 0 0 1 6 0v9m-2 0h4m-2 0v4M3 3h4"/>,
  cylinder: <path d="M10 3h4v4h-4zm2 4v2m-5 4a5 5 0 0 1 10 0v8H7zm0 4h10"/>,
  bar: <><rect x="3" y="7" width="18" height="10" rx="4"/><path d="M8 12h8"/></>,
  pump: <path d="M10 3h8m-4 0v4m-2 0h4v4m-6 0h6l3 4v6H5v-6l5-4Zm0 5h4m-2-2v4"/>,
  vaccine: <path d="M12 3c2 2 5 3 8 3v6c0 5-4 8-8 10-4-2-8-5-8-10V6c3 0 6-1 8-3Zm-3 9h6m-3-3v6"/>,
  doctor: <path d="M4 4v5a4 4 0 0 0 8 0V4M4 4h2m4 0h2M8 13v2a5 5 0 0 0 10 0v-1m2-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>,
  hospital: <path d="M3 21h18M5 21V4h14v17m-9 0v-4h4v4M9 10h6m-3-3v6"/>,
  clinic: <path d="M3 12 12 5l9 7M5 11v10h14V11m-10 4h6m-3-3v6"/>,
  lab: <path d="M9 3h6m-5 0v7l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3M8 15h8"/>,
  test: <path d="M9 4H6v17h12V4h-3M9 3h6v4H9zm0 10 2 2 4-4"/>,
  xray: <path d="M4 4h16v16H4zm8 3v10M10 9c-2 0-3 1-3 3m3 1c-2 0-3 1-3 3m7-7c2 0 3 1 3 3m-3 1c2 0 3 1 3 3"/>,
  scanner: <><circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3.5"/><path d="M3 21h18m-12 0v-4h6v4"/></>,
  ultrasound: <path d="M4 5h16v12H4zM8 21h8m-4-4v4m-3-8a4 4 0 0 1 6 0m-8-2a7 7 0 0 1 10 0m-5 3v.1"/>,
  scope: <path d="M5 3v10a5 5 0 0 0 10 0V8a3 3 0 0 1 6 0v2M3 3h4m12 7h4m-6 11H7"/>,
  blood: <path d="M12 3c-2 4-6 7.6-6 12a6 6 0 0 0 12 0c0-4.4-4-8-6-12Zm-2 12h4m-2-2v4"/>,
  molecular: <path d="M7 3c0 7 10 11 10 18M17 3c0 7-10 11-10 18M8 6h8m-6 3h4m-4 6h4m-6 3h8"/>,
  microbiology: <path d="m10 3 4 2-4 8-4-2 4-8Zm-2 9-1 3m5-6h2a4 4 0 0 1 0 8h-4m-5 4h14M4 17h6"/>,
  cardiac: <path d="M3 5h18v14H3zm3 7h3l2-4 2 8 2-4h3"/>,
  neuro: <path d="M12 5a3 3 0 0 0-5 2 4 4 0 0 0-2 7 4 4 0 0 0 3 6 4 4 0 0 0 4-2 4 4 0 0 0 4 2 4 4 0 0 0 3-6 4 4 0 0 0-2-7 3 3 0 0 0-5-2Zm0 0v13m-6-5h3m6 0h3"/>,
  imaging: <path d="M4 5h16v14H4zm3 9 3-3 3 3 2-2 2 2m-9-5h.1"/>,
  vision: <><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.8"/></>,
  flow: <path d="M4 4v16h16M7 15c2 0 3-7 6-7 2 0 3 4 6 4"/>,
  specimen: <path d="M6 4h12v4H6zm1 4 2 12h6l2-12m-8 7h6"/>,
  package: <path d="m3 7 9-4 9 4v11l-9 4-9-4V7Zm0 0 9 4 9-4m-9 4v11M8 5l9 4"/>,
  charge: <path d="M5 3v18l3-2 4 2 4-2 3 2V3l-3 2-4-2-4 2-3-2Zm4 6h6m-6 4h6m-6 4h3"/>,
  ambulance: <><path d="M3 7h12v10H3zm12 3h4l3 4v3h-7m-9-5h6m-3-3v6"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
};

type IconKind = keyof typeof artwork;
type IconData = Record<string, unknown>;
const label = (value: unknown) => typeof value === 'string' ? value.normalize('NFKC').toLowerCase() : '';

const testIcons: [RegExp, IconKind][] = [
  [/\bx[\s‐‑–-]*ray\b|এক্স[\s-]*রে/, 'xray'],
  [/\bmri\b|\bct[.\s-]*scan\b|\bcomputed tomography\b|\bmagnetic resonance\b/, 'scanner'],
  [/\b(?:ecg|ekg|ett|echo|echocardiogra\w*|cardiac diagnostics|electrocardiogra\w*|exercise tolerance test|pro[ -]?bnp|troponin)\b/, 'cardiac'],
  [/\b(?:usg|ultrasound|ultrasonogra\w*|fibroscan)\b/, 'ultrasound'],
  [/\b(?:endoscopy|endoscopic|colonoscopy|bronchoscopy|sigmoidoscopy)\b/, 'scope'],
  [/\b(?:ha?ematology|cbc|blood bank|transfusion medicine|complete blood count|ha?ematocrit|pcv|ha?emoglobin|blood group(?:ing)?)\b/, 'blood'],
  [/\b(?:molecular diagnos\w*|pcr|genetic testing)\b/, 'molecular'],
  [/\b(?:microbiology|virology|bacteriology|mycology|(?:gram|afb) stain\w*|culture (?:and|&) sensitivity)\b/, 'microbiology'],
  [/\b(?:neurology|eeg|electroencephalogra\w*|nerve conduction)\b/, 'neuro'],
  [/\b(?:ophthalmology|vision test|visual acuity)\b/, 'vision'],
  [/\b(?:uroflowmetry|urodynamic\w*)\b/, 'flow'],
];

const broadTestIcons: [RegExp, IconKind][] = [
  [/\b(?:radiology|imaging)\b/, 'imaging'],
  [/\b(?:pathology|biochemical|biochemistry|chemistry|immunology|serology|endocrinology|hormone|elisa|urine|urinary|stool|fa?ecal|cytology|histopathology|glucose|bilirubin|estradiol|electrolytes|creatinine|triglycerides|cholesterol|hba1c|ferritin|prolactin|progesterone|thyroxine|microscopy|albumin|ca[- ]?(?:125|19-9|72[.-]4))\b/, 'lab'],
];

const serviceIcons: [RegExp, IconKind][] = [
  [/\bambulance\b/, 'ambulance'],
  [/\b(?:vaccination|immunization)\b/, 'vaccine'],
  [/\b(?:package)\b/, 'package'],
  [/\b(?:vacuum|vaccum) tube\b/, 'specimen'],
  [/\b(?:diagnostic charges|registration)\b/, 'charge'],
];

function diagnosticIcon(data: IconData): IconKind {
  const categories = (Array.isArray(data.categories) ? data.categories : [data.categories]).map(label).filter(Boolean);
  const category = categories.join(' ');
  const name = label(data.name);
  // Only a service-only categorization overrides the diagnostic modality in the name.
  const service = categories.every(value => serviceIcons.some(([pattern]) => pattern.test(value)))
    ? serviceIcons.find(([pattern]) => pattern.test(category))?.[1] : undefined;
  return service
    ?? testIcons.find(([pattern]) => pattern.test(name))?.[1]
    ?? testIcons.find(([pattern]) => pattern.test(category))?.[1]
    ?? broadTestIcons.find(([pattern]) => pattern.test(category + ' ' + name))?.[1]
    ?? 'test';
}

function iconKind(section: Section, data: IconData): IconKind {
  if (section === 'doctors') return 'doctor';
  if (section === 'facilities') {
    const type = label(data.type);
    if (/diagnostic|pathology|laboratory/.test(type)) return 'lab';
    if (/hospital|medical college/.test(type)) return 'hospital';
    return /clinic|health cent(?:er|re)|health complex/.test(type) ? 'clinic' : 'hospital';
  }
  if (section === 'tests') return diagnosticIcon(data);
  const form = label(data.dosageForm) || label(data.dosageFormId);
  if (/^combipack$/.test(form)) return 'package';
  if (/\bblood tubing set\b/.test(form)) return 'tubing';
  if (/\b(?:blood|pvc) bag\b/.test(form)) return 'bag';
  if (/^vaccine$/.test(form)) return 'vaccine';
  if (/^gas$/.test(form)) return 'cylinder';
  if (/\b(?:medicated bar|gum)\b/.test(form) && !/\btablet\b/.test(form)) return 'bar';
  if (/\b(?:hand rub|shampoo|scrub)\b/.test(form)) return 'pump';
  if (/\b(?:muscle rub|nail lacquer)\b/.test(form)) return 'tube';
  if (/\b(?:injection|injectable|infusion|vial|ampoule|penfill|syringe)\b|ইনজেকশন/.test(form)) return 'injection';
  if (/\b(?:spray|inhalation|inhaler|aerosol|nebulis[ez]er|cozycap)\b|স্প্রে|ইনহেলার/.test(form)) return 'spray';
  if (/\b(?:patch|film)\b/.test(form)) return 'patch';
  if (/\b(?:suppository|pessary)\b/.test(form)) return 'suppository';
  if (/\b(?:capsule|softgel)\b|ক্যাপসুল/.test(form)) return 'capsule';
  if (/\b(?:tablet|bolus)\b|ট্যাবলেট/.test(form)) return 'tablet';
  if (/\bdrops?\b|ড্রপ/.test(form)) return 'drops';
  if (/\b(?:cream|ointment|gel|emulgel|paste)\b|ক্রিম|মলম|জেল/.test(form)) return 'tube';
  if (/\b(?:powder|granules|microgranules|pellets|sachet)\b/.test(form)) return 'sachet';
  if (/\b(?:syrup|suspension|solution|elixir|liquid|lotion|emulsion|linctus|mouth\s*wash|gargle|saline|tincture)\b|সিরাপ|সাসপেনশন/.test(form)) return 'liquid';
  return 'medicine';
}

export function RecordIcon({ section, data }: { section: Section; data: IconData }) {
  const kind = iconKind(section, data);
  return <span className={'category-icon record-icon ' + section} data-icon={kind} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
      strokeLinecap="round" strokeLinejoin="round" focusable="false">{artwork[kind]}</svg>
  </span>;
}
