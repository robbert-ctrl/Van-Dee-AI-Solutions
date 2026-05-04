import React from 'react';
import { Check, Download, FileSpreadsheet, ArrowRight, ShieldCheck, Banknote, Lock, Timer } from 'lucide-react';
import { useReveal } from './useReveal';
import { trackEvent } from './analytics';

/**
 * FunnelOffer — Section 05 "Het aanbod"
 * Grand Slam Offer per Hormozi: named package + value stack + 1 bonus + 4 guarantees + real scarcity + CTA.
 * No pricing shown (investment on maat).
 */
export const FunnelOffer: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const headerRef = useReveal<HTMLDivElement>();
  const stackRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const bonusRef = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const guaranteesRef = useReveal<HTMLDivElement>({ threshold: 0.05 });
  const scarcityRef = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const ctaRef = useReveal<HTMLDivElement>({ threshold: 0.2 });

  const deliverables = [
    'AI Audit van 3 bedrijfsprocessen — we vinden de drie grootste tijdsvreters',
    'Maatwerkplan met ROI-berekening per proces — jij beslist wat we bouwen',
    'Implementatie van 1 werkende AI-workflow — draait live in productie',
    'Teamtraining (2 sessies) + complete documentatie — jouw team werkt er zelf mee',
    '60 dagen priority support na livegang — directe WhatsApp-toegang',
  ];

  const guarantees = [
    {
      icon: <ShieldCheck size={20} strokeWidth={2} />,
      title: 'Werkt-of-geld-terug',
      body: 'Draait de workflow na 90 dagen niet zoals afgesproken? Je krijgt je investering volledig terug.',
    },
    {
      icon: <Banknote size={20} strokeWidth={2} />,
      title: 'Geen-resultaat-betaal-je-niet',
      body: 'Je betaalt pas wanneer het eerste werkende resultaat live staat. Geen aanbetaling, geen voorschot.',
    },
    {
      icon: <Lock size={20} strokeWidth={2} />,
      title: 'Vaste-prijs-garantie',
      body: 'De prijs die we afspreken is de prijs die je betaalt. Geen meerwerk, geen nacalculatie, geen verrassingen.',
    },
    {
      icon: <Timer size={20} strokeWidth={2} />,
      title: 'Tijd-garantie',
      body: 'Loopt het traject uit buiten jouw schuld? Elke week vertraging = €500 korting op de eindfactuur.',
    },
  ];

  return (
    <section id="aanbod" className="section-padding bg-[color:var(--color-cream)]">
      <div className="container-funnel">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 md:mb-20">
          <div className="divider-hairline mb-6" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
            05 — Het aanbod
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight">
            Het <span className="italic text-[color:var(--color-primary-600)]">90-Dagen</span> AI Impact Traject.
          </h2>
          <p className="text-lg md:text-xl text-[color:var(--color-ink-500)] leading-relaxed max-w-2xl">
            Eén duidelijk traject. Vaste scope. Vaste prijs (op maat). Afgeleverd in 90 dagen.
            Geen eeuwige consultancy-facturen, geen vendor lock-in, geen verrassingen.
          </p>
        </div>

        {/* Value stack + bonus — two-column on desktop */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* A) What you get */}
          <div
            ref={stackRef}
            className="reveal bg-white border border-[color:var(--color-line)] rounded-2xl p-8 md:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-400)] mb-4">
              Wat je krijgt
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight leading-[1.15]">
              Vijf concrete onderdelen. <span className="text-[color:var(--color-ink-400)]">Samen werkend.</span>
            </h3>

            <ul className="space-y-4 mb-8">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color:var(--color-primary-600)] flex items-center justify-center mt-0.5">
                    <Check size={14} strokeWidth={2.75} className="text-white" />
                  </span>
                  <span className="text-[0.9375rem] md:text-base text-[color:var(--color-navy-900)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price floor band — qualifies leads on price */}
            <div className="pt-6 border-t border-[color:var(--color-line)]">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-400)] mb-1.5">
                    Investering
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-base text-[color:var(--color-ink-500)]">
                      vanaf
                    </span>
                    <span
                      className="font-display text-4xl md:text-5xl font-semibold tracking-tight"
                      style={{ color: 'var(--color-navy-900)', fontVariantNumeric: 'tabular-nums' }}
                    >
                      €3.000
                    </span>
                  </div>
                  <p className="text-xs text-[color:var(--color-ink-400)] mt-1.5 italic">
                    Typisch €3.000–€15.000, afhankelijk van scope
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--color-cream-100)] border border-[color:var(--color-line)] self-start sm:self-end">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald-600)]" />
                  <span className="text-xs font-medium text-[color:var(--color-ink-500)]">
                    Vaste prijs vooraf · Geen aanbetaling
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* B) Included bonus */}
          <div
            ref={bonusRef}
            className="reveal relative bg-[color:var(--color-cream-100)] rounded-2xl p-8 md:p-10 border-2 border-dashed border-[color:var(--color-navy-900)]/30 flex flex-col"
          >
            {/* Gift badge */}
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[color:var(--color-primary-600)] text-white text-xs font-semibold uppercase tracking-[0.14em]">
              Gratis bonus
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-400)] mb-1">
                  Waarde €600
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[color:var(--color-navy-900)] tracking-tight leading-tight">
                  Tech Stack Audit Spreadsheet
                </h3>
              </div>
            </div>

            <p className="text-[0.9375rem] text-[color:var(--color-ink-500)] leading-relaxed mb-5">
              Download direct: welke AI-tools je kunt schrappen, welke je mist, en wat het oplevert in euro's.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-[color:var(--color-ink-500)]">
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--color-primary-600)] mt-0.5">→</span>
                6 werkbladen — kant-en-klaar ingevuld als voorbeeld
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--color-primary-600)] mt-0.5">→</span>
                Automatische ROI Calculator — zie je besparing direct
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--color-primary-600)] mt-0.5">→</span>
                Geprioriteerd actieplan: waar begin je vandaag?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--color-primary-600)] mt-0.5">→</span>
                Werkt in Excel én Google Sheets
              </li>
            </ul>

            <a
              href="/tools/tech-stack-audit.xlsx"
              download="tech-stack-audit-van-dee.xlsx"
              onClick={() => trackEvent({ name: 'download', location: 'offer', meta: { file: 'tech-stack-audit.xlsx' } })}
              aria-label="Download Tech Stack Audit spreadsheet (Excel bestand)"
              className="mt-auto inline-flex items-center gap-2 text-[color:var(--color-primary-600)] hover:text-[color:var(--color-primary-700)] font-semibold text-sm group transition-colors"
            >
              <Download size={16} strokeWidth={2.25} className="group-hover:translate-y-0.5 transition-transform" />
              Download direct (gratis, geen email nodig)
            </a>

            <p className="mt-3 text-xs text-[color:var(--color-ink-400)] italic">
              Gratis bij elk strategiegesprek — ook als we niet verder gaan.
            </p>
          </div>
        </div>

        {/* C) Guarantee stack — navy card */}
        <div
          ref={guaranteesRef}
          className="reveal bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] rounded-3xl p-8 md:p-12 relative overflow-hidden mb-6 lg:mb-8"
        >
          {/* Ambient orange glow — moved to bottom-right, subtle */}
          <div
            aria-hidden
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 65%)' }}
          />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-primary-400)] mb-4">
              4 garanties
            </p>
            <h3
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight mb-10 max-w-xl"
              style={{ color: 'var(--color-cream)' }}
            >
              Het risico is voor <span className="italic" style={{ color: 'var(--color-primary-500)' }}>mij</span>.
              <span className="block" style={{ color: 'var(--color-ink-300)' }}>Niet voor jou.</span>
            </h3>

            <ul className="grid md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8">
              {guarantees.map((g, idx) => (
                <li key={g.title} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[color:var(--color-primary-600)]/20 border border-[color:var(--color-primary-500)]/40 flex items-center justify-center text-[color:var(--color-primary-400)]">
                    {g.icon}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[color:var(--color-primary-400)]">
                        0{idx + 1}
                      </span>
                      <h4
                        className="font-display text-lg md:text-xl font-semibold tracking-tight"
                        style={{ color: 'var(--color-cream)' }}
                      >
                        {g.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[color:var(--color-ink-300)] leading-relaxed">
                      {g.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* D) Scarcity strip */}
        <div
          ref={scarcityRef}
          className="reveal max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-[0.9375rem] md:text-base text-[color:var(--color-ink-500)] leading-relaxed italic">
            Ik neem maximaal <span className="font-semibold not-italic text-[color:var(--color-navy-900)]">4 trajecten per kwartaal</span> aan
            zodat elk traject de aandacht krijgt die nodig is.
            <br />
            <span className="font-semibold not-italic text-[color:var(--color-primary-600)]">Q2 2026: 2/4 plekken beschikbaar.</span>{' '}
            <span className="not-italic text-[color:var(--color-ink-400)]">Q3 2026 start in juli.</span>
          </p>
        </div>

        {/* E) CTA footer card */}
        <div
          ref={ctaRef}
          className="reveal bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)' }}
          />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-primary-400)] mb-3">
                Klaar om je plek te claimen?
              </p>
              <h3
                className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] tracking-tight"
                style={{ color: 'var(--color-cream)' }}
              >
                Start jouw 90-Dagen Traject —
                <br />
                <span style={{ color: 'var(--color-ink-300)' }}>vóór Q2 vol is.</span>
              </h3>
            </div>
            <button
              onClick={onCtaClick}
              className="btn-primary btn-primary-lg group self-start md:self-center whitespace-nowrap"
            >
              Plan je gratis strategiegesprek
              <ArrowRight size={18} strokeWidth={2.25} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
