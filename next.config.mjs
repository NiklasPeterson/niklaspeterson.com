/** @type {import('next').NextConfig} */
const nextConfig = {
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

