import { unstable_cache } from 'next/cache';
import { recordPath, sections, type Language, type Section } from './content';
import { readCatalogue } from './mongo';
import { prefixes, suggestionFields } from './suggestion-fields.mjs';

export type Suggestion = { href: string; label: string; detail?: string; section: Section };
type Match = { _id: string; name: string; nameBn?: string; strength?: string };

const find = unstable_cache(async (section: Section, query: string, lang: Language, limit: number) => {
  return readCatalogue(sections[section].collection, async db => {
    const collection = db.collection<Match>(sections[section].collection);
    const fields = suggestionFields[section];
    const candidates = prefixes(query);
    const collator = new Intl.Collator(lang);
    const projection = { name: 1, nameBn: 1, strength: 1 };
    const lists = await Promise.all(fields.map(async field => {
      return collection.find({ [field]: { $in: candidates } }, {
        projection, hint: 'public_search_' + field, maxTimeMS: 700,
        collation: { locale: 'simple' },
      }).limit(limit * 3).toArray();
    }));
    const unique = new Map(lists.flat().map(record => [record._id, record]));
    const rank = (row: Match) => {
      const words = [row.name, row.nameBn].map(value => value?.normalize('NFKC').toLowerCase());
      const term = query.toLowerCase();
      return words.includes(term) ? 0 : words.some(word => word?.startsWith(term)) ? 1 : 2;
    };
    return [...unique.values()].sort((a, b) => rank(a) - rank(b)
      || collator.compare(lang === 'bn' ? a.nameBn || a.name : a.name, lang === 'bn' ? b.nameBn || b.name : b.name)
      || a._id.localeCompare(b._id)).slice(0, limit).map(row => ({
      href: recordPath(lang, section, row._id, row.name, row.strength),
      label: lang === 'bn' ? row.nameBn || row.name : row.name,
      detail: row.strength, section,
    }));
  });
}, ['medboi-prefix-suggestions-v1'], { revalidate: 120 });

export async function suggestions(query: string, lang: Language, sections: Section[]): Promise<Suggestion[]> {
  const result = await Promise.allSettled(sections.map(section => find(section, query, lang, sections.length === 1 ? 8 : 2)));
  return result.flatMap(item => item.status === 'fulfilled' ? item.value : []);
}
