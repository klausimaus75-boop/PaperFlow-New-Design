"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Überblick", href: "/#ueberblick" },
  { label: "Module", href: "/#module" },
  { label: "Fortschritt", href: "/#fortschritt" },
  { label: "Preise", href: "/#preise" },
  { label: "Vorher/Nachher", href: "/#vergleich" },
  { label: "Kontakt", href: "/kontakt" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-paper/90 backdrop-blur-xl">
      <div className="hidden border-b border-gold/20 bg-navy py-2 text-center text-[11px] font-bold uppercase tracking-[0.35em] text-gold sm:block">
        01 Luxury Bloom - PaperFlow Design
      </div>
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-xl font-black text-navy">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/50 bg-navy text-gold">PF</span>
          <span className="font-serif tracking-wide">PaperFlow</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink/75 transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/#preise" className="gold-button">
            Jetzt starten
          </Link>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/35 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gold/20 bg-paper lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-bold text-ink/75 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#preise" className="gold-button mt-2" onClick={() => setOpen(false)}>
              Jetzt starten
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
