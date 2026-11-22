import { hostedPhotoUrl } from '../../../../lib/hosted-photo';
import { getImage } from '../../../../lib/catalogue';
import { imageSection } from '../../../../lib/media';

const maxBytes = 6 * 1024 * 1024;
const extensions = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']);
const unavailable = () => new Response(null, { status: 404, headers: { 'Cache-Control': 'no-store' } });

export async function GET(request: Request, { params }: { params: Promise<{ section: string; id: string }> }) {
  const { section, id } = await params;
  if (!imageSection(section) || !/^[\w:-]{1,128}$/.test(id)) return unavailable();
  try {
    const thumbnail = section === 'doctors' && new URL(request.url).searchParams.get('size') === 'thumbnail';
    const picture = await getImage(section, id, thumbnail);
    if (!picture?.cloudinary || picture.removedAt) return unavailable();
    const url = hostedPhotoUrl(picture.cloudinary);
    if (!url) return unavailable();
    const image = await fetch(url, {
      redirect: 'error', signal: AbortSignal.timeout(5500), cache: 'no-store',
      headers: { Accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif' },
    });
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
      'Content-Type': type, 'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff', 'Content-Length': String(size),
    } });
  } catch { /* Unavailable hosted photos fall back to the catalogue icon. */ }
  return unavailable();
}
