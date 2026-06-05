import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "PaperFlow | Luxus Selfpublishing Akademie",
  description:
    "PaperFlow zeigt Anfängern Schritt für Schritt, wie sie Selfpublishing-Bücher über Amazon KDP erstellen, veröffentlichen, bewerben und erste Einnahmen erzielen."
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
