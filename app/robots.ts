import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // check if preview deployment (not production)
  const isVercelPreview = process.env.VERCEL_ENV !== "production";

  // if preview deployment - block indexing
  if (isVercelPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // for production domain - allow indexing
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
