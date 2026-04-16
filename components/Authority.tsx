import React from 'react';
import { Building, MapPin, Code2, Users, Banknote, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

const authoritySignals = [
  { icon: <Building size={16} />, text: 'KVK 85394041' },
  { icon: <MapPin size={16} />, text: 'Gevestigd in Tiel' },
  { icon: <Code2 size={16} />, text: 'Make.com, OpenAI, Google Cloud' },
];

const benefits = [
  { icon: <Users size={20} />, text: 'U werkt direct met mij — geen juniors, geen overdracht' },
  { icon: <Banknote size={20} />, text: 'Ik zeg eerlijk als iets niet werkt voor uw situatie' },
  { icon: <Cpu size={20} />, text: 'Nieuwste AI-modellen, niet vastgebonden aan legacy tools' },
];

export const Authority: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 items-center gap-12 max-w-5xl mx-auto">
          {/* LEFT - Photo */}
          <Reveal>
            <img
              src="/robbert.jpg"
              alt="Robbert van Dee — AI automatisering specialist en oprichter van Van Dee AI Solutions in Tiel, Gelderland"
              className="rounded-2xl shadow-lg max-w-md w-full"
              loading="lazy"
              width="448"
              height="448"
            />
          </Reveal>

          {/* RIGHT - Content */}
          <Reveal delay={0.15}>
            <div>
              {/* Badge */}
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Over de founder
              </span>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-6">
                Ik help MKB-bedrijven stoppen met saai handmatig werk.
              </h2>

              {/* Body */}
              <div className="space-y-4 text-slate-500 leading-relaxed mb-8">
                <p>
                  Geen grote praatjes, wel werkende oplossingen. Als solo consultant werk ik
                  direct met u &mdash; geen tussenmannetjes, geen overhead.
                </p>
                <p>
                  Ik gebruik de nieuwste AI-technologie (GPT, Claude, Gemini) om processen te
                  automatiseren die uw team uren per dag kosten.
                </p>
              </div>

              {/* Founder quote */}
              <blockquote className="border-l-4 border-brand-600 pl-4 italic text-slate-600 text-sm my-6">
                "Ik geloof dat elk MKB-bedrijf recht heeft op dezelfde technologie
                als de grote jongens — zonder het grote prijskaartje."
              </blockquote>

              {/* Internal link */}
              <p className="text-sm text-slate-500 mb-6">
                <Link to="/about" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                  Lees meer over mijn achtergrond en aanpak &rarr;
                </Link>
              </p>

              {/* Authority signals */}
              <div className="flex flex-wrap gap-6">
                {authoritySignals.map((signal) => (
                  <div
                    key={signal.text}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <span className="text-brand-600">{signal.icon}</span>
                    {signal.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why a small bureau banner */}
        <Reveal delay={0.3} width="100%">
          <div className="mt-16 max-w-5xl mx-auto">
            <p className="text-center text-sm font-semibold text-slate-800 mb-4">
              Waarom een klein bureau?
            </p>
            <div className="bg-surface-50 rounded-2xl p-6 flex flex-col md:flex-row justify-around items-center gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <span className="text-brand-600">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
