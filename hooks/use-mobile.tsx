import * as React from "react";

type Props = {
  breakpoint?: number;
};

export function useIsMobile({ breakpoint = 768 }: Props = {}): boolean {
  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [breakpoint]
  );

  const getSnapshot = React.useCallback(() => {
    return window.innerWidth < breakpoint;
  }, [breakpoint]);

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}
