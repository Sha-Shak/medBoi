import { siteConfig } from '../site.config';

export function siteOrigin() {
  if (process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development') return undefined;
  const override = process.env.SITE_URL?.trim();
  if (!override && process.env.NODE_ENV !== 'production') return undefined;

  try {
    const url = new URL(override || siteConfig.url);
    return url.protocol === 'https:' && !url.username && !url.password && url.pathname === '/' && !url.search && !url.hash
      ? url.origin : undefined;
  } catch {
    return undefined;
  }
}
