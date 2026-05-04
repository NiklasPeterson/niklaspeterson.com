import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/titls',
        destination: 'https://titls.app',
        permanent: true, // 308 redirect
      },
      {
        source: '/hydrify',
        destination: 'https://hydrify.app',
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
