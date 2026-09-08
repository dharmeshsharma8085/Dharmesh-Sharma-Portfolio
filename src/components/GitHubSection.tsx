import React from 'react';
import { portfolioConfig, projects } from '../data/portfolioData';
import { Github, ArrowUpRight, Code2, Terminal, FolderGit2, Sparkles, ExternalLink } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Warm atmospheric lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[500px] pointer-events-none rounded-full blur-[170px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.35) 0%, transparent 70%)'
        }}
      />

      {/* Main Container Card */}
      <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#111111] via-[#0D0D0D] to-[#0A0A0A] border border-white/10 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
                08 // OPEN SOURCE &amp; CODE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Built in Public
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
              Explore the code, experiments and AI systems behind the work.
            </p>

            <div className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-2 text-xs font-mono text-[#A1A1A1]">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Terminal className="w-4 h-4 text-[#FF6A00]" />
                <span>Repository Profile</span>
              </div>
              <div className="text-[11px] text-[#707070]">
                All code is structured with modular Python conventions, clean requirements manifests, and reproducible inference pipelines.
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                id="github-explore-btn"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_0_30px_rgba(255,106,0,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:scale-[1.02] active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span>Explore GitHub →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Actual Public Repositories List */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#707070] mb-2 flex items-center justify-between">
              <span>Featured Public Repositories</span>
              <span className="text-white">@dharmeshsharma8085</span>
            </div>

            {projects.map((proj) => (
              <a
                key={proj.id}
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#161616]/80 hover:bg-[#1C1C1C] border border-white/5 hover:border-[#FF6A00]/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#0D0D0D] border border-white/5 text-[#FF6A00] group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#FF8A2A] transition-colors flex items-center gap-1.5">
                      <span>{proj.title}</span>
                      <ExternalLink className="w-3 h-3 text-[#707070] group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-[11px] font-mono text-[#707070]">
                      {proj.category} • Python
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A1A1A1]">
                    Public
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
