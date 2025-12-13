import { Metadata } from "next";

import { PageMotion } from "@/components/page-motion";
import { ProjectList } from "@/components/projectPage";
import { ProjectSkeleton } from "@/components/projectPage/project-skeleton";
import { PROJECTS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Projects",
};

export const revalidate = 3600;

const ProjectsData = async () => {
  const projects = await client.fetch(PROJECTS_QUERY);
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
