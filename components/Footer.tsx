import React, { useState } from 'react';
import { Linkedin, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { Reveal } from './Reveal';
import { LeadCaptureModal } from './LeadCaptureModal';

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-white/10 pt-12 pb-8">
        <div className="container mx-auto px-6">
          {/* Email Signup Section */}
          <Reveal width="100%">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Wekelijkse AI-tips voor MKB</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Elke maandag: 1 praktische AI-tip die u direct kunt toepassen. Geen sales, wel waarde.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Aanmelden voor Tips
              </button>

              <p className="text-xs text-gray-500 mt-3">
                Tips zoals: ChatGPT gebruiken voor emailsjablonen • 3 gratis tools voor workflow automatisering
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

              <Reveal>
                <div className="mb-4">
                  <Logo />
                </div>
                <p className="text-gray-400 max-w-sm text-center md:text-left">
                  Uw partner in digitale transformatie.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col items-center md:items-end gap-4">
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={16} className="text-neon-purple" />
                        <span>Gevestigd in Tiel, Nederland</span>
                    </div>
                    <div className="text-gray-500 text-sm">
                        <span>KVK: 85394041</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/vandee-ai-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all group border border-white/10"
                  >
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </Reveal>
          </div>

          <Reveal width="100%">
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
              <p>&copy; {new Date().getFullYear()} Van Dee AI Solutions.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="/how-it-works" className="hover:text-white transition-colors">Hoe Het Werkt</a>
                <a href="/faq#garanties" className="hover:text-white transition-colors">Garanties</a>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white transition-colors">Voorwaarden</a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="footer_newsletter"
      />
    </>
  );
};
