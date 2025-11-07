import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function Blog() {
  return (
    <main id="news" className="container mx-auto max-w-6xl">
      <section className="py-12">
        <h1 className="h1">News</h1>
      </section>
    </main>
  );
}
