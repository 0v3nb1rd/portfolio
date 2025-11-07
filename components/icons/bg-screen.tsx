"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { SvgProps } from "@/types";

// Define rotation variants for different routes
const rotationVariants = Object.fromEntries(
  siteConfig.navItems.map((item, index) => [item.href, { rotate: index * 80 }])
);

export const BgScreenSVG = (props: SvgProps) => {
  const pathname = usePathname();
  const rotation = rotationVariants[pathname as keyof typeof rotationVariants] || { rotate: 0 };

  return (
    <motion.div
      initial={false}
      animate={rotation}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      style={{ willChange: "transform" }}
    >
      {/* allow overflow-visible */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" overflow="visible" {...props}>
        <defs>
          <filter
            id="bbblurry-filter"
            x="-200"
            y="-200"
            width="1200"
            height="1200"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="60" result="blur" />
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="148" ry="150" cx="252.25" cy="195.63" fill="hsl(37, 99%, 67%)" />
          <ellipse rx="148" ry="150" cx="183.03" cy="638.94" fill="hsl(316, 73%, 52%)" />
          <ellipse rx="148" ry="150" cx="606.28" cy="443.83" fill="hsl(185, 100%, 57%)" />
        </g>
      </svg>
    </motion.div>
  );
};
