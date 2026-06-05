import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Layers3, PlayCircle, Sparkles } from "lucide-react";
import { CheckIcon, comparison, courseBenefits, modules, pricingPlans, RocketIcon, SearchIcon, totalProgress } from "@/lib/courseData";

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

function HeroSection() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-white/70 px-3 py-2 text-sm font-bold text-navy">
          <Sparkles size={16} className="text-goldDark" />
          Selfpublishing lernen. Strukturiert starten.
        </div>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
          Dein einfacher Weg zum Selfpublishing-Erfolg auf Amazon KDP
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
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
            ["7", "Module"],
            ["53", "Lektionen"],
            ["100%", "Einsteigerfokus"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-navy/10 bg-white/70 p-4">
              <div className="text-2xl font-black text-navy">{value}</div>
              <div className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-lg bg-gold/20 blur-3xl" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white shadow-soft">
          <Image
            src="/hero-paperflow.png"
            alt="PaperFlow Kursvorschau mit Buch, Laptop und Erfolgsdiagramm"
            width={1200}
            height={850}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="ueberblick" className="bg-white py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-success">Kurs-Überblick</p>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Worum geht es in diesem Kurs?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            PaperFlow begleitet dich von der Buchidee bis zur Veröffentlichung, Vermarktung und den ersten Einnahmen. Du lernst einen klaren Prozess, der Anfängern Orientierung gibt und jede Phase greifbar macht.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courseBenefits.map(({ title, icon: Icon }) => (
            <article key={title} className="card p-6 transition hover:-translate-y-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Ein klarer Lernschritt mit verständlichem Fokus, passenden Beispielen und direktem Nutzen für dein Buchprojekt.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="module" className="py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-success">Module</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Alle Module im Überblick</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">Jedes Modul kann separat gekauft werden. Der Komplettkurs verbindet alle Schritte zu einem durchgehenden Fahrplan.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link key={module.slug} href={`/module/${module.slug}`} className="card group flex min-h-64 flex-col p-6 transition hover:-translate-y-1 hover:border-gold">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-md bg-gold/20 px-3 py-2 text-xs font-black text-goldDark">Modul {module.number}</span>
                <module.icon className="text-success" size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-navy">{module.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{module.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
                <span className="text-sm font-bold text-slate-500">{module.lessons} Lektionen</span>
                <span className="inline-flex items-center gap-1 text-sm font-black text-navy group-hover:text-goldDark">
                  Details <ChevronRight size={16} />
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
    <section id="fortschritt" className="bg-navy py-20 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-gold">Dein Fortschritt</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Vom ersten Modul bis zum fertigen Buch</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">Die Fortschrittskarten zeigen beispielhaft, wie ein Lernbereich aussehen kann. Der Gesamtfortschritt fasst alle Module zusammen.</p>
          <div className="mt-8 inline-flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#f5bf2f_0_29%,rgba(255,255,255,0.15)_29%_100%)] p-3">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-navy">
              <span className="text-5xl font-black text-gold">{totalProgress}%</span>
              <span className="mt-1 text-xs font-bold uppercase text-white/60">Gesamt</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <article key={module.slug} className="rounded-lg border border-white/10 bg-white/8 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black">{module.title}</h3>
                <span className="text-sm font-black text-gold">{module.progress}%</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase text-white/55">{module.status}</p>
              <div className="mt-4 h-2 rounded-full bg-white/12">
                <div className="h-full rounded-full bg-success" style={{ width: `${module.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="preise" className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase text-success">Preise</p>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Wähle dein Paket</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">Starte mit einem einzelnen Modul oder sichere dir den vollständigen PaperFlow-Fahrplan.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`card relative p-7 ${plan.featured ? "border-gold ring-2 ring-gold/30" : ""}`}>
              {plan.badge && <span className="absolute right-5 top-5 rounded-md bg-success px-3 py-2 text-xs font-black text-white">{plan.badge}</span>}
              <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
              <div className="mt-5 text-4xl font-black text-navy">{plan.price}</div>
              <ul className="mt-7 grid gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-700">
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
    <section id="vergleich" className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase text-success">Vorher und Nachher</p>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Aus Unsicherheit wird ein klarer Prozess</h2>
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
        <div className={`flex h-12 w-12 items-center justify-center rounded-md ${tone === "after" ? "bg-success text-white" : "bg-slate-100 text-slate-600"}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-black text-navy">{title}</h3>
      </div>
      <ul className="mt-7 grid gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CheckIcon className={tone === "after" ? "mt-0.5 shrink-0 text-success" : "mt-0.5 shrink-0 text-slate-400"} size={18} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
