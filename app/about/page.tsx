import { Metadata } from "next";
import { ViewTransition } from "react";

import { ContactForm } from "@/components/contact-form";
import { GithubSVG, LetterSVG, LinkedInSVG } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main id="about" className="container mx-auto max-w-6xl">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col justify-center py-12">
        <ViewTransition name="page">
          <ul className="grid grid-cols-2 grid-rows-2 gap-5">
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
          </ul>
        </ViewTransition>
      </section>
    </main>
  );
}
