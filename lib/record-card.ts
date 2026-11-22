import { recordPath, type Language, type Section } from './content';
import { imagePath } from './media';

export function strings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string' && Boolean(item.trim())) : [];
}

export type Card = {
  id: string;
  href: string;
  title: string;
  translation?: string;
  eyebrow?: string;
  details: string[];
  thumbnail?: string;
  icon: Record<string, unknown>;
};

export function recordCard(lang: Language, section: Section, row: { _id: string; name: string; [key: string]: any }): Card {
  const title = lang === 'bn' ? row.nameBn || row.name : row.nameEn || row.name;
  const translation = lang === 'bn' ? row.nameEn || row.name : undefined;
  const photo = imagePath(section, row._id, row.picture);
  const thumbnail = photo && section === 'doctors' ? photo + '?size=thumbnail' : photo;
  const location = [...new Set([row.location?.upazila, row.location?.district].filter(Boolean))].join(', ');
  const eyebrow = {
    medicines: [row.strength, row.dosageForm].filter(Boolean).join(' · '),
    doctors: strings(row.specialties).slice(0, 2).join(' · '),
    tests: strings(row.categories)[0],
    facilities: row.type,
  }[section];
  const details = {
    medicines: [row.genericName, row.manufacturerName],
    doctors: [row.chambers?.[0]?.name],
    tests: strings(row.categories).slice(1, 2),
    facilities: [location],
  }[section].filter((value): value is string => typeof value === 'string' && Boolean(value));

  return {
    id: row._id, href: recordPath(lang, section, row._id, row.name, row.strength),
    title, translation: translation !== title ? translation : undefined,
    eyebrow, details, thumbnail,
    icon: { name: row.name, dosageForm: row.dosageForm, dosageFormId: row.dosageFormId, type: row.type, categories: row.categories },
  };
}
