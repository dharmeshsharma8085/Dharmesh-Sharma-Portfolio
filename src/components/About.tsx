import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const metaCards = [
    { label: "Focus", value: "AI Engineering", desc: "Production ML, GenAI & Systems" },
    { label: "Primary Language", value: "Python", desc: "FastAPI, PyTorch, LangChain, NumPy" },
    { label: "Track Record", value: "30+ Projects", desc: "End-to-end architectures shipped" },
    { label: "Active Direction", value: "Generative AI / LLM / Agentic AI", desc: "RAG & multi-agent reasoning" },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle atmospheric ambient glow */}
      <div 
        className="absolute top-1/3 right-10 w-[550px] h-[550px] pointer-events-none rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
        <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
          01 // PHILOSOPHY &amp; PERSPECTIVE
        </span>
      </div>

      {/* Two-Column Editorial Intro Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Giant Typography Statement */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            "I turn complex technical research into products people can <span className="text-[#FF6A00]">actually use."</span>
          </h2>

          <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="p-5 rounded-2xl bg-[#0E0E0E] border border-white/8 flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#FF6A00] font-mono tracking-tight">
                {portfolioConfig.projectsCount}
              </span>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-white font-bold block">
                  Projects Built
                </span>
                <span className="text-[11px] text-[#A1A1A1] font-mono">
                  From research to deployment
                </span>
              </div>
            </div>

            <div className="text-sm text-[#A1A1A1] font-mono leading-relaxed border-l-2 border-[#FF6A00]/40 pl-4">
              "I don't just learn AI. <br />
              <strong className="text-white font-bold">I build with it."</strong>
            </div>
          </div>
        </div>

        {/* Right: Personal Narrative Card */}
        <div className="lg:col-span-5">
          <div className="p-7 sm:p-9 rounded-[32px] bg-[#0E0E0E] border border-white/8 shadow-xl space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF6A00]" />
              <span>Engineering Practical Intelligence</span>
            </h3>

            <p className="text-base text-[#A1A1A1] leading-relaxed">
              I am an AI/ML engineer focused on building practical intelligent systems. I work across machine learning, deep learning, NLP, generative AI, LLM applications, RAG systems and agentic workflows.
            </p>

            <p className="text-sm text-[#707070] leading-relaxed">
              Rather than isolated notebooks or toy demos, I prioritize building robust inference pipelines, clean APIs, resilient embeddings, and real software interfaces that bridge state-of-the-art research with daily human utility.
            </p>

            {/* Engineering Principles */}
            <div className="pt-2 space-y-2.5 text-xs font-mono text-[#A1A1A1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>End-to-end ML &amp; LLM lifecycle engineering</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Deterministic guardrails for nondeterministic models</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>High-throughput, low-latency API integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Meta Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metaCards.map((card) => (
          <div
            key={card.label}
            className="p-6 rounded-[24px] bg-[#0E0E0E] border border-white/8 hover:border-white/20 transition-all group"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#707070] block mb-1">
              {card.label}
            </span>
            <div className="text-base font-bold text-white group-hover:text-[#FF6A00] transition-colors">
              {card.value}
            </div>
            <p className="mt-2 text-xs text-[#A1A1A1] font-mono">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 30+ Projects Highlight Block */}
      <div className="mt-14 p-8 sm:p-12 rounded-[32px] bg-[#0E0E0E] border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle glow overlay */}
        <div 
          className="absolute -right-20 -bottom-20 w-96 h-96 pointer-events-none rounded-full blur-[140px] opacity-20"
          style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex items-baseline gap-4">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter">
              30+
            </span>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Projects Built
              </span>
              <span className="text-xs font-mono text-[#FF8A2A]">
                Validated &amp; Shipped
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-xl text-[#A1A1A1] leading-relaxed">
              From machine-learning experiments to full AI applications, I've built and deployed 30+ projects across different areas of AI.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/8 text-white">
                Machine Learning
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/8 text-white">
                Deep Learning
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF6A00]/30 text-[#FF8A2A]">
                Generative AI &amp; LLMs
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/8 text-white">
                RAG Systems
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/8 text-white">
                Agentic Workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
