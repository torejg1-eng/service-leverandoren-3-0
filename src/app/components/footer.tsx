import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 text-white/70">
      <div className="mx-auto max-w-6xl px-4 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tjenester */}
          <div>
            <h3 className="text-white/90 font-bold tracking-tight">Tjenester</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="hover:text-emerald-200 transition" href="/optimalisering">
                  Optimalisering
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-200 transition" href="/eiendomsdrift">
                  Eiendomsdrift
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-200 transition" href="/prosjekter">
                  Prosjekter
                </Link>
              </li>
              <li className="pt-2">
                <Link className="hover:text-emerald-200 transition" href="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Innsikt */}
          <div>
            <h3 className="text-white/90 font-bold tracking-tight">Innsikt</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Korte, praktiske innlegg om drift og optimalisering av bygg.
            </p>
            <div className="mt-4">
              <Link
                href="/innsikt"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:border-emerald-400/50 hover:text-emerald-200 transition"
              >
                Se innsikt →
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white/90 font-bold tracking-tight">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="text-white/60">Telefon:</span>{" "}
                <a className="hover:text-emerald-200 transition" href="tel:+4746925236">
                  +47 469 25 236
                </a>
              </li>
              <li>
                <span className="text-white/60">E-post:</span>{" "}
                <a
                  className="hover:text-emerald-200 transition"
                  href="mailto:post@serviceleverandøren.no"
                >
                  post@serviceleverandøren.no
                </a>
              </li>
              <li>
                <span className="text-white/60">Område:</span> Østfold
              </li>

              <li className="pt-3">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2 font-semibold text-neutral-900 hover:bg-amber-400 transition"
                >
                  Be om kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bunnlinje */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>
            © 2026 Service Leverandøren AS
            <span className="hidden sm:inline"> • Optimalisering • Eiendomsdrift • Prosjekter</span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {/* Diskret nettbutikk-lenke */}
            <a
              className="hover:text-emerald-200 transition"
              href="https://nordicsmart.eu"
              target="_blank"
              rel="noreferrer"
              title="Nettbutikk (Nordic Smart)"
            >
              Nettbutikk
            </a>

            <Link className="hover:text-emerald-200 transition" href="/personvern">
              Personvern
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
