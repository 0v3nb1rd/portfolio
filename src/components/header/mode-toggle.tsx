"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const noop = () => () => {};

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    noop,
    () => true,
    () => false
  );

  const handleToggle = () => {
    if (theme === "system" || !theme) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-lg" className="cursor-pointer" aria-label="Toggle theme">
        <Moon className="size-6" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "relative cursor-pointer overflow-hidden")}
      onClick={handleToggle}
      aria-label="Toggle theme"
      type="button"
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <motion.div
        className="relative size-6"
        key={isDark ? "dark" : "light"}
        initial={{
          scale: 0.8,
          rotate: isDark ? -180 : 180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Sun className="size-6" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
            rotate: isDark ? 0 : -90,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Moon className="size-6" />
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
