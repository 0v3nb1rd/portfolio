"use client";

import { motion } from "motion/react";
import { ViewTransition } from "react";

import { Project } from "@/types/sanity";

import { ProjectCard } from "./project-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ViewTransition name="page">
      <motion.ul
        className="flex flex-col gap-8 md:gap-18"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.ul>
    </ViewTransition>
  );
}
