import React from 'react';
import { Linkedin, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
      <footer className="bg-black border-t border-white/10 pt-12 pb-8">
        <div className="container mx-auto px-6">
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
  );
};
