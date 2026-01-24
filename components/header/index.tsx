"use client";

import { DownloadIcon } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { CVButton } from "./cv-button";
import { LogoMotion } from "./logo-motion";
import { ModeToggle } from "./mode-toggle";
import { NavMenu } from "./nav-menu";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex flex-wrap items-center justify-center gap-4 py-4 md:justify-between">
          <Link
            href="/"
            className="relative inline-block min-w-28 md:min-w-auto"
            aria-label={`Homepage - ${siteConfig.name}`}
            tabIndex={0}
          >
            <LogoMotion />
          </Link>

          <NavMenu className="order-1 mx-auto w-full md:order-0 md:w-auto lg:absolute lg:inset-x-0" />

          <div className="ml-auto flex items-center gap-4 md:w-auto">
            <ModeToggle />

            <CVButton>
              <span className="hidden tracking-wider sm:inline">Resume </span>
              <DownloadIcon className="size-6" />
            </CVButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
