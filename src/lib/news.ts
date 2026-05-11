import { type NewsType } from "@/config/data";

type DevToData = {
  id: string;
  title: string;
  url: string;
  user?: {
    name: string;
    username: string;
    github_username: string;
    profile_image: string;
    profile_image_90: string;
  };
  published_at: string;
  cover_image: string;
  social_image: string;
  description?: string;
  tag_list: string[];
  tags?: string;
  reading_time_minutes?: number;
};

type HackerNewsData = {
  id: number;
  title: string;
  url: string;
  by: string;
  time: number;
  score: number;
};

const REVALIDATE_SECONDS = 3600;
const HACKER_NEWS_API_URL = "https://hacker-news.firebaseio.com/v0/";
const DEV_TO_API_URL = "https://dev.to/api/";

const getJSON = async (url: string) => {
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } } as RequestInit);
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
};

async function fetchDevTo(limit: number, tag?: string): Promise<NewsType[]> {
  const params = new URLSearchParams({ per_page: String(Math.min(limit, 50)) });
  if (tag) params.set("tag", tag);
  const data = await getJSON(`${DEV_TO_API_URL}articles?${params.toString()}`);
  // console.log("Dev.to data: ", data);

  return (data as DevToData[]).map((p) => ({
    id: `devto_${p.id}`,
    title: p.title,
    url: p.url,
    source: "devto" as const,
    author: p.user?.name || p.user?.username,
    publishedAt: p.published_at,
    tags: p?.tag_list || p?.tags?.split(",") || [],
    image: p.cover_image || p.social_image || undefined,
    description: p.description || undefined,
  }));
}

export async function enrichWithOG(url: string): Promise<{ image?: string; description?: string }> {
  const r = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&audio=false&video=false`, {
    next: { revalidate: REVALIDATE_SECONDS },
  } as RequestInit);
  if (!r.ok) return {};
  const j = await r.json();
  return {
    image: j.data?.image?.url,
    description: j.data?.description,
  };
}

async function fetchHN(limit: number): Promise<NewsType[]> {
  const ids: number[] = await getJSON(`${HACKER_NEWS_API_URL}topstories.json`);
  const top = ids.slice(0, Math.min(limit, 50));
  const items = await Promise.all(top.map((id) => getJSON(`${HACKER_NEWS_API_URL}item/${id}.json`)));

  // console.log("Hacker News data: ", items);
  const base: NewsType[] = items.filter(Boolean).map((i: HackerNewsData) => {
    return {
      id: `hn_${i.id}`,
      title: i.title,
      url: i.url ?? `https://news.ycombinator.com/item?id=${i.id}`,
      source: "hackernews" as const,
      author: i.by,
      publishedAt: i.time ? new Date(i.time * 1000).toISOString() : undefined,
      score: i.score,
    };
  });

  // Limit the number of OG requests for faster loading
  const ENRICH_N = Math.min(3, base.length);
  await Promise.all(
    base.slice(0, ENRICH_N).map(async (it) => {
      if (!it.url) return;
      try {
        const og = await enrichWithOG(it.url);
        it.image = it.image || og.image;
        it.description = it.description || og.description;
      } catch (error) {
        console.error(`Failed to enrich ${it.url}:`, error);
      }
    })
  );

  return base;
}

export async function getNews({
  limit = 12,
  tag,
  source,
}: {
  limit?: number;
  tag?: string;
  source?: "devto" | "hackernews" | "all";
}) {
  const src = source ?? "all";
  const tasks: Promise<NewsType[]>[] = [];
  const limitPerSource = src === "all" ? Math.ceil(limit / 2) : limit;

  if (src === "all" || src === "devto") tasks.push(fetchDevTo(limitPerSource, tag));
  if (src === "all" || src === "hackernews") tasks.push(fetchHN(limitPerSource));

  const settled = await Promise.allSettled(tasks);
  const items = settled.flatMap((r) => (r.status === "fulfilled" ? r.value : []));

  // dedup + sort
  const map = new Map(items.map((i) => [i.id, i]));
  const merged = [...map.values()].sort((a, b) => {
    const ad = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const bd = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    if (bd !== ad) return bd - ad;
    return (b.score || 0) - (a.score || 0);
  });

  return merged.slice(0, limit);
}
