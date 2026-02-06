// === START: src/app/innsikt/page.tsx ===
import Link from "next/link";

const posts = [
    {
    slug: "hvor-vanlig-er-feilregulerte-bygg",
    title: "Hvor vanlig er feilregulerte bygg – egentlig?",
    excerpt:
      "Hvor stor del av bygg har reelt optimaliseringspotensial? En praktisk og realistisk gjennomgang – basert på drift, ikke brosjyre.",
    date: "2026-02-06",
    tag: "Energi",
  },
  {
    slug: "sjekkliste-eiendomsdrift",
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    excerpt:
      "En enkel, praktisk sjekkliste som gir kontroll på drift, avvik og småutbedringer – uten unødvendig byråkrati.",
    date: "2026-02-03",
    tag: "Drift",
  },
  {
    slug: "avvik-til-tiltak",
    title: "Fra avvik til tiltak: slik unngår du at småting blir dyrt",
    excerpt:
      "Hvordan du fanger opp og prioriterer avvik tidlig, og bygger en tiltaksliste som gir effekt og forutsigbarhet.",
    date: "2026-02-03",
    tag: "Avvik",
  },
  {
    slug: "teknisk-tilsyn-enkel-modell",
    title: "Teknisk tilsyn: enkel modell for faste runder",
    excerpt:
      "Et opplegg som passer næring og sameier: faste runder, tydelig rapport og praktisk oppfølging.",
    date: "2026-02-03",
    tag: "Tilsyn",
  },
  {
    slug: "uteomrader-vinterberedskap",
    title: "Uteområder og vinterberedskap: det som ofte glemmes",
    excerpt:
      "Sikkerhet, fremkommelighet og små tiltak som sparer tid og klager – spesielt i overgangssesonger.",
    date: "2026-02-03",
    tag: "Uteområder",
  },
];

export default function InnsiktPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-5xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">Innsikt</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Praktisk kunnskap om drift og optimalisering
        </h1>
        <p className="mt-5 text-neutral-300 text-lg md:text-xl leading-relaxed">
          Korte, konkrete innlegg som bygger autoritet og gjør det enklere å ta gode valg
          i drift og forbedring av bygg.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/innsikt/${p.slug}`}
              className="rounded-2xl border border-white/15 bg-neutral-900/30 p-6 hover:border-emerald-400/40 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-wide text-emerald-300">
                  {p.tag}
                </p>
                <p className="text-xs text-neutral-400">{formatDate(p.date)}</p>
              </div>
              <h2 className="mt-3 text-xl font-bold tracking-tight">{p.title}</h2>
              <p className="mt-2 text-neutral-300 leading-relaxed">{p.excerpt}</p>
              <p className="mt-4 text-emerald-300 font-semibold">Les mer →</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </main>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
// === END: src/app/innsikt/page.tsx ===
