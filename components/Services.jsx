import {
  TrendingUp,
  Shield,
  Home,
  Wallet,
  PiggyBank,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investice",
    desc: "Sestavím vám portfolio na míru — od konzervativních fondů po akciové strategie. Vždy s ohledem na váš cíl, časový horizont a postoj k riziku.",
    bullets: ["Pravidelné investice", "Jednorázové vklady", "ETF & podílové fondy"],
  },
  {
    icon: Shield,
    title: "Pojištění",
    desc: "Ochrana, která dává smysl. Postavím pojistnou ochranu rodiny i majetku tak, aby skutečně kryla rizika, která vás mohou ohrozit — bez zbytečných nákladů.",
    bullets: ["Životní pojištění", "Majetek a odpovědnost", "Pojištění příjmu"],
  },
  {
    icon: Home,
    title: "Hypotéky",
    desc: "Provedu vás celým procesem — od porovnání nabídek bank, přes vyjednání podmínek, až po podpis a refinancování. Bez papírování navíc.",
    bullets: ["Nová hypotéka", "Refinancování", "Konsolidace úvěrů"],
  },
  {
    icon: PiggyBank,
    title: "Penzijní plán",
    desc: "Důstojná penze není automatická. Připravíme strategii, jak pravidelně budovat rezervu, která vám v důchodu skutečně něco přinese.",
    bullets: ["DPS a doplňkové spoření", "Investiční penzijní plány", "Optimalizace státních příspěvků"],
  },
  {
    icon: Wallet,
    title: "Finanční plán",
    desc: "Komplexní pohled na vaše finance — příjmy, výdaje, rezervy, závazky. Sjednotíme to do jasné strategie, kterou pochopí každý člen rodiny.",
    bullets: ["Analýza rozpočtu", "Krátkodobé i dlouhodobé cíle", "Roční revize"],
  },
  {
    icon: Building2,
    title: "Firemní řešení",
    desc: "Pro podnikatele a firmy — od ochrany klíčových osob, přes optimalizaci pojištění majetku, až po investování firemních volných prostředků.",
    bullets: ["Pojištění odpovědnosti", "Benefity pro zaměstnance", "Cash management"],
  },
];

export default function Services() {
  return (
    <section
      id="sluzby"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-0 w-full h-px divider-line opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
              Co pro vás dělám
            </span>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Služby, které <span className="gold-text">opravdu pomáhají</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            Komplexní finanční poradenství pod jednou střechou — od první
            analýzy až po dlouhodobou péči o vaše portfolio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, bullets, delay }) {
  return (
    <article
      className="service-card group relative rounded-2xl p-7 sm:p-8 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/10 border border-gold-500/20 mb-5">
        <Icon size={26} className="text-gold-400" />
        <span className="absolute -inset-1 rounded-xl bg-gold-500/0 group-hover:bg-gold-500/10 blur-md transition-all" />
      </div>

      <h3 className="font-display text-xl sm:text-2xl text-white mb-3 group-hover:text-gold-100 transition-colors">
        {title}
      </h3>

      <p className="text-sm sm:text-[15px] text-slate-300/90 leading-relaxed">
        {desc}
      </p>

      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
          >
            <span className="w-1 h-1 rounded-full bg-gold-500" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-5 border-t border-gold-500/10 flex items-center justify-between text-xs sm:text-sm text-gold-400/80 group-hover:text-gold-300 transition-colors">
        <span>Zjistit více</span>
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </article>
  );
}
