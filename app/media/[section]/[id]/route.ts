import { getImage } from '../../../../lib/catalogue';
import { allowedImage, imageSection } from '../../../../lib/media';

const maxBytes = 6 * 1024 * 1024;
const extensions = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']);
const unavailable = () => new Response(null, { status: 404, headers: { 'Cache-Control': 'public, max-age=180' } });

export async function GET(_: Request, { params }: { params: Promise<{ section: string; id: string }> }) {
  const { section, id } = await params;
  if (!imageSection(section) || !/^[\w:-]{1,128}$/.test(id)) return unavailable();
  try {
    let url = allowedImage(section, await getImage(section, id));
    for (let remaining = 3; url && remaining > 0; remaining--) {
      const image = await fetch(url, {
        redirect: 'manual', signal: AbortSignal.timeout(5500), cache: 'no-store',
        headers: { Accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif' },
      });
      if ([301, 302, 303, 307, 308].includes(image.status)) {
        const location = image.headers.get('location');
        await image.body?.cancel();
        url = location ? allowedImage(section, new URL(location, url).href) : null;
        continue;
      }
      const type = (image.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
      if (!image.ok || !extensions.has(type) || !image.body
        || Number(image.headers.get('content-length') || 0) > maxBytes) {
        await image.body?.cancel();
        return unavailable();
      }
      const reader = image.body.getReader();
      const chunks: Uint8Array<ArrayBuffer>[] = [];
      let size = 0;
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        size += value.length;
        if (size > maxBytes) { await reader.cancel(); return unavailable(); }
        chunks.push(new Uint8Array(value));
      }
      if (!size) return unavailable();
      return new Response(new Blob(chunks), { headers: {
        'Content-Type': type, 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
        'X-Content-Type-Options': 'nosniff', 'Content-Length': String(size),
      } });
    }
  } catch { /* Missing or expired original links fall back to the catalogue icon. */ }
  return unavailable();
}
