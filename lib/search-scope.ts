import { isSection, type Section } from './content';

export const searchCategories = ['medicines', 'doctors', 'tests', 'facilities'] as const satisfies readonly Section[];

export function searchScope(value: string | string[] | null | undefined): Section[] {
  const requested = (typeof value === 'string' ? [value] : value ?? []).filter(isSection);
  return requested.length ? searchCategories.filter(section => requested.includes(section)) : [...searchCategories];
}
