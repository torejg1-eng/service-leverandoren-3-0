import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt og befaring i Østfold",
  description:
    "Kontakt Service Leverandøren for befaring, eiendomsdrift, energioptimalisering, byggservice eller prosjekt i Østfold.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt Service Leverandøren",
    description: "Ta en uforpliktende prat om drift, energi eller et konkret prosjekt i Østfold.",
    url: "/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f3f4ef] pt-[var(--header-height)]">
      <section className="dark-grid text-white">
        <div className="site-shell grid gap-10 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
          <div className="lg:py-6">
            <p className="eyebrow eyebrow-on-dark">Kontakt / befaring</p>
            <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Fortell oss hva bygget trenger.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              Ta kontakt om drift, energibruk, avvik eller et konkret prosjekt. Du får
              en ærlig vurdering av hva som bør prioriteres – og hvor det er fornuftig å begynne.
            </p>

            <div className="mt-10 border-t border-white/12">
              <ContactRow icon={<Phone size={18} aria-hidden="true" />} label="Telefon" href="tel:+4746925236" value="+47 469 25 236" />
              <ContactRow icon={<Mail size={18} aria-hidden="true" />} label="E-post" href="mailto:post@service-leverandøren.no" value="post@service-leverandøren.no" />
              <ContactRow icon={<MapPin size={18} aria-hidden="true" />} label="Område" value="Skjeberg · Østfold og nærområdene" />
            </div>
          </div>

          <div id="skjema" className="scroll-mt-28 border border-white/15 bg-[#f8f8f4] p-6 text-[#101a16] shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:p-9 lg:p-12">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#0d7654]">Uforpliktende forespørsel</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">Hva kan vi hjelpe med?</h2>
            <p className="mt-4 max-w-xl leading-7 text-[#5a6860]">
              Beskriv byggtype, behov og ønsket tidspunkt så konkret du kan. Vi tar kontakt for å avklare neste steg.
            </p>

            <form action="https://formspree.io/f/xqkoyqza" method="POST" className="mt-8 grid gap-5 sm:grid-cols-2">
              <FormField label="Navn" name="navn" autoComplete="name" required />
              <FormField label="Virksomhet" name="virksomhet" autoComplete="organization" />
              <FormField label="E-post" name="epost" autoComplete="email" type="email" required />
              <FormField label="Telefon" name="telefon" autoComplete="tel" type="tel" />

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-bold">Hva gjelder henvendelsen? <span className="text-[#0d7654]">*</span></span>
                <textarea
                  name="beskrivelse"
                  rows={6}
                  required
                  placeholder="For eksempel byggtype, utfordring, omfang og ønsket tidspunkt"
                  className="min-h-36 resize-y rounded-[4px] border border-[#101a16]/22 bg-white px-4 py-3.5 text-base outline-none placeholder:text-[#718078] focus:border-[#0d7654] focus:ring-2 focus:ring-[#0d7654]/20"
                />
              </label>

              <div className="sm:col-span-2">
                <button type="submit" className="button-primary w-full sm:w-auto">
                  Send forespørsel <ArrowRight size={18} aria-hidden="true" />
                </button>
                <p className="mt-4 max-w-xl text-xs leading-5 text-[#65726b]">
                  Opplysningene brukes bare til å svare på henvendelsen. Skjemaet behandles av Formspree. Se vår <Link href="/personvern" className="font-bold text-[#0d7654] underline underline-offset-2">personvernerklæring</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-[#101a16]/12 bg-white py-12">
        <div className="site-shell grid gap-6 text-sm sm:grid-cols-3">
          {[
            ["01", "Direkte kontakt", "Du snakker med den som følger opp oppdraget."],
            ["02", "Riktig første steg", "Vi avklarer behovet før tiltak eller omfang låses."],
            ["03", "Tydelig videre løp", "Du får vite hva vi anbefaler og hva som skjer videre."],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t border-[#101a16]/18 pt-5">
              <span className="font-mono text-xs font-bold text-[#0d7654]">{number}</span>
              <h2 className="mt-4 text-lg font-bold">{title}</h2>
              <p className="mt-2 leading-6 text-[#5c6962]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="text-[#38d39f]">{icon}</span>
      <span className="font-mono text-[0.63rem] font-bold uppercase tracking-[0.14em] text-white/38">{label}</span>
      <span className="col-span-2 pl-8 text-sm font-semibold text-white/78 sm:col-span-1 sm:pl-0">{value}</span>
    </>
  );

  return href ? (
    <a href={href} className="grid grid-cols-[1.5rem_1fr] items-center gap-x-2 border-b border-white/12 py-5 transition hover:text-[#38d39f] sm:grid-cols-[1.5rem_5rem_1fr]">{content}</a>
  ) : (
    <div className="grid grid-cols-[1.5rem_1fr] items-center gap-x-2 border-b border-white/12 py-5 sm:grid-cols-[1.5rem_5rem_1fr]">{content}</div>
  );
}

function FormField({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold">{label} {required && <span className="text-[#0d7654]">*</span>}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="min-h-12 rounded-[4px] border border-[#101a16]/22 bg-white px-4 py-3 text-base outline-none focus:border-[#0d7654] focus:ring-2 focus:ring-[#0d7654]/20"
      />
    </label>
  );
}
