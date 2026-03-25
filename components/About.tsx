import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-deep-space border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Moderne <span className="text-neon-cyan">AI-oplossingen</span></h2>

              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                <p className="text-white font-semibold text-lg">
                  Ik lanceer Van Dee AI Solutions.
                </p>
                <p>
                  In plaats van jaren corporate processen te volgen, heb ik me gericht op
                  wat er nu werkt: de nieuwste AI-modellen (GPT, Claude, Gemini) en
                  moderne automatiseringstechnieken.
                </p>
                <p className="text-white font-semibold">
                  Het voordeel voor u:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Directe, praktische kennis van cutting-edge tools</li>
                  <li>• Geen bureaucratie of overhead van grote bureaus</li>
                  <li>• Focus op resultaten, niet op procedures</li>
                </ul>
                <p>
                  Ik gebruik dezelfde moderne AI-tools en technieken als grote consultancy bureaus,
                  zonder de overhead en complexiteit van een groot bedrijf.
                </p>
                <p className="text-neon-cyan font-semibold">
                  Early Adopter Samenwerking:
                </p>
                <p>
                  Als early adopter helpt u mij bewijzen dat deze aanpak werkt in de praktijk.
                  In ruil: transparante tarieven, directe toegang, en persoonlijke samenwerking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/company/vandee-ai-solutions', '_blank')}
                >
                  LinkedIn Profiel <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://cal.com/vandeeaisolutions/discoverycall', '_blank')}
                >
                  Plan een Gesprek <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <Reveal width="100%">
              <div className="relative w-full max-w-sm aspect-square mx-auto">
                <div className="absolute inset-0 border-2 border-neon-purple/30 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-2xl transform -rotate-3" />
                
                <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10 group">
                    <img
                      src="/robbert.jpg"
                      alt="Robbert van Dee, Founder & AI Architect bij Van Dee AI Solutions - Expert in AI Automatisering en Workflow Optimalisatie"
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="relative w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                              <span class="text-4xl">👨‍💻</span>
                          </div>
                          <div class="absolute bottom-6 text-center w-full">
                              <p class="font-display font-bold text-lg text-white">Robbert van Dee</p>
                              <p class="text-xs text-neon-cyan tracking-widest uppercase">Founder & AI Architect</p>
                          </div>
                        `;
                      }}
                    />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};