import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#050505] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Left: Brand Identity */}
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span>{portfolioConfig.name}</span>
            </div>
            <p className="text-xs text-[#707070] font-mono">
              AI / ML Engineer • Generative AI &amp; Systems
            </p>
          </div>

          {/* Center: Philosophy Tagline */}
          <div className="text-center">
            <p className="text-sm font-medium text-[#A1A1A1] italic">
              "Building with code, curiosity and AI."
            </p>
          </div>

          {/* Right: Social Presence */}
          <div className="flex items-center justify-center md:justify-end gap-5 text-xs font-mono">
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#FF6A00] transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#FF6A00] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#FF6A00] transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#707070]">
          <div>
            © 2026 {portfolioConfig.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="group flex items-center gap-1.5 text-[#A1A1A1] hover:text-white px-3 py-1.5 rounded-full bg-[#0D0D0D] border border-white/5 hover:border-white/15 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6A00] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
