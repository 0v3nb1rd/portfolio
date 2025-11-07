import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
