import {
  Coffee,
  Search,
  Compass,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Coffee,
    title: "Nezávazné setkání",
    desc: "Nejdřív mě zajímáte vy — vaše zkušenosti, plány a to, co je pro vás ve financích důležité. A pokud přicházíte s konkrétní otázkou, začneme právě u ní.",
  },
  {
    n: "02",
    icon: Search,
    title: "Širší pohled",
    desc: "Podíváme se na vaše finance v souvislostech, aby dávaly smysl vůči vašemu životu, cílům i tomu, kam se chcete posunout.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Plán na míru",
    desc: "Připravím vám plán, který odpovídá vám, vašemu životu a tomu, co od peněz očekáváte. Ukážu vám, jak z nich získat maximum.",
  },
  {
    n: "04",
    icon: HeartHandshake,
    title: "Dlouhodobá péče",
    desc: "Pomohu vám projít konkrétními kroky a budu s vámi průběžně sledovat změny, aby vaše finance dál dávaly smysl v souvislostech.",
  },
];

export default function Process() {
  return (
    <section
      id="proces"
      className="relative pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/[0.04] blur-3xl" />
      <div className="absolute left-0 bottom-0 w-[420px] h-[420px] rounded-full bg-navy-600/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
              Cesta k vašemu finančnímu klidu
            </span>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Jak <span className="gold-text">spolupracujeme</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Od prvního setkání až po dlouhodobou péči — srozumitelně, lidsky a
            podle toho, co je pro vás důležité.
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
