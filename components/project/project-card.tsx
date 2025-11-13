"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/sanity";

import { GithubSVG, LinkSVG, SiteSVG } from "../icons";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project?.image
    ? urlFor(project.image).width(920).quality(80).auto("format").url()
    : "https://placehold.co/550x310/png";

  const logoUrl = project?.logo
    ? urlFor(project.logo).height(60).width(60).quality(80).auto("format").url()
    : "https://placehold.co/60x60/png";

  return (
    <motion.li className="group grid grid-cols-4 gap-5" variants={cardVariants}>
      <div className="relative z-0 rounded-md border shadow lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4">
        <div className="-bg-card postImage2D relative flex size-full items-center justify-center gap-4">
          <Image
            src={imageUrl}
            alt={project.title || "Project image"}
            fill
            className="rounded-md object-cover object-[top_center] opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            // placeholder="blur"
            // blurDataURL=""
          />
          <Image
            src={imageUrl}
            alt={project.title || "Project image"}
            width={24}
            height={15}
            className="absolute top-0 left-0 -z-10 h-full w-full rounded object-cover object-[top_center] opacity-20 blur-[38px] transition-opacity group-hover:opacity-60"
          />
        </div>
      </div>

      <div className="text-foreground bg-card relative col-span-full flex h-auto flex-col gap-2 rounded-md border p-4 shadow lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]">
        <div className="mb-2 flex items-center gap-1">
          <span className="bg-accent mr-2 rounded-md p-2">
            {project.logo ? (
              <Image className="rounded" src={logoUrl} alt={project.title || "Project logo"} width={24} height={24} />
            ) : (
              <SiteSVG className="w-6" />
            )}
          </span>
          <h2 className="h2">{project.title}</h2>
        </div>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card text-foreground hover:bg-accent relative col-span-2 flex h-auto flex-col overflow-hidden rounded-md border p-4 shadow transition-colors motion-reduce:transition-none lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:max-h-24"
      >
        <div className="decoration-muted-foreground flex flex-1 flex-col items-center justify-center gap-4">
          <LinkSVG />
        </div>
      </a>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card group text-foreground hover:bg-accent relative col-span-2 flex h-auto overflow-hidden rounded-md border p-4 shadow transition-colors motion-reduce:transition-none lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:max-h-24"
      >
        <div className="decoration-muted-foreground flex flex-1 flex-col items-center justify-center gap-4">
          <GithubSVG />
        </div>
      </a>
    </motion.li>
  );
}
