"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/nav";

function MenuIcon({ open }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-foreground transition-colors hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary sm:h-10 sm:w-10">
            <img
              src="/logo.jpg"
              alt="Inblackm Termgame logo"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden text-base sm:inline">{siteConfig.name}</span>
          <span className="text-base sm:hidden">{siteConfig.shortName}</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="hidden rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark md:inline-flex"
            aria-label="เข้าสู่ระบบ"
          >
            เข้าสู่ระบบ
          </button>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-foreground transition-colors hover:bg-surface md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-3">
              <button
                type="button"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                เข้าสู่ระบบ
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
