export const metadata = {
  title: "Datenschutz | PaperFlow"
};

export default function DatenschutzPage() {
  return (
    <section className="section-shell py-16">
      <div className="card max-w-4xl p-8">
        <h1 className="text-4xl font-black text-navy">Datenschutz</h1>
        <p className="mt-6 text-sm leading-7 text-ink/75">
          Diese Datenschutzerklärung ist ein Platzhalter. Sie beschreibt beispielhaft, wie personenbezogene Daten bei Kontaktaufnahme, Newsletter-Anmeldung und Kursanfragen verarbeitet werden könnten.
        </p>
        {["Verantwortlicher", "Kontaktformular", "Newsletter", "Speicherdauer", "Betroffenenrechte"].map((title) => (
          <section key={title} className="mt-8">
            <h2 className="text-2xl font-black text-navy">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">
              Bitte ersetzen Sie diesen Abschnitt durch eine rechtlich geprüfte Fassung, die zu den tatsächlich verwendeten Diensten, Formularen und Analysewerkzeugen passt.
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}
