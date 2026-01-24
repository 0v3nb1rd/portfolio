import type { MetadataRoute } from "next/types";

import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Check if it's a Vercel auto-generated domain (*.vercel.app)
  const isVercelAutoDomain = process.env.VERCEL_URL?.includes("vercel.app");

  // Block indexing for:
  // 1. Vercel auto-generated domains (*.vercel.app) - even if production
  // 2. Preview deployments
  // 3. Local development
  const shouldBlockIndexing =
    isVercelAutoDomain ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development" ||
    !process.env.VERCEL_ENV;

  if (shouldBlockIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // Only allow indexing for production on custom domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
