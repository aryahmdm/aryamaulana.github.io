import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#1e1e1f] border border-[#383838] rounded-3xl shadow-2xl relative overflow-hidden ${className}`}>
        {/* Subtle glow effect in the corner */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[60px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
  );
};