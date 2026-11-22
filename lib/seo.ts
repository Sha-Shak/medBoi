import type { Metadata } from 'next';
import { siteOrigin, type Language } from './content';

export function seo(lang: Language, path: string, title: string, description: string, index = true): Metadata {
  const origin = siteOrigin();
  const url = origin ? origin + '/' + lang + path : undefined;
  const image = origin ? { url: origin + '/brand/medboi-social.png', width: 1200, height: 630,
    alt: 'Medবই — Bangladesh healthcare guide' } : undefined;
  return { title, description,
    robots: { index: Boolean(origin && index), follow: Boolean(origin) },
    alternates: origin ? { canonical: url, languages: { en: origin + '/en' + path, bn: origin + '/bn' + path, 'x-default': origin + '/en' + path } } : undefined,
    openGraph: { title, description, url, siteName: 'Medবই', locale: lang === 'bn' ? 'bn_BD' : 'en_BD', type: 'website', images: image ? [image] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image.url] : undefined },
  };
}

export function jsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
