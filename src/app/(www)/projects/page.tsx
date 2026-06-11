import type { Metadata } from "next/types";

import { PageMotion } from "@/components/page-motion";
import { ProjectList } from "@/components/projectPage/project-list";
import { ProjectSkeleton } from "@/components/projectPage/project-skeleton";
import { PROJECTS_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Projects",
  alternates: {
    canonical: "/projects",
  },
};

const ProjectsData = async () => {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });
  return <ProjectList projects={projects} />;
};

export default function Projects() {
  return (
    <main id="projects" className="container mx-auto max-w-6xl">
      <section className="py-6 sm:py-12">
        <PageMotion fallback={<ProjectSkeleton count={6} />}>
          <ProjectsData />
        </PageMotion>
      </section>
    </main>
  );
}
