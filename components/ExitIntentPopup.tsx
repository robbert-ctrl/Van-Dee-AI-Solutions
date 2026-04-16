import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, ArrowRight } from 'lucide-react';
import { useExitIntent } from '../hooks/useExitIntent';

export const ExitIntentPopup: React.FC = () => {
  const { showPopup, dismiss } = useExitIntent();

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
      onClick={dismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Sluiten"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand-600 mb-5">
            <Brain size={28} />
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Ontdek in 2 minuten wat AI voor uw bedrijf kan doen
          </h2>

          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Doe onze gratis AI Readiness Scan en ontvang direct
            persoonlijke aanbevelingen — zonder verplichtingen.
          </p>

          <Link
            to="/ai-scan"
            onClick={dismiss}
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors w-full shadow-lg shadow-brand-600/25"
          >
            Start Gratis AI Scan
            <ArrowRight size={16} />
          </Link>

          <button
            onClick={dismiss}
            className="mt-4 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Nee bedankt
          </button>
        </div>
      </div>
    </div>
  );
};
