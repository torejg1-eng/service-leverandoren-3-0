"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/optimalisering", text: "Energioptimalisering" },
  { href: "/eiendomsdrift", text: "Eiendomsdrift" },
  { href: "/prosjekt-ombygging", text: "Prosjektledelse" },
  { href: "/prosjekter", text: "Referanser" },
  { href: "/innsikt", text: "Innsikt" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-white/10 bg-[#080b0a]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Service Leverandøren AS – forsiden" className="shrink-0 leading-none">
          <span className="block text-[1.08rem] font-extrabold tracking-[-0.035em] sm:text-xl">
            <span className="text-emerald-400">Service</span>{" "}
            <span className="text-white">Leverandøren</span>
            <span className="ml-1 text-xs font-semibold tracking-normal text-neutral-400">AS</span>
          </span>
          <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:block">
            Drift · energi · prosjekt
          </span>
        </Link>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive(pathname, link.href) ? "bg-emerald-400/10 text-emerald-300" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
            >
              {link.text}
            </Link>
          ))}
          <Link href="/kontakt" className="ml-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-neutral-950 transition hover:bg-amber-300">
            Be om befaring
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 p-2.5 text-neutral-100 lg:hidden"
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
        className={`absolute inset-x-0 top-full border-b border-white/10 bg-[#0b0f0d] px-4 py-4 shadow-2xl lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`rounded-lg px-4 py-3 font-semibold ${isActive(pathname, link.href) ? "bg-emerald-400/10 text-emerald-300" : "text-neutral-200"}`}>
              {link.text}
            </Link>
          ))}
          <Link href="/kontakt" className="mt-2 rounded-lg bg-amber-400 px-4 py-3 text-center font-bold text-neutral-950">
            Be om befaring
          </Link>
        </div>
      </nav>
    </header>
  );
}
