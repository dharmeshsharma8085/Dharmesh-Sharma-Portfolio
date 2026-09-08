import React from 'react';
import { journeyTimeline, JourneyEntry } from '../data/portfolioData';
import { Compass, Sparkles, CheckCircle2, Code, Brain } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Background glow */}
      <div 
        className="absolute top-1/3 right-10 w-[500px] h-[500px] pointer-events-none rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
            05 // MILESTONES &amp; GROWTH
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          The Journey
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1A1A1]">
          A project-driven trajectory moving from computational foundations to intelligent application engineering.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 max-w-4xl">
        {journeyTimeline.map((item, idx) => (
          <div key={item.year} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0D0D0D] border-2 border-[#FF6A00] flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.4)] group-hover:scale-110 transition-transform">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF8A2A]" />
            </div>

            {/* Timeline Content Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/8 hover:border-white/20 transition-all duration-300 shadow-xl space-y-5">
              {/* Year & Focus */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 pb-4">
                <span className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider">
                  {item.year}
                </span>
                <span className="text-xs font-mono text-white bg-white/5 px-3 py-1 rounded-full border border-white/8">
                  Focus: {item.focus}
                </span>
              </div>

              {/* What I Built */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#707070] uppercase tracking-wider block">
                  What I Built
                </span>
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  {item.whatIBuilt}
                </p>
              </div>

              {/* What I Learned */}
              <div className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-1">
                <span className="text-xs font-mono text-[#FF8A2A] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Key Insight &amp; Synthesis</span>
                </span>
                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                  "{item.whatILearned}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
