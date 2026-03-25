import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './Button';
import { ParticleBackground } from './ParticleBackground';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["de Kracht van AI", "Snelheid", "Meer Efficiëntie", "Tijdwinst", "Innovatie"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#050510]">
        <ParticleBackground />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#050510_100%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              Early Adopter Programma
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-snug">
              Ontgrendel <br />
              <span className="inline-block min-h-[40px] sm:h-[56px] md:h-[80px] sm:whitespace-nowrap mt-2">
                <span className="gradient-text">{text}</span>
                <span className="w-1 h-8 sm:h-12 md:h-16 ml-1 sm:ml-2 inline-block bg-neon-cyan animate-cursor-blink align-middle"></span>
              </span>
              <br />
              in uw Bedrijf
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Gratis technische analyse van uw processen. Binnen 30 minuten weet u wat mogelijk is.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalPopupButton
                calLink="vandeeaisolutions/discoverycall"
                className="bg-white text-black font-bold px-6 sm:px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:shadow-[0_0_50px_rgba(0,243,255,0.5)] flex items-center justify-center text-base sm:text-lg"
              >
                <Calendar className="mr-2 shrink-0" size={20} />
                Boek Gratis Verkenningsgesprek
              </CalPopupButton>
            </div>
            <div className="mt-4 text-xs sm:text-sm text-gray-400 space-y-1">
              <p>✓ Geen verplichtingen  ✓ Ook interessant als u niet met mij werkt</p>
              <p>✓ 30 minuten, online</p>
            </div>
          </Reveal>
        </div>

        {/* Abstract Visual */}
        <div className="hidden md:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-[float_6s_ease-in-out_infinite]">
              {/* Center Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-full opacity-20 blur-3xl animate-pulse" />

              <div className="absolute inset-4 glass-panel rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-700">
                 <div className="text-center space-y-4 p-8">
                    <div className="flex justify-center gap-4 mb-8">
                      {[1,2,3].map(i => (
                          <div key={i} className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                              <div className="w-6 h-6 bg-gradient-to-tr from-neon-cyan to-blue-500 rounded-md" />
                          </div>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">Workflow Automatisering</h3>
                    <p className="text-sm text-gray-400">AI-agenten werken 24/7 voor u.</p>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-neon-cyan w-2/3 animate-[width_2s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Processing...</span>
                        <span>87%</span>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};