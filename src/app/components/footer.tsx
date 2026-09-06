import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  ["Energioptimalisering av næringsbygg", "/optimalisering"],
  ["Eiendomsdrift", "/eiendomsdrift"],
  ["Prosjekt og ombygging", "/prosjekt-ombygging"],
  ["Utførte prosjekter", "/prosjekter"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050c09] text-white/65">
      <div className="site-shell py-14 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.35fr_0.9fr_1fr]">
          <div>
            <p className="text-2xl font-extrabold tracking-[-0.045em] text-white">
              <span className="text-[#38d39f]">Service</span> Leverandøren <span className="text-xs tracking-widest text-white/60">AS</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Eiendomsdrift, energioptimalisering og prosjektgjennomføring for bygg og eiendommer i Østfold.
            </p>
            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#38d39f]">
              Én kontakt · tydelig ansvar · dokumentert oppfølging
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white">Tjenester</h2>
            <ul className="mt-5 grid gap-2 text-sm">
              {services.map(([text, href]) => (
                <li key={href}><Link className="transition hover:text-[#38d39f]" href={href}>{text}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white">Kontakt</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li><a className="flex items-center gap-3 transition hover:text-[#38d39f]" href="tel:+4746925236"><Phone size={16} aria-hidden="true" />+47 469 25 236</a></li>
              <li><a className="flex items-center gap-3 break-all transition hover:text-[#38d39f]" href="mailto:post@service-leverandøren.no"><Mail size={16} aria-hidden="true" />post@service-leverandøren.no</a></li>
              <li className="flex items-start gap-3 text-white/50"><MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" />Åsa-Tors vei 18A, 1746 Skjeberg</li>
            </ul>
            <Link href="/kontakt" className="mt-6 inline-flex border-b border-[#38d39f] pb-1 text-sm font-bold text-[#38d39f]">Ta kontakt →</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SERVICELEVERANDØREN AS · Org.nr. 936 026 087</p>
          <div className="flex flex-wrap gap-5">
            <Link className="hover:text-white" href="/om-oss">Om oss</Link>
            <Link className="hover:text-white" href="/personvern">Personvern</Link>
            <Link className="hover:text-white" href="/faktura">Faktura</Link>
            <a className="hover:text-white" href="https://nordicsmart.eu" target="_blank" rel="noreferrer">Nordic Smart ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
