"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const CVButton = ({ children }: React.PropsWithChildren) => {
  return (
    <Button variant="ghost" size="lg" className="GlowOnHover group relative cursor-pointer text-lg" asChild>
      <a
        target="_blank"
        className="relative"
        rel="noopener noreferrer"
        href="./cv-nazar-kahylo.pdf"
        aria-label={`Contact ${siteConfig.name}`}
      >
        <motion.span
          className="from-primary to-primary/60 absolute inset-0 z-[-1] rounded-md bg-linear-to-r"
          initial={{ filter: "blur(0px)", opacity: 0 }}
          animate={{ filter: "blur(60px)", opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.68, -0.55, 0.265, 1],
          }}
          whileHover={{
            filter: "blur(120px)",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        />
        <motion.span
          className="relative z-10 flex items-center gap-2"
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          {children}
        </motion.span>
      </a>
    </Button>
  );
};
