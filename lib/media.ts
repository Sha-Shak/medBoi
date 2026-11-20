import type { Section } from './content';

const hosts = {
  medicines: new Set(['www.squarepharma.com.bd', 'renata-ltd.com', 'www.skfbd.com', 'communitypharmacybd.com',
    'www.opsonin-pharma.com', 'onlinemedicinebazar.com', 'beaconpharma.com.bd', 'beximco-pharma.com',
    'cdn.lifeplusbd.com', 'epharma.com.bd', 'api.medeasy.health', 'e-com-assets.shukhee.com', 'cdn.osudpotro.com']),
  doctors: new Set(['img.sasthyaseba.com', 'doctorsindhaka.com', 'listify.bd', 'labaid.com.bd', 'img.mydocnest.com']),
};

export type ImageSection = keyof typeof hosts;

export function imageSection(section: string): section is ImageSection {
  return Object.hasOwn(hosts, section);
}

export function allowedImage(section: ImageSection, value: unknown) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' && !url.port && !url.username && !url.password && hosts[section].has(url.hostname)
      && !/placeholder|no[-_]?image|default[-_]?avatar|dummy/i.test(url.pathname)) return url;
  } catch { /* Invalid legacy image links are omitted. */ }
  return null;
}

export function imagePath(section: Section, id: string, url: unknown) {
  return imageSection(section) && allowedImage(section, url) ? '/media/' + section + '/' + encodeURIComponent(id) : undefined;
}
