import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const trustStats = [
  { value: "11+", label: "let praxe" },
  { value: "Nezávisle", label: "bez tlaku na produkt" },
  { value: "Dlouhodobě", label: "péče i po podpisu" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88svh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-12 lg:pb-14"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(19,47,78,0.9)_0%,rgba(7,23,43,1)_70%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-navy-700/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm mb-6 reveal">
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-xs sm:text-sm tracking-wider text-gold-200 uppercase">
                Osobní finanční poradce
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white reveal">
              Pomohu vám
              <br />
              <span className="relative inline-block">
                <span className="gold-text">od financí</span>
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] divider-line" />
              </span>
              <br />
              získat <span className="italic font-medium">maximum</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed reveal">
              Profesionální, srozumitelné a nezávislé finanční poradenství pro lidi, kteří chtějí se svými penězi nakládat chytře a s klidem.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start reveal">
              <a
                href="#kontakt"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold"
              >
                Nezávazná konzultace
                <ArrowRight size={18} />
              </a>
              <a
                href="#sluzby"
                className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium"
              >
                Prozkoumat služby
              </a>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 reveal">
              {trustStats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-t border-gold-500/20 pt-3 text-center lg:text-left"
                >
                  <div className="font-display text-lg sm:text-xl text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-slate-400 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end reveal">
            <div className="relative photo-frame">
              {/* Decorative gold ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2.2rem] border border-gold-500/30 rotate-[-2deg]" />
              <div className="absolute -inset-1 sm:-inset-1.5 rounded-[2rem] bg-gradient-to-br from-gold-400/30 via-transparent to-gold-700/30 blur-sm" />

              {/* Main photo container */}
              <div className="relative w-[260px] h-[320px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[470px] rounded-[1.8rem] overflow-hidden border border-gold-500/40 shadow-card bg-navy-800">
                <Image
                  src="/daniel-hero.jpg"
                  alt="Daniel Kolář — finanční poradce"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                  className="object-cover"
                />
                {/* Gradient overlay for color harmony */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
