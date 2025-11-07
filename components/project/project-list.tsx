import { projects } from "@/config/data";

import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <ul className="flex flex-col gap-18">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}
