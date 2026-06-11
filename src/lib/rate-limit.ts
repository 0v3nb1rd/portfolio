// Simple in-memory sliding-window rate limiter. State is per server instance,
// so limits reset on redeploy/scale-out — good enough to stop naive form spam.
const hits = new Map<string, number[]>();

const MAX_TRACKED_KEYS = 1000;

export function rateLimit(key: string, { limit, windowMs }: { limit: number; windowMs: number }): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= limit) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Prevent unbounded growth from many unique keys
  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [k, ts] of hits) {
      if (ts.every((t) => t <= windowStart)) hits.delete(k);
    }
  }

  return true;
}
