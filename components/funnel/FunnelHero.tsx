import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useReveal } from './useReveal';

/**
 * Hero — Section 1
 * Single CTA. Massive headline. Quantified sub. Trust bar directly below.
 */
export const FunnelHero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const headRef = useReveal<HTMLDivElement>();
  const trustRef = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background accent — navy dot grid, extremely low contrast */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-funnel relative">
        <div ref={headRef} className="reveal max-w-4xl">
          {/* Eyebrow — offer name */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary-600)]" />
            <span className="text-sm font-medium text-[color:var(--color-ink-500)] uppercase tracking-[0.12em]">
              Het 90-Dagen AI Impact Traject · MKB met 10+ medewerkers
            </span>
          </div>

          {/* H1 — emotional Dream Outcome */}
          <h1 className="font-display font-semibold text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[color:var(--color-navy-900)] tracking-tight mb-6 md:mb-8">
            Krijg je avonden terug.
            <span className="text-[color:var(--color-ink-400)]">
              {' '}
              <span className="italic font-medium text-[color:var(--color-primary-600)]">Zonder</span> dat je team werk verliest.
            </span>
          </h1>

          {/* Sub — value equation in euros */}
          <p className="text-lg md:text-xl text-[color:var(--color-ink-500)] max-w-2xl leading-relaxed mb-8 md:mb-10">
            20 uur per week × €50 × 52 weken = <span className="font-semibold text-[color:var(--color-navy-900)]">€52.000 per jaar</span> die
            nu verdampt in handmatig werk. Wij bouwen AI-workflows die dat terugwinnen — in 90 dagen, zonder code, met <span className="font-semibold text-[color:var(--color-navy-900)]">vier garanties</span> die het risico bij ons leggen.
          </p>

          {/* Primary CTA + micro-trust */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <button
              onClick={onCtaClick}
              className="btn-primary btn-primary-lg group"
            >
              <Calendar size={18} strokeWidth={2.25} />
              Plan je gratis strategiegesprek
              <ArrowRight size={18} strokeWidth={2.25} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-sm text-[color:var(--color-ink-400)]">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[color:var(--color-emerald-600)]" />
                Gratis
              </span>
              <span className="text-[color:var(--color-line-strong)]">·</span>
              <span>30 minuten</span>
              <span className="text-[color:var(--color-line-strong)]">·</span>
              <span>Geen verkoopverhaal</span>
              <span className="text-[color:var(--color-line-strong)]">·</span>
              <span className="font-medium text-[color:var(--color-navy-900)]">Direct actieplan mee naar huis</span>
            </div>
          </div>
        </div>

        {/* Trust bar — tech stack, muted */}
        <div ref={trustRef} className="reveal mt-16 md:mt-24 pt-10 border-t border-[color:var(--color-line)]">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-5">
            Gebouwd met bewezen technologie
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <TechBadge label="Claude" />
            <TechBadge label="OpenAI" />
            <TechBadge label="Gemini" />
            <TechBadge label="Vercel" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TechBadge: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-sm bg-[color:var(--color-navy-900)]" />
    <span className="font-display text-lg md:text-xl font-medium text-[color:var(--color-navy-900)] tracking-tight">
      {label}
    </span>
  </div>
);
