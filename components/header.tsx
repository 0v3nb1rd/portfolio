import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "./modeToggle";
import { NavMenu } from "./navMenu";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link href="/">
            <Image src="./next.svg" className="dark:invert" alt="Logo" width={100} height={100} />
          </Link>

          <NavMenu />

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
