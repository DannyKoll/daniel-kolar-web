"use client";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, PlayCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "/finance-jako-celek", label: "Finance jako celek", featured: true },
  { href: "#proces", label: "Jak pracuji" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sectionHref = (href) => (pathname === "/" ? href : `/${href}`);
  const linkHref = (href) => (href.startsWith("/") ? href : sectionHref(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-24 sm:h-20 flex items-center justify-between">
        <a
          href={pathname === "/" ? "#top" : "/"}
          className="flex flex-col items-start leading-none group"
          aria-label="Daniel Kolář"
        >
          <span className="font-display text-[1.4rem] sm:text-xl lg:text-xl xl:text-[1.375rem] tracking-wide text-slate-100">
            Daniel Kolář
          </span>
          <span className="mt-1.5 sm:mt-2 text-[8.5px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-gold-300/80 sm:text-gold-300/90">
            Osobní finanční poradce
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={linkHref(l.href)}
                className={`relative inline-flex items-center gap-1.5 py-2 transition-colors group ${
                  l.featured
                    ? "text-gold-300 hover:text-gold-200"
                    : "hover:text-gold-300"
                }`}
              >
                {l.featured && (
                  <PlayCircle
                    size={15}
                    strokeWidth={1.8}
                    className="text-gold-400/85"
                  />
                )}
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={sectionHref("#kontakt")}
          className="hidden lg:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          Domluvit schůzku
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center gap-2 text-slate-200 p-2"
          aria-label="Otevřít menu"
        >
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-slate-200/90">
            MENU
          </span>
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/10 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={linkHref(l.href)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-3 hover:text-gold-300 hover:bg-gold-500/5 rounded-lg transition-colors ${
                  l.featured ? "text-gold-200" : "text-slate-200"
                }`}
              >
                {l.featured && (
                  <PlayCircle
                    size={16}
                    strokeWidth={1.8}
                    className="text-gold-400/85"
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={sectionHref("#kontakt")}
              onClick={() => setOpen(false)}
              className="block text-center btn-gold px-5 py-3 rounded-full text-sm font-semibold"
            >
              Domluvit schůzku
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
