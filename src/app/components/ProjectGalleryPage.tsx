import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type ProjectGalleryPageProps = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  detail: string;
  highlights: string[];
  images: string[];
  imageAlts: Record<string, string>;
  featuredImageName?: string;
};

function fileName(src: string) {
  return src.split("/").pop() ?? src;
}

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, "nb", { numeric: true, sensitivity: "base" });
}

export default function ProjectGalleryPage({
  slug,
  eyebrow,
  title,
  intro,
  detail,
  highlights,
  images,
  imageAlts,
  featuredImageName,
}: ProjectGalleryPageProps) {
  const galleryImages = images.sort(naturalSort);
  const featuredImage =
    galleryImages.find((src) => fileName(src) === featuredImageName) ?? galleryImages[0];
  const canonicalUrl = `https://www.service-leverandøren.no/prosjekter/${slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": `${canonicalUrl}#galleri`,
        name: title,
        description: intro,
        url: canonicalUrl,
        publisher: { "@id": "https://www.service-leverandøren.no/#virksomhet" },
        image: galleryImages.map((src) => ({
          "@type": "ImageObject",
          contentUrl: `https://www.service-leverandøren.no${src}`,
          caption: imageAlts[fileName(src)] ?? `${title} – bildedokumentasjon`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#brodsmuler`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forside", item: "https://www.service-leverandøren.no/" },
          { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://www.service-leverandøren.no/prosjekter" },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f0e8] pt-[var(--header-height)] text-[#142019]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#101713] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] lg:items-stretch lg:gap-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <nav aria-label="Brødsmulesti" className="mb-10">
              <Link
                href="/prosjekter"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Alle referanser
              </Link>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8eb59c]">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
              {intro}
            </p>
            <div className="mt-10 h-px w-24 bg-[#dda238]" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">{detail}</p>
          </div>

          {featuredImage ? (
            <figure className="relative min-h-[360px] overflow-hidden border border-white/12 bg-black/20 sm:min-h-[500px] lg:min-h-[610px]">
              <Image
                src={featuredImage}
                alt={imageAlts[fileName(featuredImage)] ?? `${title} – bildedokumentasjon`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/15 bg-black/35 px-5 py-4 backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  Arbeidsdokumentasjon
                </span>
                <span className="text-xs tabular-nums text-white/55">
                  01 / {String(galleryImages.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center border border-white/12 bg-white/[0.03] px-8 text-center text-white/60">
              Bildedokumentasjon kommer.
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#142019]/12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315e43]">
              Prosjektoversikt
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              Arbeidet, dokumentert underveis
            </h2>
          </div>
          <div className="border-l border-[#142019]/15 pl-6 sm:pl-10">
            <p className="max-w-2xl text-lg leading-8 text-[#3f4b44]">{detail}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 border-t border-[#142019]/15 pt-4 text-sm font-semibold leading-6 text-[#203128]"
                >
                  <Check className="mt-0.5 shrink-0 text-[#315e43]" size={17} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#142019]/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315e43]">
              Bildedokumentasjon
            </p>
            <h2 id="gallery-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              Se detaljene i leveransen
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#607068]">
            {galleryImages.length} {galleryImages.length === 1 ? "bilde" : "bilder"}
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid auto-rows-[240px] gap-3 sm:grid-cols-2 sm:auto-rows-[320px] lg:grid-cols-12 lg:auto-rows-[300px]">
            {galleryImages.map((src, index) => {
              const wide = index === 0 || index % 5 === 0;
              const tall = galleryImages.length > 2 && index % 5 === 1;
              return (
                <figure
                  key={src}
                  className={`group relative overflow-hidden bg-[#d8d5cb] ${
                    wide
                      ? "sm:col-span-2 lg:col-span-8"
                      : tall
                        ? "sm:row-span-2 lg:col-span-4 lg:row-span-2"
                        : "lg:col-span-4"
                  }`}
                >
                  <Image
                    src={src}
                    alt={imageAlts[fileName(src)] ?? `${title} – bildedokumentasjon`}
                    fill
                    sizes={wide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/0 to-transparent opacity-80" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                    <span className="max-w-[80%] text-sm font-semibold leading-6">
                      {imageAlts[fileName(src)] ?? title}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-white/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        ) : (
          <p className="border border-[#142019]/15 bg-white/35 p-8 text-[#526058]">
            Bildedokumentasjon kommer.
          </p>
        )}
      </section>

      <section className="border-t border-white/10 bg-[#17231c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8eb59c]">
              Har du et lignende prosjekt?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em]">
              La oss se på mulighetene
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start bg-[#dda238] px-6 py-3 text-sm font-extrabold text-[#15130d] transition hover:bg-[#efb84f] md:self-auto"
          >
            Be om en uforpliktende befaring
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
