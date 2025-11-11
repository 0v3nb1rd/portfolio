import { HomeGrid } from "@/components/home-grid";

export default function Home() {
  return (
    <main id="home" className="container mx-auto max-w-6xl">
      <section className="flex min-h-[calc(100vh-6rem)] flex-col justify-center py-12">
        <HomeGrid />
      </section>
    </main>
  );
}
