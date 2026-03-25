import React from 'react';
import { Shield } from 'lucide-react';

export const GuaranteeCard: React.FC<{
  icon?: string;
  title: string;
  description: string;
}> = ({ icon = "✓", title, description }) => (
  <div className="p-6 rounded-xl glass-panel border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 group">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export const GuaranteeSection: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title = "+ 3 Garanties (U Draagt Nul Risico)"
}) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-white text-center mb-6">
      <Shield className="inline-block mr-2 text-neon-cyan" size={28} />
      {title}
    </h3>
    <div className="grid md:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);
