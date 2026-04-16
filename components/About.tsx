import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-surface-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="order-2 md:order-1">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Moderne <span className="text-brand-600">AI-oplossingen</span> voor MKB-Bedrijven</h1>

              <div className="space-y-4 text-slate-500 leading-relaxed mb-8">
                <p className="text-slate-800 font-semibold text-lg">
                  Van Dee AI Solutions — AI automatisering specialist in Tiel.
                </p>
                <p>
                  Ik ben Robbert van Dee, oprichter van Van Dee AI Solutions. Vanuit Tiel, Gelderland
                  help ik MKB-bedrijven met 5-50 medewerkers om hun bedrijfsprocessen te automatiseren
                  met kunstmatige intelligentie. In plaats van jaren corporate processen te volgen, heb
                  ik me gericht op wat er nu werkt: de nieuwste AI-modellen (GPT, Claude, Gemini) en
                  moderne automatiseringstechnieken.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-6 mb-3">
                  Mijn Aanpak voor AI Automatisering
                </h2>
                <p>
                  Ik begin elk traject met een gratis verkenningsgesprek waarin we kijken welke processen
                  binnen uw bedrijf de grootste besparingskansen bieden. Daarna volgt een pragmatisch
                  implementatietraject: eerst een werkend prototype, dan stapsgewijs uitbreiden. U betaalt
                  pas na het eerste werkende prototype — zo draag ik het risico, niet u.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-6 mb-3">
                  Waarom Van Dee AI Solutions?
                </h2>
                <p className="text-slate-800 font-semibold">
                  Het voordeel voor u:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Directe, praktische kennis van cutting-edge AI-tools en API-integraties</li>
                  <li>• Geen bureaucratie of overhead van grote consultancybureaus</li>
                  <li>• Focus op meetbare resultaten: uren bespaard, kosten verlaagd</li>
                  <li>• 100% eigendom van alle code en documentatie — geen vendor lock-in</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-6 mb-3">
                  Technologie Stack
                </h2>
                <p>
                  Ik gebruik dezelfde moderne AI-tools en technieken als grote consultancybureaus
                  (Make.com, OpenAI, Google Cloud, Microsoft Azure), maar dan met persoonlijke aandacht en zonder
                  de overhead en complexiteit van een groot bedrijf. Elke oplossing wordt op maat
                  gebouwd voor uw specifieke processen en systemen — of u nu Exact, AFAS, Salesforce,
                  HubSpot of andere systemen gebruikt. Als lokale specialist in{' '}
                  <Link to="/ai-automatisering-tiel" className="text-brand-600 hover:text-brand-700 font-medium underline transition-colors">
                    Tiel en de regio Gelderland
                  </Link> ken ik de uitdagingen van MKB-bedrijven in onze regio.
                </p>

                <p className="text-brand-600 font-semibold">
                  Early Adopter Samenwerking:
                </p>
                <p>
                  Als early adopter helpt u mij bewijzen dat deze aanpak werkt in de praktijk.
                  In ruil: transparante tarieven, directe toegang, en persoonlijke samenwerking.
                  Benieuwd of uw bedrijf klaar is voor AI?{' '}
                  <Link to="/ai-scan" className="text-brand-600 hover:text-brand-700 font-medium underline transition-colors">
                    Doe de gratis AI Readiness Scan
                  </Link>.
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

              {/* Internal links */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <Link to="/how-it-works" className="text-brand-600 hover:text-brand-700 font-medium transition-colors inline-flex items-center gap-1">
                  Bekijk ons proces <ArrowRight size={14} />
                </Link>
                <Link to="/faq" className="text-slate-500 hover:text-brand-600 font-medium transition-colors inline-flex items-center gap-1">
                  Veelgestelde vragen <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <Reveal width="100%">
              <div className="relative w-full max-w-sm aspect-square mx-auto">
                <div className="absolute inset-0 border-2 border-violet-200 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 border-2 border-brand-200 rounded-2xl transform -rotate-3" />

                <div className="absolute inset-2 bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center border border-gray-100 group">
                    <img
                      src="/overons.jpg"
                      alt="Robbert van Dee, Founder & AI Architect bij Van Dee AI Solutions - Expert in AI Automatisering en Workflow Optimalisatie"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="relative w-32 h-32 md:w-40 md:h-40 bg-surface-50 rounded-full flex items-center justify-center border border-gray-200 group-hover:border-brand-300 transition-colors">
                              <span class="text-4xl">👨‍💻</span>
                          </div>
                          <div class="absolute bottom-6 text-center w-full">
                              <p class="font-bold text-lg text-slate-800">Robbert van Dee</p>
                              <p class="text-xs text-brand-600 tracking-widest uppercase">Founder & AI Architect</p>
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