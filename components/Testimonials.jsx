"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: [
      "Na první schůzku jsem šel spíš ze zvědavosti. Neměl jsem pocit, že mám ve financích nějaký velký problém. Něco jsem si odkládal, pár věcí už jsem měl nastavených a bral jsem to tak, že je to asi v pořádku.",
      "U pana Koláře jsem ocenil hlavně lidský přístup, profesionalitu a to, že mi věci vysvětlil jednoduše. Po schůzce mi došlo, že vlastně nemám úplně jasno, proč mám některé věci nastavené právě takhle. Něco jsme nechali, něco upravili a hlavně jsem v tom konečně získal větší přehled.",
    ],
    author: "Martin Šimek",
    context: "Dlouhodobá spolupráce",
  },
  {
    text: [
      "Finančního poradce jsem už měl, takže jsem od schůzky nečekal nic zásadního. Daniel se ale neptal jen na jednu konkrétní věc. Prošli jsme bydlení, rezervu, investice i to, co chci řešit do budoucna.",
      "Najednou jsem viděl, že některé věci spolu souvisí víc, než jsem si myslel. Něco zůstalo tak, jak bylo, něco jsme změnili, ale poprvé jsem měl pocit, že vím proč.",
    ],
    author: "Petr Vondrák",
    context: "Finance v souvislostech",
  },
  {
    text: [
      "Mysleli jsme, že u hypotéky půjde hlavně o sazbu. U pana Koláře jsme ocenili hlavně klid, srozumitelné vysvětlení a to, že na nás netlačil. Prošli jsme spolu i splátku, rezervu po nastěhování a co by se stalo, kdyby se nám změnil příjem.",
      "Díky tomu jsme se nerozhodovali jen podle nejlevnější nabídky, ale podle toho, co zvládneme dlouhodobě a s větším klidem.",
    ],
    author: "Eva a Tomáš Hrubí",
    context: "Financování bydlení",
  },
  {
    text: [
      "Chtěl jsem hypotéku splatit co nejrychleji. Měl jsem pocit, že čím dřív bude pryč, tím líp.",
      "Daniel mi ale ukázal čísla i druhou variantu — neposílat všechno navíc jen do hypotéky a část peněz dál odkládat. Nakonec jsem se rozhodoval podle propočtu, ne jen podle pocitu.",
    ],
    author: "David Kříž",
    context: "Hypotéka a budování majetku",
  },
  {
    text: [
      "O rentě jsem dřív přemýšlela spíš obecně. Líbila se mi představa mít jednou víc volnosti, ale vůbec jsem nevěděla, kolik peněz by k tomu bylo potřeba.",
      "Na schůzce jsme to poprvé dali do čísel. Najednou jsem věděla, jaký příjem bych jednou chtěla mít, kolik kapitálu by k tomu bylo potřeba a co pro to můžu začít dělat už dnes.",
    ],
    author: "Lenka Dvořáková",
    context: "Renta a finanční svoboda",
  },
  {
    text: [
      "Chtěli jsme hlavně vědět, jestli máme finance nastavené rozumně i do budoucna. Máme děti, hypotéku, běžné výdaje a nechtěli jsme jen doufat, že to nějak vyjde.",
      "Daniel nám ukázal, co řešit hned, co může počkat a kde jsou největší rizika. Líbilo se nám, že nám neříkal jen hezké věci, ale ukázal i realistický pohled.",
    ],
    author: "Martina a Lukáš Černí",
    context: "Rodinné finance",
  },
  {
    text: [
      "U investic jsem dřív řešila hlavně to, kde to víc vydělá. Daniel se mě ale nejdřív zeptal, kdy ty peníze budu potřebovat a na co.",
      "To mi dost změnilo pohled. Nehoním už každou příležitost a víc řeším, jestli investice odpovídají tomu, co s těmi penězi plánuju.",
    ],
    author: "Veronika Tichá",
    context: "Investice",
  },
  {
    text: [
      "Nejvíc oceňuji, že spolu finance neřešíme jednorázově. Když se mi změnila práce a později jsme začali řešit bydlení, nemuseli jsme začínat od nuly.",
      "Vrátili jsme se k tomu, co už bylo nastavené, a upravili to podle nové situace. Mám díky tomu pocit, že se mám na koho obrátit i ve chvíli, kdy se něco změní.",
    ],
    author: "Lucie Kadlecová",
    context: "Průběžná péče",
  },
];

