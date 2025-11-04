import { Metadata } from "next";

import { ProjectList } from "@/components/project";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <main className="container mx-auto max-w-6xl">
      <section className="py-12">
        <ProjectList />
      </section>
    </main>
  );
}
