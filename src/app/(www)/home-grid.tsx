import Image from "next/image";
import { ViewTransition } from "react";

import { ExperienceList } from "@/components/experience-list";
import { BgTTenSVG } from "@/components/icons/bg-tten";
import { SkillList } from "@/components/skill-list";
import { siteConfig } from "@/config/site";

export function HomeGrid() {
  return (
    <ViewTransition name="page">
      <ul className="grid grid-cols-4 gap-5 lg:grid-cols-3">
        <li className="bg-card height-auto animate-in fade-in zoom-in-80 fill-mode-backwards relative col-span-full overflow-hidden rounded-md border shadow delay-100 duration-500 motion-reduce:animate-none lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2">
          <div className="text-foreground relative flex h-full flex-col items-center justify-center p-4">
            <div className="mb-2 size-24 overflow-hidden rounded-full">
              <Image
                alt={`Photo of ${siteConfig.name}`}
                src="https://res.cloudinary.com/dcey6ej58/image/upload/w_400,h_400,c_fill,g_auto,q_auto,f_auto/v1778016866/2026-05-06_00.33.59_ftvtga.jpg"
                width={96}
                height={96}
                sizes="96px"
                priority
                className="size-full object-cover"
              />
            </div>

            <h1 className="h1">{siteConfig.name}</h1>
            <p className="text-muted-foreground text-center text-lg tracking-tight">
              Find more in my{" "}
              <a
                href="https://github.com/0v3nb1rd/"
                className="text-foreground decoration-primary hover:decoration-primary/70 focus-visible:ring-ring rounded-sm font-semibold underline decoration-2 underline-offset-2 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                repositories
              </a>
            </p>
          </div>
        </li>

        <li className="height-auto animate-in fade-in slide-in-from-left-[100px] fill-mode-backwards relative col-span-full flex flex-col overflow-hidden rounded-md border shadow delay-200 duration-300 motion-reduce:animate-none lg:col-span-2 lg:row-span-1 lg:row-start-1">
          <div className="bg-card text-foreground relative flex h-full flex-col justify-center gap-2 p-4">
            <h2 className="h2">Who am I?</h2>
            <i className="text-muted-foreground p-2 text-lg tracking-tight">{siteConfig.aboutText}</i>
          </div>
        </li>

        <li className="height-auto bg-accent animate-in fade-in slide-in-from-left-[100px] fill-mode-backwards relative col-span-full row-start-2 row-end-3 flex flex-col overflow-hidden rounded-md border shadow delay-[400ms] duration-300 motion-reduce:animate-none lg:col-span-1 lg:col-start-1 lg:row-start-2">
          <div className="text-foreground relative z-10 flex h-full items-center justify-center p-4">
            <h2 className="h2 text-center text-balance">
              <span>👨‍💻 Frontend </span>
              <i className="text-muted-foreground">Developer</i>
            </h2>
          </div>

          <div aria-hidden="true" className="text-primary pointer-events-none absolute inset-0 size-full opacity-15">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </li>

        <li className="height-auto bg-accent animate-in fade-in slide-in-from-right-[100px] fill-mode-backwards relative col-span-2 hidden flex-col overflow-hidden rounded-md border shadow delay-[400ms] duration-300 motion-reduce:animate-none lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:flex">
          <div className="text-foreground relative z-10 flex h-full items-center justify-center p-4">
            <h2 className="h2 text-center text-balance">
              <span>🚀 Make it </span>
              <i className="text-muted-foreground">happen.</i>
            </h2>
          </div>

          <div aria-hidden="true" className="text-primary pointer-events-none absolute inset-0 size-full opacity-15">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </li>

        <li className="height-auto animate-in fade-in slide-in-from-bottom-[100px] fill-mode-backwards relative col-span-full flex flex-col delay-[400ms] duration-300 motion-reduce:animate-none lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3">
          <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
            <div className="flex h-full flex-col gap-2">
              <h2 className="h2">Tech stack I work with:</h2>
              <SkillList />
            </div>
          </div>
        </li>

        <li className="animate-in fade-in slide-in-from-top-[100px] fill-mode-backwards relative hidden delay-300 duration-300 motion-reduce:animate-none lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:block">
          <div className="bg-card text-foreground relative h-full w-full overflow-hidden rounded-md border p-4 shadow">
            <Image
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 1px"
              src="https://res.cloudinary.com/dcey6ej58/image/upload/v1762178905/5-bg_rmuywa.jpg"
              alt="relaxing image"
            />
          </div>
        </li>

        <li className="height-auto bg-card animate-in fade-in slide-in-from-right-[100px] fill-mode-backwards relative col-span-full flex flex-col overflow-hidden rounded-md border shadow delay-300 duration-300 motion-reduce:animate-none lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4">
          <div className="text-foreground flex h-full items-center justify-center p-4">
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="h2">Experience</h2>
              <ExperienceList className="p-2" />
            </div>
          </div>

          <div className="text-accent absolute inset-y-0 -right-90 size-full rotate-45">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </li>
      </ul>
    </ViewTransition>
  );
}
