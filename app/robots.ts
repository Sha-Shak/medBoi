import { siteOrigin } from '../lib/site';
import { siteConfig } from '../site.config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.seo.indexable ? siteOrigin() : undefined;
  return { rules: { userAgent: '*', ...(origin ? { allow: '/' } : { disallow: '/' }) },
    sitemap: origin ? origin + '/sitemaps/index.xml' : undefined };
}
