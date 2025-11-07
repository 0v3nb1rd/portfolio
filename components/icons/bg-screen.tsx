"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { SvgProps } from "@/types";

// Define rotation variants for different routes
const rotationVariants = Object.fromEntries(
  siteConfig.navItems.map((item, index) => [item.href, { rotate: index * 80 }])
);

export const BgScreenSVG = (props: SvgProps) => {
  const pathname = usePathname();
  const rotation = rotationVariants[pathname as keyof typeof rotationVariants] || { rotate: 0 };

  // Start with false to match server render (no hydration mismatch)
  const [isChrome, setIsChrome] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only check on client after mount
    const checkIsChrome = () => {
      if (typeof window === "undefined") return false;
      return navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    };
    setIsChrome(checkIsChrome());
    setMounted(true);
  }, []);

  // Don't render if not Chrome (after mount check)
  if (mounted && !isChrome) {
    return null;
  }

  // Don't render during SSR or before mount check
  if (!mounted) {
    return null;
  }

  // ! ToDo: Add som background if not chrome
  return (
    <motion.div
      initial={isChrome ? { rotate: rotation.rotate, opacity: 0 } : false}
      animate={isChrome ? rotation : { rotate: rotation.rotate }}
      whileInView={{
        rotate: rotation.rotate,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        type: "tween",
        duration: 2.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        overflow="visible"
        style={{
          filter: "blur(120px)",
        }}
        {...props}
      >
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
          <ellipse rx="150" ry="150" cx="646.3726053671605" cy="406.4476013183594" fill="hsl(37, 99%, 67%)"></ellipse>
          <ellipse rx="150" ry="150" cx="156.41806030273438" cy="406.9485804739041" fill="hsl(316, 73%, 52%)"></ellipse>
          <ellipse rx="150" ry="150" cx="408.2074903101942" cy="157.6591147627767" fill="hsl(185, 100%, 57%)"></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="408.4084089689129"
            cy="650.4699096679688"
            fill="hsla(131, 44%, 60%, 1.00)"
          ></ellipse>
        </g>
      </svg>
    </motion.div>
  );
};
