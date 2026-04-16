import React, { useState } from 'react';
import { Linkedin, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const webhookUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_WEBHOOK_URL) || 'https://hook.eu1.make.com/6yx8k47vez6pjss2915cjylt1bvcx7iq';
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactEmail: email,
          source: 'footer_newsletter',
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      setEmail('');
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <Reveal>
            <div>
              <Logo />
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                AI automatisering voor Nederlandse MKB-bedrijven. Minder handmatig werk, meer groei.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Navigatie</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Over Ons</Link></li>
                <li><Link to="/how-it-works" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Hoe Het Werkt</Link></li>
                <li><Link to="/ai-scan" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">AI Scan</Link></li>
                <li><Link to="/ai-automatisering-tiel" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">AI Automatisering Tiel</Link></li>
                <li><Link to="/blog" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Blog</Link></li>
                <li><Link to="/faq" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">FAQ</Link></li>
                <li><Link to="/privacy" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Privacy</Link></li>
                <li><Link to="/terms" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">Voorwaarden</Link></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Wekelijkse AI-tips</h4>
              {submitted ? (
                <p className="text-emerald-600 text-sm font-medium">Bedankt! U ontvangt binnenkort onze eerste tip.</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="uw@email.nl"
                    required
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-brand-600 text-white px-4 py-2.5 rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium flex items-center gap-1"
                  >
                    <Mail size={14} />
                    Aanmelden
                  </button>
                </form>
              )}
              <p className="text-xs text-slate-400 mt-2">Elke maandag: 1 praktische AI-tip voor uw bedrijf.</p>
            </div>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>&copy; {new Date().getFullYear()} Van Dee AI Solutions</p>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                <span>Tiel, Nederland</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <span>KVK: 85394041</span>
            </div>
            <a
              href="https://www.linkedin.com/company/vandee-ai-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all text-slate-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
