import React from 'react';
import { Reveal } from './Reveal';
import { Users, Star, TrendingUp, Shield, Code2, Zap } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => (
  <Reveal delay={delay}>
    <div className="text-center p-6 rounded-xl glass-panel border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 h-full">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-cyan/10 text-neon-cyan mb-4 border border-neon-cyan/20">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </Reveal>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-purple text-xs font-medium tracking-wider uppercase mb-6">
              <Star size={14} className="fill-neon-purple" />
              Early Adopter Programma
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Word Een Van De <span className="text-neon-cyan">Eersten</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We starten met een select groep bedrijven. Als early adopter krijgt u exclusieve voordelen
              en helpt u mee de case studies van morgen te bouwen.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <BenefitCard
            icon={<Users size={20} />}
            title="Directe Toegang"
            description="Werk rechtstreeks met de founder, geen wachtlijsten of tussenmannetjes"
            delay={0.1}
          />
          <BenefitCard
            icon={<TrendingUp size={20} />}
            title="Transparante Tarieven"
            description="Eerlijke early adopter voorwaarden zonder corporate overhead"
            delay={0.2}
          />
          <BenefitCard
            icon={<Shield size={20} />}
            title="100% Eigendom"
            description="Volledige code ownership, geen vendor lock-in, alles van u"
            delay={0.3}
          />
        </div>

        <Reveal delay={0.4} width="100%">
          <div className="max-w-3xl mx-auto glass-panel p-5 sm:p-8 rounded-2xl border border-white/10">
            <div className="text-center">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Ik start dit bedrijf met een eerlijke aanpak: samen bouwen we bewijs. Als early adopter
                krijgt u toegang tot de nieuwste AI-technologie tegen transparante tarieven. In ruil helpt
                u mij bewijzen dat deze aanpak werkt voor Nederlandse MKB bedrijven."
              </p>
              <p className="text-sm text-neon-cyan font-semibold mb-4">
                — Robbert van Dee, Founder
              </p>
              <p className="text-xs text-gray-500">
                KVK: 85394041 | Gevestigd in Tiel, Nederland
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5} width="100%">
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              * Resultaten variëren per bedrijf. Tijdens het gratis verkenningsgesprek bepalen we samen realistische verwachtingen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
