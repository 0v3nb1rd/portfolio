"use client";

import { motion } from "motion/react";

import { siteConfig } from "@/config/site";

import { Button } from "./ui/button";

export const CVButton = ({ children }: React.PropsWithChildren) => {
  return (
    <Button
      variant="ghost"
      size="lg"
      className="GlowOnHover group relative cursor-pointer text-lg hover:scale-102"
      asChild
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="./cv-nazar-kahylo.pdf"
        aria-label={`Contact ${siteConfig.name}`}
      >
        <motion.span
          className="relative z-10 flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.95, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          <motion.span
            className="bg-primary absolute bottom-0 left-0 z-[-1] h-full w-full rounded-md"
            initial={{ filter: "blur(0px)", opacity: 0 }}
            animate={{ filter: "blur(24px)", opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.68, -0.55, 0.265, 1],
            }}
            whileHover={{
              filter: "blur(40px)",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          />
          {children}
        </motion.span>
      </a>
    </Button>
  );
};
