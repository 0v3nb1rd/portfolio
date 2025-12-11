"use client";

import { motion, type Variants } from "motion/react";
import { ViewTransition } from "react";

import { useMounted } from "@/hooks/use-mounted";

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

export const ProjectMotion = ({ children }: React.PropsWithChildren) => {
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
        {children}
      </motion.div>
    </ViewTransition>
  );
};
