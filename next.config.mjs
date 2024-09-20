/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public-assets.ramzinex.com',
        port: '',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
