/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // PWA support
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
