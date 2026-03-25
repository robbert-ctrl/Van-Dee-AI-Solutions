/**
 * ARCHIVED: 2025-01-21
 * Original Praktijkvoorbeelden section met interactieve demos.
 * Vervangen door ProcessSummary.tsx (beknopte Hoe Werkt Het).
 * Bewaard voor mogelijk toekomstig gebruik.
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, Users, CheckCircle, ArrowRight, Mail, Database, Search, Play, Pause, RotateCcw } from 'lucide-react';
import { Reveal } from './Reveal';

const demos = [
  {
    id: 'support',
    title: 'Klantenservice',
    desc: '24/7 antwoord op vragen zonder wachttijd.',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'text-neon-cyan',
    content: (
      <div className="flex flex-col h-full justify-center space-y-6 px-4 md:px-12 py-8">
        {/* User Message - appears immediately */}
        <div className="flex gap-4 animate-[float_4s_ease-in-out_infinite,fadeIn_0.5s_ease-in_forwards]">
          <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center shrink-0 border border-white/10">
             <span className="text-xs font-bold text-white">KL</span>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-base text-gray-200 max-w-[80%] border border-white/5 leading-relaxed">
            Waar kan ik mijn facturen van vorig jaar vinden?
          </div>
        </div>

        {/* Processing Indicator - appears after 0.5s, fades out after 2s */}
        <div className="flex gap-2 items-center text-sm text-gray-500 ml-14 my-2 opacity-0 animate-[fadeIn_0.3s_ease-in_0.5s_forwards,fadeOut_0.3s_ease-out_2s_forwards]">
           <div className="flex gap-1">
             <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
             <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
             <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
           </div>
           <span className="text-neon-cyan/70 font-medium">AI zoekt in kennisbank...</span>
        </div>

        {/* AI Response - appears after 2.3s */}
        <div className="flex gap-4 flex-row-reverse opacity-0 animate-[float_5s_ease-in-out_infinite,fadeIn_0.5s_ease-in_2.3s_forwards]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,243,255,0.4)]">
             <span className="text-xs font-bold text-black">AI</span>
          </div>
          <div className="bg-gradient-to-br from-neon-cyan/10 to-blue-900/20 border border-neon-cyan/20 p-4 rounded-2xl rounded-tr-none text-base text-white max-w-[80%] shadow-lg leading-relaxed">
            U vindt al uw facturen in het klantenportaal onder het kopje <strong>'Mijn Documenten'</strong>. Ik heb de link direct naar uw mail gestuurd! 📧
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'admin',
    title: 'Administratie',
    desc: 'Facturen automatisch inboeken.',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-neon-purple',
    content: (
      <div className="flex flex-col h-full justify-center items-center space-y-10 py-8 px-4 md:px-12">
         <div className="flex items-center gap-4 md:gap-12 w-full justify-center">
            {/* Source */}
            <div className="flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
               <div className="w-16 h-20 md:w-24 md:h-32 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative group shadow-lg">
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-500 rounded text-[10px] font-bold shadow-md">PDF</div>
                  <FileText className="text-gray-400 group-hover:text-white transition-colors w-8 h-8 md:w-12 md:h-12" />
               </div>
               <span className="text-xs text-gray-400 font-medium">Factuur</span>
            </div>

            {/* Arrow */}
            <ArrowRight className="text-gray-600 animate-pulse w-6 h-6 md:w-8 md:h-8 opacity-0 animate-[fadeIn_0.3s_ease-in_0.5s_forwards]" />

            {/* AI Process */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-neon-purple/30 flex items-center justify-center relative bg-neon-purple/5 shadow-[0_0_40px_rgba(188,19,254,0.15)] opacity-0 animate-[fadeIn_0.5s_ease-in_1s_forwards]">
                <div className="absolute inset-0 rounded-full border border-neon-purple/20 animate-ping opacity-50"></div>
                <div className="text-center z-10">
                   <div className="text-neon-purple font-bold text-xl md:text-2xl">AI</div>
                   <div className="text-[10px] text-neon-purple/70 uppercase tracking-widest font-bold mt-1">Scan</div>
                </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="text-gray-600 animate-pulse w-6 h-6 md:w-8 md:h-8 opacity-0 animate-[fadeIn_0.3s_ease-in_1.5s_forwards]" />

            {/* Destination */}
             <div className="flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_0.5s_ease-in_2s_forwards]">
               <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden shadow-lg">
                  <Database className="text-green-400 mb-2 relative z-10 w-8 h-8 md:w-10 md:h-10" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500/30">
                     <div className="h-full bg-green-400 animate-[width_2s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                  </div>
               </div>
               <span className="text-xs text-gray-400 font-medium">Boekhouding</span>
            </div>
         </div>

         {/* Extracted Data Tag */}
         <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-wrap gap-4 md:gap-8 text-sm font-mono w-full max-w-2xl mx-auto justify-between items-center shadow-2xl backdrop-blur-sm opacity-0 animate-[fadeIn_0.5s_ease-in_2.5s_forwards]">
            <div>
               <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-1">Relatie</span>
               <span className="text-white font-bold text-base md:text-lg">KPN B.V.</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            <div>
               <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-1">Bedrag</span>
               <span className="text-green-400 font-bold text-base md:text-lg">€ 120,50</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-2 text-neon-cyan bg-neon-cyan/10 px-3 py-1.5 rounded-lg border border-neon-cyan/20">
               <CheckCircle size={16} />
               <span className="font-bold text-xs uppercase">Verwerkt</span>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 'sales',
    title: 'Lead Generatie',
    desc: 'Klanten vinden en benaderen.',
    icon: <Users className="w-5 h-5" />,
    color: 'text-green-400',
    content: (
       <div className="flex flex-col h-full justify-center px-4 md:px-12 space-y-6 py-8">
          {/* Step 1 */}
          <div className="flex items-center gap-5 bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors shadow-lg opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
             <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                <Search size={24} />
             </div>
             <div className="flex-1 z-10">
                <div className="text-base text-white font-bold mb-1">Markt Scannen</div>
                <div className="text-sm text-gray-500">50 nieuwe profielen gevonden op LinkedIn</div>
             </div>
             <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full opacity-50"></div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center -my-3 opacity-0 animate-[fadeIn_0.3s_ease-in_0.5s_forwards]">
             <div className="h-8 w-0.5 bg-gray-700"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-5 bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden shadow-lg opacity-0 animate-[fadeIn_0.5s_ease-in_1s_forwards]">
             <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <Users size={24} />
             </div>
             <div className="flex-1">
                <div className="text-base text-white font-bold mb-1">AI Kwalificatie</div>
                <div className="text-sm text-gray-500">Filteren op 'CEO' & 'Eigenaar'...</div>
             </div>
             <div className="px-3 py-1.5 bg-green-500/20 text-green-400 text-xs rounded-lg font-bold border border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                12 MATCHES
             </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center -my-3 opacity-0 animate-[fadeIn_0.3s_ease-in_1.5s_forwards]">
             <div className="h-8 w-0.5 bg-gray-700"></div>
          </div>

           {/* Step 3 */}
          <div className="flex items-center gap-5 bg-neon-cyan/5 p-4 rounded-xl border border-neon-cyan/20 shadow-[0_0_20px_rgba(0,243,255,0.05)] opacity-0 animate-[fadeIn_0.5s_ease-in_2s_forwards]">
             <div className="p-3 bg-neon-cyan/20 rounded-lg text-neon-cyan">
                <Mail size={24} />
             </div>
             <div className="flex-1">
                <div className="text-base text-white font-bold mb-1">Automatische Outreach</div>
                <div className="text-sm text-gray-400">Persoonlijke introductie e-mails verzonden</div>
             </div>
             <div className="bg-neon-cyan text-black p-1.5 rounded-full">
                <CheckCircle size={20} />
             </div>
          </div>
       </div>
    )
  }
];

