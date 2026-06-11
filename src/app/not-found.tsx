import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 py-12 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
