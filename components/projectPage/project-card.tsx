"use client";

import Image from "next/image";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/sanity";

import { GithubSVG, LinkSVG, SiteSVG } from "../icons";
import { Badge } from "../ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  const isMobile = useIsMobile({ breakpoint: 1024 });

  const imageBuilder = project?.image
    ? urlFor(project.image).width(1080).height(704).quality(92).fit("crop").auto("format")
    : null;

  const imageUrl = imageBuilder
    ? project.image?.hotspot
      ? imageBuilder.url()
      : imageBuilder.crop("top").url()
    : "https://placehold.co/550x310/png";

  const imageUrlBlur = project?.image
    ? urlFor(project.image).width(40).height(26).quality(20).fit("crop").crop("top").auto("format").url()
    : undefined;

  return (
    <li className="group grid grid-cols-4 grid-rows-1 gap-5">
      <div className="relative z-0 col-span-full rounded-md border shadow lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4">
        <div className="-bg-card postImage2D relative flex size-full items-center justify-center gap-4">
          <Image
            src={imageUrl}
            alt={project.title || "Project image"}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 540px"
            className="rounded-md object-contain object-[top_center] opacity-80 transition-opacity duration-200 group-hover:opacity-100 lg:object-cover"
            loading="lazy"
            quality={92}
            placeholder={imageUrlBlur ? "blur" : "empty"}
            blurDataURL={imageUrlBlur}
            {...(isMobile ? { width: 1080, height: 704 } : { fill: true })}
          />
          <Image
            src={imageUrlBlur || imageUrl}
            alt=""
            width={24}
            height={15}
            loading="lazy"
            className="absolute top-0 left-0 -z-10 h-full w-full rounded object-cover object-[top_center] opacity-20 blur-[38px] transition-opacity group-hover:opacity-60"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="text-foreground bg-card relative col-span-full flex h-auto flex-col gap-2 rounded-md border p-4 shadow lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[250px]">
        <div className="mb-2 flex items-center gap-1">
          <span className="bg-accent text-primary mr-2 flex size-10 items-center justify-center rounded-md p-2 text-lg font-bold">
            {project?.favicon ? (
              <Image
                src={urlFor(project.favicon).width(24).height(24).quality(92).auto("format").url()}
                alt={project.title || "Project logo"}
                width={24}
                height={24}
                loading="lazy"
                style={{ height: "24px", width: "auto" }}
                className="object-contain"
              />
            ) : (
              <SiteSVG className="w-6" />
            )}
          </span>
          <h2 className="h2">{project.title}</h2>
        </div>

        <div className="mb-2">
          <p className="text-muted-foreground text-lg tracking-tight opacity-80 transition-opacity group-hover:opacity-100">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex w-full flex-wrap gap-2">
          {project.stack?.map((tech) => (
            <Badge key={tech} className="bg-accent text-foreground tracking-wide uppercase">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={cn(
          "bg-card text-foreground hover:bg-accent relative col-span-2 flex h-auto flex-col overflow-hidden rounded-md border p-4 shadow transition-colors motion-reduce:transition-none lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:max-h-24"
        )}
      >
        <div className="decoration-muted-foreground flex flex-1 flex-col items-center justify-center gap-4">
          <LinkSVG className="h-12 w-12" />
        </div>
      </a>

      <a
        {...(project.github ? { href: project.github } : { disabled: true })}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={cn(
          "bg-card text-foreground relative col-span-2 flex h-auto overflow-hidden rounded-md border p-4 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:max-h-24",
          !project.github && "pointer-events-none opacity-40",
          project.github &&
            "hover:bg-accent group cursor-pointer shadow transition-colors motion-reduce:transition-none"
        )}
      >
        <div className="decoration-muted-foreground flex flex-1 flex-col items-center justify-center gap-4">
          <GithubSVG className="h-12 w-12 p-0.5" />
        </div>
      </a>
    </li>
  );
}
