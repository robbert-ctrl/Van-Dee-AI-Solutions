import React, { useEffect, useRef, useState } from 'react';
import { Phone, FileSearch, Code2, Lock, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';

const Step: React.FC<{ 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  isLeft: boolean;
}> = ({ title, desc, icon, isLeft }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 relative z-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
    
    <div className={`flex-1 text-center ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
      <Reveal width="100%">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </Reveal>
    </div>

    <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-deep-space border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.3)] group hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full bg-neon-cyan/20 animate-pulse" />
      <div className="text-white relative z-10">{icon}</div>
    </div>

    <div className="flex-1 hidden md:block" />
  </div>
);

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.8; 
        let progress = (start - rect.top) / rect.height * 100;
        progress = Math.max(0, Math.min(100, progress * 1.5));
        setLineHeight(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-20 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Onze <span className="text-neon-purple">Werkwijze</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Heldere stappen. Vaste prijzen. Geen verrassingen.
            </p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block" />
          <div 
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan transform -translate-x-1/2 hidden md:block transition-all duration-100 ease-out shadow-[0_0_10px_#00f3ff]" 
            style={{ height: `${lineHeight}%` }}
          />

          <Step
            title="1. Gratis Verkenningsgesprek"
            desc="30 min call. Geen kosten, geen verplichtingen."
            icon={<Phone size={20} />}
            isLeft={true}
          />

          <Step
            title="2. Voorstel & Prijs"
            desc="U krijgt een technisch plan met vaste prijs. Launch pricing: speciale tarieven voor early adopters."
            icon={<FileSearch size={20} />}
            isLeft={false}
          />

          <Step
            title="3. Bouwen in Sprints"
            desc="Ik bouw, u test elke week. Aanpassingen zijn normaal."
            icon={<Code2 size={20} />}
            isLeft={true}
          />

          <Step
            title="4. Overdracht"
            desc="U krijgt de code, documentatie en training. 100% uw eigendom."
            icon={<Lock size={20} />}
            isLeft={false}
          />
        </div>

        {/* Pricing Section */}
        <Reveal delay={0.4} width="100%">
          <div className="mt-16 max-w-3xl mx-auto glass-panel p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Launch Pricing <span className="text-neon-cyan">- Beperkt Beschikbaar</span></h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span>Simpele automatisering (1 taak)</span>
                <span className="text-neon-cyan font-bold">€2.500 - €5.000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span>Chatbot/AI assistent</span>
                <span className="text-neon-cyan font-bold">€5.000 - €8.000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span>Custom workflow (meerdere systemen)</span>
                <span className="text-neon-cyan font-bold">€8.000 - €15.000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span>Onderhoud (optioneel)</span>
                <span className="text-gray-400 font-bold">€200 - €500/maand</span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Launch pricing is beperkt beschikbaar. Reguliere tarieven gaan later in.
            </p>
          </div>
        </Reveal>

        <div className="text-center mt-12">
            <Button onClick={() => window.open('https://cal.com/vandeeaisolutions/discoverycall', '_blank')} glow>
                Start met stap 1 <ArrowRight size={16} className="ml-2" />
            </Button>
        </div>
      </div>
    </section>
  );
};