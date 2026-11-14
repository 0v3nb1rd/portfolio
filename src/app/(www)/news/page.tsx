import type { Metadata } from "next/types";

import { NewsList } from "@/components/newsPage/news-list";
import { NewsSkeleton } from "@/components/newsPage/news-skeleton";
import { PageSuspense } from "@/components/page-suspense";
import { getNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  alternates: {
    canonical: "/news",
  },
};

export const revalidate = 3600;

const NewsData = async () => {
  const news = await getNews({ limit: 15, source: "devto" });
  return <NewsList news={news} />;
};

export default async function News() {
  return (
    <main id="news" className="container mx-auto max-w-6xl">
      <section className="py-6 sm:py-12">
        <PageSuspense fallback={<NewsSkeleton count={15} />}>
          <NewsData />
        </PageSuspense>
      </section>
    </main>
  );
}
