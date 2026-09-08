import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { Github, ArrowUpRight, Video, Layers, FileText, Globe, Cpu, AlertCircle, CheckCircle2, Terminal } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  layoutVariant?: 'featured' | 'wide' | 'compact' | 'standard';
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  layoutVariant = 'standard',
  onOpenModal 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Bespoke high-density technical previews for each project
  const renderVisualPreview = () => {
    switch (project.id) {
      case 'ai-video-assistant':
        return (
          <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl bg-[#080808] border border-white/8 overflow-hidden p-5 flex flex-col justify-between group-hover:border-[#FF6A00]/30 transition-colors">
            {/* Soft ambient orange backlight */}
            <div 
              className="absolute top-0 right-0 w-52 h-52 pointer-events-none rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }}
            />
            
            {/* Top Video Header */}
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>TRANSCRIPTION_STREAM // WHISPER_v3</span>
                </span>
              </div>
              <span className="text-[11px] text-[#A1A1A1] bg-white/5 px-2.5 py-0.5 rounded border border-white/5">
                08:45 / 24:10
              </span>
            </div>

            {/* Video waveform / semantic analysis */}
            <div className="space-y-2.5 my-auto">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-white">Query: "Extract key attention bottlenecks"</span>
                <span className="text-[#FF8A2A] font-semibold">98.4% Match Score</span>
              </div>
              
              <div className="h-16 w-full bg-[#111111] rounded-xl p-2.5 flex items-end gap-1.5 overflow-hidden border border-white/5">
                {[35, 60, 30, 85, 95, 45, 70, 60, 92, 100, 55, 75, 40, 88, 62, 95, 38, 70, 82, 50, 68, 88, 92, 75, 58].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-xs transition-all duration-300 ${
                      i >= 8 && i <= 15 
                        ? 'bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.5)]' 
                        : 'bg-white/10 group-hover:bg-white/15'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#707070]">
                <span>[04:12] Chunk indexed: scaled dot-product bottleneck</span>
                <span className="text-[#FF8A2A]">Timestamp synced</span>
              </div>
            </div>

            {/* Bottom Status telemetry */}
            <div className="flex items-center justify-between text-[10px] font-mono pt-3 border-t border-white/5 text-[#707070]">
              <span>Audio: Whisper-Large</span>
              <span>Vector Store: ChromaDB</span>
              <span className="hidden sm:inline text-white">Streamlit UI</span>
            </div>
          </div>
        );

      case 'multimodal-research-assistant':
        return (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-[#080808] border border-white/8 overflow-hidden p-4 sm:p-5 flex flex-col justify-between group-hover:border-[#FF6A00]/30 transition-colors">
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#FF8A2A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>CROSS_MODAL_SYNTHESIS</span>
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                ● Grounded Citation
              </span>
            </div>

            {/* Modality boxes */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2.5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
                <div className="text-[9px] font-mono text-[#707070]">MODALITY_01</div>
                <div className="text-xs font-semibold text-white">PDF Paper</div>
                <div className="text-[10px] text-[#A1A1A1] font-mono">14 pages parsed</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141210] border border-[#FF6A00]/30 space-y-1 shadow-[0_0_12px_rgba(255,106,0,0.08)]">
                <div className="text-[9px] font-mono text-[#FF8A2A]">MODALITY_02</div>
                <div className="text-xs font-semibold text-white">Chart OCR</div>
                <div className="text-[10px] text-[#FF8A2A] font-mono">Vision aligned</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
                <div className="text-[9px] font-mono text-[#707070]">MODALITY_03</div>
                <div className="text-xs font-semibold text-white">Voice Notes</div>
                <div className="text-[10px] text-[#A1A1A1] font-mono">Spectral tokens</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#0F0F0F] border border-white/5 text-[11px] font-mono text-[#A1A1A1] flex items-center justify-between">
              <span>Synthesized Research Summary:</span>
              <span className="text-[#FF6A00]">Ref: [Sec 3.4 &amp; Fig 2]</span>
            </div>
          </div>
        );

      case 'documind-ai':
        return (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-[#080808] border border-white/8 overflow-hidden p-4 sm:p-5 flex flex-col justify-between group-hover:border-[#FF6A00]/30 transition-colors">
            <div className="absolute bottom-0 right-10 w-44 h-44 bg-[#FF6A00]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>SEMANTIC_CHUNK_INSPECTOR</span>
              </span>
              <span className="text-[10px] font-mono text-[#FF8A2A]">
                Top-k: 5 chunks
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="p-3 rounded-xl bg-[#121212] border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white font-bold">Document Chunk #42</span>
                  <span className="text-[#FF6A00] font-semibold">Similarity: 0.964</span>
                </div>
                <p className="text-[11px] text-[#A1A1A1] font-mono line-clamp-2">
                  "The self-attention module projects queries and keys to d_k dimensional space, computing scaled dot-products..."
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-[#707070]">
                <span className="px-2 py-0.5 rounded bg-white/5">Strict Guardrails: Active</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-emerald-400">Zero Hallucination</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#707070] pt-2 border-t border-white/5">
              <span>Vector Store: ChromaDB</span>
              <span>FastAPI Endpoint: /api/v1/query</span>
            </div>
          </div>
        );

      case 'city-intelligence-system':
        return (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-[#080808] border border-white/8 overflow-hidden p-4 sm:p-5 flex flex-col justify-between group-hover:border-[#FF6A00]/30 transition-colors">
            <div className="absolute top-0 left-10 w-44 h-44 bg-[#FF6A00]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>SPATIAL_INTELLIGENCE_GRID</span>
              </span>
              <span className="text-[10px] text-white font-mono bg-white/5 px-2 py-0.5 rounded">
                Zone: Alpha-7
              </span>
            </div>

            {/* City grid visualization */}
            <div className="grid grid-cols-4 gap-1.5 my-auto">
              {[
                { zone: 'Z-01', val: 'Low', col: 'text-emerald-400' },
                { zone: 'Z-02', val: 'Opt', col: 'text-emerald-400' },
                { zone: 'Z-03', val: 'High', col: 'text-[#FF8A2A]' },
                { zone: 'Z-04', val: 'Peak', col: 'text-[#FF6A00]' },
                { zone: 'Z-05', val: 'Opt', col: 'text-emerald-400' },
                { zone: 'Z-06', val: 'High', col: 'text-[#FF8A2A]' },
                { zone: 'Z-07', val: 'Low', col: 'text-emerald-400' },
                { zone: 'Z-08', val: 'Opt', col: 'text-emerald-400' },
              ].map((z, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-[#111111] border border-white/5 text-center">
                  <div className="text-[9px] font-mono text-[#707070]">{z.zone}</div>
                  <div className={`text-xs font-mono font-bold ${z.col}`}>{z.val}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#707070] pt-2 border-t border-white/5">
              <span>Model: Scikit-learn Clustering</span>
              <span className="text-[#FF8A2A]">Anomaly Score: 0.12 (Normal)</span>
            </div>
          </div>
        );

      case 'generative-ai-projects':
      default:
        return (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-[#080808] border border-white/8 overflow-hidden p-4 sm:p-5 flex flex-col justify-between group-hover:border-[#FF6A00]/30 transition-colors">
            <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#FF6A00]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>GENAI_EXPERIMENT_SUITE</span>
              </span>
              <span className="text-[10px] text-[#FF8A2A] bg-[#FF6A00]/10 px-2 py-0.5 rounded border border-[#FF6A00]/20">
                Multi-Model Hub
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="p-3 rounded-xl bg-[#111111] border border-white/8 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1A1]">
                  <span>Prompt Pipeline &amp; LoRA Adapter</span>
                  <span className="text-[#FF6A00]">rank = 16</span>
                </div>
                <div className="font-mono text-xs text-white truncate">
                  &gt; model.generate(prompt, temperature=0.2, top_p=0.95)
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#A1A1A1]">
                <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-white/5">Agentic Reasoning</span>
                <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-white/5">Fine-Tuning</span>
                <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-white/5">Streamlit Apps</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#707070] pt-2 border-t border-white/5">
              <span>Stack: Transformers + Python</span>
              <span>Status: Public Repository</span>
            </div>
          </div>
        );
    }
  };

  // Case 1: FEATURED FLAGSHIP CASE STUDY (Dominant layout for Project 01)
  if (layoutVariant === 'featured') {
    return (
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative col-span-1 lg:col-span-12 rounded-[32px] bg-[#0E0E0E] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden"
        id={`project-card-${project.id}`}
      >
        {/* Ambient warm orange backlight */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none blur-[140px] opacity-25 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Problem, Solution, Narrative & Actions */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF6A00] text-black tracking-wide">
                    FLAGSHIP // {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#161616] border border-white/10 text-[#A1A1A1]">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#707070] hidden sm:inline">
                  Production Case Study
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#FF8A2A] transition-colors duration-200">
                {project.title}
              </h3>

              {/* Overview Description */}
              <p className="mt-3 text-base text-[#A1A1A1] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Structured Problem & Solution for Instant Scanning */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A2A] font-semibold uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-[#707070] uppercase tracking-wider block">
                Primary Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#161616] text-white border border-white/8 group-hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Architecture Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#161616] hover:bg-[#202020] text-white border border-white/10 hover:border-white/25 transition-all group/gh"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3 h-3 text-[#707070] group-hover/gh:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Telemetry Preview */}
          <div className="lg:col-span-6">
            <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
              {renderVisualPreview()}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Case 2: COMPANION ASYMMETRIC CARD (Rich preview with Problem & Solution scanning)
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[28px] sm:rounded-[32px] bg-[#0E0E0E] border border-white/8 hover:border-white/20 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between overflow-hidden p-6 sm:p-8"
      id={`project-card-${project.id}`}
    >
      {/* Subtle warm orange atmosphere on hover */}
      <div 
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }}
      />

      {/* Header: Number + Category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold text-[#FF6A00] tracking-wider">
            PROJECT // {project.number}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#161616] border border-white/8 text-[#A1A1A1]">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#FF8A2A] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
          {project.description}
        </p>

        {/* Structured Problem & Solution */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-[#141414] border border-white/5 space-y-0.5">
            <span className="font-mono text-[#FF8A2A] uppercase font-semibold text-[10px] block">
              Problem:
            </span>
            <p className="text-[#CCCCCC] leading-relaxed line-clamp-2">
              {project.problem}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-[#141414] border border-white/5 space-y-0.5">
            <span className="font-mono text-emerald-400 uppercase font-semibold text-[10px] block">
              Solution:
            </span>
            <p className="text-[#CCCCCC] leading-relaxed line-clamp-2">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Preview Container */}
      <div className="my-6 w-full transform group-hover:scale-[1.01] transition-transform duration-300">
        {renderVisualPreview()}
      </div>

      {/* Technologies & Actions */}
      <div className="space-y-4">
        {/* Technology Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#161616] text-[#A1A1A1] border border-white/5 hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="text-xs font-mono font-medium text-[#A1A1A1] hover:text-white flex items-center gap-1.5 group/btn transition-colors"
          >
            <span>Architecture &amp; Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6A00] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#161616] hover:bg-[#FF6A00] text-white hover:text-black border border-white/10 hover:border-[#FF6A00] transition-all duration-200"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
};
