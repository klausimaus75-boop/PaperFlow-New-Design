"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Ueberblick", href: "/#ueberblick" },
  { label: "Module", href: "/#module" },
  { label: "Fortschritt", href: "/#fortschritt" },
  { label: "Preise", href: "/#preise" },
  { label: "Vorher/Nachher", href: "/#vergleich" },
  { label: "Kontakt", href: "/kontakt" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-black text-navy">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-gold">PF</span>
          PaperFlow
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-navy">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy/15 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Navigation schliessen" : "Navigation oeffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-navy/10 bg-paper lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-white"
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
