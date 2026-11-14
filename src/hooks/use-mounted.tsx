"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Returns `false` during SSR and hydration, `true` once rendered on the client.
 * Components that mount later (client-side navigation) get `true` immediately,
 * so entrance animations play on navigation but never on the first paint.
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
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
};
