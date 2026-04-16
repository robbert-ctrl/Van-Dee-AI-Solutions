import React from 'react';
import { Phone, Code2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { GuaranteeCard, GuaranteeSection } from './Guarantee';

const ProcessPhase: React.FC<{
  phase: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
  icon: React.ReactNode;
  index: number;
}> = ({ phase, title, duration, description, activities, deliverables, icon, index }) => (
  <Reveal delay={index * 0.2} width="100%">
    <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-all duration-300 h-full group relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-wider mb-3 border border-brand-200">
              {phase}
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{title}</h2>
            <p className="text-violet-600 font-semibold text-sm flex items-center gap-2">
              <span className="text-lg">⏱</span> {duration}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-50 border border-gray-100 text-brand-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed mb-6 text-base">
          {description}
        </p>

        {/* Activities */}
        <div className="mb-6">
          <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="text-brand-600">→</span> Wat We Doen
          </h4>
          <ul className="space-y-2">
            {activities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-500 text-sm">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="pt-6 border-t border-gray-100">
          <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="text-violet-600">✓</span> Wat U Krijgt
          </h4>
          <ul className="space-y-2">
            {deliverables.map((deliverable, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Reveal>
);

export const HowItWorks: React.FC = () => {

  const processPhases = [
    {
      phase: "Fase 1",
      title: "Discovery",
      duration: "Week 1 - Gratis Verkenningsgesprek",
      description: "We beginnen met het grondig begrijpen van uw visie, doelen en uitdagingen. Door gezamenlijke discussies en research leggen we de basis voor het succes van uw project.",
      activities: [
        "30-minuten strategiegesprek - diepgaande analyse van uw processen",
        "Identificeren van automatiseringskansen met grootste ROI",
        "Tech-stack analyse: welke systemen gebruikt u en wat is mogelijk?",
        "Haalbaarheidscheck: kunnen we dit technisch realiseren?",
        "ROI-berekening: hoeveel uur en geld bespaart dit?"
      ],
      deliverables: [
        "Geschreven analyse rapport (5-10 pagina's)",
        "Strategisch implementatieplan met prioriteiten",
        "ROI berekening per automatiseringskans",
        "Technische architectuur voorstel",
        "Transparante prijs- en tijdsinschatting"
      ],
      icon: <Phone size={32} />
    },
    {
      phase: "Fase 2",
      title: "Development",
      duration: "2-8 weken - Agile Sprints",
      description: "Ons team transformeert ideeën naar werkelijkheid door agile development. We bouwen, testen en itereren, en zorgen ervoor dat uw oplossing voldoet aan de hoogste kwaliteits- en prestatiestandaarden.",
      activities: [
        "Weekly sprints: u ziet elke week tastbare vooruitgang",
        "Iteratief bouwen: eerst MVP, dan uitbreiden",
        "Continue testing: elke functie wordt grondig getest",
        "Feedback loops: uw input wordt direct verwerkt",
        "Code reviews: kwaliteit staat voorop"
      ],
      deliverables: [
        "Werkend prototype (na 1-2 weken)",
        "Weekly demo's en voortgangsrapportages",
        "Volledig geteste AI-automatisering",
        "Integratie met uw bestaande systemen",
        "Volledige broncode documentatie"
      ],
      icon: <Code2 size={32} />
    },
    {
      phase: "Fase 3",
      title: "Deployment",
      duration: "Week 1-2 + 30 dagen support",
      description: "We lanceren zorgvuldig uw oplossing en zorgen voor een soepele overgang naar productie. Ons team biedt doorlopende ondersteuning en optimalisatie om uw systeem op zijn best te laten draaien.",
      activities: [
        "Veilige deployment naar productie omgeving",
        "Team training: uw medewerkers leren het systeem te gebruiken",
        "Monitoring setup: we houden prestaties in de gaten",
        "Fine-tuning op basis van eerste gebruik",
        "Documentatie overdracht voor toekomstig onderhoud"
      ],
      deliverables: [
        "Live, werkend systeem in productie",
        "Complete technische documentatie",
        "Training sessies voor uw team",
        "30 dagen priority support (email/WhatsApp)",
        "100% eigendom: code, data én documentatie"
      ],
      icon: <Lock size={32} />
    }
  ];

  return (
    <section id="howitworks" className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Ons <span className="text-violet-600">Proces</span>: Van Idee tot Werkende AI-Automatisering
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Van eerste gesprek tot werkend systeem. Elke stap is transparant, gestructureerd en gericht op uw succes.
              Wilt u eerst weten of AI iets voor uw bedrijf is?{' '}
              <Link to="/ai-scan" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                Doe de gratis AI Scan
              </Link>.
            </p>
          </Reveal>
        </div>

        {/* Process Timeline Visualization */}
        <div className="mb-16">
          <Reveal width="100%" delay={0.1}>
            <div className="flex items-center justify-center gap-4 text-sm mb-12 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-600" />
                <span className="text-slate-600">Discovery (Week 1)</span>
              </div>
              <div className="text-slate-400">→</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-600" />
                <span className="text-slate-600">Development (2-8 weken)</span>
              </div>
              <div className="text-slate-400">→</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-600" />
                <span className="text-slate-600">Deployment (1-2 weken)</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Three Main Phases */}
        <div className="grid md:grid-cols-1 gap-8 mb-20 max-w-5xl mx-auto">
          {processPhases.map((phase, index) => (
            <ProcessPhase
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              duration={phase.duration}
              description={phase.description}
              activities={phase.activities}
              deliverables={phase.deliverables}
              icon={phase.icon}
              index={index}
            />
          ))}
        </div>

        {/* Key Benefits Summary */}
        <Reveal delay={0.6} width="100%">
          <div className="mb-16 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
              Waarom Klanten Voor Ons <span className="text-brand-600">Proces</span> Kiezen
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold text-slate-800 mb-1">Transparant</h4>
                <p className="text-sm text-slate-500">Geen verrassingen. U weet exact wat er gebeurt en wat u krijgt.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-bold text-slate-800 mb-1">Snel</h4>
                <p className="text-sm text-slate-500">Eerste resultaten binnen 2 weken. Werkend systeem binnen 2 maanden.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔒</div>
                <h4 className="font-bold text-slate-800 mb-1">Volledig Eigendom</h4>
                <p className="text-sm text-slate-500">Code, data én documentatie zijn 100% van u. Geen vendor lock-in.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Guarantees */}
        <Reveal delay={0.8} width="100%">
          <div className="mb-16">
            <GuaranteeSection>
              <GuaranteeCard
                icon="✓"
                title="Werkend Prototype of Geld Terug"
                description="Niet tevreden met prototype? 100% refund"
              />
              <GuaranteeCard
                icon="✓"
                title="Resultaat Garantie"
                description="Geen resultaat binnen 6 maanden? Ik werk gratis door"
              />
              <GuaranteeCard
                icon="✓"
                title="Volledige Eigendom & Support"
                description="Code, documentatie, training & 30 dagen support"
              />
            </GuaranteeSection>
          </div>
        </Reveal>

        {/* CTA Section */}
        <Reveal delay={1.0} width="100%">
          <div className="text-center max-w-3xl mx-auto">
            <div className="p-10 rounded-2xl bg-white border-2 border-brand-200 shadow-md relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Klaar Om Te Beginnen?
                </h2>
                <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
                  Boek uw gratis verkenningsgesprek en ontdek binnen 30 minuten wat AI voor uw bedrijf kan betekenen.
                </p>

                <a
                  href="https://cal.com/vandeeaisolutions/discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-10 py-5 bg-brand-600 text-white font-bold text-lg rounded-xl hover:bg-brand-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 group/btn">
                    <span className="flex items-center gap-3">
                      <Phone size={24} />
                      Boek Gratis Verkenningsgesprek
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                </a>

                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Geen verplichtingen
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> 30 minuten
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Geschreven rapport
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                  <Link to="/faq" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                    Veelgestelde vragen &rarr;
                  </Link>
                  <Link to="/about" className="text-slate-500 hover:text-brand-600 font-medium transition-colors">
                    Over ons &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
