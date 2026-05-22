import { Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/#o-mne", label: "O mně" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#proces", label: "Jak pracuji" },
  { href: "/#kontakt", label: "Kontakt" },
];

const services = [
  "Finanční plán",
  "Tvorba rezerv",
  "Ochrana příjmu",
  "Financování bydlení",
  "Dlouhodobá péče",
];

const legalLinks = [
  {
    href: "/zpracovani-osobnich-udaju",
    label: "Zpracování osobních údajů",
  },
  { href: "/cookies", label: "Cookies" },
  { href: "/pravni-informace", label: "Právní informace" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-gold-500/10">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 inset-x-0 h-px divider-line" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-4 inline-flex flex-col items-start leading-none">
              <span className="font-display text-base tracking-wide text-white">
                Daniel Kolář
              </span>
              <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.22em] text-gold-300/70">
                Osobní finanční poradce
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Finanční poradenství s důrazem na dlouhodobou péči, souvislosti
              a osobní přístup.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href="#" label="LinkedIn">
                <Linkedin size={16} />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <Instagram size={16} />
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <Facebook size={16} />
              </SocialIcon>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-400 mb-4">
              Navigace
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-300 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-400 mb-4">
              Služby
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
