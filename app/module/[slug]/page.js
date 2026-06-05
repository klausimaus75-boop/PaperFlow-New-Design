import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ListChecks, PlayCircle, ShoppingCart } from "lucide-react";
import { modules } from "@/lib/courseData";

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);
  if (!module) return {};

  return {
    title: `${module.title} | PaperFlow Modul ${module.number}`,
    description: module.description
  };
}

export default async function ModuleDetailPage({ params }) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);
  if (!module) notFound();
  const previewLessons = module.lessons.slice(0, 3);
  const lockedLessonCount = Math.max(module.lessonCount - previewLessons.length, 0);

  return (
    <section className="luxury-dark min-h-screen py-14 lg:py-20">
      <div className="luxury-band" aria-hidden="true" />
      <div className="silk-scarf silk-scarf-hero" aria-hidden="true" />
      <div className="silk-fold silk-fold-hero" aria-hidden="true" />
      <div className="gold-orbit gold-orbit-hero" aria-hidden="true" />
      <div className="dust dust-right" aria-hidden="true" />
      <div className="section-shell relative">
      <Link href="/#module" className="outline-button mb-8">
        <ArrowLeft size={18} /> Zurück zur Übersicht
      </Link>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-gold/20 px-3 py-2 text-sm font-black text-goldDark">
            Modul {module.number}
          </div>
          <h1 className="text-4xl font-black leading-tight text-paper sm:text-5xl">{module.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">{module.description}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="card p-5">
              <p className="text-sm font-bold uppercase text-ink/60">Lektionen</p>
              <p className="mt-2 text-3xl font-black text-navy">{module.lessonCount}</p>
            </div>
            <div className="card p-5">
              <p className="text-sm font-bold uppercase text-ink/60">Format</p>
              <p className="mt-2 text-3xl font-black text-navy">Modul</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="gold-button">
              Dieses Modul kaufen <ShoppingCart size={18} />
            </button>
            <Link href="/#module" className="outline-button">
              Zurück zur Übersicht
            </Link>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="bg-navy p-7 text-white">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Ergebnis</p>
                <h2 className="mt-2 text-2xl font-black">{module.title}</h2>
              </div>
              <module.icon className="text-gold" size={36} />
            </div>
            <div className="mt-8 rounded-lg border border-gold/20 bg-white/10 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy">
                <PlayCircle size={26} />
              </div>
              <p className="text-sm leading-7 text-white/80">{module.outcome}</p>
            </div>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3">
              <ListChecks className="text-success" size={22} />
              <h3 className="text-xl font-black text-navy">Einblick in die Lektionen</h3>
            </div>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {previewLessons.map((lesson, index) => (
                <li key={lesson} className="flex gap-3 rounded-md border border-gold/15 bg-white/70 p-3 text-sm leading-6 text-ink/75">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-black text-goldDark">
                    {index + 1}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
              <li className="flex gap-3 rounded-md border border-gold/25 bg-gold/10 p-3 text-sm leading-6 text-ink/75">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-black text-gold">
                  +
                </span>
                <span>
                  Weitere {lockedLessonCount} Lektionen, Vorlagen, Prompts und konkrete Schritt-für-Schritt-Anleitungen sind im Kurs enthalten.
                </span>
              </li>
            </ol>
            <div className="mt-7 rounded-lg border border-gold/20 bg-paper/70 p-5">
              <h3 className="text-lg font-black text-navy">Vorteile dieses Moduls</h3>
              <ul className="mt-4 grid gap-3">
                {module.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-ink/75">
                    <Check className="mt-0.5 shrink-0 text-success" size={18} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
