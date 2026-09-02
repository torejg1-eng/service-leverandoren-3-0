import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.service-leverandøren.no"),
  title: {
    default: "Service Leverandøren AS | Eiendomsdrift og energioptimalisering",
    template: "%s | Service Leverandøren AS",
  },
  description:
    "Praktisk eiendomsdrift, energioptimalisering og prosjektgjennomføring for næringsbygg, sameier og eiere i Østfold.",
  keywords: [
    "eiendomsdrift Østfold",
    "energioptimalisering bygg",
    "teknisk drift",
    "byggservice",
    "vaktmestertjenester",
    "Service Leverandøren",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "/",
    siteName: "Service Leverandøren AS",
    title: "Service Leverandøren AS",
    description:
      "Praktisk eiendomsdrift, energioptimalisering og prosjektgjennomføring i Østfold.",
    images: [{ url: "/images/prosjekter/forside-prosjekt.webp", width: 1200, height: 630, alt: "Utført prosjekt fra Service Leverandøren AS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Leverandøren AS",
    description: "Eiendomsdrift, energioptimalisering og prosjektgjennomføring i Østfold.",
    images: ["/images/prosjekter/forside-prosjekt.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
