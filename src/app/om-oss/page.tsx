import type { Metadata } from "next";
import PageTemplate from "../components/PageTemplate";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Service Leverandøren AS kombinerer praktisk håndverk, teknisk byggkompetanse og tydelig prosjektoppfølging i Østfold.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOssPage() {
  return (
    <PageTemplate
      title="Praktisk kompetanse. Tydelig ansvar."
      subtitle="Service Leverandøren AS kombinerer håndverksbakgrunn, teknisk forståelse og operativ erfaring fra bygg. Målet er enkelt: tiltak som fungerer i praksis og blir fulgt ordentlig opp."
      buttonText="Ta en uforpliktende prat"
      buttonHref="/kontakt"
      bgImage="/images/omoss-arbeid.webp"
      services={[
        { title: "Praktisk erfaring", desc: "Bred erfaring fra bygg, tekniske anlegg og daglig drift gir realistiske anbefalinger og gjennomførbare løsninger." },
        { title: "Helhetlig oppfølging", desc: "Vi ser fagene i sammenheng og følger opp kartlegging, tiltak, utførelse og dokumentasjon." },
        { title: "Ryddig samarbeid", desc: "Tydelige avtaler, direkte kommunikasjon og ærlige prioriteringer gjennom hele oppdraget." },
      ]}
    />
  );
}
