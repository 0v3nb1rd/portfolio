"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </MotionConfig>
  );
}
