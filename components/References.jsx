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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,1)_0%,rgba(19,47,78,0.62)_52%,rgba(7,23,43,1)_100%)]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/[0.05] blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-navy-700/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-end mb-14 sm:mb-20">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
                Reference
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Co o spolupráci říkají{" "}
              <span className="gold-text">moji klienti</span>
            </h2>
          </div>

          <div className="reveal lg:justify-self-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/15 bg-gold-500/[0.06] px-4 py-2 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
              <span className="ml-2 text-xs sm:text-sm text-slate-200">
                Průměrné hodnocení 5,0
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto lg:mx-0 lg:max-w-none">
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
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7 reveal backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/25"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote
        size={72}
        className="absolute -right-2 -top-2 text-gold-500/[0.06]"
        strokeWidth={1.2}
      />

      <div className="relative flex items-center gap-4">
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

      <p className="relative mt-6 text-slate-200 text-[15px] sm:text-base leading-relaxed italic">
        „{text}“
      </p>
    </article>
  );
}
