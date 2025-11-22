"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const skeletonVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const NewsCardSkeleton = () => {
  return (
    <div className="bg-card/60 rounded-md border p-4 shadow backdrop-blur-md">
      <div className="bg-muted mb-2 h-3 w-20 animate-pulse rounded" />
      <div className="bg-muted relative mb-2 aspect-video w-full animate-pulse overflow-hidden rounded-md" />
      <div className="mb-2 space-y-2">
        <div className="bg-muted h-4 w-full animate-pulse rounded" />
        <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
      </div>
      <div className="mt-auto flex gap-2">
        <div className="bg-muted h-3 w-24 animate-pulse rounded" />
        <div className="bg-muted h-3 w-16 animate-pulse rounded" />
      </div>
    </div>
  );
};

export function NewsSkeleton({ count = 12 }: { count?: number }) {
  const [mounted] = useState(() => {
    if (typeof window !== "undefined") {
      return true;
    }
    return false;
  });

  return (
    <motion.ul
      key="news-skeleton"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial={mounted ? "hidden" : false}
      animate={mounted ? "visible" : false}
      suppressHydrationWarning
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.li
          key={index}
          variants={skeletonVariants}
          initial={mounted ? "initial" : false}
          animate={mounted ? "animate" : false}
        >
          <NewsCardSkeleton />
        </motion.li>
      ))}
    </motion.ul>
  );
}
