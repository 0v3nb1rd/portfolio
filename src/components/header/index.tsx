"use client";

import { DownloadIcon } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

import { CVButton } from "./cv-button";
import { LogoMotion } from "./logo-motion";
import { ModeToggle } from "./mode-toggle";
import { NavMenu } from "./nav-menu";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border/40 bg-background/70 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      <div className="container">
        <nav className="flex flex-wrap items-center justify-center gap-4 py-3 md:justify-between">
          <Link
            href="/"
            className="relative inline-block min-w-28 md:min-w-auto"
            aria-label={`Homepage - ${siteConfig.name}`}
            tabIndex={0}
          >
            <LogoMotion />
          </Link>

          <NavMenu className="order-1 mx-auto w-full md:order-0 md:w-auto lg:absolute lg:inset-x-0" />

          <div className="flex items-center gap-4 sm:ml-auto md:w-auto">
            <ModeToggle />

            <CVButton>
              <span className="text-foreground hidden font-semibold tracking-wider sm:inline">Resume </span>
              <DownloadIcon className="size-6" />
            </CVButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
