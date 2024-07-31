"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav(props: any) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`font-accent text-white ${
            pathname === item.href ? "underline" : ""
          } hover:underline`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