export const UseCaseTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  const handleRestart = () => {
    setAnimationKey(prev => prev + 1);
    setIsPlaying(true);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setAnimationKey(prev => prev + 1);
    setIsPlaying(true);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-deep-space via-deep-space/95 to-black relative border-t border-white/5">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-12 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Praktijk<span className="text-neon-cyan">voorbeelden</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                AI is geen abstracte toekomstmuziek. Wij bouwen concrete oplossingen die vandaag al tijd en geld besparen.
              </p>
            </Reveal>
        </div>

        {/* Navigation Tabs (Top) - Enhanced */}
        <Reveal delay={0.1} width="100%">
          <div className="p-3">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
            {demos.map((demo, index) => (
                <button
                key={demo.id}
                onClick={() => handleTabChange(index)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-500 flex items-center gap-5 group relative overflow-hidden shadow-lg backdrop-blur-sm ${
                    activeTab === index
                    ? 'bg-gradient-to-br from-white/15 to-white/5 border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.2)] scale-105'
                    : 'bg-white/5 border-white/10 hover:border-neon-cyan/30 hover:bg-white/10 hover:scale-102'
                }`}
                >
                <div className={`p-4 rounded-xl transition-all duration-500 relative z-10 ${
                    activeTab === index
                    ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]'
                    : 'bg-white/5 text-gray-500 group-hover:bg-white/10'
                }`}>
                    {demo.icon}
                </div>
                <div className="relative z-10">
                    <h3 className={`font-bold text-lg md:text-xl mb-1 transition-colors duration-300 ${
                      activeTab === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                    {demo.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">{demo.desc}</p>
                </div>
                </button>
            ))}
            </div>
          </div>
        </Reveal>

        {/* Visual Demo Window (Bottom - Full Width) - Enhanced */}
        <Reveal delay={0.2} width="100%">
            <div className="relative">
                {/* Enhanced Background Glows */}
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan rounded-[2rem] blur-xl opacity-30 pointer-events-none animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/50 to-neon-purple/50 rounded-[2rem] blur opacity-40 pointer-events-none"></div>

                {/* Window Frame - Enhanced */}
                <div className="bg-gradient-to-br from-[#0a0a12] to-[#0d0d1a] border-2 border-white/20 rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] min-h-[550px] md:min-h-[650px] flex flex-col relative z-10 backdrop-blur-xl">

                {/* Window Header - Enhanced */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 p-5 flex items-center justify-between border-b-2 border-white/10 backdrop-blur-sm">
                    <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/30 border-2 border-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)] hover:bg-red-500/50 transition-colors cursor-pointer" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30 border-2 border-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.4)] hover:bg-yellow-500/50 transition-colors cursor-pointer" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/30 border-2 border-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.4)] hover:bg-green-500/50 transition-colors cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        Live Simulatie: {demos[activeTab].title}
                      </div>
                    </div>
                    {/* Interactive Controls */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/50 transition-all group"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause size={14} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
                        ) : (
                          <Play size={14} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
                        )}
                      </button>
                      <button
                        onClick={handleRestart}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-purple/50 transition-all group"
                        title="Restart"
                      >
                        <RotateCcw size={14} className="text-gray-400 group-hover:text-neon-purple transition-colors" />
                      </button>
                    </div>
                </div>

                {/* Window Content - Enhanced with animation control */}
                <div className="flex-1 relative bg-gradient-to-b from-transparent to-black/20">
                    {demos.map((demo, index) => (
                    <div
                        key={`${demo.id}-${animationKey}`}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeTab === index ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                        } ${!isPlaying ? '[&_*]:!animate-none' : ''}`}
                    >
                        {demo.content}
                    </div>
                    ))}
                </div>

                {/* Bottom Info Bar - Enhanced */}
                <div className="p-4 bg-gradient-to-r from-white/10 to-white/5 border-t-2 border-white/10 flex justify-between items-center text-[11px] text-gray-400 font-mono backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${activeTab === 0 ? 'bg-neon-cyan' : activeTab === 1 ? 'bg-neon-purple' : 'bg-green-400'} ${isPlaying ? 'animate-pulse' : ''} shadow-[0_0_8px_currentColor]`}></div>
                          <span className="uppercase tracking-wider">STATUS: {isPlaying ? 'ACTIVE' : 'PAUSED'}</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-[10px]">
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10">MODEL: GEMINI-2.5-FLASH</span>
                        <span className="text-green-400">LATENCY: 24ms</span>
                        <span className="text-neon-cyan">TOKENS: 1.2K</span>
                    </div>
                </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};