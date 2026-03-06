import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/header";
import PremiumFooter from "@/components/layout/premium-footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — Salle de Réception Premium à Saint-Maximin`,
  description: SITE_DESCRIPTION,
  keywords: [
    "salle de mariage",
    "réception",
    "mariage haut de gamme",
    "Saint-Maximin",
    "Oise",
    "lieu de réception",
    "salle de réception premium",
    "mariage",
    "fiançailles",
    "événement privé",
  ],
  openGraph: {
    title: `${SITE_NAME} — Réceptions d'Exception`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory text-anthracite antialiased">
        <Header />
        {children}
        <PremiumFooter />
      </body>
    </html>
  );
}
