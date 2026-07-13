"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, PlayCircle, X } from "lucide-react";
import styles from "./homepage-nav.module.css";

const links = [
  { href: "#pristup", label: "O mně", section: "pristup" },
  { href: "#sluzby", label: "Služby", section: "sluzby" },
  { href: "#finance-celek", label: "Finance jako celek", section: "finance-celek", icon: true },
  { href: "#proces", label: "Jak pracuji", section: "proces" },
  { href: "#kontakt", label: "Kontakt", section: "kontakt" },
];

export default function HomepageNav({ homeHref = "", currentPage = "home", immediate = false }) {
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), immediate ? 0 : 2750);
    const onScroll = () => {
      const hasScrolled = window.scrollY > 28;
      setScrolled(hasScrolled);
      if (hasScrolled) setReady(true);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [immediate]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, .15, .35] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const resolvedLinks = links.map((link) => {
    if (currentPage !== "finance") return link;
    if (link.section === "finance-celek") return { ...link, href: "#top", section: "top" };
    if (link.section === "kontakt") return link;
    return { ...link, href: homeHref + link.href };
  });
  const brandHref = currentPage === "finance" ? homeHref || "/" : "#top";

  return (
    <header
      className={`${styles.header} ${ready ? styles.ready : ""} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.bar}>
        <a href={brandHref} className={styles.brand} aria-label="Daniel Kolář — hlavní stránka" onClick={closeMenu}>
          <span>Daniel Kolář</span>
          <small>Osobní finanční poradce</small>
        </a>

        <nav className={styles.desktopNav} aria-label="Hlavní navigace">
          {resolvedLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={activeSection === link.section ? styles.active : ""}
              aria-current={activeSection === link.section ? "location" : undefined}
            >
              {link.icon && <PlayCircle size={14} aria-hidden="true" />}
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#kontakt" className={styles.cta} onClick={closeMenu}>
            <span className={styles.ctaDesktop}>Domluvit setkání</span>
            <span className={styles.ctaMobile}>Schůzka</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="homepage-mobile-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="homepage-mobile-menu" className={styles.mobileMenu} aria-hidden={!menuOpen}>
        <nav aria-label="Mobilní navigace">
          {resolvedLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              className={activeSection === link.section ? styles.active : ""}
            >
              <span>{link.label}</span>
              {link.icon ? <PlayCircle size={20} aria-hidden="true" /> : <ArrowUpRight size={17} aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <div className={styles.mobileContact}>
          <span>Daniel Kolář</span>
          <a href="tel:+420723988447">+420 723 988 447</a>
          <a href="mailto:d.kolar@westfair.cz">d.kolar@westfair.cz</a>
        </div>
      </div>
    </header>
  );
}
