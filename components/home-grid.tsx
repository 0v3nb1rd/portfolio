"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ViewTransition } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

import { ExperienceList } from "./experience-list";
import { BgTTenSVG } from "./icons/bg-tten";
import { SkillList } from "./skill-list";

export function HomeGrid() {
  return (
    <ViewTransition name="page">
      <ul className="grid grid-cols-4 gap-5 lg:grid-cols-3">
        <motion.li
          className="bg-card height-auto relative col-span-full overflow-hidden rounded-md border shadow lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], scale: [0.9, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-foreground relative flex h-full flex-col items-center justify-center">
            <Avatar className="mb-2 size-24 text-2xl" role="img" aria-label={`Photo of ${siteConfig.name}`}>
              <AvatarImage
                alt={`Photo of ${siteConfig.name}`}
                src="https://res.cloudinary.com/dcey6ej58/image/upload/w_400,h_400,c_fill,g_auto,q_auto,f_auto/linkedin_1_gvhlsr.png"
              />
              <AvatarFallback>{siteConfig.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <h1 className="h1">{siteConfig.name}</h1>
            <p className="text-muted-foreground text-center text-lg">Find more in my repositories</p>
          </div>
        </motion.li>

        <motion.li
          className="height-auto relative col-span-full flex flex-col overflow-hidden rounded-md border shadow lg:col-span-2 lg:row-span-1 lg:row-start-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateX(-100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card text-foreground relative flex h-full flex-col justify-center gap-2 p-4">
            <h1 className="h1">Who am I?</h1>
            <i className="text-muted-foreground p-2 text-lg">{siteConfig.aboutText}</i>
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateY(100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="height-auto bg-accent relative col-span-full row-start-2 row-end-3 flex flex-col overflow-hidden rounded-md border shadow lg:col-span-1 lg:col-start-1 lg:row-start-2"
        >
          <div className="text-foreground relative z-10 flex h-full items-center justify-center p-4">
            <h1 className="h1 text-center text-balance">
              <span className="font-medium tracking-tight">👨‍💻 Frontend Developer</span>
            </h1>
          </div>

          <div className="text-primary absolute inset-0 size-full opacity-40">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateY(100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="height-auto bg-accent relative col-span-2 hidden flex-col overflow-hidden rounded-md border shadow lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:flex"
        >
          <div className="text-foreground relative z-10 flex h-full items-center justify-center p-4">
            <h2 className="h1 text-center text-balance">
              <span className="font-medium tracking-tight">🚀 Make it happen.</span>
            </h2>
          </div>

          <div className="text-primary absolute inset-0 size-full opacity-40">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateY(100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="height-auto relative col-span-full flex flex-col lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"
        >
          <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
            <div className="flex h-full flex-col gap-2">
              <h1 className="h1 tracking-tight">Tech stack I work with:</h1>
              <SkillList />
            </div>
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateY(-100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative hidden lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:block lg:h-[350px]"
        >
          <div className="bg-card text-foreground relative h-full w-full overflow-hidden rounded-md border shadow">
            <Image
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="https://res.cloudinary.com/dcey6ej58/image/upload/v1762178905/5-bg_rmuywa.jpg"
              alt="relaxing image"
            />
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.8, 1], transform: ["translateX(100px)", "none"] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="height-auto bg-card relative col-span-full flex flex-col overflow-hidden rounded-md border shadow lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4"
        >
          <div className="text-foreground flex h-full items-center justify-center p-4">
            <div className="flex flex-1 flex-col gap-2">
              <h1 className="h1">Experience</h1>
              <ExperienceList className="p-2" />
            </div>
          </div>

          <div className="text-accent absolute inset-y-0 -right-90 size-full rotate-45">
            <BgTTenSVG className="h-auto w-full" />
          </div>
        </motion.li>
      </ul>
    </ViewTransition>
  );
}
