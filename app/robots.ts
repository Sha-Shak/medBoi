import type { MetadataRoute } from 'next';
import { siteOrigin } from '../lib/content';

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  return { rules: { userAgent: '*', ...(origin ? { allow: '/' } : { disallow: '/' }) },
    sitemap: origin ? origin + '/sitemaps/index.xml' : undefined };
}
