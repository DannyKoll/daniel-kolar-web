import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./homepage-hero.module.css";

const lifeGoals = [
  { title: "Domov", detail: "bydlení", className: styles.goalHome },
  { title: "Klid", detail: "rezerva", className: styles.goalCalm },
  { title: "Jistota", detail: "ochrana", className: styles.goalSafety },
  { title: "Majetek", detail: "investice", className: styles.goalWealth },
  { title: "Svoboda", detail: "budoucí renta", className: styles.goalFreedom },
];

export default function HomepageHero({ showHeader = true }) {
  return (
      <section
        className={styles.hero}
        data-homepage-hero
        data-intro-ready="false"
        data-portrait-ready="false"
        data-story-ready="false"
        suppressHydrationWarning
      >
        <div className={styles.ambient} aria-hidden="true">
          <span className={styles.auroraOne} />
          <span className={styles.auroraTwo} />
        </div>

        <div className={styles.system} aria-hidden="true">
          <svg
            className={styles.network}
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
          >
          <defs>
            <linearGradient id="v4-link" x1="0" x2="1">
              <stop offset="0" stopColor="#9abbd3" stopOpacity=".08" />
              <stop offset=".55" stopColor="#d6bd7c" stopOpacity=".58" />
              <stop offset="1" stopColor="#9abbd3" stopOpacity=".08" />
            </linearGradient>
            <linearGradient id="v4-pulse" x1="0" x2="1">
              <stop offset="0" stopColor="#f3dda0" stopOpacity="0" />
              <stop offset=".5" stopColor="#f3dda0" />
              <stop offset="1" stopColor="#f3dda0" stopOpacity="0" />
            </linearGradient>
            <filter id="v4-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          <g className={styles.links}>
            <path className={styles.linkOne} pathLength="1" d="M230 180C350 187 480 224 590 270" />
            <path className={styles.linkTwo} pathLength="1" d="M150 330C315 326 461 300 590 270" />
            <path className={styles.linkThree} pathLength="1" d="M320 450C421 410 505 339 590 270" />
            <path className={styles.linkFour} pathLength="1" d="M824 165C738 178 662 219 590 270" />
            <path className={styles.linkFive} pathLength="1" d="M920 330C790 330 682 303 590 270" />
          </g>

          <g className={styles.pulseRoutes}>
            <path pathLength="1" d="M230 180C350 187 480 224 590 270" />
            <path pathLength="1" d="M150 330C315 326 461 300 590 270" />
            <path pathLength="1" d="M320 450C421 410 505 339 590 270" />
            <path pathLength="1" d="M590 270C662 219 738 178 824 165" />
            <path pathLength="1" d="M590 270C682 303 790 330 920 330" />
          </g>
          </svg>

          <div className={`${styles.core} ${styles.node}`}>
            <span className={styles.coreDot} />
            <span className={styles.coreText}>
              <small>Na prvním místě</small>
              Váš život
            </span>
          </div>

          <div className={styles.goals}>
            {lifeGoals.map((goal) => (
              <div key={goal.title} className={`${styles.node} ${styles.goal} ${goal.className}`}>
                <span className={styles.dot} />
                <span className={styles.goalText}>
                  <strong>{goal.title}</strong>
                  <small>{goal.detail}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.portraitStage} aria-hidden="true">
          <Image
            src="/Foto-web-homepage.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 767px) 78vw, 58vw"
            className={styles.portrait}
          />
          <span className={styles.portraitTone} />
        </div>

        <div className={styles.grade} aria-hidden="true" />

        {showHeader && <header className={styles.header}>
          <a href="/" className={styles.brand} aria-label="Daniel Kolář — domů">
            <span>Daniel Kolář</span>
            <small>Osobní finanční poradce</small>
          </a>
          <a href="/#kontakt" className={styles.headerCta}>
            Domluvit schůzku
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </header>}

        <div className={styles.story}>
          <div className={styles.eyebrow}>
            <span />
            Finance, které zapadají do vašeho života
            <span />
          </div>

          <h1 className={styles.claim}>
            <span className={styles.claimOne}>Pomohu vám</span>
            <span className={styles.claimTwo}>od financí</span>
            <span className={styles.claimThree}>získat maximum</span>
          </h1>

          <div className={styles.offer}>
            <p>
              Jednotlivá rozhodnutí propojíme do plánu, který vám přinese
              větší klid dnes a&nbsp;více možností do budoucna.
            </p>
            <a href="/#kontakt" className={styles.primaryCta}>
              Domluvit nezávazné setkání
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
  );
}
