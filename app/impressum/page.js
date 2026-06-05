export const metadata = {
  title: "Impressum | PaperFlow"
};

export default function ImpressumPage() {
  return (
    <section className="section-shell py-16">
      <div className="card max-w-4xl p-8">
        <h1 className="text-4xl font-black text-navy">Impressum</h1>
        <p className="mt-6 text-ink/75">Angaben gemäß § 5 TMG. Dies ist ein Platzhalter für die rechtlichen Angaben des Kursanbieters.</p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-ink/75">
          <p>
            PaperFlow Akademie<br />
            Musterstraße 12<br />
            10115 Berlin
          </p>
          <p>
            E-Mail: hallo@paperflow.de<br />
            Telefon: +49 30 000000
          </p>
          <p>Vertreten durch: Max Mustermann</p>
        </div>
        <h2 id="agb" className="mt-10 text-2xl font-black text-navy">AGB</h2>
        <p className="mt-3 text-sm leading-7 text-ink/75">Platzhalter für allgemeine Geschäftsbedingungen. Bitte vor Veröffentlichung rechtlich prüfen lassen.</p>
        <h2 id="widerruf" className="mt-10 text-2xl font-black text-navy">Widerruf</h2>
        <p className="mt-3 text-sm leading-7 text-ink/75">Platzhalter für Widerrufsinformationen und Verbraucherhinweise.</p>
      </div>
    </section>
  );
}
