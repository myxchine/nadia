"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  let background = "#1E3226";
  let text = "#fff";

  if (pathname === "/") {
    background = "#1E3226";
    text = "#fff";
  }

  return (
    <>
      <style jsx global>{`
        body {
          background-color: ${background};
        }
      `}</style>

      <header className="flex items-center justify-between p-4 text-center absolute top-0 left-0 right-0 z-10 p-8">
        <Logo fill={text} />
        <Nav className={`flex items-center gap-8 text-[${text}]`} />
      </header>
    </>
  );
}
