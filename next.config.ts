import { resolve } from 'node:path';
import type { NextConfig } from 'next';

const config: NextConfig = {
  poweredByHeader: false,
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  turbopack: { root: resolve(process.cwd()) },
  async redirects() { return [{ source: '/', destination: '/en', permanent: false }]; },
  async headers() {
    return [{ source: '/:path*', headers: [{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' }] }];
  },
};
export default config;
