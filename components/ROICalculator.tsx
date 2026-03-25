import React, { useState, useEffect } from 'react';
import { Calculator, Euro } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';

export const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState<number>(10);
  const [rate, setRate] = useState<number>(45);
  const [complexity, setComplexity] = useState<'low' | 'med' | 'high'>('med');
  const [savings, setSavings] = useState<number>(0);

  useEffect(() => {
    // Multipliers: Low = 0.8 (some oversight needed), Med = 1.0, High = 1.3 (AI adds value beyond time saving)
    const multiplier = complexity === 'low' ? 0.8 : complexity === 'med' ? 1.0 : 1.3;
    setSavings(hours * rate * 52 * multiplier);
  }, [hours, rate, complexity]);

  const getContext = () => {
    if (savings > 20000) return "Dat is het salaris van een parttime medewerker";
    if (savings > 10000) return "Dat is 3-4 maanden huur van een kantoorpand";
    return "Dat is een mooie investering terug";
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-5xl mx-auto glass-panel rounded-3xl border border-white/10 p-8 md:p-12 shadow-[0_0_50px_rgba(0,243,255,0.05)]">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Inputs */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="text-neon-cyan" />
                  <h3 className="text-2xl font-bold text-white">ROI Calculator</h3>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-3 flex justify-between">
                    <span>Uren handmatig werk per week</span>
                    <span className="text-white font-bold">{hours} uur</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={hours} 
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-3 flex justify-between">
                    <span>Uurtarief (intern/extern)</span>
                    <span className="text-white font-bold">€{rate} / uur</span>
                  </label>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    step="5"
                    value={rate} 
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-purple"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-3">Complexiteit van taken</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['low', 'med', 'high'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setComplexity(c as any)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          complexity === c 
                            ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan' 
                            : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                        }`}
                      >
                        {c === 'low' ? 'Eenvoudig' : c === 'med' ? 'Gemiddeld' : 'Complex'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="bg-deep-space/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-neon-cyan/10 blur-[80px] rounded-full pointer-events-none" />

                <div>
                  <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Potentiële Waarde</p>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple my-4 flex items-center gap-2">
                    <Euro size={36} className="text-neon-cyan" />
                    {savings.toLocaleString('nl-NL', { maximumFractionDigits: 0 })}
                    <span className="text-lg text-gray-500 font-normal self-end mb-2">/ jaar</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {getContext()}
                  </p>
                  <p className="text-xs text-gray-500 mb-8">
                    *Conservatieve schatting. Echte besparingen variëren per bedrijf.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm text-white mb-4 text-center">Wil u weten hoe we dit bereiken?</p>
                  <Button
                    glow
                    className="w-full"
                    onClick={() => window.open('https://cal.com/vandeeaisolutions/discoverycall', '_blank')}
                  >
                    Boek Verkenningsgesprek
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};