"use client";

import { type NewsType } from "@/config/data";

import { NewsCard } from "./news-card";

export function NewsList({ news }: { news: NewsType[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item.id} news={item as NewsType} />
      ))}
    </ul>
  );
}
