import React, { useState } from 'react';
import { technicalProgression, ProgressionStep } from '../data/portfolioData';
import { ArrowDown, Cpu, ChevronRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export const TechnicalStory: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(8); // default on Agentic AI / advanced

  const currentStep = technicalProgression[activeStepIndex];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Glow backdrop */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] pointer-events-none rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.35) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-14 sm:mb-20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
            04 // EVOLUTIONARY PATH
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          From Python to AI Systems
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1A1A1]">
          An architectural timeline tracing how foundational programming evolved into autonomous agents and production intelligence.
        </p>
      </div>

      {/* Interactive Progression System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Vertical Step Selector */}
        <div className="lg:col-span-5 space-y-2 max-h-[620px] overflow-y-auto pr-2">
          {technicalProgression.map((item, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#161616] border-[#FF6A00]/50 shadow-lg shadow-black/50'
                    : 'bg-[#0D0D0D] border-white/5 hover:border-white/15 hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#FF6A00] text-black' : 'bg-white/5 text-[#707070]'
                  }`}>
                    {item.step}
                  </span>
                  <div>
                    <span className={`text-sm font-semibold block transition-colors ${
                      isSelected ? 'text-white' : 'text-[#A1A1A1] group-hover:text-white'
                    }`}>
                      {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#707070]">
                      {item.role}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-[#FF6A00] translate-x-1' : 'text-[#707070] opacity-0 group-hover:opacity-100'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Focus Card */}
        <div className="lg:col-span-7 sticky top-28">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
            {/* Ambient amber glow */}
            <div 
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)'
              }}
            />

            {/* Header with Step indicator */}
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <span className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider">
                STAGE {currentStep.step} // 10
              </span>
              <span className="text-xs font-mono text-[#A1A1A1] bg-white/5 px-3 py-1 rounded-full border border-white/8">
                {currentStep.role}
              </span>
            </div>

            {/* Stage Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentStep.title}
              </h3>
              <p className="mt-3 text-base text-[#A1A1A1] leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Key Deliverables & Artifacts */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Primary Engineering Deliverables</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStep.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#161616] border border-white/5 flex items-center gap-2.5 text-xs text-[#E1E1E1] font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="pt-6 border-t border-white/8 flex items-center justify-between">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-mono px-4 py-2 rounded-full bg-[#161616] border border-white/8 text-[#A1A1A1] hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                ← Previous Stage
              </button>

              <span className="text-xs font-mono text-[#707070]">
                {activeStepIndex + 1} of {technicalProgression.length}
              </span>

              <button
                type="button"
                disabled={activeStepIndex === technicalProgression.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(technicalProgression.length - 1, prev + 1))}
                className="text-xs font-mono px-4 py-2 rounded-full bg-[#FF6A00] text-black font-semibold hover:bg-[#FF8A2A] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
