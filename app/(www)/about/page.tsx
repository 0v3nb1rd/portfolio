import { Metadata } from "next";

import { AboutPage } from "@/components/aboutPage/page";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main id="about" className="container mx-auto max-w-6xl">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col justify-center py-6 sm:py-12">
        <AboutPage />
      </section>
    </main>
  );
}
