import React from 'react';
import { Shield, Zap, FileCheck } from 'lucide-react';

// Without real social proof (testimonials/client logos), we lean on
// Authority + Transparency + Reciprocity instead of fabricated numbers.
// This bar communicates trust through concrete, verifiable signals.

export const SocialProofCounter: React.FC = () => {
  return (
    <section className="bg-navy-900 py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <div className="flex items-center gap-2 text-white text-sm">
            <Shield size={16} className="text-emerald-400" />
            <span>KVK-geregistreerd</span>
          </div>
          <span className="hidden sm:block text-slate-600">&middot;</span>
          <div className="flex items-center gap-2 text-white text-sm">
            <Zap size={16} className="text-amber-400" />
            <span>Make.com &middot; OpenAI &middot; Google Cloud</span>
          </div>
          <span className="hidden sm:block text-slate-600">&middot;</span>
          <div className="flex items-center gap-2 text-white text-sm">
            <FileCheck size={16} className="text-brand-400" />
            <span>Gratis analyse, altijd</span>
          </div>
        </div>
      </div>
    </section>
  );
};
