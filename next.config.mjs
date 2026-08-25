/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.50.87"],
  async headers() {
    const mediaCacheHeader = {
      key: "Cache-Control",
      value: "public, max-age=86400, stale-while-revalidate=604800",
    };

    return [
      {
        source: "/:path(.*\\.mp4)",
        headers: [mediaCacheHeader],
      },
      {
        source: "/:path(.*\\.mov)",
        headers: [mediaCacheHeader],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/titls",
        destination: "https://titls.app",
        permanent: true, // 308 redirect
      },
      {
        source: "/hydrify",
        destination: "https://hydrify.app",
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
