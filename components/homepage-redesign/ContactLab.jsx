"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import styles from "./homepage-lab.module.css";

const contactItems = [
  { icon: Phone, label: "Telefon", value: "+420 723 988 447", href: "tel:+420723988447" },
  { icon: Mail, label: "E-mail", value: "d.kolar@westfair.cz", note: "Odpověď do 24 h", href: "mailto:d.kolar@westfair.cz" },
  { icon: MapPin, label: "Setkání", value: "Plzeň a okolí", note: "Online dle domluvy" },
];

export default function ContactLab() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
          consent: formData.get("gdpr") === "on",
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Zprávu se nepodařilo odeslat.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("idle");
      setErrorMessage(error.message || "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.");
    }
  };

  return (
    <section id="kontakt" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.contactGlow} aria-hidden="true" />
      <div className={styles.contactInner}>
        <header className={`${styles.contactHeader} reveal`}>
          <div className={styles.darkLabel}>Nezávazná konzultace</div>
          <h2 id="contact-title">Vašim penězům dáme<em>jasný směr</em></h2>
          <p>První konzultace je vždy nezávazná a zdarma. Stačí napsat — ozvu se vám do 24 hodin.</p>
        </header>

        <div className={styles.contactLayout}>
          <div className={`${styles.contactDetails} reveal`}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = <><Icon size={19} aria-hidden="true" /><span><small>{item.label}</small><strong>{item.value}</strong>{item.note && <em>{item.note}</em>}</span></>;
              return item.href
                ? <a href={item.href} className={styles.contactItem} key={item.label}>{content}</a>
                : <div className={styles.contactItem} key={item.label}>{content}</div>;
            })}
            <p className={styles.contactTip}><strong>Tip:</strong> Pokud spěcháte, nejrychlejší je telefon. Pokud chcete v klidu popsat svou situaci, využijte formulář.</p>
          </div>

          <form className={`${styles.contactForm} reveal`} onSubmit={handleSubmit}>
            {status === "sent" ? (
              <div className={styles.sentState}><CheckCircle2 size={48} aria-hidden="true" /><h3>Děkuji za zprávu!</h3><p>Ozvu se vám do 24 hodin.</p></div>
            ) : (
              <>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} />
                <h3>Napište mi</h3>
                <div className={styles.formGrid}>
                  <Field label="Jméno a příjmení" name="name" required />
                  <Field label="Telefon" name="phone" type="tel" placeholder="+420 ..." />
                </div>
                <Field label="E-mail" name="email" type="email" required placeholder="vas@email.cz" />
                <label className={styles.field}><span>S čím vám mohu pomoci?</span><textarea name="message" rows={4} placeholder="Napište mi krátce, co řešíte..." /></label>
                <label className={styles.consent}>
                  <input type="checkbox" id="gdpr" name="gdpr" required />
                  <span>Beru na vědomí, že mé osobní údaje budou zpracovány za účelem vyřízení mého dotazu. Více informací najdete v{" "}<a href="/zpracovani-osobnich-udaju">zásadách ochrany osobních údajů</a>.</span>
                </label>
                {errorMessage && <p className={styles.formError}>{errorMessage}</p>}
                <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Odesílám..." : "Odeslat zprávu"}<Send size={16} aria-hidden="true" /></button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }) {
  return <label className={styles.field}><span>{label} {required && <b>*</b>}</span><input type={type} name={name} required={required} placeholder={placeholder} /></label>;
}
