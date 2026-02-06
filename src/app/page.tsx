// === START: src/app/page.tsx ===
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Gauge,
  Building2,
  ClipboardList,
} from "lucide-react";

const insightPreview = [
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
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 [--bg-soft:#121418]">
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
        style={{ paddingTop: "calc(var(--header-height, 90px) + 28px)" }}
      >
        {/* Bakgrunnsbilde + overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/images/hero-stue.webp')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-neutral-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
          <p className="text-emerald-300 font-semibold tracking-wide">
            Optimalisering • Eiendomsdrift • Prosjekter
          </p>

          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Optimalisering av bygg som{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              reduserer kostnader
            </span>{" "}
            og gir bedre drift
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-neutral-200 leading-relaxed">
            Service Leverandøren AS hjelper næring, sameier og eiere med praktisk
            optimalisering og ryddig eiendomsdrift. Vi jobber strukturert:
            kartlegging → tiltak → oppfølging.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-300">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />{" "}
              <a className="hover:text-emerald-200 transition" href="tel:+4746925236">
                +47 469 25 236
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />{" "}
              <a
                className="hover:text-emerald-200 transition"
                href="mailto:post@service-leverandoren.no"
              >
                post@service-leverandoren.no
              </a>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Skjeberg, Østfold
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
            >
              Be om gjennomgang
            </Link>
            <Link
              href="/optimalisering"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se optimalisering <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Proff-kort */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Stat title="Fokus" value="Energi • Inneklima • Drift" />
            <Stat title="Leveranse" value="Tiltaksliste + rapport" />
            <Stat title="Resultat" value="Stabil drift, færre avvik" />
          </div>
        </div>

        {/* Nedre kontraststripe */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
      </section>

      {/* TJENESTER / LANDINGKORT */}
      <section className="bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <SectionHeader
            eyebrow="Tjenester"
            title="Dette leverer vi"
            text="Tydelige leveranser som gjør det enkelt å bestille riktig – og enkelt å følge opp."
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Gauge className="h-6 w-6" />}
              title="Optimalisering"
              desc="Kartlegging og forbedring av energi, drift og inneklima. Tiltak prioriteres etter effekt og gjennomførbarhet."
              href="/optimalisering"
              accent="emerald"
            />
            <ServiceCard
              icon={<ClipboardList className="h-6 w-6" />}
              title="Eiendomsdrift"
              desc="Teknisk tilsyn, byggservice, uteområder og avvik/rapportering – med ryddig ansvar og rutiner."
              href="/eiendomsdrift"
              accent="amber"
            />
            <ServiceCard
              icon={<Building2 className="h-6 w-6" />}
              title="Prosjekter"
              desc="Utførte jobber og dokumentasjon. Prosjekt/ombygging tas ved forespørsel og behov."
              href="/prosjekter"
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* INNSIKT PREVIEW */}
      <section className="bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Innsikt"
              title="Praktiske innlegg"
              text="Kort og konkret – bygd på erfaring fra drift og optimalisering."
            />
            <Link
              href="/innsikt"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se alle
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightPreview.map((p) => (
              <Link
                key={p.slug}
                href={`/innsikt/${p.slug}`}
                className="rounded-2xl border border-white/15 bg-neutral-950/40 p-6 hover:border-emerald-400/40 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">
                    {p.tag}
                  </p>
                  <p className="text-xs text-neutral-400">{formatDate(p.date)}</p>
                </div>
                <h3 className="mt-3 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed">{p.excerpt}</p>
                <p className="mt-4 text-emerald-300 font-semibold">Les mer →</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/innsikt"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se alle innlegg
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Klar for en konkret tiltaksplan?
            </h2>
            <p className="mt-3 text-neutral-300 leading-relaxed max-w-3xl">
              Fortell kort hva du vil forbedre (energi, komfort, drift eller avvik), så foreslår vi en
              praktisk fremgangsmåte.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
              >
                Kontakt oss
              </Link>
              <Link
                href="/eiendomsdrift"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
              >
                Se eiendomsdrift
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/50">
              Vi dekker hele Østfold og nærområdene. Kveldsbefaring etter avtale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Reusable bits ---------- */

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div>
      {eyebrow && <Eyebrow text={eyebrow} />}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-3 max-w-2xl text-neutral-300">{text}</p>}
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-emerald-400">
      <div className="h-0.5 w-10 bg-emerald-500" />
      <span className="text-sm font-semibold uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-950/40 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-400">{title}</p>
      <p className="mt-1 text-sm md:text-base font-semibold text-neutral-100">
        {value}
      </p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  href,
  accent = "emerald",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  accent?: "emerald" | "amber";
}) {
  const accentClasses =
    accent === "amber"
      ? "text-amber-300 ring-amber-500/30"
      : "text-emerald-300 ring-emerald-500/30";

  return (
    <Link
      href={href}
      className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:-translate-y-1 hover:bg-neutral-900 block"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 ring-1 ${accentClasses}`}
      >
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-neutral-100">{title}</h3>
      <p className="mt-2 text-neutral-300 leading-relaxed">{desc}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-emerald-300 font-semibold">
        Les mer <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
// === END: src/app/page.tsx ===
