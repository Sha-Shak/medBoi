import type { Metadata } from 'next';
import { siteOrigin, type Language } from './content';

export function seo(lang: Language, path: string, title: string, description: string, index = true): Metadata {
  const origin = siteOrigin();
  const url = origin ? origin + '/' + lang + path : undefined;
  return { title, description,
    robots: { index: Boolean(origin && index), follow: Boolean(origin) },
    alternates: origin ? { canonical: url, languages: { en: origin + '/en' + path, bn: origin + '/bn' + path, 'x-default': origin + '/en' + path } } : undefined,
    openGraph: { title, description, url, siteName: 'medBoi', locale: lang === 'bn' ? 'bn_BD' : 'en_BD', type: 'website' },
  };
}

export function jsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
