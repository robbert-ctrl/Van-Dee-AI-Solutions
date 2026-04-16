import React, { useEffect, useRef, useState } from 'react';
import { useReveal } from './useReveal';

interface Metric {
  number: string;
  suffix?: string;
  prefix?: string;
  caption: string;
  detail: string;
}

const metrics: Metric[] = [
  {
    number: '15–25',
    suffix: 'uur',
    caption: 'Tijdsbesparing per week',
    detail: 'Op repetitieve processen zoals administratie, rapportages en email-triage.',
  },
  {
    number: '40–60',
    suffix: '%',
    caption: 'Snellere doorlooptijd',
    detail: 'Op handmatige taken die normaal uren kosten, van offerte tot factuurcontrole.',
  },
  {
    number: '90',
    suffix: 'dagen',
    prefix: '< ',
    caption: 'Tot meetbare ROI',
    detail: 'Pilot-projecten starten met één proces en leveren direct zichtbaar resultaat.',
  },
];

export const FunnelResults: React.FC = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-[color:var(--color-cream-100)] border-y border-[color:var(--color-line)]">
      <div className="container-funnel">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 md:mb-20">
          <div className="divider-hairline mb-6" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
            04 — Resultaten
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight">
            Wat je <span className="italic text-[color:var(--color-primary-600)]">kunt verwachten</span>.
          </h2>
          <p className="text-lg md:text-xl text-[color:var(--color-ink-500)] leading-relaxed max-w-2xl">
            Gebaseerd op gangbare AI-implementaties in het MKB. Jouw exacte resultaat hangt af van je
            processen — tijdens het strategiegesprek maken we een eerlijke inschatting.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8 mb-16 md:mb-20">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} index={idx} />
          ))}
        </div>

        {/* Disclaimer + tech trust bar */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[color:var(--color-ink-400)] italic mb-10">
            * Resultaten verschillen per bedrijf. Bij de audit krijg je een inschatting
            voor jouw specifieke situatie.
          </p>

          <div className="pt-10 border-t border-[color:var(--color-line)]">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-5">
              Gebouwd op bewezen technologie
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              <TechBadge label="Claude" />
              <TechBadge label="OpenAI" />
              <TechBadge label="Gemini" />
              <TechBadge label="Vercel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────── Metric Card with reveal + subtle number accent ─────────── */
const MetricCard: React.FC<{ metric: Metric; index: number }> = ({ metric, index }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className="reveal relative bg-white border border-[color:var(--color-line)] rounded-2xl p-8 md:p-10 hover:border-[color:var(--color-navy-900)]/25 hover:shadow-[0_4px_24px_-6px_rgba(15,23,42,0.08)] transition-all duration-300"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Metric label (top-right) */}
      <div className="absolute top-6 right-6 text-xs font-medium text-[color:var(--color-ink-400)] uppercase tracking-[0.14em]">
        0{index + 1}
      </div>

      {/* Giant number */}
      <div className="flex items-baseline gap-1 mb-4">
        {metric.prefix && (
          <span className="font-display text-3xl md:text-4xl font-medium text-[color:var(--color-ink-500)]">
            {metric.prefix}
          </span>
        )}
        <span
          className="font-display text-[3.5rem] md:text-[4.5rem] font-semibold text-[color:var(--color-navy-900)] leading-none tracking-tight"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {metric.number}
        </span>
        {metric.suffix && (
          <span className="font-display text-2xl md:text-3xl font-medium text-[color:var(--color-primary-600)] ml-1">
            {metric.suffix}
          </span>
        )}
      </div>

      {/* Caption */}
      <p className="font-display text-xl md:text-2xl font-semibold text-[color:var(--color-navy-900)] leading-tight mb-3 tracking-tight">
        {metric.caption}
      </p>

      {/* Detail */}
      <p className="text-[0.9375rem] text-[color:var(--color-ink-500)] leading-relaxed">
        {metric.detail}
      </p>
    </div>
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
