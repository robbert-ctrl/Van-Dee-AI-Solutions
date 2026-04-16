import React from 'react';
import { Clock, TrendingUp, Wallet, Compass } from 'lucide-react';
import { useReveal } from './useReveal';

interface Pain {
  icon: React.ReactNode;
  label: string;
  headline: string;
  body: string;
}

const pains: Pain[] = [
  {
    icon: <Clock size={22} strokeWidth={1.75} />,
    label: 'Tijd',
    headline: '20+ uur per week aan handmatig werk',
    body:
      'Facturen invoeren, mails sorteren, rapportages bouwen. Werk dat AI in seconden afhandelt — terwijl jouw team het uur na uur blijft doen.',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.75} />,
    label: 'Concurrentie',
    headline: 'Je concurrenten automatiseren al',
    body:
      'Bedrijven in jouw branche draaien nu workflows met AI. Ze leveren sneller, voor minder geld. Elke maand dat je wacht wordt die kloof groter.',
  },
  {
    icon: <Wallet size={22} strokeWidth={1.75} />,
    label: 'Verspilling',
    headline: 'Je hebt ChatGPT Plus — en dan?',
    body:
      'Losse AI-tools kopen is één ding. Ze écht laten werken in jouw processen is iets anders. Zonder plan verbrand je geld op abonnementen die niemand gebruikt.',
  },
  {
    icon: <Compass size={22} strokeWidth={1.75} />,
    label: 'Verlamming',
    headline: 'Je weet niet waar te beginnen',
    body:
      'AI verandert elke week. Welk model? Welke tool? Welk proces eerst? Zonder duidelijke richting blijf je eeuwig vergelijken in plaats van besparen.',
  },
];

export const FunnelPain: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const headerRef = useReveal<HTMLDivElement>();
  const bridgeRef = useReveal<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section className="section-padding bg-[color:var(--color-cream-100)] border-y border-[color:var(--color-line)]">
      <div className="container-funnel">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 md:mb-20">
          <div className="divider-hairline mb-6" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
            02 — Het probleem
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight">
            Herken je dit?
          </h2>
          <p className="text-lg md:text-xl text-[color:var(--color-ink-500)] leading-relaxed">
            Elke week dat je wacht, verlies je uren aan werk dat AI in minuten doet.
          </p>
        </div>

        {/* Pain grid */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 mb-16 md:mb-20">
          {pains.map((pain, idx) => (
            <PainCard key={pain.label} pain={pain} index={idx} />
          ))}
        </div>

        {/* Bridge to solution */}
        <div ref={bridgeRef} className="reveal max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-[color:var(--color-navy-900)] leading-[1.15] tracking-tight">
            Je hebt geen extra tool nodig.<br />
            <span className="text-[color:var(--color-primary-600)] italic">Je hebt een plan nodig.</span>
          </p>
          <div className="mt-8">
            <button onClick={onCtaClick} className="btn-link">
              Laat me zien hoe dat eruit ziet →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PainCard: React.FC<{ pain: Pain; index: number }> = ({ pain, index }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className="reveal group relative bg-white border border-[color:var(--color-line)] rounded-2xl p-6 md:p-8 hover:border-[color:var(--color-navy-900)]/20 hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] transition-all duration-300"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Index + icon row */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] flex items-center justify-center">
          {pain.icon}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-400)]">
          {pain.label}
        </span>
      </div>

      {/* Headline */}
      <h3 className="font-display text-xl md:text-2xl font-semibold text-[color:var(--color-navy-900)] mb-3 leading-[1.2] tracking-tight">
        {pain.headline}
      </h3>

      {/* Body */}
      <p className="text-[color:var(--color-ink-500)] leading-relaxed text-[0.9375rem] md:text-base">
        {pain.body}
      </p>
    </div>
  );
};
