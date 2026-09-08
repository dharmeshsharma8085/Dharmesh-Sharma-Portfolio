import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ArrowUpRight, CheckCircle2, Cpu, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#0E0E0E] border border-white/12 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle warm orange backlight */}
        <div 
          className="absolute -top-12 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }}
        />

        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#FF6A00] font-bold tracking-wider">
                SYSTEM // {project.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#161616] border border-white/10 text-[#A1A1A1]">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#161616] text-[#A1A1A1] hover:text-white border border-white/10 transition-colors"
            aria-label="Close Project Details Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-base text-[#A1A1A1] leading-relaxed">
          {project.description}
        </p>

        {/* Problem vs Solution Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF8A2A] font-semibold uppercase">
              <AlertCircle className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>The Problem</span>
            </div>
            <p className="text-[#CCCCCC] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold uppercase">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Solution</span>
            </div>
            <p className="text-[#CCCCCC] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Snippet */}
        <div className="p-4 rounded-2xl bg-[#121212] border border-white/8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
            <Cpu className="w-4 h-4 text-[#FF6A00]" />
            <span>PIPELINE ARCHITECTURE</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#080808] border border-white/5 font-mono text-xs text-[#FF8A2A] overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {project.architectureSnippet}
          </div>
        </div>

        {/* Key Architectural Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1]">
            Engineering Highlights
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#D1D1D1]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2 pt-2 border-t border-white/8">
          <span className="text-xs font-mono text-[#707070] uppercase tracking-wider block">
            Technologies &amp; Frameworks
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#161616] text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#707070]">
            {project.metrics ? `Status: ${project.metrics}` : 'Open-source implementation'}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Repository on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
