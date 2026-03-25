import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { LeadCaptureModal } from './LeadCaptureModal';

export const Newsletter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="newsletter" className="py-24 relative overflow-hidden bg-black/50">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal width="100%">
            <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6">
                    <Mail className="text-neon-cyan" size={24} />
                </div>

                <h2 className="text-3xl font-display font-bold mb-4">
                  Blijf Geïnformeerd
                </h2>
                <p className="text-gray-400 mb-8">
                  Ontvang periodiek waardevolle AI-inzichten. Geen spam, alleen innovatie.
                </p>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-all"
                  >
                    Inschrijven
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-600">
                Door u in te schrijven gaat u akkoord met ons privacybeleid.
                </p>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="newsletter"
      />
    </>
  );
};
