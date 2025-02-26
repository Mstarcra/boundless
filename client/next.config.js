/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost', 'lh3.googleusercontent.com', 'https://boundless-server-5xs0.onrender.com'],
  },

  // comment for render twice issue
  // avoid cors with proxy
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://boundless-server-5xs0.onrender.com/:path*', // Proxy to Backend
  //     },
  //   ]
  // },
}

module.exports = nextConfig
