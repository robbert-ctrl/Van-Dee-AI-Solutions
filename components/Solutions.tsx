import React from 'react';
import { Workflow, Mail, BarChart3, Clock, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  before: string;
  after: string;
  description: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  before,
  after,
  description,
  index,
}) => (
  <Reveal delay={index * 0.1}>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-6 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>

      {/* Before / After */}
      <div className="space-y-3 mb-5">
        <div className="flex items-start gap-2">
          <Clock size={16} className="text-loss-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            <span className="font-semibold text-slate-600">V&oacute;&oacute;r:</span>{' '}
            <span className="text-loss-600">{before}</span>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <Zap size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            <span className="font-semibold text-slate-600">Na:</span>{' '}
            <span className="text-emerald-600">{after}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mt-auto">{description}</p>
    </div>
  </Reveal>
);

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Workflow size={24} />,
      title: 'Systemen Koppelen',
      before: '3 minuten per factuur, handmatig',
      after: '3 seconden, automatisch in Exact',
      description:
        'Uw systemen praten automatisch met elkaar. Geen dubbele invoer meer.',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Automatisering',
      before: '45 min/dag handmatig sorteren',
      after: 'Elke email direct bij de juiste persoon',
      description: 'AI classificeert en routeert uw emails 24/7.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Rapportages & Data',
      before: '3 uur/week Excel bijwerken',
      after: '1 klik, rapport klaar',
      description:
        'Automatische rapportages, data-entry en factuurcontroles.',
    },
  ];

  return (
    <section id="services" className="bg-surface-50 section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              AI Automatisering voor Uw Bedrijfsprocessen
            </h2>
            <p className="text-slate-500 text-lg">
              Van factuurverwerking tot rapportages — concrete resultaten, geen vage beloftes.
              Ontdek welke workflow automatisering het meeste oplevert voor uw MKB-bedrijf.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              before={solution.before}
              after={solution.after}
              description={solution.description}
              index={index}
            />
          ))}
        </div>

        {/* Anchoring banner */}
        <Reveal delay={0.3} width="100%">
          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 text-center">
            <p className="text-slate-500 text-sm leading-relaxed">
              Grote consultancybureaus rekenen{' '}
              <span className="text-loss-600 font-semibold">
                &euro;150&ndash;300/uur
              </span>{' '}
              voor dezelfde oplossingen. Wij werken{' '}
              <span className="text-slate-800 font-semibold">
                transparant en betaalbaar
              </span>
              .
            </p>
          </div>
        </Reveal>

        {/* Mini-CTA + Internal links */}
        <Reveal delay={0.4} width="100%">
          <div className="text-center mt-8 space-y-3">
            <CalPopupButton
              calLink="vandeeaisolutions/discoverycall"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
            >
              Vraag aan of dit voor u werkt
              <ArrowRight size={16} />
            </CalPopupButton>
            <div className="flex justify-center gap-4 text-sm">
              <Link
                to="/how-it-works"
                className="text-slate-500 hover:text-brand-600 font-medium transition-colors inline-flex items-center gap-1"
              >
                Bekijk ons proces <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
