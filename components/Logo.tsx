import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Van Dee AI Solutions Logo">
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path
            d="M25 20 L50 85 L75 20"
            stroke="url(#logo-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="font-bold text-lg md:text-xl leading-none tracking-wide text-slate-800">
            VAN DEE
          </div>
          <div className="text-[0.6rem] md:text-[0.65rem] font-semibold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600 uppercase mt-0.5">
            AI Solutions
          </div>
        </div>
      )}
    </div>
  );
};
