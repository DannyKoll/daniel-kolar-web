import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Layers3,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Finance jako celek | Daniel Kolář",
  description:
    "Co znamená dívat se na hypotéku, rezervu, pojištění, investice a rentu jako na jeden propojený plán.",
  alternates: {
    canonical: "/finance-jako-celek",
  },
};

const separated = [
  "Hypotéka se řeší jen jako splátka.",
  "Pojištění je jen další smlouva.",
  "Rezerva vzniká až z toho, co zbyde.",
  "Investice běží bez jasné role v plánu.",
];

const connected = [
  "Hypotéka má bezpečný rámec v rozpočtu.",
  "Pojištění chrání příjem, rodinu a plán.",
  "Rezerva dává klid a prostor pro rozhodování.",
  "Investice a renta navazují na cíle i čas.",
];

const outcomes = [
  {
    icon: Home,
    eyebrow: "Bydlení",
    title: "Bezpečnější hypotéka",
    text: "Když kolem hypotéky vzniká rezerva, ochrana příjmu a dlouhodobý plán, splácení nestojí jen na tom, že každý měsíc všechno vyjde přesně. Postupně může vznikat i prostor pro rychlejší snižování dluhu.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Ochrana",
    title: "Pojištění, které má svoje místo",
    text: "Na začátku má chránit hlavně příjem, rodinu a závazky. Jak ale roste rezerva a majetek, některá rizika už nemusí stát jen na pojistce. Cílem není být celý život maximálně pojištěný, ale postupně budovat vlastní ochranu.",
  },
  {
    icon: Layers3,
    eyebrow: "Cíle",
    title: "Peníze rozdělené podle účelu",
    text: "Část peněz má být po ruce, část připravená na cíle v příštích letech a část může dlouhodobě pracovat na rentu. Díky tomu víte, co má jakou roli a nemusíte sahat na dlouhodobé peníze ve špatnou chvíli.",
  },
  {
    icon: PiggyBank,
    eyebrow: "Budoucnost",
    title: "Majetek, renta a víc možností",
    text: "Když jednotlivé kroky táhnou jedním směrem, finance se postupně mění z placení závazků na tvorbu majetku. Ten může dát větší svobodu vám a jednou pomoct i dětem nebo rodině.",
  },
];

export default function FinanceAsWholePage() {
  return (
    <main className="relative overflow-hidden bg-navy-950">
      <ScrollReveal />
      <Navbar />

      <section
        id="top"
        className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14"
      >
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_88%_64%_at_50%_0%,rgba(30,68,110,0.88)_0%,rgba(12,35,64,0.82)_44%,rgba(7,23,43,1)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.045)_0%,transparent_42%,rgba(201,169,97,0.08)_100%)]" />
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-navy-950" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/#sluzby"
            className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            <ArrowLeft size={16} />
            Zpět na hlavní stránku
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-200">
                Finance jako celek
              </span>
            </div>

            <h1 className="reveal font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Finance jako celek{" "}
              <span className="gold-text">v praxi</span>
            </h1>

            <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
              Krátké vysvětlení, proč hypotéka, rezerva, pojištění, investice
              a renta dávají největší smysl ve chvíli, kdy do sebe zapadají.
            </p>
          </div>

          <div id="video" className="reveal mx-auto mt-10 max-w-5xl scroll-mt-28">
            <VideoFrame />
          </div>

          <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:text-base"
            >
              Chci projít svoje finance jako celek
              <ArrowRight size={18} />
            </a>
            <a
              href="#prinosy"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              Co to přinese v praxi
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />
        <div className="absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-gold-500/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                Rozdíl v přístupu
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Jednotlivé produkty nejsou cíl. Jsou to{" "}
              <span className="gold-text">součásti plánu</span>.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-gold-500/14 bg-navy-950/54 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              <ComparisonColumn
                eyebrow="Když stojí zvlášť"
                items={separated}
                muted
              />
              <ComparisonColumn
                eyebrow="Když fungují jako celek"
                items={connected}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="prinosy"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_48%,rgba(19,47,78,0.62)_0%,rgba(7,23,43,0)_72%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="reveal lg:sticky lg:top-28 lg:col-span-4">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-gold-500" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                  Co to přinese
                </span>
              </div>
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Prakticky, ne jen hezky na papíře
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300/90">
                Smysl financí jako celku je jednoduchý: každé rozhodnutí má mít
                jasnou roli a posouvat vás k většímu klidu, majetku a
                možnostem.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative space-y-7 lg:space-y-9">
                <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-gradient-to-b from-gold-500/10 via-gold-500/35 to-gold-500/10 sm:block" />
                {outcomes.map((outcome, index) => (
                  <OutcomeRow
                    key={outcome.title}
                    outcome={outcome}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-x-0 top-0 h-px divider-line opacity-15" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="reveal font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Cílem není mít víc finančních produktů.
            <span className="gold-text"> Cílem je mít jasný směr.</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Pokud chcete zjistit, jestli vaše finance opravdu táhnou jedním
            směrem, můžeme se na ně společně podívat v širších souvislostech.
          </p>
          <div className="reveal mt-9">
            <a
              href="#kontakt"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:text-base"
            >
              Domluvit úvodní konzultaci
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

function VideoFrame() {
  return (
    <div className="relative mx-auto">
      <div className="absolute -inset-3 rotate-[-1.2deg] rounded-[2rem] border border-gold-500/24" />
      <div className="relative aspect-video overflow-hidden rounded-[1.6rem] border border-gold-500/24 bg-navy-950/80 shadow-card backdrop-blur-md">
        <iframe
          src="https://player.vimeo.com/video/1204105127?badge=0&autopause=0&player_id=0&app_id=58479"
          title="Finance jako celek"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function ComparisonColumn({ eyebrow, items, muted = false }) {
  return (
    <div
      className={`p-6 sm:p-8 ${
        muted
          ? "border-b border-gold-500/10 lg:border-b-0 lg:border-r"
          : "bg-gold-500/[0.045]"
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.25em] ${
          muted ? "text-slate-400" : "text-gold-300"
        }`}
      >
        {eyebrow}
      </p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <span
              className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                muted ? "bg-slate-500" : "bg-gold-400"
              }`}
            />
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                muted ? "text-slate-400" : "text-slate-100"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomeRow({ outcome, index }) {
  const Icon = outcome.icon;

  return (
    <article className="reveal relative flex gap-5 sm:pl-14">
      <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/28 bg-navy-950 text-gold-300 shadow-[0_16px_44px_-28px_rgba(201,169,97,0.9)] sm:absolute sm:left-0 sm:top-1">
        <Icon size={20} />
      </div>
      <div className="min-w-0 border-b border-white/10 pb-7">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="font-display text-xl text-gold-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {outcome.eyebrow}
          </span>
        </div>
        <h3 className="font-display text-2xl leading-tight text-white sm:text-3xl">
          {outcome.title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
          {outcome.text}
        </p>
      </div>
    </article>
  );
}
