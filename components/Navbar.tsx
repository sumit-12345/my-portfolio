"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="#hero" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Sumit Kumar Joshi
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href.startsWith("/") ? link.href : `#${link.href}`}
                  className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
