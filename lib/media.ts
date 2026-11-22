import type { Section } from './content';
import type { Picture } from './hosted-photo';

const imageSections = ['facilities', 'medicines', 'doctors'] as const;
export type ImageSection = typeof imageSections[number];

export function imageSection(section: string): section is ImageSection {
  return imageSections.some(item => section === item);
}

export function imagePath(section: Section, id: string, picture?: Picture) {
  return imageSection(section) && picture?.cloudinary?.type === 'authenticated' && !picture.removedAt
    ? '/media/' + section + '/' + encodeURIComponent(id) : undefined;
}
