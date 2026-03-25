import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';
import { CalPopupButton } from './CalPopupButton';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/about', label: 'Over Ons' },
    { to: '/how-it-works', label: 'Hoe Het Werkt' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-deep-space/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-cyan focus:text-black focus:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-deep-space rounded"
          aria-label="Van Dee AI Solutions - Home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-300 hover:text-neon-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-deep-space rounded px-2 py-1"
            >
              {link.label}
            </Link>
          ))}

          <CalPopupButton
            calLink="vandeeaisolutions/discoverycall"
            className={`bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-deep-space ${
              scrolled
                ? 'py-3 px-8 text-base shadow-[0_0_30px_rgba(0,243,255,0.5)] hover:shadow-[0_0_40px_rgba(0,243,255,0.7)] animate-pulse-subtle'
                : 'py-2 px-6 text-sm shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]'
            }`}
          >
            Boek Verkenningsgesprek
          </CalPopupButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Drawer */}
          <div className="fixed top-[88px] left-0 right-0 bottom-0 bg-deep-space border-t border-white/10 md:hidden overflow-y-auto">
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xl text-gray-300 hover:text-neon-cyan transition-colors py-3 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded"
                >
                  {link.label}
                </Link>
              ))}

              <CalPopupButton
                calLink="vandeeaisolutions/discoverycall"
                className="mt-4 bg-white text-black font-bold py-4 px-8 text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:shadow-[0_0_50px_rgba(0,243,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
              >
                Boek Verkenningsgesprek
              </CalPopupButton>
            </nav>
          </div>
        </>
      )}

    </header>

    {/* Floating Mobile CTA - appears when scrolled, outside header to position correctly */}
    {scrolled && (
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
        <CalPopupButton
          calLink="vandeeaisolutions/discoverycall"
          className="bg-white text-black font-bold py-3 px-5 text-sm rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.5)] hover:shadow-[0_0_50px_rgba(0,243,255,0.7)] flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
        >
          Boek Verkenningsgesprek
        </CalPopupButton>
      </div>
    )}
    </>
  );
};