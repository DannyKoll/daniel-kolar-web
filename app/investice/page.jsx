import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Compass,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Investice | Daniel Kolář",
  description:
    "Investiční poradenství na míru. Portfolio podle cíle, horizontu, rezervy a vztahu k riziku.",
};

const pillars = [
  {
    icon: Compass,
    title: "Cíl a horizont",
    text: "Nejdřív si ujasníme, proč investujete, kdy peníze budete potřebovat a co od nich čekáte.",
  },
  {
    icon: ShieldCheck,
    title: "Riziko pod kontrolou",
    text: "Portfolio nestavím podle módních tipů, ale podle toho, jak velké výkyvy dávají ve vašem životě smysl.",
  },
  {
    icon: Clock3,
    title: "Dlouhodobá péče",
    text: "Investice nejsou jednorázový podpis. Pravidelně je revidujeme podle trhu i podle změn ve vašem životě.",
  },
];

const process = [
  "Zmapujeme rezervu, příjmy, závazky a cíle.",
  "Rozdělíme peníze podle horizontu: rezerva, střednědobé cíle, dlouhodobé investice.",
  "Navrhnu konkrétní skladbu portfolia a srozumitelně vysvětlím, proč tam jednotlivé části jsou.",
  "Po spuštění držíme plán pod kontrolou a jednou za čas ho upravíme podle reality.",
];

const portfolioParts = [
  { label: "Krátkodobá rezerva", value: "klid" },
  { label: "Pravidelné investice", value: "disciplína" },
  { label: "Dlouhodobý růst", value: "čas" },
  { label: "Ochrana plánu", value: "rezerva" },
];

export default function InvestmentPage() {
  return (
    <main className="relative overflow-hidden bg-navy-950">
      <ScrollReveal />
      <Navbar />

      <section
        id="top"
        className="relative min-h-[82svh] overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      >
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_65%_0%,rgba(30,68,110,0.92)_0%,rgba(12,35,64,0.85)_44%,rgba(7,23,43,1)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.045)_0%,transparent_42%,rgba(201,169,97,0.08)_100%)]" />
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-navy-950" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Link
              href="/#sluzby"
              className="reveal mb-7 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              <ArrowLeft size={16} />
              Zpět na služby
            </Link>

            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 backdrop-blur-sm">
              <TrendingUp size={15} className="text-gold-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-200">
                Investice
              </span>
            </div>

            <h1 className="reveal font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Portfolio, které má{" "}
              <span className="gold-text">směr i klid</span>
            </h1>

            <p className="reveal mt-7 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
              Investice pro mě nejsou tip na jeden fond. Jsou to promyšlený
              plán, který vychází z vašeho života: z rezervy, cílů, času,
              příjmů a toho, jak dobře spíte, když trhy zrovna kolísají.
            </p>

            <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:text-base"
              >
                Probrat investice
                <ArrowRight size={18} />
              </a>
              <a
                href="#jak-investuji"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium sm:text-base"
              >
                Jak to stavím
              </a>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <InvestmentVisual />
          </div>
        </div>
      </section>

      <section
        id="jak-investuji"
        className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      >
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,1)_0%,rgba(10,29,52,0.95)_48%,rgba(7,23,43,1)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                Jak investuji s klienty
              </span>
            </div>

            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Nejdřív plán. Až potom{" "}
              <span className="gold-text">konkrétní produkty</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="reveal rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/[0.08]">
                  <pillar.icon size={24} className="text-gold-300" />
                </div>
                <h3 className="font-display text-2xl text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />
        <div className="absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-gold-500/[0.045] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
          <div className="reveal lg:col-span-5">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                Postup
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Aby investice nebyla černá skříňka
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300/90">
              Každý krok má být pochopitelný. Když víte, proč něco v portfoliu
              máte, mnohem snáz vydržíte i období, kdy trhy nejsou příjemné.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="reveal flex gap-4 rounded-2xl border border-gold-500/10 bg-navy-950/45 p-5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/[0.08] font-display text-sm text-gold-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-slate-200 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_50%,rgba(19,47,78,0.55)_0%,rgba(7,23,43,0)_72%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="reveal lg:col-span-6">
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Co spolu u investic typicky řešíme
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300/90">
                Cílem není mít složité portfolio. Cílem je mít takové
                portfolio, které má jasnou roli, odpovídá vašemu životu a dá se
                dlouhodobě udržet.
              </p>
            </div>

            <div className="reveal lg:col-span-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {portfolioParts.map((part) => (
                  <div
                    key={part.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="flex-shrink-0 text-gold-400"
                      />
                      <h3 className="font-display text-lg text-white">
                        {part.label}
                      </h3>
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      {part.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

function InvestmentVisual() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-4 rotate-[-2deg] rounded-[2rem] border border-gold-500/30" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-500/25 bg-navy-900/70 p-6 shadow-card backdrop-blur-md">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-400">
              Investiční plán
            </p>
            <h2 className="mt-2 font-display text-2xl text-white">
              Dlouhodobý růst
            </h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/[0.08]">
            <LineChart size={24} className="text-gold-300" />
          </div>
        </div>

        <div className="space-y-4">
          <VisualRow label="Rezerva" width="42%" />
          <VisualRow label="Fondy a ETF" width="78%" />
          <VisualRow label="Dlouhodobé cíle" width="64%" />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
          <VisualMetric icon={BarChart3} value="3+" label="horizonty" />
          <VisualMetric icon={ShieldCheck} value="1" label="plán" />
          <VisualMetric icon={TrendingUp} value="čas" label="výhoda" />
        </div>
      </div>
    </div>
  );
}

function VisualRow({ label, width }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        <span className="text-gold-300">role v portfoliu</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-navy-950/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-700 to-gold-300"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function VisualMetric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
      <Icon size={16} className="mb-2 text-gold-300" />
      <div className="font-display text-xl text-white">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
    </div>
  );
}
