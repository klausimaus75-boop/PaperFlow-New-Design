import {
  BadgeEuro,
  BarChart3,
  BookOpen,
  Brush,
  CheckCircle2,
  FileSearch,
  Layers3,
  Lightbulb,
  Megaphone,
  PencilLine,
  Rocket,
  Search,
  Target,
  UploadCloud
} from "lucide-react";

const icons = [
  Lightbulb,
  Search,
  Target,
  BarChart3,
  Layers3,
  PencilLine,
  BookOpen,
  Brush,
  Megaphone,
  UploadCloud
];

export const modules = [
  {
    id: "module-01",
    number: 1,
    title: "Spaß mit dem Bot",
    slug: "spass-mit-dem-bot",
    lessonCount: 12,
    status: "Abgeschlossen",
    progress: 100,
    description: "Spielerischer Einstieg in PaperFlow: erste Ergebnisse erzeugen, Prompten verstehen und den Bot als kreativen Buchpartner erleben.",
    outcome: "Erstes Mini-Buchkonzept mit Coveridee, Beispielseite und Prompt-Grundverständnis.",
    lessons: ["Willkommen in PaperFlow", "Der Bot als Kreativpartner", "Der erste Spaß-Prompt", "Der erste Cover-Test", "Gute Qualität vs. schlechte Qualität", "Die erste Malvorlage", "Die erste Buchaufgabe", "Prompten ohne Fachchinesisch", "Wunsch vs. klare Anweisung", "Die erste Gegenprobe", "Mini-Projekt in 30 Minuten", "Modulabschluss"]
  },
  {
    id: "module-02",
    number: 2,
    title: "Buchideen finden",
    slug: "buchideen-finden",
    lessonCount: 11,
    status: "In Bearbeitung",
    progress: 75,
    description: "Von wilden Ideen zu brauchbaren Buchkonzepten, die Zielgruppe, Nutzen und Umsetzbarkeit berücksichtigen.",
    outcome: "Ein sortierter Ideenpool und eine starke Hauptidee für das Kursprojekt.",
    lessons: ["Warum nicht jede Idee ein gutes Buch ist", "Zielgruppe festlegen", "Buchtyp bestimmen", "Problem oder Bedürfnis erkennen", "Der Ideenfilter", "20 Ideen mit dem Bot generieren", "Ideen sortieren", "Ideen bewerten", "Serienfähigkeit prüfen", "3 starke Buchideen auswählen", "Die Gewinner-Idee"]
  },
  {
    id: "module-03",
    number: 3,
    title: "Zielgruppe und Buchversprechen",
    slug: "zielgruppe-buchversprechen",
    lessonCount: 11,
    status: "In Bearbeitung",
    progress: 25,
    description: "Klären, für wen das Buch ist, warum es gekauft wird und welches Versprechen es ehrlich einlösen kann.",
    outcome: "Zielgruppen-Steckbrief plus klares, ehrliches Buchversprechen.",
    lessons: ["Für wen ist das Buch wirklich?", "Alter und Lesefähigkeit verstehen", "Eltern als Käufer mitdenken", "Kindlicher Nutzen vs. Erwachsenen-Nutzen", "Emotionale Kaufgründe", "Pädagogischer Wert ohne Zeigefinger", "Unterhaltung und Nutzen verbinden", "Das Buchversprechen formulieren", "Grenzen und falsche Versprechen", "Zielgruppen-Steckbrief", "Modulabschluss"]
  },
  {
    id: "module-04",
    number: 4,
    title: "Markt und Konkurrenz analysieren",
    slug: "markt-konkurrenz-analyse",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Amazon, Bestseller, Bewertungen und Konkurrenz sinnvoll lesen, ohne andere Bücher zu kopieren.",
    outcome: "Einfache Marktanalyse mit Vergleichsbüchern, Chancen und Differenzierung.",
    lessons: ["Warum Recherche Pflicht ist", "Amazon-Suche richtig nutzen", "Bestsellerlisten lesen", "Cover vergleichen", "Titel vergleichen", "Bewertungen auswerten", "Was Kunden lieben", "Was Kunden kritisieren", "Lücken im Markt finden", "Nicht kopieren", "10 Vergleichsbücher analysieren", "Meine Marktchance"]
  },
  {
    id: "module-05",
    number: 5,
    title: "Buchkonzept entwickeln",
    slug: "buchkonzept-entwickeln",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Das Fundament für ein Buch: Format, Umfang, Struktur, Stil, Extras, Qualitätsregeln und roter Faden.",
    outcome: "Vollständiges Konzeptblatt für das eigene Buchprojekt.",
    lessons: ["Was ist ein Buchkonzept?", "Titel, Untertitel, Zielgruppe", "Buchformat wählen", "Seitenumfang planen", "Stil und Ton festlegen", "Wiederkehrende Elemente planen", "Kapitel oder Seitenstruktur", "Mitmachseiten und Extras", "Schwierigkeit oder Lesestufe", "Qualitätsregeln definieren", "Konzeptblatt erstellen", "Das fertige Buchkonzept"]
  },
  {
    id: "module-06",
    number: 6,
    title: "Prompten wie ein Profi",
    slug: "prompten-wie-ein-profi",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Prompts klar bauen: Rolle, Aufgabe, Stil, Format, Zielgruppe, Negativregeln, Prüfung und Verbesserung.",
    outcome: "Eigenes Promptset für Text, Cover, Bilder und Qualitätsprüfung.",
    lessons: ["Was ein Prompt wirklich ist", "Rollen-Prompt", "Aufgaben-Prompt", "Stil-Prompt", "Qualitäts-Prompt", "Negativ-Prompt", "Format-Prompt", "Zielgruppen-Prompt", "Prüf-Prompt", "Verbesserungs-Prompt", "Promptketten bauen", "Eigenes Promptset"]
  },
  {
    id: "module-07",
    number: 7,
    title: "Eigene GPTs für Bücher",
    slug: "eigene-gpts-fuer-buecher",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Einen eigenen Buchassistenten planen, der Stil, Zielgruppe, Prüfung und Projektlogik kennt.",
    outcome: "Bauplan für einen eigenen Buch-GPT innerhalb des PaperFlow-Prozesses.",
    lessons: ["Was ist ein eigener GPT?", "Wann lohnt sich ein GPT?", "Aufgaben des Buch-GPTs", "Wissensbasis vorbereiten", "Stilregeln hinterlegen", "Charakterregeln hinterlegen", "Qualitätsregeln hinterlegen", "GPT als Coverprüfer", "GPT als Lektor", "GPT als Buchplaner", "Testgespräche führen", "Mein Buch-GPT"]
  },
  {
    id: "module-08",
    number: 8,
    title: "Malbücher erstellen",
    slug: "malbuecher-erstellen",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Von Motividee zu druckbarer Malvorlage mit klaren Linien, passender Schwierigkeit und stimmiger Motivliste.",
    outcome: "Motivliste plus Prompts für ein erstes Malbuchprojekt.",
    lessons: ["Welche Malbucharten gibt es?", "Kinder-Malbuch vs. Erwachsenen-Malbuch", "Bold and Easy", "Semi-realistische Line-Art", "Grayscale und Hybrid-Grayscale", "Motive planen", "Motivliste erstellen", "Prompt für Malvorlagen", "Qualitätsprüfung der Linien", "Wiederholungen vermeiden", "Innenlayout planen", "10 Malvorlagen konzipieren"]
  },
  {
    id: "module-09",
    number: 9,
    title: "Kinderbücher entwickeln",
    slug: "kinderbuecher-entwickeln",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Figuren, kindliches Problem, Handlung, Humor, Seitenlogik und Bild-Text-Verhältnis planen.",
    outcome: "Fertiger Kinderbuchplot mit Figuren, Seitenlogik und Botschaft.",
    lessons: ["Was ein gutes Kinderbuch braucht", "Zielalter festlegen", "Hauptfigur entwickeln", "Kindliches Problem einbauen", "Humor und Herz", "Einfache Handlung planen", "Seitenstruktur", "Textmenge pro Seite", "Bild-Text-Verhältnis", "Wiederkehrende Figuren", "Happy End ohne Kitsch", "Kinderbuchplot erstellen"]
  },
  {
    id: "module-10",
    number: 10,
    title: "Rätsel und Mitmachbücher",
    slug: "raetsel-mitmachbuecher",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Logische Aufgaben bauen: Suchbilder, Labyrinthe, Fehlerbilder, Zuordnung, Lösungen und Altersniveau.",
    outcome: "Regelwerk und erste Rätselseiten inklusive Lösungen.",
    lessons: ["Was ist ein gutes Rätselbuch?", "Altersgerechte Schwierigkeit", "Rätseltypen", "Suchbilder", "Labyrinthe", "Fehlerbilder", "Zuordnungsaufgaben", "Logikrätsel", "Lösungsseiten planen", "Klare Aufgabenstellung", "Gegenprobe für Rätsel", "10 Rätselseiten bauen"]
  },
  {
    id: "module-11",
    number: 11,
    title: "Escape-Room-Bücher",
    slug: "escape-room-buecher",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Story, Codes, Seitenverweise, Hinweise, falsche Wege und Rätselketten logisch planen.",
    outcome: "Escape-Room-Konzept mit Rätselkette und Seitenführung.",
    lessons: ["Was ist ein Escape-Room-Buch?", "Story und Ziel", "Rätsel müssen logisch sein", "Seitenverweise planen", "Falsche Wege vermeiden", "Hinweise dosieren", "Lösungssysteme", "Codes und Symbole", "Rätselketten bauen", "Testlauf durchführen", "Fehlerprüfung", "Escape-Room-Kapitel planen"]
  },
  {
    id: "module-12",
    number: 12,
    title: "E-Books und Ratgeber",
    slug: "ebooks-und-ratgeber",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Wissen strukturieren, Kapitel aufbauen, Beispiele, Übungen, Checklisten und Verantwortung einbauen.",
    outcome: "Vollständige Gliederung für ein E-Book, Workbook oder Ratgeber.",
    lessons: ["E-Book vs. Printbuch", "Thema eingrenzen", "Leserproblem definieren", "Kapitelstruktur", "Einleitung schreiben", "Wissen verständlich erklären", "Beispiele einbauen", "Übungen und Reflexionsfragen", "Zusammenfassungen", "Checklisten", "Quellen und Verantwortung", "E-Book-Gliederung"]
  },
  {
    id: "module-13",
    number: 13,
    title: "Coverdesign verstehen",
    slug: "coverdesign-verstehen",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Coverwirkung, Lesbarkeit, Zielgruppe, USP, Mockups, KDP-Beschnitt und Qualitätsprüfung verstehen.",
    outcome: "Drei Coverkonzepte plus Cover-Prüfliste.",
    lessons: ["Warum Cover wichtig sind", "Zielgruppe auf dem Cover erkennen", "Titel lesbar machen", "Untertitel platzieren", "USP-Badge nutzen", "Schlechte Cover erkennen", "Gute Cover analysieren", "Cover-Prompt schreiben", "Mockups erstellen", "Cover-Gegenprobe", "KDP-Ränder und Beschnitt", "3 Covervarianten planen"]
  },
  {
    id: "module-14",
    number: 14,
    title: "Illustrationen und Bildstil",
    slug: "illustrationen-bildstil",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Konsistente Bilder statt Bilderlotterie: Stil, Farben, Figuren, Formate, Textflächen und Bildprüfung.",
    outcome: "Stil-Bibel für das eigene Buchprojekt.",
    lessons: ["Warum Bildstil wichtig ist", "Stilbeschreibung erstellen", "Charakterkonstanz", "Farbwelt festlegen", "Bildformat festlegen", "Szenen planen", "Textfläche im Bild", "Freisteller und transparente Bilder", "Fehler in KI-Bildern erkennen", "Bildqualität prüfen", "Serienlook erhalten", "Bildstil-Bibel erstellen"]
  },
  {
    id: "module-15",
    number: 15,
    title: "Schreiben mit KI",
    slug: "schreiben-mit-ki",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Texte erstellen, überarbeiten und so führen, dass sie nicht nach Maschinenbrei klingen.",
    outcome: "Überarbeitetes erstes Kapitel oder Beispieltext mit Prüf-Prompt.",
    lessons: ["Warum KI-Texte oft langweilig sind", "Tonalität festlegen", "Erzählerstimme", "Dialoge schreiben", "Szenisch schreiben", "Kindgerecht schreiben", "Absätze und Seitenlänge", "Überarbeiten statt übernehmen", "Wiederholungen entfernen", "Emotionen glaubwürdig schreiben", "Lektorats-Prompt", "Erstes Kapitel schreiben"]
  },
  {
    id: "module-16",
    number: 16,
    title: "Buchlayout mit Canva",
    slug: "buchlayout-mit-canva",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Dokumentformat, Beschnitt, Sicherheitsrand, Schriften, Seitenraster, Textfelder und PDF-Export.",
    outcome: "Erstes druckfähiges Innenlayout mit 10 Beispielseiten.",
    lessons: ["Canva-Grundlagen", "Dokumentformat einstellen", "Beschnitt und Sicherheitsrand", "Schriften auswählen", "Seitenraster", "Textfelder", "Bilder einsetzen", "Wiederkehrende Seiten", "Kapiteltrenner", "Export als PDF", "Druckprüfung", "10 Innenseiten layouten"]
  },
  {
    id: "module-17",
    number: 17,
    title: "Qualitätsprüfung und Gegenprobe",
    slug: "qualitaetspruefung-gegenprobe",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Inhalt, Logik, Zielgruppe, Rechtschreibung, Bilder, Cover, KDP und Plagiatsrisiko prüfen.",
    outcome: "Freigabe-Checkliste für jedes Buchprojekt.",
    lessons: ["Warum Prüfung wichtiger ist als Erstellung", "Inhaltliche Prüfung", "Logikprüfung", "Zielgruppenprüfung", "Rechtschreibung und Stil", "Bildprüfung", "Coverprüfung", "KDP-Druckprüfung", "Plagiatsrisiko verstehen", "Deep-Check mit Fragen", "Freigabe oder Überarbeitung", "Eigene Prüfliste bauen"]
  },
  {
    id: "module-18",
    number: 18,
    title: "KDP Veröffentlichung",
    slug: "kdp-veroeffentlichung",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Buchdetails, Autorname, Kategorien, Keywords, Manuskript, Cover, Vorschau, Preis und Launch vorbereiten.",
    outcome: "KDP-Veröffentlichungs-Checkliste für den Upload.",
    lessons: ["Was ist KDP?", "Konto und Grundlagen", "Buchdetails", "Titel und Untertitel", "Autorname und Pseudonym", "Kategorien", "Keywords", "Manuskript hochladen", "Cover hochladen", "Vorschau prüfen", "Preis festlegen", "Veröffentlichung vorbereiten"]
  },
  {
    id: "module-19",
    number: 19,
    title: "Keywords und Verkaufsseite",
    slug: "keywords-verkaufsseite",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Titel, Untertitel, Beschreibung, Bulletpoints, Suchbegriffe, Kategorien und A-Plus Content planen.",
    outcome: "Fertige Verkaufsseite mit Beschreibung, Keywords und Argumenten.",
    lessons: ["Warum die Verkaufsseite entscheidend ist", "Titel optimieren", "Untertitel optimieren", "Buchbeschreibung schreiben", "Bulletpoints", "Keywords recherchieren", "Suchbegriffe sinnvoll nutzen", "Kategorien verstehen", "A-Plus Content planen", "Verkaufsargumente formulieren", "Fehler vermeiden", "Verkaufsseite schreiben"]
  },
  {
    id: "module-20",
    number: 20,
    title: "Marketing ohne Geldverbrennung",
    slug: "marketing-ohne-geldverbrennung",
    lessonCount: 12,
    status: "Nicht gestartet",
    progress: 0,
    description: "Pinterest, TikTok, Instagram, Mockups, Hooks, Freebies, Contentplan und Ads mit System.",
    outcome: "Realistischer 30-Tage-Marketingplan für das eigene Buch.",
    lessons: ["Warum schöne Bücher allein nicht reichen", "Zielgruppe finden", "Pinterest für Bücher", "TikTok für Bücher", "Instagram für Bücher", "Mockups erstellen", "Hooks schreiben", "Contentplan bauen", "Freebie oder Leseprobe", "Newsletter oder Warteliste", "Ads nur mit System", "30-Tage-Marketingplan"]
  }
].map((module, index) => ({
  ...module,
  icon: icons[index % icons.length],
  benefits: [module.outcome, `${module.lessonCount} Unterlektionen`, "Direkt als Kursmodul nutzbar"]
}));

