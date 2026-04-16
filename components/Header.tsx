import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { CalPopupButton } from './CalPopupButton';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/about', label: 'Over Ons' },
    { to: '/how-it-works', label: 'Hoe Het Werkt' },
    { to: '/ai-scan', label: 'AI Scan' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm py-3 shadow-sm border-b border-gray-100'
          : 'bg-white py-5'
      }`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded"
            aria-label="Van Dee AI Solutions - Home"
          >
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-600 hover:text-brand-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <CalPopupButton
              calLink="vandeeaisolutions/discoverycall"
              className={`font-semibold rounded-xl transition-all duration-200 inline-flex items-center gap-2 ${
                scrolled
                  ? 'bg-brand-600 text-white py-2.5 px-6 text-sm shadow-lg shadow-brand-600/25 hover:bg-brand-700'
                  : 'bg-brand-600 text-white py-2 px-5 text-sm hover:bg-brand-700'
              }`}
            >
              <Calendar size={16} />
              Boek Gesprek
            </CalPopupButton>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-white md:hidden overflow-y-auto">
              <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg text-slate-700 hover:text-brand-600 transition-colors py-3 border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <CalPopupButton
                  calLink="vandeeaisolutions/discoverycall"
                  className="mt-4 bg-brand-600 text-white font-semibold py-4 px-8 text-lg rounded-xl hover:bg-brand-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Boek Verkenningsgesprek
                </CalPopupButton>
              </nav>
            </div>
          </>
        )}
      </header>

      {scrolled && (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <CalPopupButton
            calLink="vandeeaisolutions/discoverycall"
            className="bg-brand-600 text-white font-semibold py-3 px-6 text-sm rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar size={16} />
            Boek Gesprek
          </CalPopupButton>
        </div>
      )}
    </>
  );
};
