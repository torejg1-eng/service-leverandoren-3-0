"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const serviceLinks = [
  { href: "/optimalisering", text: "Energioptimalisering" },
  { href: "/eiendomsdrift", text: "Eiendomsdrift" },
  { href: "/prosjekt-ombygging", text: "Prosjekt og ombygging" },
] as const;

const links = [
  { href: "/prosjekter", text: "Referanser" },
  { href: "/innsikt", text: "Innsikt" },
  { href: "/om-oss", text: "Om oss" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-white/10 bg-[#07100d]/95 text-white backdrop-blur-xl">
      <div className="site-shell flex h-full items-center justify-between gap-5">
        <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Service Leverandøren AS – gå til forsiden" className="group shrink-0 leading-none">
          <span className="block text-[1.03rem] font-extrabold tracking-[-0.04em] sm:text-xl">
            <span className="text-[#38d39f] transition-colors group-hover:text-white">Service</span>{" "}
            <span>Leverandøren</span>
            <span className="ml-1.5 text-[0.62rem] font-bold tracking-[0.12em] text-white/45">AS</span>
          </span>
          <span className="mt-1.5 hidden font-mono text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/42 sm:block">
            Drift · energi · prosjekt
          </span>
        </Link>

        <nav aria-label="Hovedmeny" className="hidden h-full items-center gap-0.5 lg:flex">
          <div className="group relative flex h-full items-center">
            <button
              type="button"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition ${serviceLinks.some((link) => isActive(pathname, link.href)) ? "text-[#38d39f]" : "text-white/75 hover:text-white"}`}
              aria-haspopup="true"
            >
              Tjenester
              <ChevronDown size={14} aria-hidden="true" className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-[calc(100%-8px)] w-72 translate-y-2 border border-white/10 bg-[#0b1712] p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {serviceLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between border-b border-white/[0.07] px-3 py-3 text-sm font-semibold last:border-0 ${isActive(pathname, link.href) ? "text-[#38d39f]" : "text-white/75 hover:bg-white/[0.04] hover:text-white"}`}
                >
                  <span>{link.text}</span>
                  <span className="font-mono text-[0.62rem] text-white/30">0{index + 1}</span>
                </Link>
              ))}
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`px-3 py-2 text-sm font-semibold transition ${isActive(pathname, link.href) ? "text-[#38d39f]" : "text-white/75 hover:text-white"}`}
            >
              {link.text}
            </Link>
          ))}

          <a href="tel:+4746925236" className="ml-2 hidden items-center gap-1.5 border-l border-white/15 pl-4 text-xs font-semibold text-white/55 transition hover:text-white xl:flex">
            <Phone size={14} aria-hidden="true" /> 469 25 236
          </a>
          <Link href="/kontakt" className="ml-2 rounded-[4px] bg-[#f2a93b] px-4 py-2.5 text-sm font-extrabold text-[#07100d] transition hover:-translate-y-0.5 hover:bg-[#ffc161]">
            Be om befaring
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-[4px] border border-white/15 p-2.5 text-white lg:hidden"
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={menuOpen}
          aria-controls="mobilmeny"
        >
          {menuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      <nav
        id="mobilmeny"
        aria-label="Mobilmeny"
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-b border-white/10 bg-[#07100d] px-3 py-4 shadow-2xl lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          <p className="px-4 pb-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#38d39f]">Tjenester</p>
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`border-t border-white/[0.07] px-4 py-3 text-sm font-semibold ${isActive(pathname, link.href) ? "text-[#38d39f]" : "text-white/80"}`}>
              {link.text}
            </Link>
          ))}
          <p className="mt-4 px-4 pb-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/35">Mer</p>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`border-t border-white/[0.07] px-4 py-3 text-sm font-semibold ${isActive(pathname, link.href) ? "text-[#38d39f]" : "text-white/80"}`}>
              {link.text}
            </Link>
          ))}
          <a href="tel:+4746925236" className="mt-4 flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white/70">
            <Phone size={16} aria-hidden="true" /> +47 469 25 236
          </a>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)} className="mt-2 rounded-[4px] bg-[#f2a93b] px-4 py-3.5 text-center font-extrabold text-[#07100d]">
            Be om befaring
          </Link>
        </div>
      </nav>
    </header>
  );
}
