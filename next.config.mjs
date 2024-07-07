/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CHALLENGE_API: process.env.NEXT_PUBLIC_CHALLENGE_API,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_CHALLENGE_API}/:path*`,
      },
    ];
  },
};

export default nextConfig;
