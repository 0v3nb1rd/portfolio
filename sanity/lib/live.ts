// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";

import { client } from "./client";

// If you don't need draft content or live previewing, set tokens to false to silence warnings
// For production with draft previewing, provide SANITY_API_READ_TOKEN environment variable
const serverToken = process.env.SANITY_API_READ_TOKEN || false;
const browserToken = process.env.SANITY_API_READ_TOKEN || false;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken,
  browserToken,
});
