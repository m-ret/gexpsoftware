/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp','image/png', 'image/jpg'],
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
