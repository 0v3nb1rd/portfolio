import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function Blog() {
  return (
    <main className="container mx-auto max-w-6xl">
      <section className="py-12">Blog posts will be here</section>
    </main>
  );
}
