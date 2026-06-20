"use client";

import Link from "next/link";
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
                pathname === item.href && "bg-accent text-accent-foreground hover:bg-accent shadow-sm"
              )}
            >
              <Link target={item.target} href={item.href}>
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
