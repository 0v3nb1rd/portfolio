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
                <span className="before:bg-primary before:cubic-bezier(0.68, -0.55, 0.265, 1) relative z-10 flex items-center gap-2 font-bold transition-all before:absolute before:bottom-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:rounded-md before:blur-xl before:transition-all before:delay-100 before:duration-300 before:content-[''] group-hover:before:blur-3xl">
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
