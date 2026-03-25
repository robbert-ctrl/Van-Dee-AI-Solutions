import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 group">
        <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]" role="img" aria-label="Van Dee AI Solutions Logo">
           <defs>
             <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#00f3ff" />
               <stop offset="50%" stopColor="#bc13fe" />
               <stop offset="100%" stopColor="#00f3ff" />
             </linearGradient>
           </defs>
           
           {/* Main V Shape - Constructed from tech lines */}
           <path 
             d="M25 20 L50 85 L75 20" 
             stroke="url(#logo-grad)" 
             strokeWidth="10" 
             strokeLinecap="round" 
             strokeLinejoin="round"
             className="drop-shadow-lg"
           />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="font-display font-bold text-lg md:text-xl leading-none tracking-wider text-white flex items-center gap-1">
            VAN DEE
          </div>
          <div className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple uppercase mt-1">
            AI Solutions
          </div>
        </div>
      )}
    </div>
  );
};