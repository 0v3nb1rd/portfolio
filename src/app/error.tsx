"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 py-12 text-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground">An unexpected error occurred. Please try again.</p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
