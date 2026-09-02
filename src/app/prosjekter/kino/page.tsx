import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Bygging av hjemmekino – utført prosjekt",
  description:
    "Se ombyggingen av et rom til hjemmekino med mørke overflater, akustisk himling, projektor, lerret og lydoppsett.",
  alternates: { canonical: "/prosjekter/kino" },
  openGraph: {
    title: "Bygging av hjemmekino – utført prosjekt",
    description: "Spesialtilpasset hjemmekino dokumentert fra byggeprosess til ferdig rom.",
    url: "/prosjekter/kino",
    images: [
      {
        url: "/images/prosjekter/kino/kino7.webp",
        alt: "Ferdig hjemmekino med lerret, prosjektor og høyttalere",
      },
    ],
  },
};

const imageAlts = {
  "kino1.webp": "Ombygging av rom med akustiske himlingsplater",
  "kino2.webp": "Arbeid med mørke overflater og himling i hjemmekino",
  "kino3.webp": "Montering av innredning og prosjektor i kinorom",
  "kino4.webp": "Frontvegg klargjort for lerret og lydutstyr",
  "kino5.webp": "Sitteplasser montert i ferdig behandlet hjemmekino",
  "kino6.webp": "Ferdig hjemmekino med lerret og flerkanals lyd",
  "kino7.webp": "Hjemmekino i bruk med bilde, lydanlegg og dempet belysning",
};

export default async function KinoProsjekt() {
  const images = await getImagesFromFolder("kino");

  return (
    <ProjectGalleryPage
      slug="kino"
      eyebrow="Ombygging · spesialrom"
      title="Fra ubrukt rom til hjemmekino"
      intro="Et spesialtilpasset rom der overflater, teknikk og innredning er bygget sammen til en komplett hjemmekino."
      detail="Bildene følger ombyggingen fra arbeid med himling og overflater til ferdig oppsett med prosjektor, lerret, høyttalere og sitteplasser."
      highlights={["Tilpasning av rommet", "Himling og overflater", "Teknikk og innredning"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="kino7.webp"
    />
  );
}
