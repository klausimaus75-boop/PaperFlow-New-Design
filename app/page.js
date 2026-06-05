import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Layers3, Sparkles } from "lucide-react";
import ModuleSelector from "@/components/ModuleSelector";
import {
  CheckIcon,
  comparison,
  modules,
  pricingPlans,
  RocketIcon,
  SearchIcon,
  totalLessonCount,
  totalProgress
} from "@/lib/courseData";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ModulesSection />
      <ProgressSection />
      <PricingSection />
      <ComparisonSection />
    </>
  );
}

const moduleTeasers = [
  "Du bekommst ein Gefühl dafür, wie der PaperFlow-Bot Ideen, Coverimpulse und erste Buchseiten anstößt.",
  "Ein erster Blick darauf, wie aus vagen Gedanken tragfähige Buchideen werden.",
  "Du siehst, warum Zielgruppe und Buchversprechen später über Titel, Cover und Verkauf entscheiden.",
  "Ein kurzer Einblick, wie Markt, Bewertungen und Konkurrenz richtig gelesen werden.",
  "Du erfährst, welche Bausteine ein belastbares Buchkonzept braucht.",
  "Ein Vorgeschmack auf Prompt-Struktur, Rollen, Stil und klare Anweisungen.",
  "Du siehst, wie ein eigener Buchassistent grundsätzlich gedacht und vorbereitet wird.",
  "Ein Einblick in Motivplanung, Stilrichtung und druckbare Malbuchseiten.",
  "Du bekommst ein Gefühl für Figuren, Handlung und kindgerechte Seitenlogik.",
  "Ein kurzer Blick auf Aufgabenarten, Schwierigkeitsgrad und Lösungslogik.",
  "Du siehst, wie Story, Codes und Rätselketten sauber zusammenspielen.",
  "Ein Einblick in Kapitelstruktur, Beispiele, Übungen und hilfreiche Checklisten.",
  "Du erkennst, welche Coverfaktoren Käuferinteresse und Vertrauen beeinflussen.",
  "Ein Vorgeschmack auf konsistente Bildstile, Figuren und Serienwirkung.",
  "Du siehst, wie KI-Texte geführt, geprüft und menschlicher gemacht werden.",
  "Ein Einblick in Beschnitt, Raster, Schriften und druckfähige Canva-Layouts.",
  "Du bekommst einen Eindruck, welche Prüfungen vor Veröffentlichung wichtig sind.",
  "Ein kurzer Blick auf Upload, Buchdetails, Kategorien, Vorschau und Launch.",
  "Du siehst, welche Elemente eine Verkaufsseite auffindbar und überzeugend machen.",
  "Ein Einblick in Contentideen, Mockups, Hooks und Marketing ohne Geldverbrennung."
];

