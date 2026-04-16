import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionBridgeProps {
  text: string;
  bg?: 'white' | 'surface';
}

export const SectionBridge: React.FC<SectionBridgeProps> = ({ text, bg = 'white' }) => {
  return (
    <div className={`py-6 ${bg === 'surface' ? 'bg-surface-50' : 'bg-white'}`}>
      <p className="text-sm text-slate-400 italic text-center max-w-xl mx-auto px-6">
        {text}
      </p>
      <ChevronDown size={16} className="text-slate-300 mx-auto mt-1" />
    </div>
  );
};
