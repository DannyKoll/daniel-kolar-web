import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import styles from "./homepage-lab.module.css";

const financeParts = [
  { label: "Hypotéka", className: styles.financeHome },
  { label: "Rezerva", className: styles.financeReserve },
  { label: "Pojištění", className: styles.financeProtection },
  { label: "Investice", className: styles.financeInvestments },
  { label: "Renta", className: styles.financePension },
];

export default function FinanceInterlude() {
  return (
    <section id="finance-celek" className={`${styles.financeInterlude} reveal`} aria-labelledby="finance-interlude-title">
      <div className={styles.financeAura} aria-hidden="true" />
      <div className={styles.financeInner}>
        <div className={styles.financeDiagram}>
          <div className={styles.financeOrbitOuter} aria-hidden="true" />
          <div className={styles.financeOrbitInner} aria-hidden="true" />

          <svg viewBox="0 0 760 500" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="finance-interlude-line" x1="0" x2="1">
                <stop offset="0" stopColor="#9dbbd0" stopOpacity=".12" />
                <stop offset=".52" stopColor="#d8bb73" stopOpacity=".72" />
                <stop offset="1" stopColor="#9dbbd0" stopOpacity=".12" />
              </linearGradient>
              <linearGradient id="finance-interlude-pulse" x1="0" x2="1">
                <stop offset="0" stopColor="#f1d995" stopOpacity="0" />
                <stop offset=".5" stopColor="#f1d995" />
                <stop offset="1" stopColor="#f1d995" stopOpacity="0" />
              </linearGradient>
            </defs>

            <g className={styles.financePaths}>
              <path pathLength="1" d="M380 250C286 151 190 116 112 126" />
              <path pathLength="1" d="M380 250C470 142 566 108 646 124" />
              <path pathLength="1" d="M380 250C258 264 152 326 92 374" />
              <path pathLength="1" d="M380 250C502 266 606 326 670 372" />
              <path pathLength="1" d="M380 250C374 330 378 390 380 438" />
            </g>

            <g className={styles.financePulseRoutes}>
              <path pathLength="1" d="M112 126C190 116 286 151 380 250" />
              <path pathLength="1" d="M646 124C566 108 470 142 380 250" />
              <path pathLength="1" d="M92 374C152 326 258 264 380 250" />
              <path pathLength="1" d="M380 250C502 266 606 326 670 372" />
              <path pathLength="1" d="M380 250C374 330 378 390 380 438" />
            </g>
          </svg>

          <Link href="/finance-jako-celek" className={styles.financeCore} aria-label="Pustit video Finance jako celek">
            <span>Finance</span>
            <small>jako</small>
            <strong>celek</strong>
            <i className={styles.financeCorePlay}><Play size={13} fill="currentColor" aria-hidden="true" /></i>
          </Link>

          {financeParts.map((part) => (
            <div className={`${styles.financePart} ${part.className}`} key={part.label} aria-hidden="true">
              <i />
              {part.label}
            </div>
          ))}
        </div>

        <div className={styles.financeInterludeCopy}>
          <h2 id="finance-interlude-title" className={styles.visuallyHidden}>Finance jako celek</h2>
          <p>
            Jsem zastáncem toho, aby finance fungovaly jako jeden celek.
            Hypotéka, rezerva, pojištění, investice i renta by na sebe měly
            navazovat podle vašeho života a cílů. Z jednotlivých rozhodnutí
            pak vzniká plán, který dává smysl dnes i do budoucna.
          </p>
          <Link href="/finance-jako-celek" className={styles.financeVideoLink}>
            <span><Play size={14} fill="currentColor" aria-hidden="true" /></span>
            Krátké video: co vám to přinese
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
