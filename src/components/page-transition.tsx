import { ViewTransition } from "react";

/**
 * Shared-element morph between pages: every page wraps its main content block in this,
 * so on navigation the old block morphs (size + position, cross-fade) into the new one.
 * Only one page is mounted at a time, so the shared `name` always pairs old ↔ new.
 *
 * `default="none"` keeps it silent for everything except the morph (Suspense reveals
 * inside are animated by `PageSuspense`). Place it around the content block itself, not
 * `<main>` — the block sizes differ between pages, which is what makes the morph visible.
 */
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransition name="page" share="auto" default="none">
      {children}
    </ViewTransition>
  );
};
