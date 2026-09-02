import type { Metadata } from "next";
import ProjectGalleryPage from "@/app/components/ProjectGalleryPage";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

export const metadata: Metadata = {
  title: "Montering av drivhus – utført prosjekt",
  description:
    "Se et utført drivhusprosjekt med opparbeidet sokkel, montert konstruksjon og dokumentasjon gjennom ulike årstider.",
  alternates: { canonical: "/prosjekter/drivhus" },
  openGraph: {
    title: "Montering av drivhus – utført prosjekt",
    description: "Dokumentert arbeidsreferanse fra montering av drivhus og sokkel.",
    url: "/prosjekter/drivhus",
    images: [
      {
        url: "/images/prosjekter/drivhus/drivhus2.webp",
        alt: "Ferdigstilt og opplyst drivhus på opparbeidet sokkel",
      },
    ],
  },
};

const imageAlts = {
  "drivhus1.webp": "Drivhus montert på tilpasset og opparbeidet sokkel",
  "drivhus2.webp": "Ferdigstilt og opplyst drivhus på kveldstid",
  "drivhus3.webp": "Frittstående drivhus med glassfelt og sort rammeverk",
  "drivhus4.webp": "Ferdig drivhus dokumentert i vinterlandskap",
};

export default async function DrivhusProsjekt() {
  const images = await getImagesFromFolder("drivhus");

  return (
    <ProjectGalleryPage
      slug="drivhus"
      eyebrow="Utemiljø · montering"
      title="Drivhus tilpasset uteområdet"
      intro="Et frittstående drivhus etablert på opparbeidet sokkel, med en tydelig konstruksjon som fungerer gjennom skiftende sesonger."
      detail="Prosjektet omfatter grunnlaget for konstruksjonen og komplett montering. Bildene viser det ferdige drivhuset i dagslys, på kveldstid og under vinterforhold."
      highlights={["Opparbeidet sokkel", "Montering av konstruksjon", "Ferdig dokumentasjon"]}
      images={images}
      imageAlts={imageAlts}
      featuredImageName="drivhus2.webp"
    />
  );
}
