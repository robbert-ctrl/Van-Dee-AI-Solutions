import React from 'react';
import { Calendar, ArrowRight, CheckCircle, Search, Activity, Target, Phone, FileSearch, Code2, Lock } from 'lucide-react';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-neon-purple/10 to-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <Reveal width="100%">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6">
                Plan Uw Gratis <span className="text-neon-cyan">Verkenningsgesprek</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Gratis. Ontdek exact hoeveel uur per week u kunt besparen.
              </p>
            </Reveal>
        </div>

        <Reveal delay={0.2} width="100%">
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.15)] relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan" />

              <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Left: Meeting Agenda */}
                <div className="text-left space-y-6">
                    <div className="border-l-4 border-neon-cyan pl-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Agenda van dit gesprek (30 min)</h3>
                        <p className="text-gray-400 text-sm mb-4">Ons doel is om te bepalen of AI technisch haalbaar is voor uw specifieke use-case. We duiken direct de diepte in.</p>
                    </div>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Search className="text-neon-cyan" size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">1. Knelpunten Analyse</h4>
                                <p className="text-sm text-gray-500">Wat is het meest saaie, dure proces dat uw team dagelijks herhaalt?</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Activity className="text-neon-purple" size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">2. Tech-Stack Mapping</h4>
                                <p className="text-sm text-gray-500">Welke tools gebruikt u nu (CRM, ERP)? Wij checken direct de API-mogelijkheden.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Target className="text-green-400" size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">3. Haalbaarheid & ROI</h4>
                                <p className="text-sm text-gray-500">U krijgt een eerlijke inschatting: is dit te bouwen en wat levert het op?</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right: Booking Button */}
                <div className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-8 border border-white/5">
                     <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-neon-cyan/30">
                        <Calendar className="text-neon-cyan w-8 h-8" />
                     </div>

                     <h3 className="text-xl font-bold text-white mb-2">Boek Mijn Gratis Analyse</h3>
                     <p className="text-gray-400 text-sm mb-6">
                        Beperkte beschikbaarheid
                     </p>

                     <CalPopupButton
                        calLink="vandeeaisolutions/discoverycall"
                        className="w-full mb-6 bg-white text-black font-bold py-5 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] flex items-center justify-center text-lg"
                     >
                        Boek Nu <ArrowRight size={20} className="ml-2" />
                     </CalPopupButton>

                    <div className="space-y-2 text-sm text-gray-400">
                        <p className="flex items-center justify-center gap-2">
                            <CheckCircle className="text-green-400" size={16} />
                            Geen verplichtingen
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <CheckCircle className="text-green-400" size={16} />
                            Geen verkooppraatje
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <CheckCircle className="text-green-400" size={16} />
                            U houdt het rapport, altijd
                        </p>
                    </div>
                </div>

              </div>

              {/* Mini Process Overview - What happens after the call */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Wat gebeurt er <span className="text-neon-cyan">na dit gesprek?</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center mx-auto mb-3 border border-neon-cyan/20">
                      <Phone className="text-neon-cyan" size={20} />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">1. Gratis Verkenningsgesprek</h4>
                    <p className="text-xs text-gray-500">30 min call. Geen kosten, geen verplichtingen.</p>
                  </div>

                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mx-auto mb-3 border border-neon-purple/20">
                      <FileSearch className="text-neon-purple" size={20} />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">2. Voorstel & ROI</h4>
                    <p className="text-xs text-gray-500">Technisch plan met duidelijke verwachtingen.</p>
                  </div>

                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3 border border-blue-500/20">
                      <Code2 className="text-blue-400" size={20} />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">3. Bouwen in Sprints</h4>
                    <p className="text-xs text-gray-500">U test elke week, aanpassingen direct mogelijk.</p>
                  </div>

                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 border border-green-500/20">
                      <Lock className="text-green-400" size={20} />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">4. Overdracht</h4>
                    <p className="text-xs text-gray-500">Code, documentatie en training. 100% uw eigendom.</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-500">
                Geschikt voor: MKB-bedrijven (5-50 medewerkers) die veel handmatig werk doen
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};