export const totalLessonCount = modules.reduce((sum, module) => sum + module.lessonCount, 0);

export const courseBenefits = [
  {
    title: "Bot spielerisch nutzen",
    description: "Starte ohne Technikdruck und erzeuge erste greifbare Ergebnisse mit dem PaperFlow-Bot.",
    icon: Lightbulb
  },
  {
    title: "Buchidee schärfen",
    description: "Finde Zielgruppe, Buchversprechen, Marktchance und ein belastbares Buchkonzept.",
    icon: Search
  },
  {
    title: "Prompts professionell bauen",
    description: "Lerne Rollen, Aufgaben, Stil, Formate, Prüfregeln und eigene GPTs sauber zu steuern.",
    icon: PencilLine
  },
  {
    title: "Buchtypen entwickeln",
    description: "Plane Malbücher, Kinderbücher, Rätselbücher, Escape-Room-Bücher, E-Books und Ratgeber.",
    icon: BookOpen
  },
  {
    title: "Qualität und Layout sichern",
    description: "Prüfe Cover, Illustrationen, Texte, Canva-Layout, Druckdaten und KDP-Vorbereitung.",
    icon: Brush
  },
  {
    title: "Veröffentlichen und vermarkten",
    description: "Optimiere KDP, Keywords, Verkaufsseite und Marketing ohne unnötige Geldverbrennung.",
    icon: Megaphone
  }
];

