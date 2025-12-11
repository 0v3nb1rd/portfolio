const ProjectSkeletonItem = () => {
  return (
    <li className="group grid grid-cols-4 grid-rows-1 gap-5">
      <div className="relative z-0 col-span-full rounded-md border shadow lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4">
        <div
          className="bg-muted relative flex size-full animate-pulse items-center justify-center rounded-md"
          style={{ minHeight: "320px" }}
        />
      </div>

      <div className="bg-card relative col-span-full flex h-auto flex-col gap-2 rounded-md border p-4 shadow lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:min-h-[240px]">
        <div className="mb-2 flex items-center gap-1">
          <div className="bg-muted mr-2 size-10 animate-pulse rounded-md" />
          <div className="bg-muted h-8 w-48 animate-pulse rounded" />
        </div>
        <div className="mb-2 space-y-2">
          <div className="bg-muted h-4 w-full animate-pulse rounded" />
          <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
        </div>
        <div className="mt-auto flex w-full flex-wrap gap-2">
          <div className="bg-muted h-6 w-16 animate-pulse rounded-full" />
          <div className="bg-muted h-6 w-20 animate-pulse rounded-full" />
          <div className="bg-muted h-6 w-14 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="bg-card relative col-span-2 flex h-auto flex-col overflow-hidden rounded-md border p-4 shadow lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:max-h-24">
        <div className="bg-muted flex flex-1 animate-pulse items-center justify-center rounded" />
      </div>

      <div className="bg-card relative col-span-2 flex h-auto min-h-24 overflow-hidden rounded-md border p-4 shadow lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:max-h-24">
        <div className="bg-muted flex flex-1 animate-pulse items-center justify-center rounded" />
      </div>
    </li>
  );
};

export const ProjectSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <ul className="flex w-full flex-col gap-8 md:gap-18">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectSkeletonItem key={i} />
      ))}
    </ul>
  );
};
