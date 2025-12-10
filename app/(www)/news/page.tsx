import { Metadata } from "next";

import { NewsList } from "@/components/newsPage/news-list";
import { getNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
};

export const revalidate = 3600;

export default async function News() {
  const news = await getNews({ limit: 15, source: "devto" });

  return (
    <main id="news" className="container mx-auto max-w-6xl">
      <section className="py-6 sm:py-12">
        <NewsList news={news} />
      </section>
    </main>
  );
}
