import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.xperthrivr.com'],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
