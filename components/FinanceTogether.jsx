import Link from "next/link";
import { ArrowRight } from "lucide-react";

const financeParts = [
  {
    label: "Hypotéka",
    className: "left-[6%] top-[13%] sm:left-[8%] sm:top-[16%]",
  },
  {
    label: "Rezerva",
    className: "right-[8%] top-[10%] sm:right-[12%] sm:top-[14%]",
  },
  {
    label: "Pojištění",
    className: "left-[2%] top-[58%] sm:left-[4%] sm:top-[58%]",
  },
  {
    label: "Investice",
    className: "right-[2%] top-[55%] sm:right-[5%] sm:top-[58%]",
  },
  {
    label: "Renta",
    className: "left-1/2 top-[78%] -translate-x-1/2",
  },
];

export default function FinanceTogether() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 sm:py-14 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-px divider-line opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-px divider-line opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(19,47,78,0.48)_0%,rgba(7,23,43,0)_45%,rgba(201,169,97,0.055)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7 reveal">
            <div className="relative mx-auto aspect-[1.38] max-w-[720px] rounded-[1.5rem] border border-gold-500/10 bg-navy-900/24 px-3 py-4 sm:px-8 sm:py-7 shadow-[0_28px_80px_-58px_rgba(201,169,97,0.55)]">
              <div className="absolute inset-4 rounded-[1.2rem] border border-white/[0.04]" />
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-gold-500/25" />
              <div className="absolute left-1/2 top-1/2 h-[47%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-gold-500/12" />

              <svg
                className="absolute inset-0 h-full w-full text-gold-500/28"
                viewBox="0 0 720 520"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M360 260 C220 120 146 108 112 134"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M360 260 C492 104 586 92 614 122"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M360 260 C196 272 104 326 84 374"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M360 260 C528 274 612 328 638 374"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M360 260 C352 360 356 420 360 448"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-500/35 bg-navy-950/90 text-center shadow-[0_18px_56px_-24px_rgba(201,169,97,0.75)] sm:h-36 sm:w-36">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <div className="font-display text-xl leading-none text-white sm:text-2xl">
                    Finance
                  </div>
                  <div className="font-display text-[17px] leading-none text-slate-300/85 sm:text-xl">
                    jako
                  </div>
                  <div className="font-display text-xl leading-none gold-text sm:text-2xl">
                    celek
                  </div>
                </div>
              </div>

              {financeParts.map((part) => (
                <div
                  key={part.label}
                  className={`absolute ${part.className} rounded-full border border-gold-500/18 bg-navy-950/82 px-3 py-2 text-[12px] font-medium text-slate-200 shadow-[0_12px_34px_-28px_rgba(201,169,97,0.8)] backdrop-blur sm:px-4 sm:text-sm`}
                >
                  {part.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:self-center lg:pl-2 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-[13px] sm:text-sm font-semibold tracking-[0.24em] uppercase text-gold-300">
                Finance jako celek
              </span>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Jsem zastáncem toho, aby finance fungovaly jako jeden celek.
              Hypotéka, rezerva, pojištění, investice i renta by neměly stát
              vedle sebe náhodně, ale navazovat na váš život, cíle a možnosti.
              Díky tomu se z jednotlivých rozhodnutí stává plán, který vám
              pomáhá dnes, za pár let i ve chvíli, kdy se něco změní.
            </p>

            <div className="mt-7 flex">
              <Link
                href="/finance-jako-celek"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/45 bg-gold-500/10 px-5 py-3 text-sm font-semibold text-gold-100 shadow-[0_18px_42px_-30px_rgba(201,169,97,0.9)] transition-all hover:-translate-y-0.5 hover:border-gold-400/80 hover:bg-gold-500/16 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:px-6"
              >
                Krátké video: co vám to přinese
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Na další stránce najdete krátké vysvětlení a konkrétní příklady,
              jak do sebe jednotlivé části financí zapadají.
            </p>

            <div className="mt-7 h-px w-full max-w-sm bg-gradient-to-r from-gold-500/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
