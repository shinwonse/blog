/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    serverComponentsHmrCache: false,
  }
}

module.exports = nextConfig
