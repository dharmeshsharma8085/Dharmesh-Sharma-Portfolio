import React, { useState } from 'react';
import { labExperiments, LabExperiment } from '../data/portfolioData';
import { FlaskConical, Sparkles, Terminal, Activity, ArrowUpRight } from 'lucide-react';

export const Lab: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Reasoning', 'Retrieval', 'Agents', 'Architecture', 'Information Extraction', 'Anomaly Detection', 'Automation', 'Multimodal'];

  const filteredExperiments = selectedTag === 'All'
    ? labExperiments
    : labExperiments.filter((exp) => exp.tag === selectedTag);

  const getStatusBadge = (status: LabExperiment['status']) => {
    switch (status) {
      case 'Built':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
            ● Built
          </span>
        );
      case 'Experimenting':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#FF6A00]/15 text-[#FF8A2A] border border-[#FF6A00]/30 animate-pulse">
            ● Experimenting
          </span>
        );
      case 'Exploring':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950/60 text-blue-400 border border-blue-500/20">
            ● Exploring
          </span>
        );
      case 'Prototype':
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/60 text-purple-400 border border-purple-500/20">
            ● Prototype
          </span>
        );
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Background glow */}
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[500px] pointer-events-none rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
              07 // APPLIED RESEARCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>From the Lab</span>
            <FlaskConical className="w-8 h-8 text-[#FF6A00] hidden sm:inline-block" />
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A1A1A1] max-w-xl">
            Targeted exploratory investigations, architectural micro-benchmarks, and algorithmic proofs-of-concept.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-1.5 max-w-lg">
          {tags.slice(0, 5).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelectedTag(t)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                selectedTag === t
                  ? 'bg-[#FF6A00] text-black font-semibold'
                  : 'bg-[#111111] text-[#A1A1A1] hover:text-white border border-white/8'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredExperiments.map((item) => (
          <div
            key={item.name}
            className="p-6 rounded-3xl bg-[#111111] border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
          >
            <div>
              {/* Header Status */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#707070] uppercase">
                  {item.tag}
                </span>
                {getStatusBadge(item.status)}
              </div>

              {/* Experiment Name */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF8A2A] transition-colors mb-2">
                {item.name}
              </h3>

              {/* Explanation */}
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                {item.explanation}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <div className="flex flex-wrap gap-1">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#161616] text-[#A1A1A1] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
