import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function LegalPage({ title, intro, sections }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-navy-950">
      <ScrollReveal />
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,rgba(30,68,110,0.7)_0%,rgba(12,35,64,0.45)_44%,rgba(7,23,43,1)_82%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-navy-950" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/"
            className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            <ArrowLeft size={16} />
            Zpět na hlavní stránku
          </Link>

          <div className="reveal mb-5 inline-flex items-center gap-2">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
              Právní informace
            </span>
          </div>

          <h1 className="reveal font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="reveal mt-6 text-base leading-relaxed text-slate-200/90 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="reveal space-y-10 rounded-2xl border border-gold-500/15 bg-navy-900/35 p-6 shadow-card backdrop-blur-sm sm:p-8 lg:p-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl text-white">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.details && (
                    <div className="space-y-1 rounded-xl border border-gold-500/10 bg-navy-950/45 p-4 text-slate-200">
                      {section.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.links && (
                    <div className="space-y-3">
                      {section.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-gold-300 transition-colors hover:text-gold-200"
                        >
                          {link.label}
                          <ExternalLink size={15} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
