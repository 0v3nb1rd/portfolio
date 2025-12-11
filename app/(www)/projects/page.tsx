import { Metadata } from "next";
import { Suspense } from "react";

import { ProjectList } from "@/components/projectPage";
import { ProjectMotion } from "@/components/projectPage/project-motion";
import { ProjectSkeleton } from "@/components/projectPage/project-skeleton";
import { PROJECTS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsData = async () => {
  // TODO: Remove this Promise delay after testing
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const projects = await client.fetch(PROJECTS_QUERY);
  return <ProjectList projects={projects} />;
};

export default function Projects() {
  return (
    <main id="projects" className="container mx-auto max-w-6xl">
      <section className="py-6 sm:py-12">
        <div className="flex items-center justify-center">
          <ProjectMotion>
            <Suspense fallback={<ProjectSkeleton count={6} />}>
              <ProjectsData />
            </Suspense>
          </ProjectMotion>
        </div>
      </section>
    </main>
  );
}
