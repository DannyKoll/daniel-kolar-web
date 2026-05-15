import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Markéta H.",
    role: "Lékařka, Praha",
    initials: "MH",
    text: "Daniel mi přerovnal pojištění tak, že platím méně a mám lepší krytí. Hlavně mi konečně někdo srozumitelně vysvětlil, co vlastně mám.",
  },
  {
    name: "Tomáš K.",
    role: "OSVČ, Brno",
    initials: "TK",
    text: "Vyřídili jsme spolu hypotéku v rekordním čase. Všechno měl připravené, nemusel jsem řešit jediný papír. Naprostá profesionalita.",
  },
  {
    name: "Manželé Novákovi",
    role: "Rodina s dětmi, Plzeň",
    initials: "MN",
    text: "Sestavil nám dlouhodobý finanční plán, který dává smysl i nám laikům. Po roce vidíme reálné výsledky — a hlavně máme klid.",
  },
  {
    name: "Petra S.",
    role: "Manažerka, Ostrava",
    initials: "PS",
    text: "Investice mi vždycky přišly jako věda pro vyvolené. Daniel mi je rozložil tak, abych pochopila každý krok. Doporučuji všem známým.",
  },
];

export default function References() {
  return (
    <section
      id="reference"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/[0.05] blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-navy-700/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
              Reference
            </span>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Co o spolupráci říkají <span className="gold-text">moji klienti</span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-2 text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="ml-2 text-sm text-slate-300">
              Průměrné hodnocení 5,0
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Testimonial key={t.name} {...t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial({ name, role, initials, text, delay }) {
  return (
    <article
      className="service-card group relative rounded-2xl p-7 sm:p-8 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote
        size={36}
        className="text-gold-500/30 mb-3"
        strokeWidth={1.5}
      />

      <p className="text-slate-200 text-[15px] sm:text-base leading-relaxed mb-6 italic">
        „{text}"
      </p>

      <div className="flex items-center gap-4 pt-5 border-t border-gold-500/10">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-700 flex items-center justify-center text-navy-950 font-display font-bold">
          {initials}
        </div>
        <div>
          <div className="font-display text-white">{name}</div>
          <div className="text-xs sm:text-sm text-slate-400">{role}</div>
        </div>
        <div className="ml-auto flex gap-0.5 text-gold-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
      </div>
    </article>
  );
}
