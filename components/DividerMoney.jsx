export default function DividerMoney() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,0)_0%,rgba(19,47,78,0.34)_46%,rgba(7,23,43,0)_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[min(58rem,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12 lg:py-14 text-center">
        <blockquote className="reveal">
          <p className="font-display italic text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] text-white leading-[1.35] tracking-tight max-w-4xl mx-auto">
            <span className="text-gold-400/55 not-italic mr-1">“</span>
            Pomohu vám ukázat, jak{" "}
            <span className="gold-text not-italic font-medium">
              mohou peníze pracovat pro vás
            </span>
            , ne jen vy pro&nbsp;ně.
          </p>

          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-500/45" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-gold-400/85 font-medium">
              Daniel Kolář
            </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-500/45" />
          </div>
        </blockquote>
      </div>
    </section>
  );
}
