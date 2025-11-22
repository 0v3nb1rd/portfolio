"use client";

import { motion, Variants } from "motion/react";
import { ViewTransition } from "react";

import { type NewsType } from "@/config/data";

import { NewsCard } from "./news-card";

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

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function NewsList({ news }: { news: NewsType[] }) {
  return (
    <ViewTransition name="page">
      <motion.ul
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {news.map((n) => {
          return (
            <motion.li
              key={n.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="bg-card/60 hover:bg-card rounded-md border p-4 shadow backdrop-blur-md transition-transform will-change-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <NewsCard news={n} />
            </motion.li>
          );
        })}
      </motion.ul>
    </ViewTransition>
  );
}
