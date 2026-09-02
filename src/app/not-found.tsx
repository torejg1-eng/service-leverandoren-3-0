import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="dark-grid flex min-h-[calc(100svh-var(--header-height))] items-center pt-[var(--header-height)] text-white">
      <div className="site-shell py-16">
        <p className="eyebrow eyebrow-on-dark">404 / siden finnes ikke</p>
        <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-7xl">Her fant vi ingen side.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Adressen kan være endret, eller lenken kan være feil. Gå tilbake til forsiden eller se våre tjenester.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="button-primary">Til forsiden <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="/kontakt" className="button-secondary-dark">Kontakt oss</Link>
        </div>
      </div>
    </main>
  );
}
