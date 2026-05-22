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
              <span className="font-display text-lg tracking-wide text-white">
                Daniel Kolář
              </span>
              <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-300/75">
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
            <h4 className="text-xs tracking-widest uppercase text-gold-400 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420723988447"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <Phone size={14} className="text-gold-500" />
                  +420 723 988 447
                </a>
              </li>
              <li>
                <a
                  href="mailto:d.kolar@westfair.cz"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <Mail size={14} className="text-gold-500" />
                  d.kolar@westfair.cz
                </a>
              </li>
            </ul>

            <div className="mt-5 text-xs text-slate-500 leading-relaxed">
              IČO: 03863620
            </div>
          </div>
        </div>

        <div className="mb-7 max-w-3xl text-xs leading-relaxed text-slate-500">
          Daniel Kolář působí jako vázaný zástupce pro SAB servis s.r.o. Více
          informací najdete v{" "}
          <a
            href="/pravni-informace"
            className="text-slate-400 transition-colors hover:text-gold-300"
          >
            právních informacích
          </a>
          .
        </div>

        <div className="pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Daniel Kolář. Všechna práva vyhrazena.
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold-500/20 bg-navy-900/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/40 hover:text-gold-300 transition-all"
    >
      {children}
    </a>
  );
}
