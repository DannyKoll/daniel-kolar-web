import { Coffee, Search, Compass, Handshake } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Coffee,
    title: "Nezávazné setkání",
    desc: "Sejdeme se osobně nebo online. Posloucháme, ptám se, ujasníme si, co od financí potřebujete a kam chcete dojít.",
  },
  {
    n: "02",
    icon: Search,
    title: "Analýza vaší situace",
    desc: "Projdu vaše stávající smlouvy, příjmy, výdaje i závazky. Zjistím, kde leží rezervy a co je potřeba ošetřit přednostně.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Návrh řešení na míru",
    desc: "Připravím přehledný plán s konkrétními kroky. Vše vám srozumitelně vysvětlím a společně dolaďujeme detaily.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "Realizace a péče",
    desc: "Pomůžu vám vše zařídit, ušetřím čas i papírování. A pravidelně se vracíme, abychom plán aktualizovali podle života.",
  },
];

export default function Process() {
  return (
    <section
      id="proces"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900/95" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/[0.04] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
              Jak spolupracujeme
            </span>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Cesta k vašemu <span className="gold-text">finančnímu klidu</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            Spolupráce probíhá v jasných krocích. Nikdy nic nepodepisujete bez
            toho, abyste přesně věděli, co a proč.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <Step key={s.n} {...s} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, icon: Icon, title, desc, delay }) {
  return (
    <div
      className="relative reveal text-center lg:text-left"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Step number circle */}
      <div className="relative inline-flex items-center justify-center w-24 h-24 mb-5 mx-auto lg:mx-0">
        <div className="absolute inset-0 rounded-full border border-gold-500/20 bg-navy-900/60" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/30 flex items-center justify-center">
          <Icon size={26} className="text-gold-400" />
        </div>
        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-gradient-to-br from-gold-300 to-gold-700 flex items-center justify-center text-xs font-bold text-navy-950 shadow-glow">
          {n}
        </div>
      </div>

      <h3 className="font-display text-lg sm:text-xl text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-slate-300/85 leading-relaxed">{desc}</p>
    </div>
  );
}
