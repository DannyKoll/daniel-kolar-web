import {
  Compass,
  Coffee,
  HeartHandshake,
  Home,
  PiggyBank,
  RefreshCw,
  Search,
  Shield,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FinanceInterlude from "./FinanceInterlude";
import ContactLab from "./ContactLab";
import HomepageFooter from "./HomepageFooter";
import styles from "./homepage-lab.module.css";

const services = [
  {
    icon: Wallet,
    title: "Finanční plán",
    desc: "Propojíme vaše finance do jednoho plánu, ve kterém každý krok navazuje na vaše cíle.",
    bullets: ["Přehled a priority", "Rozhodnutí v souvislostech", "Plán pro další kroky"],
  },
  {
    icon: TrendingUp,
    title: "Tvorba rezervy a majetku",
    desc: "Rozdělíme peníze podle toho, kdy je budete potřebovat a jakou roli mají plnit.",
    bullets: ["Rezerva po ruce", "Peníze na střednědobé cíle", "Dlouhodobé budování majetku"],
  },
  {
    icon: Shield,
    title: "Ochrana příjmu a rodiny",
    desc: "Nastavíme ochranu tak, aby nenadálá situace nerozhodila váš život ani finanční plán.",
    bullets: ["Výpadek příjmu", "Rodina a závazky", "Majetek a odpovědnost"],
  },
  {
    icon: Home,
    title: "Financování bydlení",
    desc: "Najdeme bezpečné financování, které zapadne do rozpočtu a bude dávat smysl i do budoucna.",
    bullets: ["Bezpečná výše splátky", "Rezerva kolem bydlení", "Cesta k dřívějšímu splacení"],
  },
  {
    icon: PiggyBank,
    title: "Renta a finanční svoboda",
    desc: "Budujeme majetek, který vám postupně vytvoří větší volnost a příjem nezávislý pouze na práci.",
    bullets: ["Dlouhý horizont", "Pravidelné investování", "Budoucí příjem z majetku"],
  },
  {
    icon: RefreshCw,
    title: "Dlouhodobá péče",
    desc: "Plán pravidelně kontrolujeme a upravujeme podle změn ve vašem životě i na finančním trhu.",
    bullets: ["Dlouhodobá spolupráce", "Pravidelné kontroly nastavení", "Hlídání zbytečných nákladů"],
  },
];

const steps = [
  {
    icon: Coffee,
    title: "Nezávazné setkání",
    desc: "Nejdřív chci pochopit vás — co je pro vás důležité, jaké máte plány a co vám mají peníze v životě přinášet. Nemusíte mít konkrétní problém ani připravené otázky.",
  },
  {
    icon: Search,
    title: "Širší pohled",
    desc: "Podíváme se na vaše finance v souvislostech — podle toho, co je pro vás důležité, jaké máte cíle a kam se chcete posunout.",
  },
  {
    icon: Compass,
    title: "Plán na míru",
    desc: "Připravím návrh dalších kroků, ukážu možné varianty a pomohu vám vybrat cestu, která odpovídá vašim prioritám.",
  },
  {
    icon: HeartHandshake,
    title: "Dlouhodobá péče",
    desc: "K nastavení se pravidelně vracíme a upravujeme ho podle změn v životě, na trhu nebo ve vašich cílech, aby vám finance dál sloužily.",
  },
];

export default function RemainingSections() {
  return (
    <>
      <section id="sluzby" className={styles.servicesChapter} aria-labelledby="services-title">
        <div className={styles.sectionShell}>
          <header className={`${styles.servicesHeader} reveal`}>
            <div className={styles.darkLabel}>Co pro vás dělám</div>
            <h2 id="services-title" className={styles.visuallyHidden}>Co pro vás dělám</h2>
          </header>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={`${styles.serviceItem} reveal`} key={service.title}>
                  <div className={styles.serviceMeta}>
                    <div><Icon size={23} aria-hidden="true" /></div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul>
                    {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinanceInterlude />

      <section id="proces" className={styles.processChapter} aria-labelledby="process-title">
        <div className={styles.sectionShell}>
          <header className={`${styles.processHeader} reveal`}>
            <div className={styles.darkLabel}>Cesta k vašemu finančnímu klidu</div>
            <h2 id="process-title">Jak <em>spolupracujeme</em></h2>
            <p>Od prvního setkání až po dlouhodobou péči — srozumitelně, lidsky a podle toho, co je pro vás důležité.</p>
          </header>

          <div className={`${styles.processGrid} reveal`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className={`${styles.processStep} reveal`} key={step.title}>
                  <div className={styles.stepTop}>
                    <span>0{index + 1}</span>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials premiumTone />
      <ContactLab />
      <HomepageFooter />
    </>
  );
}
