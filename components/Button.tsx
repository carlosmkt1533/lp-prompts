import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  onClick, 
  fullWidth = false, 
  variant = 'primary',
  className = '',
  pulse = false
}) => {
  const baseClasses = "group relative flex flex-col items-center justify-center py-4 px-8 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800",
    secondary: "bg-brand-accent hover:bg-yellow-400 text-brand-dark border-b-4 border-yellow-600 shadow-lg"
  };

  // If pulse is enabled, use the custom shadow pulse animation, otherwise use standard shadow
  const shadowClass = pulse 
    ? "animate-shadow-pulse" 
    : "shadow-lg shadow-green-900/20";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${shadowClass} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <div className="flex items-center gap-2 text-lg md:text-xl uppercase tracking-wide">
        {text} 
        <ArrowRight className={`w-5 h-5 ${pulse ? 'animate-slide-right-loop' : 'group-hover:translate-x-1 transition-transform'}`} />
      </div>
      {subtext && (
        <span className="text-xs md:text-sm font-normal opacity-90 mt-1 flex items-center gap-1">
          <Lock className="w-3 h-3" /> {subtext}
        </span>
      )}
    </button>
  );
};