import {
  TrendingUp,
  Shield,
  Home,
  Wallet,
  PiggyBank,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Finanční plán",
    desc: "Finanční plán dá vašim rozhodnutím jasný směr. Projdeme příjmy, výdaje, rezervy, bydlení, ochranu i investice tak, aby jednotlivé kroky nestály vedle sebe náhodně, ale navazovaly na vaše cíle.",
    bullets: ["Přehled a priority", "Rozhodnutí v souvislostech", "Plán pro další kroky"],
  },
  {
    icon: TrendingUp,
    title: "Tvorba rezervy a majetku",
    desc: "Peníze mají mít různé role. Něco má být po ruce, něco má sloužit na cíle v příštích letech a něco má dlouhodobě růst. Pomohu vám nastavit systém, ve kterém každá část ví, k čemu slouží.",
    bullets: ["Rezerva po ruce", "Peníze na střednědobé cíle", "Dlouhodobé budování majetku"],
  },
  {
    icon: Shield,
    title: "Ochrana příjmu a rodiny",
    desc: "Dobře nastavená ochrana má držet domácnost pohromadě ve chvíli, kdy přijde nemoc, úraz nebo výpadek příjmu. Cílem není platit co nejvíc, ale chránit to, co by vás opravdu finančně rozhodilo.",
    bullets: ["Výpadek příjmu", "Rodina a závazky", "Majetek a odpovědnost"],
  },
  {
    icon: Home,
    title: "Financování bydlení",
    desc: "Bydlení není jen hypotéka a sazba. Důležité je vědět, kolik je bezpečné si půjčit, jak splátka zapadne do rozpočtu a jak s úvěrem pracovat do budoucna.",
    bullets: ["Bezpečná výše splátky", "Rezerva kolem bydlení", "Cesta k dřívějšímu splacení"],
  },
  {
    icon: PiggyBank,
    title: "Renta a finanční svoboda",
    desc: "Dlouhodobě nastavujeme finance tak, aby část vašich budoucích příjmů nemusela stát jen na aktivní práci. Cílem je postupně budovat majetek, který vám dá více možností a větší volnost.",
    bullets: ["Dlouhý horizont", "Pravidelné investování", "Budoucí příjem z majetku"],
  },
  {
    icon: RefreshCw,
    title: "Dlouhodobá péče",
    desc: "Finance se mění spolu s vaším životem. Proto se k nastavení pravidelně vracíme, kontrolujeme změny a upravujeme plán tak, aby vám dál sloužil.",
    bullets: ["Dlouhodobá spolupráce", "Pravidelné kontroly nastavení", "Hlídání zbytečných nákladů"],
  },
];

export default function Services() {
  return (
    <section
      id="sluzby"
      className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 overflow-hidden"
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
            Finance poskládané do{" "}
            <span className="gold-text">jednoho plánu</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            Nejde o to řešit jednotlivé oblasti financí odděleně. Důležité je,
            aby rezerva, bydlení, ochrana příjmu, investice i budoucí renta
            navazovaly na váš život, cíle a možnosti.
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
      className="service-card group relative overflow-hidden rounded-2xl p-6 sm:p-7 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/[0.08] shadow-[0_16px_40px_-28px_rgba(201,169,97,0.9)]">
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

      <ul className="mt-4 grid gap-2">
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
    </article>
  );
}
