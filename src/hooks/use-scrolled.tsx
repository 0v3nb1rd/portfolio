import * as React from "react";

type Props = {
  threshold?: number;
};

/**
 * Hook that tracks whether the page has been scrolled past a threshold.
 * SSR-safe: returns false on the server so consumers render their "at top"
 * state first, avoiding a hydration mismatch.
 *
 * @param threshold - scrollY (px) beyond which the hook returns true
 */
export function useScrolled({ threshold = 8 }: Props = {}): boolean {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    window.addEventListener("scroll", onStoreChange, { passive: true });
    return () => window.removeEventListener("scroll", onStoreChange);
  }, []);

  const getSnapshot = React.useCallback(() => {
    return window.scrollY > threshold;
  }, [threshold]);

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}
