import PageTemplate from "../components/PageTemplate";

export default function NettbutikkPage() {
  return (
    <PageTemplate
      title="Nordic Smart"
      subtitle="Fremtidens løsninger innen AI, smarthus og energieffektivitet."
      buttonText="Utforsk produkter"
      buttonHref="https://nordicsmart.eu"
      bgImage="/images/nordicsmart.webp"
      services={[
        {
          title: "AI-optimalisering",
          desc: "Bli synlig i AI-søk og få flere kunder med våre synlighetsverktøy.",
          href: "/butikk", // 👉 lenke til nettbutikken
        },
        {
          title: "Hydro Shield",
          desc: "Beskytt propellen og kom raskere i plan med vårt unike produkt.",
          href: "/butikk", // 👉 lenke til nettbutikken
        },
        {
          title: "Smarthus",
          desc: "Energieffektive og brukervennlige løsninger for et smartere hjem.",
        },
      ]}
    />
  );
}
