import React from 'react';
import { User, Tag, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const AdvantageCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}> = ({ title, desc, icon, index }) => (
  <Reveal delay={index * 0.1}>
    <div className="p-6 rounded-xl glass-panel border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
      <div className="mb-4 p-4 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </Reveal>
);

export const WhyMe: React.FC = () => {
  const advantages = [
    {
      title: "Persoonlijke Aandacht",
      desc: "Ik werk met een beperkt aantal klanten tegelijk. U krijgt directe toegang, geen tussenmannetjes.",
      icon: <User size={24} />
    },
    {
      title: "Transparante Samenwerking",
      desc: "Early adopter voorwaarden. U helpt mij bewijzen dat dit werkt, ik bied directe toegang en eerlijke tarieven.",
      icon: <Tag size={24} />
    },
    {
      title: "Moderne Tech",
      desc: "Geen legacy code. Ik gebruik de nieuwste AI-modellen (Gemini 2.0, GPT, Claude).",
      icon: <Zap size={24} />
    }
  ];

  return (
    <section className="py-20 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Waarom <span className="text-neon-cyan">Van Dee AI Solutions?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Directe toegang, transparantie, en eerlijke samenwerking.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              desc={advantage.desc}
              icon={advantage.icon}
              index={index}
            />
          ))}
        </div>

        <Reveal delay={0.3} width="100%">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-400 mb-4">
              <span className="text-white font-semibold">Gespecialiseerd in moderne AI-implementaties voor MKB.</span> Praktische aanpak, zonder corporate overhead.
            </p>
            <a
              href="https://www.linkedin.com/company/vandee-ai-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-cyan-300 transition-colors text-sm underline"
            >
              Bekijk LinkedIn Profiel →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
