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
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-navy text-paper shadow-[0_14px_40px_rgba(0,0,0,0.2)]">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-xl font-black text-paper">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/60 bg-white/5 text-sm text-gold shadow-glow">PF</span>
          <span className="font-serif tracking-wide">PaperFlow</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-paper transition hover:text-gold">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/30 bg-white/5 text-paper lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gold/15 bg-navy lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-bold text-paper/80 hover:bg-white/10 hover:text-gold"
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
