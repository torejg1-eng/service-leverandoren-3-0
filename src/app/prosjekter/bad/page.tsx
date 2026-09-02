import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Baderomsrehabilitering – utført prosjekt",
  description:
    "Se bilder fra rehabilitering av bad, fra klargjøring og flislegging til innredning og ferdige overflater.",
  alternates: { canonical: "/prosjekter/bad" },
  openGraph: {
    title: "Baderomsrehabilitering – utført prosjekt",
    description: "Dokumentert arbeidsreferanse fra komplett baderomsrehabilitering.",
    url: "/prosjekter/bad",
    images: [
      {
        url: "/images/prosjekter/bad/bad9.webp",
        alt: "Ferdigstilt bad med mørke fliser og hvit innredning",
      },
    ],
  },
};

const imageAlts = {
  "bad0.webp": "Klargjort våtrom før flislegging",
  "bad1.webp": "Mørke gulvfliser lagt med lyse detaljfelt",
  "bad2.webp": "Flislagt dusjsone under baderomsrehabilitering",
  "bad3.webp": "Presis flislegging rundt sluk og gulvdetaljer",
  "bad4.webp": "Innbyggingssisterne integrert i flislagt vegg",
  "bad5.webp": "Sammenhengende flisarbeid på gulv og vegger",
  "bad6.webp": "Montering av baderomsinnredning og servant",
  "bad7.webp": "Baderom i sluttfasen med innredning på plass",
  "bad8.webp": "Badekar montert mot mørke, flislagte overflater",
  "bad9.webp": "Ferdigstilt bad med badekar, innredning og vaskesone",
};

export default async function BadProsjekt() {
  const images = await getImagesFromFolder("bad");

  return (
    <ProjectGalleryPage
      slug="bad"
      eyebrow="Bad · rehabilitering"
      title="Bad bygget opp fra grunnen"
      intro="En komplett baderomsrehabilitering dokumentert fra klargjort våtrom til ferdige, funksjonelle overflater."
      detail="Bildeserien viser utviklingen gjennom flisarbeid, tekniske detaljer og montering av innredning. Resultatet er et helhetlig bad der materialvalg og utførelse henger sammen."
      highlights={["Klargjøring av våtrom", "Flislegging og detaljarbeid", "Montering og ferdigstilling"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="bad9.webp"
    />
  );
}
