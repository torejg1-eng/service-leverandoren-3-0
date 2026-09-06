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
    "energioptimalisering næringsbygg",
    "energioptimalisering Østfold",
    "teknisk drift",
    "byggservice",
    "vaktmestertjenester",
    "Service Leverandøren",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Service Leverandøren AS",
    title: "Service Leverandøren AS",
    description:
      "Praktisk eiendomsdrift, energioptimalisering og prosjektgjennomføring i Østfold.",
    images: [{ url: "/images/prosjekter/forside-prosjekt.webp", width: 1536, height: 1024, alt: "Teknisk arbeidsskisse av næringsbygg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Leverandøren AS",
    description: "Eiendomsdrift, energioptimalisering og prosjektgjennomføring i Østfold.",
    images: ["/images/prosjekter/forside-prosjekt.webp"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.service-leverandøren.no/#virksomhet",
      name: "Service Leverandøren",
      legalName: "SERVICELEVERANDØREN AS",
      url: "https://www.service-leverandøren.no",
      email: "post@service-leverandøren.no",
      telephone: "+4746925236",
      taxID: "936026087",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Åsa-Tors vei 18A",
        postalCode: "1746",
        addressLocality: "Skjeberg",
        addressCountry: "NO",
      },
      areaServed: { "@type": "AdministrativeArea", name: "Østfold" },
      knowsAbout: [
        "Eiendomsdrift",
        "Energioptimalisering av næringsbygg",
        "Ventilasjon og VAV",
        "Vannbåren varme",
        "SD-anlegg og teknisk drift",
        "Teknisk tilsyn",
        "Prosjektgjennomføring",
        "Byggservice",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+4746925236",
        email: "post@service-leverandøren.no",
        contactType: "customer service",
        availableLanguage: ["Norwegian"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.service-leverandøren.no/#nettsted",
      url: "https://www.service-leverandøren.no",
      name: "Service Leverandøren",
      inLanguage: "nb-NO",
      publisher: { "@id": "https://www.service-leverandøren.no/#virksomhet" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