export default function Testimonials({ premiumTone = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tone = premiumTone
    ? {
        section: "overflow-visible pt-14 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32",
        base: "bg-[#eee6d9]",
        wash: "bg-[linear-gradient(180deg,rgba(238,230,217,1)_0%,rgba(248,244,236,0.98)_52%,rgba(238,230,217,1)_100%)]",
        edge: "via-[#765b2c]/15",
        labelLine: "bg-[#8e6c2d]/50",
        label: "text-[#846329]",
        quote: "text-[#957033]/55",
        body: "text-[#203541]/80",
        divider: "via-[#765b2c]/20",
        author: "text-[#142936]",
        context: "text-[#536873]",
        arrow: "text-[#86672d] hover:bg-[#86672d]/[0.07] hover:text-[#644a1c] focus:ring-[#86672d]/20",
        dot: "bg-[#86672d]/20 hover:bg-[#86672d]/50",
        activeDot: "bg-[#a77e31]",
      }
    : {
        section: "overflow-hidden pt-5 pb-8 sm:pt-7 sm:pb-9 lg:pt-8 lg:pb-10",
        base: "bg-navy-950",
        wash: "bg-[linear-gradient(180deg,rgba(7,23,43,1)_0%,rgba(9,29,52,0.92)_48%,rgba(7,23,43,1)_100%)]",
        edge: "via-gold-500/18",
        labelLine: "bg-gold-500/70",
        label: "text-gold-400",
        quote: "text-gold-300/70",
        body: "text-slate-200/90",
        divider: "via-gold-500/25",
        author: "text-white",
        context: "text-slate-400",
        arrow: "text-gold-200 hover:bg-gold-500/[0.08] hover:text-gold-100 focus:ring-gold-400/25",
        dot: "bg-gold-500/25 hover:bg-gold-400/60",
        activeDot: "bg-gold-300",
      };

  const goTo = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 14000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="reference"
      className={`relative ${tone.section}`}
      aria-label="Reference klientů"
    >
      <div className={`absolute inset-0 ${tone.base}`} />
      <div className={`absolute inset-0 ${tone.wash}`} />
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${tone.edge} to-transparent`} />
      {!premiumTone && <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/12 to-transparent" />}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className={`h-px w-8 ${tone.labelLine}`} />
              <span className={`text-xs uppercase tracking-[0.25em] sm:text-sm ${tone.label}`}>
                Reference klientů
              </span>
              <span className={`h-px w-8 ${tone.labelLine}`} />
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <Quote
              size={24}
              className={`mx-auto mb-4 ${tone.quote}`}
              aria-hidden="true"
            />

            <div className="overflow-hidden" aria-live="polite">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.author}
                    className="min-w-full"
                    aria-hidden={activeIndex !== index}
                  >
                    <p className={`mx-auto max-w-5xl text-center text-[15px] leading-relaxed sm:text-base lg:text-[17px] ${tone.body}`}>
                      „{testimonial.text.join(" ")}“
                    </p>

                    <div className={`mx-auto mt-6 h-px max-w-xs bg-gradient-to-r from-transparent ${tone.divider} to-transparent`} />

                    <div className="mt-4 text-center">
                      <p className={`text-sm font-semibold sm:text-base ${tone.author}`}>
                        {testimonial.author}
                      </p>
                      <p className={`mt-1 text-sm ${tone.context}`}>
                        {testimonial.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition focus:outline-none focus:ring-2 ${tone.arrow}`}
                aria-label="Předchozí reference"
              >
                <ChevronLeft size={21} />
              </button>

              <div
                className="flex items-center gap-2"
                aria-label="Přepnout referenci"
              >
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index
                        ? `w-7 ${tone.activeDot}`
                        : `w-2 ${tone.dot}`
                    }`}
                    aria-label={`Zobrazit referenci ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition focus:outline-none focus:ring-2 ${tone.arrow}`}
                aria-label="Další reference"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
