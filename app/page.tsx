import { HomeGrid } from "@/components/home-grid";

export default function Home() {
  return (
    <main className="relative">
      <div className="container mx-auto max-w-6xl">
        <section className="flex min-h-[calc(100vh-6rem)] flex-col justify-center py-12">
          <HomeGrid />
        </section>
      </div>

      <svg
        className="absolute bottom-0 left-0 z-[-1] opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="60"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="148" ry="150" cx="252.25158132446484" cy="195.63674936471915" fill="hsl(37, 99%, 67%)"></ellipse>
          <ellipse rx="148" ry="150" cx="183.03363740132113" cy="638.9499479763169" fill="hsl(316, 73%, 52%)"></ellipse>
          <ellipse rx="148" ry="150" cx="606.2899067664023" cy="443.8337915230796" fill="hsl(185, 100%, 57%)"></ellipse>
        </g>
      </svg>
    </main>
  );
}
