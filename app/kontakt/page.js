import { Mail, MessageSquare, Send } from "lucide-react";

export const metadata = {
  title: "Kontakt | PaperFlow"
};

export default function KontaktPage() {
  return (
    <section className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-success">Kontakt</p>
          <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Fragen zu PaperFlow?</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Schreib uns, wenn du wissen möchtest, welches Paket zu deinem Buchprojekt passt oder wie der Kurs aufgebaut ist.
          </p>
          <div className="mt-8 grid gap-4">
            <a href="mailto:hallo@paperflow.de" className="card flex items-center gap-4 p-5 hover:border-gold">
              <Mail className="text-success" size={24} />
              <span className="font-bold text-navy">hallo@paperflow.de</span>
            </a>
            <div className="card flex items-center gap-4 p-5">
              <MessageSquare className="text-success" size={24} />
              <span className="font-bold text-navy">Antwort in der Regel innerhalb von 24 Stunden</span>
            </div>
          </div>
        </div>
        <form className="card grid gap-5 p-7">
          <div>
            <label className="text-sm font-bold text-navy" htmlFor="name">Name</label>
            <input id="name" className="mt-2 w-full rounded-md border border-navy/15 px-4 py-3" placeholder="Dein Name" />
          </div>
          <div>
            <label className="text-sm font-bold text-navy" htmlFor="email">E-Mail</label>
            <input id="email" type="email" className="mt-2 w-full rounded-md border border-navy/15 px-4 py-3" placeholder="deine@email.de" />
          </div>
          <div>
            <label className="text-sm font-bold text-navy" htmlFor="message">Nachricht</label>
            <textarea id="message" rows="7" className="mt-2 w-full rounded-md border border-navy/15 px-4 py-3" placeholder="Wobei können wir helfen?" />
          </div>
          <button className="gold-button">
            Nachricht senden <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
