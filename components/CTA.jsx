"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      setErrorMessage(
        error.message ||
          "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu."
      );
    }
  };

  const isSending = status === "sending";

  return (
    <section
      id="kontakt"
      className="relative pt-10 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,97,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 reveal">
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
              value="Plzeň a okolí"
              note="Online dle domluvy"
            />
