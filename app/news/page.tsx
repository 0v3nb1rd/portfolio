import { Metadata } from "next";
import Image from "next/image";
import { ViewTransition } from "react";

import { ImgPlaceholderSVG } from "@/components/icons";
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
        <ViewTransition name="page">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => {
              return (
                <li
                  key={n.id}
                  className="bg-card/60 hover:bg-card rounded-md border p-4 shadow backdrop-blur-md transition-all will-change-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <a href={n.url} target="_blank" rel="noreferrer" className="flex h-full flex-col">
                    <div className="mb-2 text-xs tracking-wide uppercase opacity-70">
                      {n.source === "devto" ? "Dev.to" : "Hacker News"}
                    </div>
                    <div className="relative mb-2 flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-md">
                      {!n.image ? (
                        <>
                          <ImgPlaceholderSVG className="h-24 max-h-full max-w-full object-cover" />
                          <span className="text-muted-foreground text-center font-bold">No image available</span>
                        </>
                      ) : (
                        <Image
                          src={n.image}
                          alt={n.title}
                          fill
                          loading="lazy"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <h3 className="mb-2 leading-tight font-semibold tracking-tight">{n.title}</h3>
                    <div className="mt-auto text-sm opacity-80">
                      {n.author && <>👤 {n.author} • </>}
                      {n.publishedAt && (
                        <time dateTime={n.publishedAt}>{new Date(n.publishedAt).toLocaleString()}</time>
                      )}
                      {n.score ? <> • ⬆ {n.score}</> : null}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </ViewTransition>
      </section>
    </main>
  );
}
