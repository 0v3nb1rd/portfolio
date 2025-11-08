export type NewsItem = {
  id: string;
  title: string;
  url: string;
  source: "devto" | "hackernews";
  author?: string;
  publishedAt?: string;
  score?: number;
  tags?: string[];
  image?: string;
  description?: string;
};

const REVALIDATE_SECONDS = 600;

const getJSON = async (url: string) => {
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
};

async function fetchDevTo(limit: number, tag?: string): Promise<NewsItem[]> {
  const params = new URLSearchParams({ per_page: String(Math.min(limit, 50)) });
  if (tag) params.set("tag", tag);
  const data = await getJSON(`https://dev.to/api/articles?${params.toString()}`);
  return (data as any[]).map((p) => ({
    id: `devto_${p.id}`,
    title: p.title,
    url: p.url,
    source: "devto" as const,
    author: p.user?.name || p.user?.username,
    publishedAt: p.published_at,
    tags: p.tag_list || [],
    image: p.cover_image || p.social_image || undefined,
    description: p.description || undefined,
  }));
}

export async function enrichWithOG(url: string): Promise<{ image?: string; description?: string }> {
  const r = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&audio=false&video=false`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!r.ok) return {};
  const j = await r.json();
  return {
    image: j.data?.image?.url,
    description: j.data?.description,
  };
}

async function fetchHN(limit: number): Promise<NewsItem[]> {
  const ids: number[] = await getJSON("https://hacker-news.firebaseio.com/v0/topstories.json");
  const top = ids.slice(0, Math.min(limit, 50));
  const items = await Promise.all(top.map((id) => getJSON(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));

  const base: NewsItem[] = items.filter(Boolean).map((i: any) => ({
    id: `hn_${i.id}`,
    title: i.title,
    url: i.url ?? `https://news.ycombinator.com/item?id=${i.id}`,
    source: "hackernews" as const,
    author: i.by,
    publishedAt: i.time ? new Date(i.time * 1000).toISOString() : undefined,
    score: i.score,
  }));

  // Light OG-enrichment for the first N (to not exceed the limit)
  const ENRICH_N = Math.min(limit ?? 12, base.length);
  await Promise.all(
    base.slice(0, ENRICH_N).map(async (it) => {
      if (!it.url) return;
      const og = await enrichWithOG(it.url);
      it.image = it.image || og.image;
      it.description = it.description || og.description;
    })
  );

  return base;
}

export async function getNews({
  limit = 20,
  tag,
  source,
}: {
  limit?: number;
  tag?: string;
  source?: "devto" | "hackernews" | "all";
}) {
  const src = source ?? "all";
  const tasks: Promise<NewsItem[]>[] = [];
  if (src === "all" || src === "devto") tasks.push(fetchDevTo(limit, tag));
  if (src === "all" || src === "hackernews") tasks.push(fetchHN(limit));

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
