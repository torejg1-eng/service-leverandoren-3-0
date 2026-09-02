import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Tekniske arbeider og spesialløsninger",
  description:
    "Se utvalgte tekniske arbeider og plassbygde løsninger, fra innbygging av utstyr til funksjonelle romtilpasninger.",
  alternates: { canonical: "/prosjekter/teknisk" },
  openGraph: {
    title: "Tekniske arbeider og spesialløsninger",
    description: "Dokumenterte tekniske og bygningsmessige arbeider og spesialtilpasninger.",
    url: "/prosjekter/teknisk",
    images: [
      {
        url: "/images/prosjekter/teknisk/teknisk2.webp",
        alt: "Teknisk utstyr integrert i plassbygget veggløsning",
      },
    ],
  },
};

const imageAlts = {
  "teknisk1.webp": "Tilpasset innbygging av teknisk utstyr i vegg",
  "teknisk2.webp": "Teknisk utstyr integrert i plassbygget veggløsning",
  "teknisk5.webp": "Plassbygget hems med rekkverk og trappeløsning",
  "teknisk6.webp": "Ferdig spesialrom med integrert hems og belysning",
};

export default async function TekniskProsjekt() {
  const images = await getImagesFromFolder("teknisk");

  return (
    <ProjectGalleryPage
      slug="teknisk"
      eyebrow="Teknisk · spesialtilpasning"
      title="Tekniske arbeider som blir en del av rommet"
      intro="Et utvalg bygningsmessige og tekniske løsninger der funksjon, innbygging og plassutnyttelse er planlagt som en helhet."
      detail="Referansene viser både integrering av teknisk utstyr og plassbygde romløsninger. Fellesnevneren er praktiske tilpasninger utført etter forholdene på stedet."
      highlights={["Bygningsmessig tilpasning", "Integrering av teknisk utstyr", "Plassbygde løsninger"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="teknisk2.webp"
    />
  );
}
