import { Metadata } from "next";

import { ProjectList } from "@/components/projectPage";
import { PROJECTS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <main id="projects" className="container mx-auto max-w-6xl">
      <section className="py-12">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
