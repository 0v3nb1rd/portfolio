"use client";

import { motion, type Variants } from "motion/react";
import { Suspense, ViewTransition } from "react";

import { useMounted } from "@/hooks/use-mounted";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const PageMotion = ({ children, fallback = <div>Loading...</div> }: Props) => {
  const mounted = useMounted();

  return (
    <ViewTransition name="page">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial={mounted ? "hidden" : false}
        animate={mounted ? "visible" : false}
        suppressHydrationWarning
      >
        <Suspense fallback={fallback}>{children}</Suspense>
      </motion.div>
    </ViewTransition>
  );
};
