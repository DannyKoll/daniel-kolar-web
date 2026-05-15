export default function DividerExperience() {
  return (
    <section className="relative -mt-14 sm:-mt-16 lg:-mt-20 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,0)_0%,rgba(12,35,64,0.45)_45%,rgba(7,23,43,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-950/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-px w-[min(72rem,78vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/22 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
        <div className="grid sm:grid-cols-12 items-center gap-7 sm:gap-10">
          <div className="sm:col-span-4 text-center sm:text-left reveal">
            <div className="flex items-baseline justify-center sm:justify-start gap-1 leading-none">
              <span
                className="font-display gold-text font-semibold tracking-tight leading-none"
                style={{ fontSize: "clamp(3.2rem, 6.4vw, 5rem)" }}
              >
                11
              </span>
              <span
                className="font-display numeral-outline leading-none"
                style={{ fontSize: "clamp(1.55rem, 3vw, 2.45rem)" }}
              >
                +
              </span>
            </div>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-gold-400/80 font-medium">
              Let praxe
            </div>
          </div>

          <div className="hidden sm:flex sm:col-span-1 justify-center">
            <div className="h-16 lg:h-20 w-px bg-gradient-to-b from-transparent via-gold-500/36 to-transparent" />
          </div>

          <div className="sm:col-span-7 text-center sm:text-left reveal">
            <p className="font-display text-lg sm:text-xl lg:text-2xl text-white leading-[1.3] tracking-tight max-w-3xl">
              Více než{" "}
              <span className="gold-text font-semibold">11 let zkušeností</span>{" "}
              s&nbsp;optimalizací a&nbsp;ochranou vašich&nbsp;financí.
            </p>
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-slate-400/90">
              <span>Hypotéky</span>
              <span className="text-gold-500/55">Pojištění</span>
              <span>Investice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
