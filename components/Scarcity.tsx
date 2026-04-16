import React from 'react';
import { Users } from 'lucide-react';
import { Reveal } from './Reveal';

export const Scarcity: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal width="100%">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users size={22} className="text-brand-600" />
              <h2 className="text-2xl font-bold text-slate-800">
                Beperkte Capaciteit
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8">
              Als solo consultant werk ik met maximaal 3 klanten tegelijk. Elke
              klant krijgt mijn volledige aandacht — daarom beperk ik het aantal
              projecten.
            </p>

            {/* Capacity Indicator */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-600" />
              <div className="w-10 h-10 rounded-full bg-brand-600" />
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-dashed border-brand-300" />
            </div>

            <p className="text-sm text-brand-600 font-semibold mb-2">
              2 van 3 plekken bezet
            </p>
            <p className="text-xs text-slate-400">
              Beschikbaarheid wordt regelmatig bijgewerkt
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
