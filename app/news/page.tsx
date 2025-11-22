import { Metadata } from "next";

import { NewsList } from "@/components/news/news-list";
import { getNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
};

export const revalidate = 600;

export default async function News() {
  const news = await getNews({ limit: 12, source: "all" });

  return (
    <main id="news" className="container mx-auto max-w-6xl">
      <section className="py-12">
        <NewsList news={news} />
      </section>
    </main>
  );
}
