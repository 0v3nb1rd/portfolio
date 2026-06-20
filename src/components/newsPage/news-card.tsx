import Image from "next/image";

import { type NewsType } from "@/config/data";

import { ImgPlaceholderSVG } from "../icons";

type Props = {
  news: NewsType;
} & React.ComponentProps<"a">;

export function NewsCard({ news, ...props }: Props) {
  return (
    <li className="h-full">
      <a
        href={news.url}
        target="_blank"
        rel="noreferrer"
        className="bg-card/60 hover:bg-card flex h-full flex-col rounded-md border p-4 shadow backdrop-blur-md transition-all will-change-transform hover:-translate-y-1 hover:shadow-lg"
        {...props}
      >
        <div className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
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
        <h2 className="h4 font-balance mb-2">{news.title}</h2>
        <p className="text-muted-foreground mt-auto text-sm tracking-tight">
          {news.author && <>👤 {news.author} • </>}
          {news.publishedAt && (
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
          )}
          {news.score ? <> • ⬆ {news.score}</> : null}
        </p>
      </a>
    </li>
  );
}
