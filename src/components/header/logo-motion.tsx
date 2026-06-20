"use client";

import { motion } from "motion/react";

import { Logo } from "../icons";

export function LogoMotion() {
  return (
    <motion.div
      tabIndex={-1}
      aria-hidden="true"
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
      <Logo />
    </motion.div>
  );
}
