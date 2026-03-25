import React, { useState } from 'react';
import { FileCode, Workflow, Zap, Download } from 'lucide-react';
import { Reveal } from './Reveal';
import { LeadCaptureModal } from './LeadCaptureModal';

export const LeadMagnet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 relative bg-gradient-to-b from-deep-space to-black/80 border-y border-white/5">
        <div className="container mx-auto px-6">
          <Reveal width="100%">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/10 to-neon-purple/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase mb-4">
                    <Workflow size={14} /> Gratis Checklist
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-white">
                    Is Uw Bedrijf <br />
                    <span className="text-neon-cyan text-2xl">Klaar voor AI?</span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    <strong>Gratis checklist: 12 signalen dat AI uw bedrijf kan helpen.</strong>
                    Ontdek of automatisering voor u haalbaar is en waar u kunt beginnen.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-gray-400">
                    <li className="flex items-center gap-3">
                      <div className="p-1 bg-white/10 rounded">
                          <FileCode size={14} className="text-white" />
                      </div>
                      <span>12 signalen dat u klaar bent voor AI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="p-1 bg-white/10 rounded">
                          <Zap size={14} className="text-yellow-400" />
                      </div>
                      <span>3 snelle automatiseringen die u zelf kunt doen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="p-1 bg-white/10 rounded">
                          <Download size={14} className="text-neon-cyan" />
                      </div>
                      <span>Worksheet om uw tijdverspilling te berekenen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm relative">
                   {/* Decorative Glow */}
                   <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-neon-cyan to-blue-600 rounded-full blur-[40px] opacity-40 pointer-events-none"></div>

                   <h3 className="text-lg font-bold text-white mb-4">Ontvang de Checklist</h3>
                   <button
                     onClick={() => setIsModalOpen(true)}
                     className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                   >
                     Stuur mij de PDF
                   </button>
                   <p className="text-[10px] text-gray-500 flex items-center justify-center gap-1 leading-tight mt-4">
                     Uw data is veilig. Geen spam, alleen waardevolle tips. Afmelden kan altijd.
                   </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="lead_magnet"
      />
    </>
  );
};
