import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Støttemur og belegningsstein – utført prosjekt",
  description:
    "Se utført murarbeid med terrengtilpasset støttemur, trapper og belegningsstein fra byggeprosess til ferdig utemiljø.",
  alternates: { canonical: "/prosjekter/mur" },
  openGraph: {
    title: "Støttemur og belegningsstein – utført prosjekt",
    description: "Dokumentert arbeidsreferanse fra mur-, terreng- og belegningsarbeid.",
    url: "/prosjekter/mur",
    images: [
      {
        url: "/images/prosjekter/mur/mur9.webp",
        alt: "Ferdigstilt støttemur og opparbeidet innkjørsel foran bolig",
      },
    ],
  },
};

const imageAlts = {
  "mur1.webp": "Oppbygging av støttemur i skrånende terreng",
  "mur2.webp": "Støttemur og terrengarbeid under utførelse",
  "mur3.webp": "Støttemur tilpasset boligens nivåforskjeller",
  "mur4.webp": "Klargjøring av areal foran ferdig oppført støttemur",
  "mur5.webp": "Støttemur og grunnarbeid ved innkjørsel",
  "mur6.webp": "Ferdig belegningsstein i trapp og gangareal",
  "mur7.webp": "Legging av belegningsstein på opparbeidet underlag",
  "mur8.webp": "Detaljarbeid med tilpasning av belegningsstein",
  "mur9.webp": "Ferdigstilt støttemur og opparbeidet innkjørsel foran bolig",
  "mur10.webp": "Helhetlig utemiljø med støttemur, beplantning og innkjørsel",
};

export default async function MurProsjekt() {
  const images = await getImagesFromFolder("mur");

  return (
    <ProjectGalleryPage
      slug="mur"
      eyebrow="Mur · utemiljø"
      title="Støttemur formet etter terrenget"
      intro="Et omfattende uteprosjekt med støttemur, nivåtilpasning og belegningsstein rundt en eksisterende bolig."
      detail="Dokumentasjonen følger arbeidet fra oppbygging av muren og klargjøring av underlaget til ferdig innkjørsel, trapp og beplantede utearealer."
      highlights={["Terreng- og grunnarbeid", "Støttemur og nivåtilpasning", "Belegningsstein og sluttføring"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="mur9.webp"
    />
  );
}
