"use client";

import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return <LoaderIcon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />;
}

export default function Loading() {
  return (
    <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-12">
      <Spinner />
    </main>
  );
}
