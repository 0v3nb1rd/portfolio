"use client";

import { motion, Variants } from "motion/react";
import { ViewTransition } from "react";

import { type NewsType } from "@/config/data";

import { NewsCard } from "./news-card";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
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

export function NewsList({ news }: { news: NewsType[] }) {
  return (
    <ViewTransition name="page">
      <motion.ul
        className="grid grid-cols-1 gap-4 will-change-transform md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {news.map((n) => {
          return <NewsCard key={n.id} news={n} />;
        })}
      </motion.ul>
    </ViewTransition>
  );
}
