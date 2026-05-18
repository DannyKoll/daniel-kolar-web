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
    desc: "Finanční plán dává jednotlivým rozhodnutím směr. Pomáhá udržet přehled v příjmech, výdajích, rezervách, bydlení, ochraně i investicích tak, aby finance nestály vedle sebe náhodně, ale dávaly smysl vůči vašemu životu, cílům a plánům do budoucna.",
    bullets: ["Přehled a souvislosti", "Jasné priority", "Rozhodnutí, která do sebe zapadají"],
  },
  {
    icon: TrendingUp,
    title: "Tvorba rezervy a majetku",
    desc: "Peníze mají mít různé role. Něco má být po ruce, něco má sloužit na cíle v příštích letech a něco má dlouhodobě růst. Pomohu vám nastavit systém, ve kterém máte rezervu, plán i prostor pro budování majetku.",
    bullets: ["Rezerva po ruce", "Peníze na střednědobé cíle", "Dlouhodobé budování majetku"],
  },
  {
    icon: Shield,
    title: "Ochrana příjmu a rodiny",
    desc: "Dobře nastavená ochrana má držet váš život pohromadě i ve chvíli, kdy přijde nemoc, úraz nebo výpadek příjmu. Cílem není platit co nejvíc, ale chránit to, co by vás a vaši rodinu opravdu mohlo finančně rozhodit.",
    bullets: ["Příjem domácnosti", "Rodina a závazky", "Majetek a odpovědnost"],
  },
  {
    icon: Home,
    title: "Financování bydlení",
    desc: "Bydlení není jen hypotéka a splátka. Důležité je vědět, kolik je bezpečné si půjčit, jak úvěr zapadne do rozpočtu a jak s ním pracovat do budoucna. Cílem není hypotéku jen získat, ale nastavit ji tak, aby vás zbytečně nebrzdila — a ideálně jste se jí mohli zbavit dřív.",
    bullets: ["Bezpečná výše splátky", "Rezerva kolem bydlení", "Cesta k dřívějšímu splacení"],
  },
  {
    icon: PiggyBank,
    title: "Renta a finanční svoboda",
    desc: "Dlouhodobě nastavujeme finance tak, aby jednou část vašich příjmů nestála jen na aktivní práci. Cílem je postupně budovat majetek, který vám v budoucnu dá větší klid, více možností a menší závislost na práci.",
    bullets: ["Dlouhý horizont", "Pravidelné investování", "Budoucí příjem z majetku"],
  },
  {
    icon: RefreshCw,
    title: "Dlouhodobá péče",
    desc: "Když s klientem navážu spolupráci, beru ji dlouhodobě. Chci vás doprovázet k vašim cílům, pravidelně se vracet k tomu, co už máte nastavené, a hlídat, abyste zbytečně neplatili víc, než je nutné — například kvůli zdražujícím smlouvám nebo změnám ze strany institucí.",
    bullets: ["Dlouhodobá spolupráce", "Pravidelné kontroly nastavení", "Hlídání zbytečných nákladů"],
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
            Finance poskládané do{" "}
            <span className="gold-text">jednoho plánu</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            Nejde o to mít několik smluv vedle sebe. Důležité je, aby rezerva,
            bydlení, ochrana příjmu, investice i budoucí renta dávaly smysl
            společně — vzhledem k vašemu životu, cílům a tomu, co se může v
            čase měnit.
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

function ServiceCard({ icon: Icon, title, desc, bullets, index, delay }) {
  return (
    <article
      className="service-card group relative overflow-hidden rounded-2xl p-7 sm:p-8 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
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
    </article>
  );
}
