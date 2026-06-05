import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const nav = [
  { label: "Ueberblick", href: "/#ueberblick" },
  { label: "Module", href: "/#module" },
  { label: "Preise", href: "/#preise" },
  { label: "Kontakt", href: "/kontakt" }
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
        <div>
          <div className="mb-4 font-serif text-3xl font-black tracking-wide text-gold">PaperFlow</div>
          <p className="max-w-sm text-sm leading-7 text-white/72">
            Der deutsche Onlinekurs fuer Einsteiger, die Selfpublishing auf Amazon KDP strukturiert lernen und ihr erstes Buchprojekt starten wollen.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Navigation</h2>
          <div className="mt-4 grid gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/72 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Rechtliches</h2>
          <div className="mt-4 grid gap-3">
            <Link href="/impressum" className="text-sm text-white/72 hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="text-sm text-white/72 hover:text-white">Datenschutz</Link>
            <Link href="/impressum#agb" className="text-sm text-white/72 hover:text-white">AGB</Link>
            <Link href="/impressum#widerruf" className="text-sm text-white/72 hover:text-white">Widerruf</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Kontakt</h2>
          <a href="mailto:hallo@paperflow.de" className="mt-4 flex items-center gap-2 text-sm text-white/72 hover:text-white">
            <Mail size={16} /> hallo@paperflow.de
          </a>
          <form className="mt-5 flex gap-2">
            <input aria-label="Newsletter E-Mail" placeholder="E-Mail" className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/10 px-3 py-3 text-sm text-white placeholder:text-white/50" />
            <button className="rounded-md bg-gold px-4 py-3 text-sm font-bold text-navy hover:bg-goldDark hover:text-white">Anmelden</button>
          </form>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social Link" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white/75 hover:bg-gold hover:text-navy">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© 2026 PaperFlow. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
