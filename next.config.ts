import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  // Use default server output to enable API routes/SSR on Vercel
};

export default nextConfig;
