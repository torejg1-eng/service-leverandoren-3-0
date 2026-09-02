import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Kjøkkenoppgradering – utført prosjekt",
  description:
    "Se bilder fra oppgradering av kjøkken, fra klargjøring av rommet til montert kjøkkeninnredning og arbeidsflater.",
  alternates: { canonical: "/prosjekter/kjokken" },
  openGraph: {
    title: "Kjøkkenoppgradering – utført prosjekt",
    description: "Dokumentert arbeidsreferanse fra oppgradering og montering av kjøkken.",
    url: "/prosjekter/kjokken",
    images: [
      {
        url: "/images/prosjekter/Kjokken/kjokken2.webp",
        alt: "Montert kjøkken med mørke fronter og benkeplate",
      },
    ],
  },
};

const imageAlts = {
  "kjokken1.webp": "Kjøkkenrom klargjort under oppgraderingsarbeidet",
  "kjokken2.webp": "Montert kjøkken med mørke fronter og tilpasset arbeidsflate",
};

export default async function KjokkenProsjekt() {
  const images = await getImagesFromFolder("Kjokken");

  return (
    <ProjectGalleryPage
      slug="kjokken"
      eyebrow="Kjøkken · oppgradering"
      title="Kjøkken med presise tilpasninger"
      intro="En målrettet kjøkkenoppgradering som går fra klargjort rom til montert innredning og ferdige arbeidsflater."
      detail="Bildene viser to tydelige faser i leveransen: rommet under arbeid og kjøkkenet etter montering av fronter, skap og benkeplate."
      highlights={["Klargjøring av rommet", "Montering av innredning", "Tilpasning av arbeidsflater"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="kjokken2.webp"
    />
  );
}
