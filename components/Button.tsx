import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-cyan to-blue-600 text-black hover:scale-105",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
  };

  const glowEffect = glow ? "shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)]" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${glowEffect} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
      )}
    </button>
  );
};