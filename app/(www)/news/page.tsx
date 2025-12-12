import { Metadata } from "next";

import { NewsList } from "@/components/newsPage/news-list";
import { NewsSkeleton } from "@/components/newsPage/news-skeleton";
import { PageMotion } from "@/components/page-motion";
import { getNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
};

export const revalidate = 3600;

const NewsData = async () => {
  // TODO: Remove this Promise delay after testing
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const news = await getNews({ limit: 15, source: "devto" });
  return <NewsList news={news} />;
};

export default async function News() {
  return (
    <main id="news" className="container mx-auto max-w-6xl">
      <section className="py-6 sm:py-12">
        <PageMotion fallback={<NewsSkeleton count={15} />}>
          <NewsData />
        </PageMotion>
      </section>
    </main>
  );
}
