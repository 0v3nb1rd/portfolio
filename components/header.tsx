"use client";

import { DownloadIcon } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { CVButton } from "./CVButton";
import { Logo } from "./icons";
import { MLogo } from "./m-logo";
import { ModeToggle } from "./mode-toggle";
import { NavMenu } from "./nav-menu";

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

            <CVButton>
              <span className="hidden tracking-wider md:inline">Resume </span>
              <DownloadIcon className="size-6" />
            </CVButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
