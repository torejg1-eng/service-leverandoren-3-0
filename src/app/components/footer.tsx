import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  ["Energioptimalisering", "/optimalisering"],
  ["Eiendomsdrift", "/eiendomsdrift"],
  ["Prosjektledelse", "/prosjekt-ombygging"],
  ["Utførte prosjekter", "/prosjekter"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060807] text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-white">
              <span className="text-emerald-400">Service</span> Leverandøren AS
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">
              Praktisk og ansvarlig oppfølging av bygg – fra kartlegging og teknisk drift til gjennomføring og dokumentasjon.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
              Én kontakt · tydelig ansvar · dokumentert oppfølging
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Tjenester</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map(([text, href]) => (
                <li key={href}><Link className="transition hover:text-emerald-300" href={href}>{text}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Kontakt</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="flex items-center gap-2 transition hover:text-emerald-300" href="tel:+4746925236"><Phone size={16} aria-hidden="true" />+47 469 25 236</a></li>
              <li><a className="flex items-center gap-2 break-all transition hover:text-emerald-300" href="mailto:post@serviceleverandøren.no"><Mail size={16} aria-hidden="true" />post@serviceleverandøren.no</a></li>
              <li className="flex items-center gap-2 text-neutral-400"><MapPin size={16} aria-hidden="true" />Skjeberg · Østfold og nærområdene</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Service Leverandøren AS</p>
          <div className="flex flex-wrap gap-5">
            <Link className="hover:text-neutral-200" href="/om-oss">Om oss</Link>
            <Link className="hover:text-neutral-200" href="/personvern">Personvern</Link>
            <a className="hover:text-neutral-200" href="https://nordicsmart.eu" target="_blank" rel="noreferrer">Nordic Smart ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
