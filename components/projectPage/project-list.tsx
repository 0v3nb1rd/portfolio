"use client";

import { Project } from "@/types/sanity";

import { ProjectCard } from "./project-card";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="flex flex-col gap-8 md:gap-18">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </ul>
  );
}
