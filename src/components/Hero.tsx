import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Terminal, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden"
    >
      {/* Cinematic subtle warm orange ambient backlight */}
      <div 
        className="absolute top-8 right-1/4 w-[600px] h-[500px] pointer-events-none rounded-full blur-[160px] opacity-18"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, rgba(255,138,42,0.05) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute top-1/2 left-0 w-[450px] h-[450px] pointer-events-none rounded-full blur-[180px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.2) 0%, transparent 70%)'
        }}
      />

      {/* Top Grid: Headline + Visual Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-7 z-10">
          {/* Unmistakable Identity & Status Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span className="font-bold text-white tracking-wide">{portfolioConfig.name}</span>
              <span className="text-white/30">•</span>
              <span className="text-[#A1A1A1] font-medium">{portfolioConfig.role}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-[#111111]/80 border border-white/8 text-[#A1A1A1]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioConfig.status}</span>
            </div>
          </div>

          {/* Main Giant Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px] font-extrabold tracking-[-0.035em] text-white leading-[0.98]">
            Building <span className="text-white">intelligent</span> <br />
            systems for the <br />
            <span className="text-[#FF6A00]">real world.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed max-w-xl font-normal">
            {portfolioConfig.heroSupportingText}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={scrollToProjects}
              id="hero-cta-projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_4px_24px_rgba(255,106,0,0.25)] hover:shadow-[0_4px_32px_rgba(255,106,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              id="hero-cta-connect"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#111111] hover:bg-[#181818] text-white border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF6A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[#A1A1A1] border-t border-white/5">
            <span className="text-[#707070] uppercase tracking-wider text-[11px]">Channels:</span>

            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-github"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111] border border-white/8 hover:border-[#FF6A00]/40 hover:text-white transition-all group"
            >
              <Github className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-linkedin"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111] border border-white/8 hover:border-[#FF6A00]/40 hover:text-white transition-all group"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={portfolioConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-instagram"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111] border border-white/8 hover:border-[#FF6A00]/40 hover:text-white transition-all group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>@{portfolioConfig.instagramHandle}</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Technical Instrument Panel */}
        <div className="lg:col-span-6 z-10">
          <HeroVisual />
        </div>
      </div>

      {/* Floating Bottom Quick Identity Banner */}
      <div className="mt-12 p-5 sm:p-6 rounded-[28px] bg-[#0A0A0A] border border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A1A1]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#FF6A00] shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-medium block">{portfolioConfig.primaryIdentity}</span>
            <span className="text-[#707070]">Production AI Systems • Latent Architecture • Autonomous Loops</span>
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#FF6A00] font-bold text-sm">30+</span>
            <span className="text-[#707070]">Projects Shipped</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">Python</span>
            <span className="text-[#707070]">Primary Core</span>
          </div>
        </div>
      </div>
    </section>
  );
};
