"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: [
      "Na první schůzku jsem šel hlavně ze zvědavosti. Neměl jsem pocit, že mám ve financích nějaký problém. Výplata chodila, něco jsem si odkládal a pár věcí už jsem měl nějak nastavených.",
      "Na schůzce mi ale došlo, že finance nejsou jen o řešení problémů. Spíš o tom, jestli dávají směr a jestli jednotlivé věci zapadají do sebe. Něco jsme nechali, něco upravili a hlavně jsem si poprvé udělal větší obrázek.",
      "Dnes spolupracujeme s Danielem už několik let a zpětně jsem rád, že jsem tehdy přišel.",
    ],
    author: "Ondřej Marek",
    context: "Dlouhodobá spolupráce",
  },
  {
    text: [
      "Finančního poradce jsem už měl, takže jsem upřímně nečekal, že mi schůzka s Danielem přinese něco zásadního.",
      "Rozdíl byl v tom, že jsme se nedívali jen na jednotlivé věci zvlášť. Prošli jsme příjem, bydlení, rezervy, investice i plány do budoucna. Najednou jsem viděl finance v souvislostech.",
      "Něco zůstalo tak, jak bylo, něco jsme změnili, ale hlavně jsem konečně pochopil, proč to tak dává smysl.",
    ],
    author: "Jan Konečný",
    context: "Finance v souvislostech",
  },
  {
    text: [
      "S panem Kolářem jsme řešili hypotéku na byt a nejvíc jsme ocenili jeho klidný přístup. Všechno nám vysvětlil normálně, bez složitých řečí, takže jsme se v tom dokázali zorientovat.",
      "Neřešili jsme jen sazbu. Bavili jsme se i o tom, jaká splátka je pro nás bezpečná, kolik si nechat bokem jako rezervu a co může dávat smysl do budoucna.",
      "Díky tomu jsme neměli pocit, že jen procházíme nějakým procesem. Věděli jsme, proč se rozhodujeme právě takhle.",
    ],
    author: "Jana a Michal",
    context: "Financování bydlení",
  },
  {
    text: [
      "Původně jsem měl jasno. Chtěl jsem hypotéku splatit co nejdřív a měl jsem pocit, že čím rychleji se jí zbavím, tím líp.",
      "Pak jsme ale s Danielem prošli čísla, různé varianty a jejich dopad do budoucna. Ukázalo se, že někdy může dávat větší smysl hypotéku rozumně splácet a zároveň vedle ní postupně budovat majetek.",
      "Nakonec jsem se nerozhodoval jen podle pocitu, ale podle konkrétních čísel a plánu.",
    ],
    author: "Aleš Havel",
    context: "Hypotéka a budování majetku",
  },
  {
    text: [
      "O rentě jsem dřív přemýšlela spíš obecně. Bylo by hezké mít jednou víc volnosti, ale nikdy jsem nevěděla, co si pod tím konkrétně představit.",
      "Na schůzce jsme to poprvé dali do čísel. Řekli jsme si, jaký příjem bych jednou chtěla mít, kolik kapitálu by k tomu bylo potřeba a jak se k tomu můžu postupně přibližovat.",
      "Najednou to nebylo jen přání do budoucna, ale něco, co se dá začít řešit konkrétními kroky už dnes.",
    ],
    author: "Barbora Křížová",
    context: "Renta a finanční svoboda",
  },
  {
    text: [
      "S manželem jsme chtěli hlavně vědět, jestli naše finance dávají smysl i do budoucna. Máme děti, hypotéku, běžné výdaje a zároveň jsme nechtěli být celý život úplně závislí jen na příjmu ze zaměstnání.",
      "Náš poradce nám pomohl dát věci dohromady tak, aby na sebe navazovaly. Řešili jsme rezervy, bydlení, ochranu příjmu i dlouhodobé odkládání peněz.",
      "Líbilo se nám, že nám nic nemaloval narůžovo. Spíš nám ukázal realistickou cestu a díky tomu máme větší klid.",
    ],
    author: "Klára a Lukáš Benešovi",
    context: "Rodinné finance",
  },
  {
    text: [
      "Dřív jsem u investic řešila hlavně výnos. Kde to vydělá víc, co je teď zajímavé a jestli mi někde neutíká příležitost.",
      "Daniel se mě ale nejdřív zeptal na jednodušší věc: k čemu ty peníze vlastně mají sloužit a kdy je budu potřebovat. Až podle toho jsme řešili, jak investice nastavit.",
      "Dnes pro mě investice nejsou jen číslo v aplikaci. Beru je jako součást většího plánu.",
    ],
    author: "Nikola Vávrová",
    context: "Investice",
  },
  {
    text: [
      "Nejvíc si vážím toho, že finance spolu neřešíme jednorázově. Když se mi změnila práce a později jsme začali řešit bydlení, znovu jsme prošli celý plán a upravili ho podle nové situace.",
      "Nemám pocit, že se ozvu jen ve chvíli, kdy je potřeba něco vyřešit. Spíš vím, že mám vedle sebe člověka, který zná moji situaci a pomáhá mi držet směr dlouhodobě.",
      "To je pro mě na spolupráci největší hodnota.",
    ],
    author: "Lucie M.",
    context: "Průběžná péče",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      className="relative overflow-hidden pt-5 pb-8 sm:pt-7 sm:pb-9 lg:pt-8 lg:pb-10"
      aria-label="Reference klientů"
    >
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,1)_0%,rgba(9,29,52,0.92)_48%,rgba(7,23,43,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/12 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-gold-500/70" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                Reference klientů
              </span>
              <span className="h-px w-8 bg-gold-500/70" />
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <Quote
              size={24}
              className="mx-auto mb-4 text-gold-300/70"
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
                    <p className="mx-auto max-w-5xl text-center text-[15px] leading-relaxed text-slate-200/90 sm:text-base lg:text-[17px]">
                      „{testimonial.text.join(" ")}“
                    </p>

                    <div className="mx-auto mt-6 h-px max-w-xs bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

                    <div className="mt-4 text-center">
                      <p className="text-sm font-semibold text-white sm:text-base">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gold-200 transition hover:bg-gold-500/[0.08] hover:text-gold-100 focus:outline-none focus:ring-2 focus:ring-gold-400/25"
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
                        ? "w-7 bg-gold-300"
                        : "w-2 bg-gold-500/25 hover:bg-gold-400/60"
                    }`}
                    aria-label={`Zobrazit referenci ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gold-200 transition hover:bg-gold-500/[0.08] hover:text-gold-100 focus:outline-none focus:ring-2 focus:ring-gold-400/25"
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
