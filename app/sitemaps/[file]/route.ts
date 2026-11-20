import { sitemapChunkSize, sitemapCounts, sitemapEntries } from '../../../lib/catalogue';
import { isSection, languages, recordPath, sectionKeys, siteOrigin } from '../../../lib/content';

export const revalidate = 3600;
const encode = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const xml = (document: string) => new Response('<?xml version="1.0" encoding="UTF-8"?>' + document,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=600, s-maxage=3600' } });
const missing = () => new Response('Not found', { status: 404 });

export async function GET(_: Request, { params }: { params: Promise<{ file: string }> }) {
  const origin = siteOrigin();
  if (!origin) return missing();
  const { file } = await params;
  if (file === 'index.xml') {
    const counts = await Promise.all(sectionKeys.map(section => sitemapCounts(section)));
    const parts = ['pages.xml', ...sectionKeys.flatMap((section, index) =>
      Array.from({ length: Math.ceil(counts[index] / sitemapChunkSize) }, (_, i) => section + '-' + i + '.xml'))];
    return xml('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      parts.map(part => '<sitemap><loc>' + encode(origin + '/sitemaps/' + part) + '</loc></sitemap>').join('') + '</sitemapindex>');
  }
  const urls = (paths: string[]) => xml('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    paths.map(path => '<url><loc>' + encode(origin + path) + '</loc></url>').join('') + '</urlset>');
  if (file === 'pages.xml') return urls(languages.flatMap(lang => ['/' + lang, ...sectionKeys.map(section => '/' + lang + '/' + section), '/' + lang + '/privacy']));
  const match = /^([a-z]+)-(\d{1,3})\.xml$/.exec(file);
  if (!match || !isSection(match[1])) return missing();
  const section = match[1];
  const offset = Number(match[2]);
  if (offset * sitemapChunkSize >= await sitemapCounts(section)) return missing();
  const rows = await sitemapEntries(section, offset);
  return urls(rows.flatMap(row => languages.map(lang => recordPath(lang, section, row._id, row.name, row.strength))));
}
