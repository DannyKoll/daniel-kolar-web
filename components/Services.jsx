import {
  TrendingUp,
  Shield,
  Home,
  Wallet,
  PiggyBank,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Investice",
    desc: "Sestavím vám portfolio na míru — od konzervativních fondů po akciové strategie. Vždy s ohledem na váš cíl, časový horizont a postoj k riziku.",
    bullets: ["Pravidelné investice", "Jednorázové vklady", "ETF & podílové fondy"],
    href: "/investice",
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(19,47,78,0.72)_0%,rgba(7,23,43,0)_72%)]" />
      <div className="absolute top-0 left-0 w-full h-px divider-line opacity-20" />

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
            <ServiceCard key={s.title} {...s} index={i + 1} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, bullets, href, index, delay }) {
  const cardContent = (
    <>
      <div className="absolute right-6 top-6 font-display text-5xl text-white/[0.035] transition-colors group-hover:text-gold-500/10">
        {String(index).padStart(2, "0")}
      </div>

      <div className="relative mb-6 flex items-center justify-between gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/[0.08] shadow-[0_16px_40px_-28px_rgba(201,169,97,0.9)]">
          <Icon size={25} className="text-gold-300" />
        </div>
        <span className="h-px flex-1 bg-gradient-to-r from-gold-500/25 to-transparent" />
      </div>

      <h3 className="font-display text-xl sm:text-2xl text-white mb-3 group-hover:text-gold-100 transition-colors">
        {title}
      </h3>

      <p className="text-sm sm:text-[15px] text-slate-300/90 leading-relaxed">
        {desc}
      </p>

      <ul className="mt-5 grid gap-2">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500/85 shadow-[0_0_14px_rgba(201,169,97,0.5)]" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs sm:text-sm text-gold-400/85 group-hover:text-gold-300 transition-colors">
        <span>Zjistit více</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/[0.06] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </>
  );

  const className =
    "service-card group relative block overflow-hidden rounded-2xl p-7 sm:p-8 reveal";

  if (href) {
    return (
      <Link
        href={href}
        aria-label={`Zjistit více: ${title}`}
        className={className}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article
      className="service-card group relative overflow-hidden rounded-2xl p-7 sm:p-8 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {cardContent}
    </article>
  );
}
