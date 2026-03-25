import React from 'react';

const technologies = [
  "Google", "OpenAI", "Python", "React", "n8n", 
  "TensorFlow", "Pinecone", "Next.js", "Docker", "AWS"
];

export const TechStack: React.FC = () => {
  // Duplicate list to ensure it covers wide screens
  const items = [...technologies, ...technologies];

  return (
    <section className="w-full bg-black/40 border-y border-white/5 py-10 overflow-hidden relative z-20">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Powered by</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Track 1: Moves 0% to -100% */}
        <div className="animate-marquee whitespace-nowrap flex items-center min-w-full">
          {items.map((tech, i) => (
             <span key={`t1-${i}`} className="mx-8 md:mx-12 text-xl md:text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default font-display tracking-wide">
               {tech}
             </span>
          ))}
        </div>
        
        {/* Track 2: Moves 100% to 0% (Follows Track 1) */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center min-w-full">
          {items.map((tech, i) => (
             <span key={`t2-${i}`} className="mx-8 md:mx-12 text-xl md:text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default font-display tracking-wide">
               {tech}
             </span>
          ))}
        </div>
      </div>
        
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />
    </section>
  );
};