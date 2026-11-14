"use client";

import Link, { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

function PendingHint() {
  const { pending } = useLinkStatus();

  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-primary pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full opacity-0 transition-opacity duration-200",
        pending && "opacity-100 delay-150"
      )}
    />
  );
}

export function NavMenu({ ...props }: React.ComponentProps<typeof NavigationMenu>) {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={isMobile} {...props}>
      <NavigationMenuList className="border-border/60 bg-card/70 gap-1 rounded-xl border p-1 shadow-sm backdrop-blur-sm">
        {siteConfig.navItems.map((item) => (
          <NavigationMenuItem key={item.href} className="sm:px-0">
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "relative",
                pathname === item.href && "bg-accent text-accent-foreground hover:bg-accent shadow-sm"
              )}
            >
              <Link target={item.target} href={item.href}>
                {item.label}
                <PendingHint />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
