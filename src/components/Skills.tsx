import React, { useState } from 'react';
import { skillCategories, SkillCategory } from '../data/portfolioData';
import { Code2, BarChart3, Brain, Network, Bot, Layout, GitBranch, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-[#FF6A00]" />;
      case 'data-viz':
        return <BarChart3 className="w-4 h-4 text-[#FF6A00]" />;
      case 'machine-learning':
        return <Brain className="w-4 h-4 text-[#FF6A00]" />;
      case 'deep-learning':
        return <Network className="w-4 h-4 text-[#FF6A00]" />;
      case 'nlp-genai':
        return <Bot className="w-4 h-4 text-[#FF6A00]" />;
      case 'ai-app-dev':
        return <Layout className="w-4 h-4 text-[#FF6A00]" />;
      case 'dev-tools':
      default:
        return <GitBranch className="w-4 h-4 text-[#FF6A00]" />;
    }
  };

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle ambient backlight */}
      <div 
        className="absolute top-1/3 right-1/4 w-[550px] h-[550px] pointer-events-none rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
              03 // TECHNICAL TAXONOMY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Tools I Think In
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            A comprehensive technical taxonomy spanning foundational algorithms, statistical modeling, modern neural architectures, and scalable application deployment.
          </p>
        </div>

        {/* Quick category filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-[#FF6A00] text-black font-semibold shadow-[0_0_15px_rgba(255,106,0,0.25)]'
                : 'bg-[#111111] text-[#A1A1A1] hover:text-white border border-white/8 hover:border-white/20'
            }`}
          >
            All Categories
          </button>
          {skillCategories.slice(0, 4).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all hidden sm:inline-block ${
                activeCategory === cat.id
                  ? 'bg-[#FF6A00] text-black font-semibold'
                  : 'bg-[#111111] text-[#A1A1A1] hover:text-white border border-white/8 hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-[28px] sm:rounded-[32px] bg-[#0E0E0E] border border-white/8 hover:border-white/20 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
          >
            <div>
              {/* Category Number + Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#141414] border border-white/5 group-hover:border-[#FF6A00]/40 transition-colors">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-xs font-mono text-[#707070] uppercase tracking-wider">
                    TAXONOMY // {category.number}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#FF8A2A] bg-[#FF6A00]/10 px-2.5 py-0.5 rounded-full border border-[#FF6A00]/20">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A2A] transition-colors mb-5">
                {category.name}
              </h3>

              {/* Skill list */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/15 transition-all flex items-start justify-between gap-3 group/item"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover/item:text-[#FF8A2A] transition-colors">
                        {skill.name}
                      </div>
                      {skill.desc && (
                        <div className="text-[11px] font-mono text-[#707070] mt-0.5">
                          {skill.desc}
                        </div>
                      )}
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80 shrink-0 mt-0.5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom footnote */}
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-[#707070] flex items-center justify-between">
              <span>Production Grade</span>
              <span className="text-[#A1A1A1]">Project Verified</span>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Philosophy Note */}
      <div className="mt-14 p-7 rounded-[28px] bg-[#0E0E0E] border border-white/8 text-center max-w-3xl mx-auto shadow-lg">
        <p className="text-xs font-mono text-[#A1A1A1] leading-relaxed">
          <span className="text-white font-semibold">Engineering Standard:</span> Technical proficiency is proven through shipped architectures, deterministic inference pipelines, and clean evaluation benchmarks — not subjective percentages. Every tool listed is actively deployed in my public repositories.
        </p>
      </div>
    </section>
  );
};
