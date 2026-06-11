import { headers } from "next/headers";

/**
 * Get approximate geo location from Vercel's edge headers.
 * No third-party lookups — the visitor's IP never leaves our infrastructure.
 * Returns "Unknown" outside Vercel (e.g. local development).
 */
export async function getGeoLocation(): Promise<string> {
  try {
    const headersList = await headers();

    const country = headersList.get("x-vercel-ip-country");
    if (!country) {
      return "Unknown";
    }

    const city = headersList.get("x-vercel-ip-city");
    const region = headersList.get("x-vercel-ip-country-region");

    const parts = [city, region, country].filter(Boolean) as string[];
    return parts.map(decodeURIComponent).join(", ");
  } catch (error) {
    console.error("GeoLocation error:", error);
    return "Unknown";
  }
}
