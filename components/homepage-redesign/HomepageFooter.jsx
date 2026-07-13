import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import styles from "./homepage-lab.module.css";

const navLinks = [
  { href: "#pristup", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Jak pracuji" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  "Finanční plán",
  "Tvorba rezerv",
  "Ochrana příjmu",
  "Financování bydlení",
  "Dlouhodobá péče",
];

const legalLinks = [
  { href: "/zpracovani-osobnich-udaju", label: "Zpracování osobních údajů" },
  { href: "/cookies", label: "Cookies" },
  { href: "/pravni-informace", label: "Právní informace" },
];

export default function HomepageFooter({ homeHref = "" }) {
  const resolvedNavLinks = navLinks.map((item) =>
    item.href === "#kontakt" ? item : { ...item, href: homeHref + item.href }
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <a href={homeHref || "/"}>Daniel Kolář<small>Osobní finanční poradce</small></a>
            <p>Finanční poradenství s důrazem na dlouhodobou péči, souvislosti a osobní přístup.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={15} /></a>
            </div>
          </div>
          <FooterColumn title="Navigace" items={resolvedNavLinks} links />
          <FooterColumn title="Služby" items={services} />
          <div className={styles.footerColumn}>
            <h4>Kontakt</h4>
            <a href="tel:+420723988447"><Phone size={14} /> +420 723 988 447</a>
            <a href="mailto:d.kolar@westfair.cz"><Mail size={14} /> d.kolar@westfair.cz</a>
            <small>IČO: 03863620</small>
          </div>
        </div>

        <p className={styles.legalNote}>
          Daniel Kolář působí jako vázaný zástupce pro SAB servis s.r.o. Více informací najdete v{" "}
          <a href="/pravni-informace">právních informacích</a>.
        </p>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Daniel Kolář. Všechna práva vyhrazena.</span>
          <div>{legalLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, links = false }) {
  return (
    <div className={styles.footerColumn}>
      <h4>{title}</h4>
      {items.map((item) => links
        ? <a href={item.href} key={item.href}>{item.label}</a>
        : <span key={item}>{item}</span>
      )}
    </div>
  );
}
