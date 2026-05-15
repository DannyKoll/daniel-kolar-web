export default function DividerExperience() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-navy-950 pointer-events-none" />
      <div className="absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-transparent to-navy-950 pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-5 sm:py-6 lg:py-7">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-gold-500/12 bg-navy-900/38 px-5 py-5 sm:px-7 sm:py-6 shadow-card">
          <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent" />
          <div className="grid sm:grid-cols-12 items-center gap-5 sm:gap-7">
            <div className="sm:col-span-4 text-center sm:text-left reveal">
            <div className="flex items-baseline justify-center sm:justify-end gap-1 leading-none">
              <span
                className="font-display gold-text font-semibold tracking-tight leading-none"
                style={{ fontSize: "clamp(2.9rem, 5.6vw, 4.35rem)" }}
              >
                11
              </span>
              <span
                className="font-display numeral-outline leading-none"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
              >
                +
              </span>
            </div>
            <div className="mt-1 text-[10px] tracking-[0.38em] uppercase text-gold-400/80 font-medium">
              Let praxe
            </div>
          </div>

            <div className="hidden sm:flex sm:col-span-1 justify-center">
              <div className="h-14 lg:h-16 w-px bg-gradient-to-b from-transparent via-gold-500/35 to-transparent" />
            </div>

            <div className="sm:col-span-7 text-center sm:text-left reveal">
              <p className="font-display text-base sm:text-lg lg:text-xl text-white leading-[1.32] tracking-tight">
              Více než{" "}
              <span className="gold-text font-semibold">11 let zkušeností</span>{" "}
              s&nbsp;optimalizací a&nbsp;ochranou vašich&nbsp;financí.
            </p>
              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 text-[10px] tracking-[0.22em] uppercase text-slate-400">
                <span>Hypotéky</span>
                <span className="text-gold-500/60">/</span>
                <span>Pojištění</span>
                <span className="text-gold-500/60">/</span>
                <span>Investice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
