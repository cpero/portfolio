import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
    ],
  },
  // Use default server output to enable API routes/SSR on Vercel
};

export default nextConfig;
