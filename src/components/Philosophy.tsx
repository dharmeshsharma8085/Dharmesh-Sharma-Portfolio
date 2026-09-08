import React from 'react';
import { principles, Principle } from '../data/portfolioData';
import { Sparkles, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Subtle glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[600px] h-[600px] pointer-events-none rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
            06 // CORE BELIEFS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          How I Build
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1A1A1]">
          Four governing engineering tenets guiding every model trained, pipeline orchestrated, and product deployed.
        </p>
      </div>

      {/* Principles Grid with Huge Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="group relative rounded-[32px] bg-[#111111] border border-white/8 hover:border-white/20 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle atmospheric glow behind each card */}
            <div 
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)'
              }}
            />

            <div>
              {/* Huge Typography Number */}
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white/10 to-[#FF6A00]/40 group-hover:from-white group-hover:to-[#FF6A00] transition-all duration-300 font-mono tracking-tighter">
                  {principle.number}
                </span>
                <span className="text-[11px] font-mono text-[#707070] uppercase">
                  CORE TENET
                </span>
              </div>

              {/* Title statement */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF8A2A] transition-colors leading-tight">
                {principle.title}
              </h3>

              {/* Sub-statement */}
              <div className="mt-3 text-sm font-mono text-[#FF8A2A] font-medium">
                "{principle.statement}"
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
                {principle.description}
              </p>
            </div>

            {/* Bottom status */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#707070]">
              <span>Applied In Practice</span>
              <span className="text-[#A1A1A1]">30+ Shipped Projects</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
