import Image from "next/image";

import { type ProjectType } from "@/config/data";

import { GithubSVG, LinkSVG } from "../icons";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <li className="group grid grid-cols-4 gap-5">
      <div className="relative z-0 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4">
        <div className="-bg-card postImage2D text-foreground relative flex h-full items-center justify-center gap-4 rounded-md border p-4 shadow">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-[top_center] opacity-80 transition-opacity group-hover:opacity-100"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dcey6ej58/image/upload/g_auto,q_auto,f_auto/thumbnail_gray.png"
          />
          <Image
            src={project.image}
            alt={project.title}
            width={24}
            height={15}
            className="absolute top-0 left-0 -z-10 h-full w-full object-[top_center] rounded object-cover opacity-40 blur-[38px] transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="text-foreground bg-card relative col-span-full flex h-auto flex-col rounded-md border p-4 shadow lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
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
    </li>
  );
}
