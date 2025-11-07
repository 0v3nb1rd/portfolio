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
              variant="outline"
              size="lg"
              className="GlowOnHover relative cursor-pointer text-lg hover:scale-102"
              asChild
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="./cv-nazar-kahylo.pdf"
                aria-label={`Contact ${siteConfig.name}`}
              >
                <span className="font-bold">
                  Show <i>CV</i>
                </span>
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
