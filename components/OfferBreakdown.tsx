import React from 'react';
import { Zap, BookOpen, Wrench, MessageCircle, Gift, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { GuaranteeCard, GuaranteeSection } from './Guarantee';

const PhaseCard: React.FC<{
  phase: string;
  title: string;
  items: string[];
  outcome: string;
  delay?: number;
}> = ({ phase, title, items, outcome, delay = 0 }) => (
  <Reveal delay={delay} width="100%">
    <div className="p-8 rounded-xl glass-panel border border-white/10 hover:border-neon-cyan/20 transition-all duration-300">
      <div className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium uppercase tracking-wider mb-4">
        {phase}
      </div>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <span className="text-neon-cyan mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          <span className="text-neon-cyan font-semibold">→</span> {outcome}
        </p>
      </div>
    </div>
  </Reveal>
);

const AcceleratorCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  timeSaved: string;
  index: number;
}> = ({ icon, title, description, timeSaved, index }) => (
  <Reveal delay={index * 0.1} width="100%">
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon-purple/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm mb-4 flex-1">{description}</p>
      <div className="pt-3 border-t border-white/10">
        <p className="text-neon-purple text-sm font-semibold">
          💡 {timeSaved}
        </p>
      </div>
    </div>
  </Reveal>
);

export const OfferBreakdown: React.FC = () => {
  const accelerators = [
    {
      icon: <Zap size={20} />,
      title: "AI Prompt Library",
      description: "50+ geteste prompts voor ChatGPT/Claude/Gemini. Specifiek voor MKB-processen (facturatie, klantenservice, data-entry). Direct te gebruiken, geen technische kennis nodig.",
      timeSaved: "Bespaart 5-10 uur per week aan trial-and-error"
    },
    {
      icon: <Wrench size={20} />,
      title: "Automatisering Integratie Gids",
      description: "Welke tools integreren met wat (Zapier, Make, API's). Plug-and-play templates. Kosten-baten beslisboom.",
      timeSaved: "Bespaart weken zoekwerk en testwerk"
    },
    {
      icon: <MessageCircle size={20} />,
      title: "30 Dagen Priority Support",
      description: "Direct toegang via WhatsApp/Slack/Email. Response binnen 4 uur op werkdagen. Bugs/vragen direct opgelost.",
      timeSaved: "Peace of mind, geen downtime"
    },
    {
      icon: <Award size={20} />,
      title: "AI Tools & Licenties Advies",
      description: "Overzicht van beste tools voor uw use case. Waar korting-deals te vinden. Setup assistentie.",
      timeSaved: "Bespaart honderden euro's per jaar aan verkeerde tool-keuzes"
    }
  ];

  return (
    <section className="py-24 relative bg-deep-space">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Complete Aanpak: <span className="text-neon-cyan">Wat U Krijgt</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Van eerste analyse tot werkend systeem - alles inbegrepen
            </p>
          </Reveal>
        </div>

        {/* Phase 1 & 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <PhaseCard
            phase="Fase 1"
            title="Gratis Verkenningsgesprek"
            items={[
              "30-min Strategy Call",
              "Geschreven Analyse Rapport (5-10 pagina's)",
              "Strategisch Implementatieplan",
              "ROI Berekening per automatiserings-kans"
            ]}
            outcome="U weet exact wat mogelijk is, geen verplichtingen"
            delay={0.2}
          />

          <PhaseCard
            phase="Fase 2"
            title="Custom AI Oplossing (als u doorgaat)"
            items={[
              "Volledig op maat gebouwde automatisering",
              "Integratie met uw bestaande systemen",
              "100% eigendom van code en data",
              "Technische documentatie"
            ]}
            outcome="Werkend systeem dat uw proces automatiseert"
            delay={0.3}
          />
        </div>

        {/* Accelerators */}
        <Reveal delay={0.4} width="100%">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-4">
              + 4 Implementatie <span className="text-neon-purple">Accelerators</span>
            </h3>
            <p className="text-gray-400 text-center mb-8">Gratis Inbegrepen</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accelerators.map((accelerator, index) => (
                <AcceleratorCard
                  key={index}
                  icon={accelerator.icon}
                  title={accelerator.title}
                  description={accelerator.description}
                  timeSaved={accelerator.timeSaved}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Guarantees */}
        <Reveal delay={0.6} width="100%">
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

        {/* Outcome Summary */}
        <Reveal delay={0.8} width="100%">
          <div className="text-center max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Eindresultaat</h3>
            <p className="text-5xl font-display font-bold text-neon-cyan mb-4">Aanzienlijke Tijdsbesparing</p>
            <p className="text-gray-400 text-sm mb-6">(Afhankelijk van uw processen, gemiddeld 20-40 uur/week)</p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p>✓ Medewerkers bevrijd van repetitief werk</p>
              <p>✓ Systeem dat volledig van u is</p>
              <p>✓ Geen vendor lock-in</p>
            </div>
            <Button
              glow
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://cal.com/vandeeaisolutions/discoverycall', '_blank')}
            >
              Boek Uw Gratis Analyse →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
