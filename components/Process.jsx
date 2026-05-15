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
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/[0.04] blur-3xl" />
      <div className="absolute left-0 bottom-0 w-[420px] h-[420px] rounded-full bg-navy-600/25 blur-3xl" />

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
          <div className="absolute left-9 right-9 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
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
    <article
      className="relative rounded-2xl border border-gold-500/10 bg-navy-950/45 p-5 sm:p-6 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/25 bg-gradient-to-br from-navy-800 to-navy-950 shadow-[0_18px_36px_-28px_rgba(201,169,97,0.9)]">
          <Icon size={23} className="text-gold-300" />
        </div>
        <span className="font-display text-3xl text-gold-400/45">{n}</span>
      </div>

      <h3 className="font-display text-lg sm:text-xl text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-slate-300/85 leading-relaxed">{desc}</p>
    </article>
  );
}
