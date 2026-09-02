import type { Metadata } from "next";
import PageTemplate from "../components/PageTemplate";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt og befaring",
  description: "Kontakt Service Leverandøren AS for eiendomsdrift, energioptimalisering, byggservice eller prosjekt i Østfold.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageTemplate
        title="Fortell oss hva bygget trenger"
        subtitle="Ta kontakt for en uforpliktende prat om drift, energibruk, avvik eller et konkret prosjekt. Du får en ærlig vurdering av hva som bør prioriteres."
        buttonText="Gå til kontaktskjema"
        buttonHref="/kontakt#skjema"
        bgImage="/images/prosjekter/teknisk/teknisk2.webp"
      />

      <main className="px-4 md:px-12 pb-16 pt-2">
        <section className="mx-auto max-w-5xl mt-8">
          {/* Kontaktkort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <Phone className="h-5 w-5" /> Telefon
              </div>
              <a
                className="mt-3 block text-lg font-bold text-neutral-100 hover:text-emerald-200 transition"
                href="tel:+4746925236"
              >
                +47 469 25 236
              </a>
              <p className="mt-2 text-sm text-neutral-300">
                Ring eller send SMS. Kveldsbefaring etter avtale.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <Mail className="h-5 w-5" /> E-post
              </div>
              <a
                className="mt-3 block text-lg font-bold text-neutral-100 hover:text-emerald-200 transition break-all"
                href="mailto:post@serviceleverandøren.no"
              >
                post@serviceleverandøren.no
              </a>
              <p className="mt-2 text-sm text-neutral-300">
                Beskriv kort byggtype og hva du ønsker å forbedre.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <MapPin className="h-5 w-5" /> Lokasjon
              </div>
              <p className="mt-3 text-lg font-bold text-neutral-100">
                Skjeberg, Østfold
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                Vi dekker Østfold og nærområdene.
              </p>
            </div>
          </div>

          {/* Skjema + tekst */}
          <div id="skjema" className="mt-8 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
              Send en forespørsel
            </h2>
            <p className="mt-2 text-neutral-300 leading-relaxed max-w-3xl">
              Fortell kort hva du ønsker hjelp til (energioptimalisering, eiendomsdrift, prosjekt),
              så tar vi kontakt.
            </p>

            <form
              action="https://formspree.io/f/xqkoyqza"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                name="navn"
                aria-label="Navn"
                autoComplete="name"
                placeholder="Navn"
                required
                className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2"
              />
              <input
                name="telefon"
                aria-label="Telefon"
                autoComplete="tel"
                placeholder="Telefon"
                type="tel"
                required
                className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2"
              />
              <input
                name="epost"
                aria-label="E-post"
                autoComplete="email"
                placeholder="E-post (valgfritt)"
                type="email"
                className="sm:col-span-2 rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2"
              />
              <textarea
                name="beskrivelse"
                aria-label="Beskrivelse av behov"
                placeholder="Hva kan vi hjelpe med?"
                rows={5}
                required
                className="sm:col-span-2 rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none ring-emerald-300 placeholder:text-neutral-500 focus:ring-2"
              />

              <button
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition sm:w-max"
                aria-label="Send forespørsel"
              >
                Send forespørsel
              </button>
            </form>

            <p className="mt-4 text-xs text-white/50">
              Ved innsending godtar du at vi kan bruke opplysningene til å svare på henvendelsen. Se{" "}
              <a className="underline hover:text-emerald-200" href="/personvern">personvern</a>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
