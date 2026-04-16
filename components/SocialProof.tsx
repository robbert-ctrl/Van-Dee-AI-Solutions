import React from 'react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const resultCards = [
  {
    company: 'Administratiekantoor in Gelderland',
    saving: 'Geïdentificeerde besparingskans: 12 uur/week',
    detail: 'op factuurverwerking',
  },
  {
    company: 'Handelsbedrijf in Utrecht',
    saving: 'Geïdentificeerde besparingskans: 8 uur/week',
    detail: 'op email en ordermanagement',
  },
  {
    company: 'Installatiebedrijf in Zuid-Holland',
    saving: 'Geïdentificeerde besparingskans: 15 uur/week',
    detail: 'op rapportages en planning',
  },
];

const techBadges = ['Make.com', 'OpenAI', 'Google Cloud', 'Microsoft Azure'];

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Wat we typisch vinden
            </h2>
            <p className="text-lg text-slate-500">
              Dit zijn de besparingskansen die we bij vergelijkbare bedrijven identificeren.
            </p>
          </Reveal>
        </div>

        {/* Result Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resultCards.map((card, index) => (
            <Reveal key={card.company} delay={0.1 + index * 0.15} width="100%">
              <div className="bg-surface-50 rounded-2xl p-8 h-full">
                <p className="text-slate-800 font-medium mb-3">
                  {card.company}
                </p>
                <p className="text-emerald-600 font-bold text-lg mb-1">
                  {card.saving}
                </p>
                <p className="text-slate-500 text-sm">{card.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Technology Trust Bar */}
        <Reveal delay={0.6} width="100%">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-slate-500 font-medium mr-2">
              Gebouwd met:
            </span>
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-slate-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.7} width="100%">
          <p className="text-center text-xs text-slate-400 mt-6">
            Op basis van onze procesanalyses. Werkelijke resultaten vari&euml;ren per bedrijf.
          </p>
        </Reveal>

        {/* Internal link to AI Scan */}
        <Reveal delay={0.8} width="100%">
          <div className="text-center mt-8">
            <Link
              to="/ai-scan"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
            >
              Ontdek uw eigen besparingskansen met de gratis AI Scan
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
