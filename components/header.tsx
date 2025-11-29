"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Logo } from "./icons";
import { MLogo } from "./m-logo";
import { ModeToggle } from "./mode-toggle";
import { NavMenu } from "./nav-menu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="relative inline-block" aria-label={`Homepage - ${siteConfig.name}`} tabIndex={0}>
            <MLogo>
              <Logo />
            </MLogo>
          </Link>

          <NavMenu />

          <div className="flex items-center gap-4">
            <ModeToggle />

            <Button
              variant="ghost"
              size="lg"
              className="GlowOnHover group relative cursor-pointer font-mono text-lg hover:scale-102"
              asChild
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="./cv-nazar-kahylo.pdf"
                aria-label={`Contact ${siteConfig.name}`}
              >
                <span className="decoration-primary group-hover:decoration-2px flex items-center gap-2 font-bold underline decoration-dashed decoration-4 underline-offset-8 transition-all group-hover:decoration-transparent group-hover:underline-offset-2">
                  <span className="hidden md:inline">Show </span>
                  <i> CV</i>
                </span>
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
