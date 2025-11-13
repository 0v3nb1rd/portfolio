import { Metadata } from "next";
import { defineQuery } from "next-sanity";

import { ProjectList } from "@/components/project";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Projects",
};

const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(date desc)`);

export default async function Projects() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <main id="projects" className="container mx-auto max-w-6xl">
      <section className="py-12">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
