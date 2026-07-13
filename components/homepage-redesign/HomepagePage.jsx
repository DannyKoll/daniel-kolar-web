import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HomepageHero from "./HomepageHero";
import RemainingSections from "./LabSections";
import HomepageNav from "./HomepageNav";
import styles from "./homepage-lab.module.css";

const trustPoints = [
  { value: "11+", label: "let praxe" },
  { value: "Na míru", label: "podle vašich potřeb" },
  { value: "Dlouhodobě", label: "péče v čase" },
];

const approachPoints = [
  "Peníze řešené v souvislostech",
  "Srozumitelně, bez zbytečných složitostí",
  "Spolupráce, která se přizpůsobuje životu",
  "Cesta k většímu klidu, majetku a možnostem",
];

export default function HomepagePage() {
  return (
    <main className={styles.page}>
      <ScrollReveal />
      <HomepageNav />

      <div id="top" className={styles.introSequence}>
        <div className={styles.heroScene}>
          <HomepageHero showHeader={false} />
        </div>

        <section className={styles.bridge} aria-labelledby="bridge-title">
        <span className={styles.panelEdge} aria-hidden="true" />
        <div className={styles.bridgeGlow} aria-hidden="true" />

        <div className={styles.bridgeInner}>
          <div className={`${styles.bridgeIntro} reveal`}>
            <div className={styles.eyebrow}>
              <span />
              Finance v souvislostech
              <span />
            </div>

            <h2 id="bridge-title" className={styles.bridgeTitle}>
              Finance poskládané do
              <em>jednoho plánu</em>
            </h2>

            <p className={styles.bridgeCopy}>
              Skutečné výsledky nevznikají z jednotlivých řešení, ale z financí,
              které fungují jako celek.
            </p>
          </div>

          <div className={`${styles.trustRow} reveal`}>
            {trustPoints.map((point) => (
              <div className={styles.trustPoint} key={point.value}>
                <strong>{point.value}</strong>
                <small>{point.label}</small>
              </div>
            ))}
          </div>

          <a className={styles.continueLink} href="#pristup">
            Pokračovat
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
        </section>
      </div>

      <section id="pristup" className={styles.approach} aria-labelledby="approach-title">
        <div className={styles.approachInner}>
          <div className={`${styles.approachImage} reveal`}>
            <div className={styles.imageWrap}>
              <Image
                src="/foto-3-editorial.jpg"
                alt="Daniel Kolář"
                fill
                sizes="(max-width: 767px) 100vw, 46vw"
                className={styles.image}
              />
              <span className={styles.imageGrade} aria-hidden="true" />
            </div>
          </div>

          <div className={`${styles.approachIntro} reveal`}>
            <div className={styles.sectionLabel}>
              Můj přístup
            </div>

            <h2 id="approach-title" className={styles.approachTitle}>
              Co pro vás
              <em>mohu udělat</em>
            </h2>
          </div>

          <div className={`${styles.approachContent} reveal`}>
            <div className={styles.approachCopy}>
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
              <p>
                Chci vás dobře poznat, porozumět vašim plánům i&nbsp;tomu, co
                je pro vás důležité. Společně nastavíme cestu, která vám pomůže
                chránit příjem, tvořit rezervy, budovat majetek a&nbsp;časem
                snižovat závislost na příjmu z&nbsp;práce. Ne proto, aby bylo
                všechno jen „nějak vyřešené“, ale aby vaše peníze postupně
                pracovaly víc pro vás.
              </p>
            </div>

            <ol className={styles.approachPoints}>
              {approachPoints.map((point) => (
                <li key={point}>
                  {point}
                </li>
              ))}
            </ol>

            <div className={styles.approachActions}>
              <a className={styles.meetingLink} href="#kontakt">
                Pojďme se potkat
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <RemainingSections />
    </main>
  );
}
