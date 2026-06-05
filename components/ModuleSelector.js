"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export default function ModuleSelector({ modules }) {
  const [selectedSlug, setSelectedSlug] = useState(modules[0]?.slug ?? "");
  const selectedModule = useMemo(
    () => modules.find((module) => module.slug === selectedSlug) ?? modules[0],
    [modules, selectedSlug]
  );

  if (!selectedModule) return null;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="card p-5">
        <label className="text-xs font-black uppercase tracking-[0.24em] text-goldDark" htmlFor="module-select">
          Modul auswählen
        </label>
        <select
          id="module-select"
          value={selectedSlug}
          onChange={(event) => setSelectedSlug(event.target.value)}
          className="mt-3 w-full rounded-md border border-gold/30 bg-white px-4 py-4 text-base font-black text-navy shadow-sm"
        >
          {modules.map((module) => (
            <option key={module.slug} value={module.slug}>
              {String(module.number).padStart(2, "0")} - {module.title}
            </option>
          ))}
        </select>
        <div className="mt-5 grid max-h-[22rem] gap-2 overflow-auto pr-1">
          {modules.map((module) => (
            <button
              key={module.slug}
              type="button"
              onClick={() => setSelectedSlug(module.slug)}
              className={`flex items-center justify-between rounded-md border px-3 py-3 text-left text-sm font-bold transition ${
                module.slug === selectedSlug
                  ? "border-gold bg-navy text-paper"
                  : "border-gold/15 bg-white/60 text-navy hover:border-gold"
              }`}
            >
              <span>{String(module.number).padStart(2, "0")} {module.title}</span>
              <span className="text-xs">{module.lessonCount}</span>
            </button>
          ))}
        </div>
      </div>

      <article className="card p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy text-sm font-black text-gold">
            {String(selectedModule.number).padStart(2, "0")}
          </span>
          <span className="rounded-md border border-gold/30 px-3 py-2 text-xs font-black uppercase tracking-widest text-goldDark">
            Modul
          </span>
        </div>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-goldDark">
          Modul {selectedModule.number} · {selectedModule.lessonCount} Lektionen
        </p>
        <h3 className="mt-2 text-3xl font-black text-navy">{selectedModule.title}</h3>
        <p className="mt-4 text-base leading-7 text-ink/70">{selectedModule.description}</p>
        <div className="mt-6 rounded-lg border border-gold/20 bg-white/60 p-5">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-goldDark">Ergebnis</p>
          <p className="mt-2 text-sm leading-6 text-ink/75">{selectedModule.outcome}</p>
        </div>
        <Link
          href={`/module/${selectedModule.slug}`}
          className="navy-button mt-6 w-full sm:w-auto"
        >
          Modul ansehen <ChevronRight size={18} />
        </Link>
      </article>
    </div>
  );
}
