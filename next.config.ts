import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }, { hostname: "media2.dev.to" }],
  },
};

export default nextConfig;
