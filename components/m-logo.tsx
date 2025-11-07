"use client";

import { motion } from "motion/react";

export function MLogo({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
