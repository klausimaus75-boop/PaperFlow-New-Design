import {
  BadgeEuro,
  BarChart3,
  BookOpen,
  Brush,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  Megaphone,
  Rocket,
  Target,
  UploadCloud
} from "lucide-react";

export const modules = [
  {
    number: 1,
    slug: "idee-marktrecherche",
    title: "Idee & Marktrecherche",
    lessons: 8,
    status: "Abgeschlossen",
    progress: 100,
    icon: Lightbulb,
    description:
      "Finde starke Buchideen, pruefe Nachfrage und erkenne profitable Nischen, bevor du Zeit in die Erstellung investierst.",
    benefits: ["Klare Themenfindung", "Bessere Entscheidungen durch Nachfrageanalyse", "Weniger Risiko vor dem Start"]
  },
  {
    number: 2,
    slug: "bucherstellung",
    title: "Bucherstellung",
    lessons: 10,
    status: "In Bearbeitung",
    progress: 75,
    icon: BookOpen,
    description:
      "Plane Struktur, Inhalt und Produktionsprozess so, dass aus deiner Idee ein verkaufsfaehiges Buch entsteht.",
    benefits: ["Schreib- und Produktionsplan", "Saubere Kapitelstruktur", "Praxisnaher Ablauf fuer Einsteiger"]
  },
  {
    number: 3,
    slug: "cover-design",
    title: "Cover & Design",
    lessons: 7,
    status: "In Bearbeitung",
    progress: 25,
    icon: Brush,
    description:
      "Lerne, wie Cover, Innenteil und visuelle Qualitaet Kaufinteresse wecken und Vertrauen schaffen.",
    benefits: ["Professioneller erster Eindruck", "Verstaendliche Designkriterien", "Bessere Chancen im Amazon-Regal"]
  },
  {
    number: 4,
    slug: "kdp-veroeffentlichung",
    title: "Amazon KDP Veroeffentlichung",
    lessons: 6,
    status: "Nicht gestartet",
    progress: 0,
    icon: UploadCloud,
    description:
      "Verstehe die wichtigsten Einstellungen in Amazon KDP und veroeffentliche dein Buch mit mehr Sicherheit.",
    benefits: ["KDP-Prozess Schritt fuer Schritt", "Wichtige Metadaten verstehen", "Souveraener Launch ohne Ratespiel"]
  },
  {
    number: 5,
    slug: "marketing-sichtbarkeit",
    title: "Marketing & Sichtbarkeit",
    lessons: 9,
    status: "Nicht gestartet",
    progress: 0,
    icon: Megaphone,
    description:
      "Baue Sichtbarkeit auf, positioniere dein Buch verstaendlich und lerne einfache Marketingmassnahmen kennen.",
    benefits: ["Mehr Reichweite fuer dein Buch", "Klare Positionierung", "Umsetzbare Marketingroutinen"]
  },
  {
    number: 6,
    slug: "werbung-schalten",
    title: "Werbung schalten",
    lessons: 6,
    status: "Nicht gestartet",
    progress: 0,
    icon: Target,
    description:
      "Starte erste Werbekampagnen, verstehe Grundbegriffe und bewerte Anzeigen ohne technische Ueberforderung.",
    benefits: ["Einsteigerfreundliche Kampagnenlogik", "Bessere Budgetkontrolle", "Messbare naechste Schritte"]
  },
  {
    number: 7,
    slug: "einnahmen-skalierung",
    title: "Erste Einnahmen & Skalierung",
    lessons: 7,
    status: "Nicht gestartet",
    progress: 0,
    icon: BarChart3,
    description:
      "Lerne, wie du Ergebnisse einordnest, dein Portfolio weiterentwickelst und aus ersten Erfolgen mehr machst.",
    benefits: ["Einnahmen realistisch auswerten", "Naechste Buchprojekte planen", "Skalierung mit Struktur"]
  }
];

export const courseBenefits = [
  { title: "Idee finden", icon: Lightbulb },
  { title: "Buch erstellen", icon: BookOpen },
  { title: "Cover & Design", icon: Brush },
  { title: "KDP veroeffentlichen", icon: UploadCloud },
  { title: "Marketing starten", icon: Megaphone },
  { title: "Einnahmen erzielen", icon: BadgeEuro }
];

export const pricingPlans = [
  {
    name: "Einzelmodul",
    price: "ab 49 EUR",
    features: ["Zugriff auf ein einzelnes Modul", "Praesentationen als Lernmaterial", "Lebenslanger Zugriff"],
    cta: "Modul kaufen"
  },
  {
    name: "Komplettkurs",
    price: "299 EUR",
    badge: "Beliebteste Wahl",
    featured: true,
    features: ["Alle 7 Module", "53 Lektionen", "Praesentationen inklusive", "Updates inklusive", "Lebenslanger Zugriff"],
    cta: "Komplettkurs sichern"
  },
  {
    name: "Premium-Paket",
    price: "399 EUR",
    features: ["Komplettkurs", "Bonusmaterial", "Checklisten", "Vorlagen", "Priorisierter Support"],
    cta: "Premium sichern"
  }
];

export const comparison = {
  before: ["Keine klare Buchidee", "Planloser Prozess", "Unsichere Veroeffentlichung", "Keine Verkaeufe", "Keine Struktur"],
  after: [
    "Klare Buchidee",
    "Strukturierter Prozess",
    "Veroeffentlichung auf Amazon KDP",
    "Sichtbarkeit durch Marketing",
    "Erste Einnahmen moeglich"
  ]
};

export const totalProgress = Math.round(
  modules.reduce((sum, module) => sum + module.progress, 0) / modules.length
);

export const CheckIcon = CheckCircle2;
export const SearchIcon = FileSearch;
export const RocketIcon = Rocket;
