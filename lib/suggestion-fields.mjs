export const suggestionFields = {
  medicines: ['name', 'nameBn'],
  doctors: ['name', 'nameEn', 'nameBn'],
  tests: ['name', 'nameBn', 'aliases'],
  facilities: ['name', 'nameBn', 'registryCode'],
};

export function prefixes(query) {
  const escaped = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const lowercase = query.toLowerCase();
  const titlecase = lowercase.replace(/(^|[\s-])([a-z])/g, (_, boundary, letter) => boundary + letter.toUpperCase());
  return [...new Set([query, titlecase, lowercase, query.toUpperCase()])].map(value => new RegExp('^' + escaped(value)));
}
