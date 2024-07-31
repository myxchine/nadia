"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  let background = "#1E3226";
  let text = "#fff";

  if (pathname === "/") {
    background = "#1E3226";
    text = "#fff";
  }

  if (pathname === "/about") {
    background = "#1E3226";
    text = "#000";
  }

  return (
    <>
      <style jsx global>{`
        body {
          background-color: ${background};
        }
      `}</style>

      <header className="flex items-center justify-between p-4 text-center absolute top-0 left-0 right-0 z-10 md:p-8 max-w-[1700px] mx-auto">
        <Link href="/" className="w-fit">
          <Logo fill={text} />
        </Link>
        <Nav
          className={`flex items-center gap-8 text-[${text}] hidden md:flex`}
        />
      </header>
    </>
  );
}
