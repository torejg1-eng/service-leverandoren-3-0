import type { Metadata } from "next";
import PageTemplate from "../components/PageTemplate";

export const metadata: Metadata = {
  title: "Nordic Smart nettbutikk",
  description: "Besøk Nordic Smart for Hydro Shield og utvalgte smarte produkter til båt og hjem.",
  alternates: { canonical: "/butikk" },
};

export default function NettbutikkPage() {
  return (
    <PageTemplate
      title="Nordic Smart"
      subtitle="Nettbutikken vår for nøye utvalgte produkter til båt og hjem. Hydro Shield er utviklet for bedre planing, stabilitet og beskyttelse rundt propellen."
      buttonText="Besøk Nordic Smart"
      buttonHref="https://nordicsmart.eu"
      bgImage="/rustfritt.webp"
      services={[
        { title: "Hydro Shield", desc: "Modeller tilpasset ulike båtstørrelser og motoroppsett, med veiledning før kjøp." },
        { title: "Personlig hjelp", desc: "Usikker på modell eller montering? Ta kontakt med opplysninger om båt og motor." },
        { title: "Nordisk nettbutikk", desc: "Egen nettbutikk med produktinformasjon, monteringsveiledning og sikker betaling." },
      ]}
    />
  );
}
