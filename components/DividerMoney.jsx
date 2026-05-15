export default function DividerMoney() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-8 lg:py-9">
        <blockquote className="relative reveal overflow-hidden rounded-[1.35rem] border border-gold-500/12 bg-navy-900/34 px-5 py-7 sm:px-8 sm:py-8 text-center shadow-card">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <p className="font-display italic text-lg sm:text-xl lg:text-2xl text-white leading-[1.35] tracking-tight max-w-4xl mx-auto">
            <span className="text-gold-400/55 not-italic mr-1">“</span>
            Pomohu vám ukázat, jak{" "}
            <span className="gold-text not-italic font-medium">
              mohou peníze pracovat pro vás
            </span>
            , ne jen vy pro&nbsp;ně.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-500/45" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-gold-400/85 font-medium">
            Daniel Kolář
          </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-500/45" />
          </div>
        </blockquote>
      </div>
    </section>
  );
}
