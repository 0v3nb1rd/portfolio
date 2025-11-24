"use client";

import { motion, type Variants } from "motion/react";
import { ViewTransition } from "react";

import { siteConfig } from "@/config/site";

import { GithubSVG, LetterSVG, LinkedInSVG } from "../icons";

import { ContactForm } from "./contact-form";

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

export const AboutPage = () => {
  return (
    <ViewTransition name="page">
      <motion.ul
        className="grid grid-cols-2 grid-rows-2 gap-5"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <li className="col-span-full lg:col-span-1 lg:row-span-2 lg:row-start-1">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-foreground bg-card hover:bg-accent relative flex h-full flex-col rounded-md border shadow transition-all motion-reduce:transition-none"
          >
            <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
              <div className="flex flex-col items-center gap-2">
                <GithubSVG className="mb-1" />
                <span className="text-3xl font-bold">Github Profile</span>
              </div>
              <p className="text-muted-foreground text-center text-xl">Find more of my repositories</p>
            </div>
          </a>
        </li>

        <li className="col-span-full lg:col-span-1 lg:row-span-1 lg:row-start-2">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card text-foreground hover:bg-accent relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all motion-reduce:transition-none"
          >
            <div className="flex h-full items-center justify-center gap-2 p-4">
              <div className="flex items-center gap-3">
                <LinkedInSVG />
                <span className="text-center text-xl font-bold">LinkedIn</span>
              </div>
            </div>
          </a>
        </li>

        <li className="col-span-full lg:col-span-1 lg:row-span-1">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="group bg-card text-foreground hover:bg-accent relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all motion-reduce:transition-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full items-center justify-center gap-2 p-4">
              <div className="flex items-center gap-3">
                <LetterSVG />
                <span className="text-center text-xl font-bold text-balance">{siteConfig.links.email}</span>
              </div>
            </div>
          </a>
        </li>

        <li id="contact" className="col-span-full h-full scroll-mt-24">
          <div className="bg-card flex h-full flex-col items-center justify-center gap-1 rounded-md border p-4 shadow">
            <h1 className="text-center text-3xl font-bold">
              Contact <span className="text-primary font-medium tracking-tight">with me</span>
            </h1>

            <p className="text-muted-foreground text-center text-xl">
              You can also get in touch with me through this form below.
            </p>

            <ContactForm />
          </div>
        </li>
      </motion.ul>
    </ViewTransition>
  );
};