export const pricingPlans = [
  {
    name: "Einzelmodul",
    price: "ab 49 €",
    features: ["Zugriff auf ein einzelnes Modul", "Präsentationen als Lernmaterial", "Lebenslanger Zugriff"],
    cta: "Modul kaufen"
  },
  {
    name: "Komplettkurs",
    price: "299 €",
    badge: "Beliebteste Wahl",
    featured: true,
    features: ["Alle 20 Module", `${totalLessonCount} Lektionen`, "Präsentationen inklusive", "Updates inklusive", "Lebenslanger Zugriff"],
    cta: "Komplettkurs sichern"
  },
  {
    name: "Premium-Paket",
    price: "399 €",
    features: ["Komplettkurs", "Bonusmaterial", "Checklisten", "Vorlagen", "Priorisierter Support"],
    cta: "Premium sichern"
  }
];

export const comparison = {
  before: ["Keine klare Buchidee", "Planloser Prozess", "Unsichere Veröffentlichung", "Keine Verkäufe", "Keine Struktur"],
  after: [
    "Klare Buchidee",
    "Strukturierter Prozess",
    "Veröffentlichung auf Amazon KDP",
    "Sichtbarkeit durch Marketing",
    "Erste Einnahmen möglich"
  ]
};

export const totalProgress = Math.round(
  modules.reduce((sum, module) => sum + module.progress, 0) / modules.length
);

export const CheckIcon = CheckCircle2;
export const SearchIcon = FileSearch;
export const RocketIcon = Rocket;
export const MoneyIcon = BadgeEuro;
