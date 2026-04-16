import React from 'react';
import { Search, ClipboardList, Settings2, ArrowRight } from 'lucide-react';
import { useReveal } from './useReveal';

interface Step {
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  duration: string;
  deliverable: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'AI Audit',
    icon: <Search size={28} strokeWidth={1.5} />,
    description:
      'In één sessie analyseren we jouw werkprocessen. We vinden de 3 grootste kansen met de snelste terugverdientijd.',
    duration: '1 week',
    deliverable: 'Rapport met kansen + ROI',
  },
  {
    number: '02',
    title: 'Maatwerkplan',
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
    description:
      'Je krijgt een concreet plan: welke AI-oplossing, welke tools, wat het kost en wat het oplevert. Geen vaagheid.',
    duration: '1 week',
    deliverable: 'Plan met vaste prijs',
  },
  {
    number: '03',
    title: 'Implementatie',
    icon: <Settings2 size={28} strokeWidth={1.5} />,
    description:
      'Wij bouwen, testen en deployen. Jouw team krijgt training. Binnen 4–8 weken draait het. Jij ziet het verschil in de cijfers.',
    duration: '4–8 weken',
    deliverable: 'Werkend AI-systeem',
  },
];

export const FunnelSolution: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const headerRef = useReveal<HTMLDivElement>();
  const footerRef = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="section-padding bg-[color:var(--color-cream)]">
      <div className="container-funnel">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 md:mb-20">
          <div className="divider-hairline mb-6" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
            03 — De aanpak
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight">
            Van vragen naar resultaat <br className="hidden md:block" />
            <span className="italic text-[color:var(--color-primary-600)]">in 3 stappen.</span>
          </h2>
          <p className="text-lg md:text-xl text-[color:var(--color-ink-500)] leading-relaxed max-w-2xl">
            Geen workshops van een week. Geen vage roadmap. Wij werken terug vanaf het resultaat dat jij wilt zien.
          </p>
        </div>

        {/* Steps — vertical timeline on mobile, horizontal on desktop */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-10 mb-16 md:mb-20 relative">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[42px] left-[16.666%] right-[16.666%] h-px bg-[color:var(--color-line-strong)]"
          />
          {steps.map((step, idx) => (
            <StepCard key={step.number} step={step} index={idx} />
          ))}
        </div>

        {/* Footer row — reassurance + CTA */}
        <div
          ref={footerRef}
          className="reveal bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle radial accent */}
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)' }}
          />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-primary-400)] mb-4">
              Zonder risico voor jou
            </p>
            <h3
              className="font-display text-2xl md:text-3xl lg:text-[2.25rem] font-semibold leading-[1.15] tracking-tight mb-8 max-w-2xl"
              style={{ color: 'var(--color-cream)' }}
            >
              Het risico ligt bij ons. <span style={{ color: 'var(--color-ink-300)' }}>Niet bij jou.</span>
            </h3>

            {/* 3-bullet guarantee teaser */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
              <GuaranteeTeaser
                title="Geen aanbetaling"
                body="Je betaalt pas na het eerste werkende resultaat."
              />
              <GuaranteeTeaser
                title="Vaste prijs"
                body="Wat we afspreken, is wat je betaalt."
              />
              <GuaranteeTeaser
                title="Geld-terug"
                body="Werkt het niet binnen 90 dagen? Volledig terug."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onCtaClick}
                className="btn-primary btn-primary-lg group whitespace-nowrap"
              >
                Plan je strategiegesprek
                <ArrowRight size={18} strokeWidth={2.25} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#aanbod"
                className="text-sm text-[color:var(--color-ink-300)] hover:text-[color:var(--color-primary-400)] transition-colors inline-flex items-center gap-1"
              >
                Alle 4 garanties zie je in sectie 05 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="reveal relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number badge */}
      <div className="relative z-10 flex flex-col items-start mb-6">
        <div className="w-[72px] h-[72px] rounded-2xl bg-[color:var(--color-cream)] border-2 border-[color:var(--color-navy-900)] flex items-center justify-center mb-4 relative shadow-[0_4px_0_0_rgba(15,23,42,0.08)]">
          <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[color:var(--color-primary-600)] text-white flex items-center justify-center text-[11px] font-bold">
            {step.number}
          </span>
          <span className="text-[color:var(--color-navy-900)]">{step.icon}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-[color:var(--color-navy-900)] mb-3 tracking-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[color:var(--color-ink-500)] leading-relaxed text-[0.9375rem] md:text-base mb-5">
        {step.description}
      </p>

      {/* Meta row */}
      <div className="flex flex-col gap-2 pt-4 border-t border-[color:var(--color-line)]">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[color:var(--color-ink-400)] font-medium">Duur</span>
          <span className="font-semibold text-[color:var(--color-navy-900)]">{step.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[color:var(--color-ink-400)] font-medium">Jij krijgt</span>
          <span className="font-semibold text-[color:var(--color-navy-900)] text-right">{step.deliverable}</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Compact guarantee teaser used inside the navy risk-reversal card ─── */
const GuaranteeTeaser: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="flex gap-3 items-start">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color:var(--color-primary-600)] flex items-center justify-center mt-0.5">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <div>
      <p className="font-display text-base font-semibold text-[color:var(--color-cream)] tracking-tight mb-0.5">
        {title}
      </p>
      <p className="text-sm text-[color:var(--color-ink-300)] leading-relaxed">
        {body}
      </p>
    </div>
  </div>
);
