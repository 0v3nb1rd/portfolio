"use client";

import { ViewTransition, type ViewTransitionProps } from "react";

export default function ViewTransitionWrap({ children }: { children: React.ReactNode } & ViewTransitionProps) {
  return <ViewTransition name="layout">{children}</ViewTransition>;
}
