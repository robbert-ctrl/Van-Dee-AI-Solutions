import React from 'react';
import { Workflow, BarChart3, Mail, Lightbulb, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ProcessSummary } from './ProcessSummary';

const ServiceCard: React.FC<{
  title: string;
  question: string;
  icon: React.ReactNode;
  example: string;
  index: number;
}> = ({ title, question, icon, example, index }) => (
  <Reveal delay={index * 0.1}>
    <div className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-neon-cyan/30 relative h-full flex flex-col hover:z-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
      <div className="mb-6 p-4 rounded-full bg-white/5 w-fit text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm flex-1 mb-3">{question}</p>
      <p className="text-xs text-neon-cyan/70 italic mt-auto">{example}</p>
    </div>
  </Reveal>
);

const MaatwerkBanner: React.FC = () => (
  <Reveal delay={0.3} width="100%">
    <div className="mt-12 p-6 md:p-8 rounded-2xl glass-panel border-t-2 border-transparent bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-cyan/5 hover:border-t-neon-cyan transition-all duration-300 relative overflow-hidden group">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Icon */}
        <div className="flex-shrink-0 p-4 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-colors">
          <Lightbulb size={28} />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-1">Iets Anders?</h3>
          <p className="text-gray-400 text-sm">Vertel mij uw grootste tijdverspiller</p>
        </div>

        {/* CTA Button */}
        <a
          href="https://cal.com/vandeeaisolutions/discoverycall"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 group/btn"
        >
          <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            Boek Verkenningsgesprek
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  </Reveal>
);

export const Solutions: React.FC = () => {
  const services = [
    {
      title: "Nog Steeds Dubbel Werk?",
      question: "Systemen praten niet met elkaar?",
      icon: <Workflow size={28} />,
      example: "Factuur PDF → Direct in Exact"
    },
    {
      title: "Verdrinkt U in Emails?",
      question: "Te veel inbox chaos?",
      icon: <Mail size={28} />,
      example: "Offertes naar sales, vragen naar support"
    },
    {
      title: "Elke Dag Hetzelfde Werk?",
      question: "Steeds dezelfde handelingen herhalen?",
      icon: <BarChart3 size={28} />,
      example: "Rapporten, data-entry, factuurcontroles"
    }
  ];

  return (
    <>
      {/* Service Cards Section */}
      <section id="services" className="py-20 relative bg-deep-space">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Wat We Voor U <span className="text-neon-cyan">Automatiseren</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Concrete oplossingen voor veelvoorkomende problemen.
              </p>
            </Reveal>
          </div>

          <div className="py-6">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  question={service.question}
                  icon={service.icon}
                  example={service.example}
                  index={index}
                />
              ))}
            </div>
          </div>

          <MaatwerkBanner />

          {/* How It Works CTA */}
          <Reveal delay={0.4} width="100%">
            <div className="text-center mt-12">
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-cyan-300 transition-colors font-medium group"
              >
                Zie het volledige proces
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Summary Section - Condensed Hoe Werkt Het */}
      <ProcessSummary />
    </>
  );
};
