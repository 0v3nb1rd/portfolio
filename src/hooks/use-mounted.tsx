"use client";

import { useState } from "react";

/**
 * Hook to check if component is mounted on the client side.
 * Useful for preventing hydration mismatches with animations and client-only features.
 *
 * @returns {boolean} - true if component is mounted on client, false otherwise
 *
 * @example
 * ```tsx
 * const mounted = useMounted();
 *
 * return (
 *   <motion.div
 *     initial={mounted ? "hidden" : false}
 *     animate={mounted ? "visible" : false}
 *   >
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export const useMounted = (): boolean => {
  const [mounted] = useState(() => {
    return typeof window !== "undefined";
  });

  return mounted;
};
