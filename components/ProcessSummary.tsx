import React from 'react';
import { Phone, Code2, Lock, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const ProcessSummaryCard: React.FC<{
  phase: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
  icon: React.ReactNode;
  index: number;
  badgeColor: string;
}> = ({ phase, title, duration, description, activities, deliverables, icon, index, badgeColor }) => (
  <Reveal delay={index * 0.1}>
    <div className="p-6 md:p-8 rounded-2xl glass-panel border-2 border-white/10 hover:border-neon-cyan/30 transition-all duration-300 h-full flex flex-col">
      {/* Header with badge and icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border"
             style={{
               backgroundColor: badgeColor === 'cyan' ? 'rgba(0, 243, 255, 0.1)' : badgeColor === 'purple' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(34, 197, 94, 0.1)',
               color: badgeColor === 'cyan' ? '#00F3FF' : badgeColor === 'purple' ? '#A855F7' : '#22C55E',
               borderColor: badgeColor === 'cyan' ? 'rgba(0, 243, 255, 0.2)' : badgeColor === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(34, 197, 94, 0.2)'
             }}>
          {phase}
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10"
             style={{ color: badgeColor === 'cyan' ? '#00F3FF' : badgeColor === 'purple' ? '#A855F7' : '#22C55E' }}>
          {icon}
        </div>
      </div>

      {/* Title and duration */}
      <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
      <p className="text-sm font-semibold mb-3"
         style={{ color: badgeColor === 'cyan' ? '#00F3FF' : badgeColor === 'purple' ? '#A855F7' : '#22C55E' }}>
        ⏱ {duration}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Activities */}
      <div className="mb-4">
        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
          <span className="text-neon-cyan">→</span> Wat We Doen
        </h4>
        <ul className="space-y-1.5">
          {activities.map((activity, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-400 text-xs">
              <span className="text-neon-cyan mt-0.5">•</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Deliverables */}
      <div className="pt-4 border-t border-white/10 mt-auto">
        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
          <span className="text-green-400">✓</span> Wat U Krijgt
        </h4>
        <ul className="space-y-1.5">
          {deliverables.map((deliverable, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs font-medium">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Reveal>
);

export const ProcessSummary: React.FC = () => {
  const processPhases = [
    {
      phase: "Fase 1",
      title: "Discovery",
      duration: "Week 1 - Gratis",
      description: "We analyseren uw processen en identificeren de grootste automatiseringskansen met meetbare ROI.",
      activities: [
        "30-minuten strategiegesprek met procesanalyse",
        "Identificeren van automatiseringskansen met grootste ROI",
        "ROI-berekening: hoeveel uur en geld bespaart dit?"
      ],
      deliverables: [
        "Geschreven analyse rapport (5-10 pagina's)",
        "ROI berekening per automatiseringskans",
        "Transparante prijs- en tijdsinschatting"
      ],
      icon: <Phone size={24} />,
      badgeColor: "cyan"
    },
    {
      phase: "Fase 2",
      title: "Development",
      duration: "2-8 weken - Agile",
      description: "Uw oplossing wordt gebouwd in weekly sprints met continue feedback en testing.",
      activities: [
        "Weekly sprints: u ziet elke week tastbare vooruitgang",
        "Iteratief bouwen: eerst MVP, dan uitbreiden",
        "Feedback loops: uw input wordt direct verwerkt"
      ],
      deliverables: [
        "Werkend prototype (na 1-2 weken)",
        "Weekly demo's en voortgangsrapportages",
        "Volledig geteste AI-automatisering"
      ],
      icon: <Code2 size={24} />,
      badgeColor: "purple"
    },
    {
      phase: "Fase 3",
      title: "Deployment",
      duration: "1-2 weken + Support",
      description: "We lanceren veilig naar productie en trainen uw team voor optimaal gebruik.",
      activities: [
        "Veilige deployment naar productie omgeving",
        "Team training: uw medewerkers leren het systeem te gebruiken",
        "Fine-tuning op basis van eerste gebruik"
      ],
      deliverables: [
        "Live, werkend systeem in productie",
        "Training sessies voor uw team",
        "30 dagen priority support (email/WhatsApp)"
      ],
      icon: <Lock size={24} />,
      badgeColor: "green"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black/20">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ons <span className="text-neon-cyan">Proces</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Van eerste gesprek tot werkend systeem in drie duidelijke fases.
            </p>
          </Reveal>
        </div>

        {/* Timeline visualization */}
        <div className="mb-10">
          <Reveal width="100%">
            <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                <span className="text-gray-300 text-xs">Discovery</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-purple" />
                <span className="text-gray-300 text-xs">Development</span>
              </div>
              <div className="text-gray-600">→</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-gray-300 text-xs">Deployment</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Three phase cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {processPhases.map((phase, index) => (
            <ProcessSummaryCard
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              duration={phase.duration}
              description={phase.description}
              activities={phase.activities}
              deliverables={phase.deliverables}
              icon={phase.icon}
              index={index}
              badgeColor={phase.badgeColor}
            />
          ))}
        </div>

        {/* CTA to full process page */}
        <Reveal delay={0.3} width="100%">
          <div className="text-center">
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-cyan-300 transition-colors font-medium group text-sm"
            >
              Zie het volledige proces
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
