// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'babafaridroofing.linearwebsolutions.com.au',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;