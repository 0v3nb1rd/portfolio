import { Suspense, ViewTransition } from "react";

import { PageTransition } from "@/components/page-transition";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

/**
 * Suspense boundary with a view-transition reveal: the skeleton fades out and the
 * loaded content fades in. Reveals run without transition types, so plain string
 * props are used here (see `PageTransition` for the route-level animation).
 */
export const PageSuspense = ({ children, fallback = <div>Loading...</div> }: Props) => {
  return (
    <PageTransition>
      <div className="w-full">
        <Suspense fallback={<ViewTransition exit="page-exit">{fallback}</ViewTransition>}>
          <ViewTransition enter="page-enter" default="none">
            {children}
          </ViewTransition>
        </Suspense>
      </div>
    </PageTransition>
  );
};
