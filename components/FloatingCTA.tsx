import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { CalPopupButton } from './CalPopupButton';

const SESSION_KEY = 'vandee-floating-cta-dismissed';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show on mobile (Header already has a mobile floating CTA)
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setDismissed(true);
        return;
      }
    } catch {}

    const heroEl = document.querySelector('#hero-section') || document.querySelector('section');
    const ctaEl = document.querySelector('#final-cta');

    if (!heroEl) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );

    heroObserver.observe(heroEl);

    let ctaObserver: IntersectionObserver | undefined;
    if (ctaEl) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(false);
          }
        },
        { threshold: 0.1 }
      );
      ctaObserver.observe(ctaEl);
    }

    return () => {
      heroObserver.disconnect();
      ctaObserver?.disconnect();
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {}
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 hidden md:block animate-float-in">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            <span className="text-brand-600 font-semibold">Nog 1 plek beschikbaar</span>
            {' '}— Plan uw gratis analyse
          </p>
          <div className="flex items-center gap-3">
            <CalPopupButton
              calLink="vandeeaisolutions/discoverycall"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold py-2 px-5 text-sm rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
            >
              <Calendar size={14} />
              Plan Gesprek
            </CalPopupButton>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Sluiten"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
