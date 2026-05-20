"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: napojit na backend / mail službu (např. Formspree, Resend, EmailJS)
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,97,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-400">
              Pojďme se potkat
            </span>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Dejte svým financím <span className="gold-text">nový směr</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            První konzultace je vždy nezávazná a zdarma. Stačí napsat — ozvu se vám
            do 24 hodin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <ContactCard
              icon={<Phone size={20} />}
              label="Telefon"
              value="+420 723 988 447"
              href="tel:+420723988447"
            />
            <ContactCard
              icon={<Mail size={20} />}
              label="E-mail"
              value="d.kolar@westfair.cz"
              href="mailto:d.kolar@westfair.cz"
              note="Odpověď do 24 h"
            />
            <ContactCard
              icon={<MapPin size={20} />}
              label="Setkání"
              value="Osobně i online"
              note="Po celé ČR"
            />

            <div className="mt-6 p-5 rounded-2xl border border-gold-500/15 bg-navy-900/40 backdrop-blur-sm">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-gold-300 font-medium">Tip:</span>{" "}
                Pokud spěcháte, nejrychlejší je telefon. Pokud chcete v klidu
                popsat svou situaci, využijte formulář.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <form
              onSubmit={handleSubmit}
              className="relative p-7 sm:p-9 rounded-3xl border border-gold-500/20 bg-gradient-to-b from-navy-900/80 to-navy-950/80 backdrop-blur-md shadow-card"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2
                    size={56}
                    className="mx-auto text-gold-400 mb-4"
                  />
                  <h3 className="font-display text-2xl text-white mb-2">
                    Děkuji za zprávu!
                  </h3>
                  <p className="text-slate-300">
                    Ozvu se vám do 24 hodin.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl sm:text-2xl text-white mb-6">
                    Napište mi
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Jméno a příjmení" name="name" required />
                    <Field
                      label="Telefon"
                      name="phone"
                      type="tel"
                      placeholder="+420 ..."
                    />
                  </div>

                  <div className="mt-4">
                    <Field
                      label="E-mail"
                      name="email"
                      type="email"
                      required
                      placeholder="vas@email.cz"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs tracking-wider uppercase text-slate-400 mb-2">
                      S čím vám mohu pomoci?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Napište mi krátce, co řešíte..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/60 border border-gold-500/15 text-slate-100 placeholder-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition resize-none"
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      required
                      className="mt-1 h-4 w-4 accent-gold-500 cursor-pointer"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-xs sm:text-sm text-slate-400 leading-relaxed cursor-pointer"
                    >
                      Souhlasím se zpracováním osobních údajů pro účely
                      vyřízení dotazu.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold"
                  >
                    Odeslat zprávu
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href, note }) {
  const content = (
    <div className="group p-5 rounded-2xl border border-gold-500/15 bg-navy-900/40 backdrop-blur-sm hover:border-gold-500/30 hover:bg-navy-900/70 transition-all">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] tracking-widest uppercase text-slate-400 mb-0.5">
            {label}
          </div>
          <div className="text-white font-medium truncate group-hover:text-gold-200 transition-colors">
            {value}
          </div>
          {note && (
            <div className="text-xs text-slate-500 mt-0.5">{note}</div>
          )}
        </div>
        {href && (
          <ArrowRight
            size={16}
            className="text-gold-400/50 group-hover:text-gold-300 group-hover:translate-x-1 transition-all flex-shrink-0"
          />
        )}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-slate-400 mb-2">
        {label} {required && <span className="text-gold-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-navy-950/60 border border-gold-500/15 text-slate-100 placeholder-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition"
      />
    </div>
  );
}
