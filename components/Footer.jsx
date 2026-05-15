import { Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Jak pracuji" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  "Investice",
  "Pojištění",
  "Hypotéky",
  "Penzijní plán",
  "Finanční plán",
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
            <a href="#top" className="inline-flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-700 text-navy-950 font-display font-bold text-lg">
                DK
              </span>
              <span className="text-white font-display text-lg">
                Daniel <span className="gold-text">Kolář</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nezávislé finanční poradenství s důrazem na dlouhodobý výsledek a
              osobní přístup.
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
                  href="tel:+420000000000"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <Phone size={14} className="text-gold-500" />
                  +420 000 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@danielkolar.cz"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <Mail size={14} className="text-gold-500" />
                  info@danielkolar.cz
                </a>
              </li>
            </ul>

            <div className="mt-5 text-xs text-slate-500 leading-relaxed">
              IČO: 000 000 00
              <br />
              Zapsán v registru ČNB
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Daniel Kolář. Všechna práva vyhrazena.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-300 transition-colors">
              Zásady ochrany osobních údajů
            </a>
            <a href="#" className="hover:text-gold-300 transition-colors">
              Cookies
            </a>
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
