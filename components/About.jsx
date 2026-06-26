import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Peníze řešené v souvislostech",
  "Srozumitelně, bez zbytečných složitostí",
  "Spolupráce, která se přizpůsobuje životu",
  "Cesta k většímu klidu, majetku a možnostem",
];

export default function About() {
  return (
    <section
      id="o-mne"
      className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,1)_0%,rgba(10,29,52,0.95)_48%,rgba(7,23,43,1)_100%)]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold-500/[0.04] blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image left */}
          <div className="order-2 lg:order-1 lg:col-span-5 reveal">
            <div className="relative w-[260px] max-w-[calc(100%-3rem)] sm:w-full sm:max-w-[21rem] lg:max-w-[24rem] mx-auto lg:mx-0">
              {/* Decorative offset border */}
              <div className="absolute -inset-2 sm:-inset-4 border border-gold-500/30 rounded-[1.8rem] translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-14 h-14 sm:w-24 sm:h-24 border-l-2 border-t-2 border-gold-500/40 rounded-tl-2xl sm:rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-14 h-14 sm:w-24 sm:h-24 border-r-2 border-b-2 border-gold-500/40 rounded-br-2xl sm:rounded-br-3xl" />

              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-gold-500/20 bg-navy-800 shadow-card">
                <Image
                  src="/Foto-3.jpg"
                  alt="Daniel Kolář"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content right */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:-mt-12 reveal">
            <div className="mb-5 inline-flex items-center gap-2 lg:hidden">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold-400">
                Můj přístup
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Co pro vás <span className="gold-text">mohu udělat</span>
            </h2>

            <div className="mt-7 space-y-5 text-slate-300/90 leading-relaxed text-[15px] sm:text-base">
              <p>
                Peníze nemají být jen něco, co každý měsíc řešíte. Mají vám
                dávat směr, klid a postupně otevírat větší možnosti. Pomohu vám
                dát jednotlivá rozhodnutí do souvislostí tak, aby dávala smysl
                nejen dnes, ale i za několik let&nbsp;— v&nbsp;běžném životě,
                při změnách i při plánování budoucnosti.
              </p>
              <p>
                Mým cílem je, abyste se u mě cítili jako v&nbsp;bavlnce. Aby
                důležité kroky měly jasný směr, někdo je s&nbsp;vámi průběžně
                hlídal a&nbsp;vy jste na to nebyli sami.
              </p>
              <p className="text-slate-200">
                Chci vás dobře poznat, porozumět vašim plánům i&nbsp;tomu, co
                je pro vás důležité. Společně nastavíme cestu, která vám pomůže
                chránit příjem, tvořit rezervy, budovat majetek a&nbsp;časem
                snižovat závislost na příjmu z&nbsp;práce. Ne proto, aby bylo
                všechno jen „nějak vyřešené“, ale aby vaše peníze postupně
                pracovaly víc pro vás.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-gold-400"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-gold-300 font-medium hover:text-gold-200 group"
              >
                Pojďme se potkat
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                <p>
                  Než si domluvíme schůzku, můžete mě nejdřív poznat ve videu.
                </p>
                <a
                  href="/finance-jako-celek#video"
                  className="group mt-2 inline-flex items-center gap-1.5 font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  Pustit krátké video
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