function HeroSection() {
  return (
    <section className="hero-luxury luxury-dark relative min-h-[calc(100vh-5rem)]">
      <div className="luxury-band" aria-hidden="true" />
      <div className="silk-scarf silk-scarf-hero" aria-hidden="true" />
      <div className="silk-fold silk-fold-hero" aria-hidden="true" />
      <div className="hero-side-decor" aria-hidden="true">
        <span className="hero-leaf hero-leaf-one" />
        <span className="hero-leaf hero-leaf-two" />
        <span className="hero-leaf hero-leaf-three" />
        <span className="hero-leaf hero-leaf-four" />
        <span className="hero-leaf hero-leaf-five" />
      </div>
      <div className="gold-orbit gold-orbit-hero" aria-hidden="true" />
      <div className="stage-glow stage-glow-hero" aria-hidden="true" />
      <div className="dust dust-right" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-12 py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
      <div className="pointer-events-none absolute left-0 top-16 hidden h-72 w-20 opacity-70 lg:block" aria-hidden="true">
        <div className="h-full w-px bg-gradient-to-b from-gold via-bloom to-transparent" />
        <div className="ml-3 mt-4 grid gap-3 text-gold/60">
          <span>*</span>
          <span>/</span>
          <span>*</span>
          <span>/</span>
        </div>
      </div>
      <div className="hero-copy botanical-line">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/45 bg-white/5 px-3 py-2 text-sm font-bold uppercase tracking-[0.28em] text-gold">
          <Sparkles size={16} className="text-goldDark" />
          Luxus Selfpublishing Academy
        </div>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-paper sm:text-5xl lg:text-7xl">
          Dein einfacher Weg zum Selfpublishing-Erfolg auf Amazon KDP
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Lerne Schritt für Schritt, wie du profitable Bücher erstellst, veröffentlichst und bewirbst, auch ohne Vorkenntnisse.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#preise" className="gold-button">
            Gesamten Kurs sichern <ArrowRight size={18} />
          </Link>
          <Link href="#module" className="outline-button">
            Module ansehen <Layers3 size={18} />
          </Link>
        </div>
        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
          {[
            [String(modules.length), "Module"],
            [String(totalLessonCount), "Lektionen"],
            ["100%", "Einsteigerfokus"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-gold/20 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-black text-paper">{value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gold/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="marble-plinth marble-plinth-hero" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-lg border border-gold/35 bg-paper p-3 shadow-soft">
          <div className="mb-3 flex items-center justify-between border-b border-gold/20 pb-3 text-[11px] font-black uppercase tracking-[0.28em] text-goldDark">
            <span>01 PaperFlow</span>
            <span>Masterclass</span>
          </div>
          <Image
            src="/hero-paperflow.png"
            alt="PaperFlow Kursvorschau mit Buch, Laptop und Erfolgsdiagramm"
            width={1200}
            height={850}
            priority
            className="h-auto w-full rounded-md"
          />
        </div>
      </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="ueberblick" className="marble-panel py-20">
      <div className="silk-scarf silk-scarf-soft" aria-hidden="true" />
      <div className="botanical-ornament botanical-right" aria-hidden="true" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-success">Modulfahrplan</p>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Alle 20 Kursmodule in der richtigen Reihenfolge</h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            PaperFlow führt dich Schritt für Schritt vom spielerischen Bot-Einstieg über Buchidee, Konzept, Prompts, Buchtypen, Cover, Layout und Qualitätsprüfung bis zur KDP-Veröffentlichung und Vermarktung.
          </p>
        </div>
        <ModuleSelector modules={modules.map(({ icon, benefits, ...module }) => module)} />
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="module" className="marble-panel py-20">
      <div className="botanical-ornament botanical-left" aria-hidden="true" />
      <div className="gold-orbit gold-orbit-small" aria-hidden="true" />
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-success">Module</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Ein kurzer Blick in die 20 Module</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-ink/70">
            Du siehst hier nur die Richtung jedes Moduls. Die vollständigen Lektionen, Vorlagen, Prompts und Schritt-für-Schritt-Anleitungen bekommst du im Kurs.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, index) => (
            <Link key={module.slug} href={`/module/${module.slug}`} className="card group flex min-h-64 flex-col p-6 transition hover:-translate-y-1 hover:border-gold">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-md bg-gold/20 px-3 py-2 text-xs font-black text-goldDark">
                  Modul {module.number}
                </span>
                <module.icon className="text-success" size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-navy">{module.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/70">{moduleTeasers[index]}</p>
              <div className="mt-5 flex items-center justify-between border-t border-gold/20 pt-4">
                <span className="text-sm font-bold text-ink/60">Kurs-Einblick</span>
                <span className="inline-flex items-center gap-1 text-sm font-black text-navy group-hover:text-goldDark">
                  Einblick ansehen <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressSection() {
  return (
    <section id="fortschritt" className="luxury-dark py-20 text-white">
      <div className="section-split" aria-hidden="true" />
      <div className="silk-scarf silk-scarf-left" aria-hidden="true" />
      <div className="dust dust-right" aria-hidden="true" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Dein Fortschritt</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Dein Weg durch alle 20 Module</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            Die Fortschrittskarten zeigen beispielhaft, wie ein Lernbereich mit allen 20 Modulen aussehen kann.
          </p>
          <div className="mt-8 inline-flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#c89b4f_0_5%,rgba(255,255,255,0.15)_5%_100%)] p-3">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-navy">
              <span className="text-5xl font-black text-gold">{totalProgress}%</span>
              <span className="mt-1 text-xs font-bold uppercase text-white/60">Gesamt</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/module/${module.slug}`}
              className="rounded-lg border border-gold/30 bg-white/10 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-gold hover:bg-white/15"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black">{module.title}</h3>
                <span className="text-sm font-black text-gold">{module.progress}%</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase text-white/80">{module.status}</p>
              <div className="mt-4 h-2 rounded-full bg-white/25">
                <div className="h-full rounded-full bg-success" style={{ width: `${module.progress}%` }} />
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-gold">
                Modul ansehen <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="preise" className="marble-panel py-20">
      <div className="botanical-ornament botanical-right" aria-hidden="true" />
      <div className="silk-scarf silk-scarf-soft" aria-hidden="true" />
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-success">Preise</p>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Wähle dein Paket</h2>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            Starte mit einem einzelnen Modul oder sichere dir den vollständigen PaperFlow-Fahrplan.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`card relative p-7 ${plan.featured ? "border-gold ring-2 ring-gold/30" : ""}`}>
              {plan.badge && <span className="absolute right-5 top-5 rounded-md bg-success px-3 py-2 text-xs font-black text-white">{plan.badge}</span>}
              <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
              <div className="mt-5 text-4xl font-black text-navy">{plan.price}</div>
              <ul className="mt-7 grid gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-ink/75">
                    <Check className="mt-0.5 shrink-0 text-success" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={plan.featured ? "gold-button mt-8 w-full" : "navy-button mt-8 w-full"}>{plan.cta}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section id="vergleich" className="luxury-dark py-20">
      <div className="section-split" aria-hidden="true" />
      <div className="silk-scarf silk-scarf-hero" aria-hidden="true" />
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-success">Vorher und Nachher</p>
          <h2 className="mt-3 text-3xl font-black text-paper sm:text-4xl">Aus Unsicherheit wird ein klarer Prozess</h2>
        </div>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <ComparisonCard title="Ohne Kurs" items={comparison.before} tone="before" />
          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-glow">
              <ArrowRight size={30} />
            </div>
          </div>
          <ComparisonCard title="Mit Kurs" items={comparison.after} tone="after" />
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, tone }) {
  const Icon = tone === "after" ? RocketIcon : SearchIcon;
  return (
    <article className="card p-7">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-md ${tone === "after" ? "bg-success text-white" : "bg-slate-100 text-ink/70"}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-black text-navy">{title}</h3>
      </div>
      <ul className="mt-7 grid gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink/75">
            <CheckIcon className={tone === "after" ? "mt-0.5 shrink-0 text-success" : "mt-0.5 shrink-0 text-slate-400"} size={18} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
