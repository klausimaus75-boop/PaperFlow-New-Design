import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, PlayCircle, ShoppingCart } from "lucide-react";
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

  return (
    <section className="section-shell py-14 lg:py-20">
      <Link href="/#module" className="outline-button mb-8">
        <ArrowLeft size={18} /> Zurück zur Übersicht
      </Link>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-gold/20 px-3 py-2 text-sm font-black text-goldDark">
            Modul {module.number}
          </div>
          <h1 className="text-4xl font-black leading-tight text-navy sm:text-5xl">{module.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/75">{module.description}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="card p-5">
              <p className="text-sm font-bold uppercase text-ink/55">Lektionen</p>
              <p className="mt-2 text-3xl font-black text-navy">{module.lessons}</p>
            </div>
            <div className="card p-5">
              <p className="text-sm font-bold uppercase text-ink/55">Format</p>
              <p className="mt-2 text-3xl font-black text-navy">Präsentation</p>
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
                <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Kursvorschau</p>
                <h2 className="mt-2 text-2xl font-black">{module.title}</h2>
              </div>
              <module.icon className="text-gold" size={36} />
            </div>
            <div className="mt-8 rounded-lg border border-gold/20 bg-white/10 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy">
                <PlayCircle size={26} />
              </div>
              <p className="text-sm leading-7 text-white/75">
                Vorschaukarte im Präsentationsstil: klare Lernziele, visuelle Folienstruktur und kompakte Umsetzungsimpulse statt vollständiger Lektionen.
              </p>
            </div>
          </div>
          <div className="p-7">
            <h3 className="text-xl font-black text-navy">Vorteile dieses Moduls</h3>
            <ul className="mt-5 grid gap-4">
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
    </section>
  );
}
