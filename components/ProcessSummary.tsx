import React from 'react';
import { Phone, Code2, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

const ProcessPhaseCard: React.FC<{
  phase: string;
  title: string;
  duration: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
  index: number;
  color: string;
}> = ({ phase, title, duration, description, highlight, icon, index, color }) => (
  <Reveal delay={index * 0.1}>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${color}`}>
          {phase}
        </span>
        <div className={`p-3 rounded-xl ${color.replace('text-', 'bg-').replace('600', '50')}`}>
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
      <p className={`text-sm font-semibold mb-3 ${color}`}>{duration}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      <div className="pt-4 border-t border-gray-100">
        <p className="text-sm font-medium text-emerald-600 flex items-center gap-2">
          <span className="text-emerald-500">✓</span>
          {highlight}
        </p>
      </div>
    </div>
  </Reveal>
);

export const ProcessSummary: React.FC = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Discovery",
      duration: "Week 1 — Gratis",
      description: "We analyseren uw processen en identificeren de grootste automatiseringskansen met meetbare ROI.",
      highlight: "Gratis analyserapport van 5-10 pagina's",
      icon: <Phone size={22} className="text-brand-600" />,
      color: "text-brand-600 bg-brand-50",
    },
    {
      phase: "Fase 2",
      title: "Development",
      duration: "2-8 weken — Agile",
      description: "Uw oplossing wordt gebouwd in weekly sprints. U ziet elke week tastbare vooruitgang en geeft direct feedback.",
      highlight: "Werkend prototype na 1-2 weken",
      icon: <Code2 size={22} className="text-violet-600" />,
      color: "text-violet-600 bg-violet-50",
    },
    {
      phase: "Fase 3",
      title: "Deployment",
      duration: "1-2 weken + 30 dagen support",
      description: "We lanceren veilig naar productie, trainen uw team en monitoren de eerste resultaten.",
      highlight: "100% code eigendom en documentatie",
      icon: <Lock size={22} className="text-emerald-600" />,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <section className="section-padding bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ons Proces
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Van eerste gesprek tot werkend systeem in drie duidelijke fases.
            </p>
          </Reveal>
        </div>

        <div className="mb-8">
          <Reveal width="100%">
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-600" />
                <span className="text-slate-500 text-xs">Discovery</span>
              </div>
              <ArrowRight size={14} className="text-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-600" />
                <span className="text-slate-500 text-xs">Development</span>
              </div>
              <ArrowRight size={14} className="text-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-600" />
                <span className="text-slate-500 text-xs">Deployment</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {phases.map((phase, index) => (
            <ProcessPhaseCard key={phase.phase} {...phase} index={index} />
          ))}
        </div>

        <Reveal delay={0.3} width="100%">
          <div className="text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors font-medium text-sm group"
            >
              Bekijk het volledige proces
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
