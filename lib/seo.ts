import { siteOrigin } from './site';
import { siteConfig } from '../site.config';
import type { Metadata } from 'next';
import type { Language } from './content';

export function seo(lang: Language, path: string, title: string, description: string, index = true): Metadata {
  const origin = siteOrigin();
  const url = origin ? origin + '/' + lang + path : undefined;
  const { src, width, height } = siteConfig.branding.socialImage;
  const image = origin && src ? { url: new URL(src, origin).href, width, height, alt: siteConfig.name } : undefined;
  return { title: { absolute: title + ' | ' + siteConfig.name }, description,
    robots: { index: Boolean(origin && siteConfig.seo.indexable && index), follow: Boolean(origin && siteConfig.seo.indexable) },
    alternates: origin ? { canonical: url, languages: { en: origin + '/en' + path, bn: origin + '/bn' + path, 'x-default': origin + '/en' + path } } : undefined,
    openGraph: { title, description, url, siteName: siteConfig.name, locale: lang === 'bn' ? 'bn_BD' : 'en_BD', type: 'website', images: image ? [image] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image.url] : undefined },
  };
}

export function jsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
