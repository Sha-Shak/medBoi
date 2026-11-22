import { v2 as cloudinary } from 'cloudinary';

export type Picture = {
  url?: string; removedAt?: unknown;
  cloudinary?: { publicId: string; format: string; type: string; version: number };
};

export function hostedPhotoUrl(asset: NonNullable<Picture['cloudinary']>) {
  const { CLOUDINARY_CLOUD_NAME: cloud_name, CLOUDINARY_API_KEY: api_key, CLOUDINARY_API_SECRET: api_secret } = process.env;
  if (!cloud_name || !api_key || !api_secret || asset.type !== 'authenticated'
    || !/^(medicines|doctors|hospitals)\/(?:live\/)?[\w:-]+\/[\w-]+$/.test(asset.publicId)
    || !/^(jpg|png|webp|gif|avif)$/.test(asset.format) || !Number.isSafeInteger(asset.version)) return null;
  cloudinary.config({ cloud_name, api_key, api_secret, secure: true, signature_algorithm: 'sha256' });
  return new URL(cloudinary.url(asset.publicId, {
    resource_type: 'image', type: 'authenticated', sign_url: true, secure: true,
    version: asset.version, format: asset.format,
  }));
}
