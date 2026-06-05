import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "PaperFlow | Selfpublishing-Kurs fuer Amazon KDP",
  description:
    "PaperFlow zeigt Anfaengern Schritt fuer Schritt, wie sie Selfpublishing-Buecher ueber Amazon KDP erstellen, veroeffentlichen, bewerben und erste Einnahmen erzielen."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
