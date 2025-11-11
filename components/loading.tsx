import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type LoadingProps = {
  className?: string;
  fullScreen?: boolean;
};

const Spinner = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return <LoaderIcon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />;
};

export function Loading({ className, fullScreen = false }: LoadingProps) {
  if (fullScreen) {
    return (
      <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-12">
        <Spinner />
      </main>
    );
  }

  return (
    <div className={`flex items-center justify-center py-12 ${className || ""}`}>
      <Spinner />
    </div>
  );
}
