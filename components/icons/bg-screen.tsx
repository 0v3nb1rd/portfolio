"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// Define rotation variants for different routes
const rotationVariants = Object.fromEntries(
  siteConfig.navItems.map((item, index) => [item.href, { rotate: index * 90 }])
);

const circles = [
  {
    color: "hsl(37, 99%, 67%)",
    left: "85%",
    top: "50%",
    size: "30%",
  },
  {
    color: "hsl(316, 73%, 52%)",
    left: "15%",
    top: "50%",
    size: "30%",
  },
  {
    color: "hsl(185, 100%, 57%)",
    left: "50%",
    top: "16%",
    size: "30%",
  },
  {
    color: "hsla(131, 44%, 60%, 1.00)",
    left: "50%",
    top: "83%",
    size: "30%",
  },
];

interface BgScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

export const BgScreenSVG = ({ className, style }: BgScreenProps) => {
  const pathname = usePathname();
  const rotation = rotationVariants[pathname as keyof typeof rotationVariants] || { rotate: 0 };

  return (
    <motion.div
      initial={{ rotate: rotation.rotate, opacity: 0 }}
      animate={rotation}
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
      className={cn("container overflow-visible", className)}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        ...style,
      }}
    >
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.2 + 0.3,
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
          }}
          role="presentation"
          aria-hidden="true"
          className="absolute -translate-1/2 rounded-full blur-[160px] will-change-transform"
          style={{
            left: circle.left,
            top: circle.top,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
          }}
        />
      ))}
    </motion.div>
  );
};
