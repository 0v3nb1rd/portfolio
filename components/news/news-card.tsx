import Image from "next/image";

import { type NewsType } from "@/config/data";

import { ImgPlaceholderSVG } from "../icons";

export function NewsCard({ news, ...props }: { news: NewsType } & React.ComponentProps<"a">) {
  return (
    <li className="bg-card/60 hover:bg-card rounded-md border p-4 shadow backdrop-blur-md transition-all will-change-transform hover:-translate-y-1 hover:shadow-lg">
      <a href={news.url} target="_blank" rel="noreferrer" className="flex h-full flex-col" {...props}>
        <div className="mb-2 text-xs tracking-wide uppercase opacity-70">
          {news.source === "devto" ? "Dev.to" : "Hacker News"}
        </div>
        <div className="relative mb-2 flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-md">
          {!news.image ? (
            <>
              <ImgPlaceholderSVG className="h-24 max-h-full max-w-full object-cover" />
              <span className="text-muted-foreground text-center font-bold">No image available</span>
            </>
          ) : (
            <Image
              src={news.image}
              alt={news.title}
              fill
              loading="lazy"
              unoptimized
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
        <h3 className="mb-2 leading-tight font-semibold tracking-tight">{news.title}</h3>
        <div className="mt-auto text-sm opacity-80">
          {news.author && <>👤 {news.author} • </>}
          {news.publishedAt && (
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
          )}
          {news.score ? <> • ⬆ {news.score}</> : null}
        </div>
      </a>
    </li>
  );
}
