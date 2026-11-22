import { local, type Language } from './content';
import sanitizeHtml from 'sanitize-html';

export function publicText(value: unknown) {
  return typeof value === 'string' ? value.replace(/(?:https?:\/\/|www\.)\S+/gi, '').trim() : '';
}

export function profileItems(entries: unknown, ...fields: string[]) {
  const values = new Map<string, string>();
  if (!Array.isArray(entries)) return [];
  for (const row of entries) {
    if (!row || typeof row !== 'object') continue;
    for (const field of fields) {
      const raw = row[field];
      for (const item of Array.isArray(raw) ? raw : [raw]) {
        const value = publicText(item);
        const key = value.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ');
        if (value && !values.has(key)) values.set(key, value);
      }
    }
  }
  return [...values.values()];
}

const labelSections = [
  [['indications', 'indication'], 'Indications', 'ব্যবহারের নির্দেশনা'],
  [['composition'], 'Composition', 'উপাদান'],
  [['drug classes', 'therapeutic class'], 'Therapeutic class', 'থেরাপিউটিক শ্রেণি'],
  [['mode of action', 'pharmacology'], 'Pharmacology', 'কার্যপ্রণালি'],
  [['dosage', 'dosage and administration'], 'Dosage information', 'মাত্রা সম্পর্কিত তথ্য'],
  [['administration'], 'Administration', 'সেবনের পদ্ধতি'],
  [['interaction', 'interactions'], 'Interactions', 'ওষুধের মিথস্ক্রিয়া'],
  [['contraindications'], 'Contraindications', 'প্রতিনির্দেশনা'],
  [['side effects'], 'Side effects', 'পার্শ্বপ্রতিক্রিয়া'],
  [['pregnancy cat', 'pregnancy and lactation'], 'Pregnancy and breastfeeding', 'গর্ভাবস্থা ও স্তন্যদান'],
  [['precautions'], 'Precautions', 'সতর্কতা'],
  [['pediatric usage'], 'Use in children', 'শিশুদের ক্ষেত্রে ব্যবহার'],
  [['storage conditions', 'storage'], 'Storage', 'সংরক্ষণ'],
] as const;

export function medicineSections(row: Record<string, unknown> | undefined, lang: Language) {
  const values = new Map(Object.entries(row ?? {}).map(([key, value]) =>
    [key.toLowerCase().trim().replace(/_/g, ' ').replace(/\s*&\s*/g, ' and '), typeof value === 'string' ? value.trim() : '']));
  return labelSections.flatMap(([keys, en, bn]) => {
    const html = keys.map(key => values.get(key)).filter(Boolean).map(value => sanitizeHtml(value!, {
      allowedTags: ['p', 'br', 'div', 'strong', 'b', 'em', 'i', 'u', 'sup', 'sub', 'ul', 'ol', 'li',
        'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'dl', 'dt', 'dd', 'h3', 'h4', 'h5', 'h6'],
      allowedAttributes: { th: ['colspan', 'rowspan', 'scope'], td: ['colspan', 'rowspan'] },
      textFilter: text => text.replace(/(?:https?:\/\/|www\.)\S+/gi, ''),
    })).find(Boolean);
    return html ? [{ title: local(lang, en, bn), html }] : [];
  });
}
