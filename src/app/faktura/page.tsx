import type { Metadata } from "next";
import PageTemplate from "../components/PageTemplate";

export const metadata: Metadata = {
  title: "Faktura og betaling",
  description: "Informasjon om faktura, EHF, betaling og økonomiske henvendelser til Service Leverandøren AS.",
  alternates: { canonical: "/faktura" },
};

export default function FakturaPage() {
  return (
    <PageTemplate
      title="Faktura og betaling"
      subtitle="Her finner du praktisk informasjon om faktura og betaling. Ta kontakt raskt dersom noe er uklart eller ikke stemmer."
      buttonText="Kontakt oss om faktura"
      buttonHref="/kontakt"
      services={[
        { title: "Betalingsinformasjon", desc: "Kontonummer, KID og betalingsfrist fremgår av fakturaen fra Service Leverandøren AS." },
        { title: "EHF og e-post", desc: "Vi støtter EHF og kan sende fakturakopi som PDF på forespørsel." },
        { title: "Spørsmål eller avvik", desc: "Kontakt oss dersom du oppdager en feil, trenger dokumentasjon eller ønsker kopi av en faktura." },
      ]}
    />
  );
}
