import Header from "@/components/header";
import { BgScreenSVG } from "@/components/icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}

      <div className="fixed top-1/2 left-1/2 z-[-1] size-full -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-60">
        <BgScreenSVG className="size-full" />
      </div>
    </>
  );
}
