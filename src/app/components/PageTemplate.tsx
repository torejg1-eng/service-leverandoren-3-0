import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type ServiceItem = { title: string; desc: string; href?: string };

interface PageTemplateProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  bgColor?: string;
  bgImage?: string;
  services?: ServiceItem[];
}

export default function PageTemplate({
  title,
  subtitle,
  buttonText,
  buttonHref = "/kontakt",
  bgImage,
  services = [],
}: PageTemplateProps) {
  const external = buttonHref.startsWith("http");

  return (
    <main className="min-h-screen pt-[var(--header-height)]">
      <section className="relative isolate min-h-[430px] overflow-hidden border-b border-white/10">
        {bgImage ? (
          <Image src={bgImage} alt="" fill priority sizes="100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-neutral-950 to-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0a] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-end px-4 pb-14 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Service Leverandøren AS</p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">{subtitle}</p>
            <Link
              href={buttonHref}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-neutral-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-300"
            >
              {buttonText}<ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="border-b border-white/10 bg-[#0c100e] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Kompetanse og leveranse</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Dette kan vi hjelpe deg med</h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {services.map((service) => {
                const content = (
                  <>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"><Check size={18} aria-hidden="true" /></div>
                    <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-400">{service.desc}</p>
                    {service.href && <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">Les mer <ArrowRight size={15} aria-hidden="true" /></span>}
                  </>
                );
                return service.href ? (
                  <Link key={service.title} href={service.href} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-emerald-400/35 hover:bg-white/[0.055]">{content}</Link>
                ) : (
                  <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">{content}</article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
