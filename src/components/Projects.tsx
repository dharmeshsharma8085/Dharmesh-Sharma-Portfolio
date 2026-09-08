import React, { useState } from 'react';
import { projects, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight, Github, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Generative AI', 'Multimodal AI', 'Document AI', 'AI System'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background warm orange atmospheric ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.35) 0%, transparent 70%)'
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <span className="text-xs font-mono tracking-widest text-[#FF8A2A] uppercase">
              02 // SELECTED WORK &amp; ARCHITECTURES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Production Systems &amp; Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            End-to-end intelligent applications engineered with Python, modern LLM orchestration, RAG retrieval pipelines, and verifiable evaluation frameworks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#FF6A00] text-black font-semibold shadow-[0_0_15px_rgba(255,106,0,0.25)]'
                  : 'bg-[#111111] text-[#A1A1A1] hover:text-white border border-white/8 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Editorial Case-Study Layout */}
      {selectedCategory === 'All' ? (
        <div className="space-y-8 sm:space-y-10">
          {/* 1. Visually Dominant Flagship Hero Project (Project 01: AI Video Assistant) */}
          {filteredProjects[0] && (
            <ProjectCard
              project={filteredProjects[0]}
              index={0}
              layoutVariant="featured"
              onOpenModal={(p) => setActiveProject(p)}
            />
          )}

          {/* 2. Asymmetric Pair: 7-col vs 5-col split (Projects 02 & 03) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {filteredProjects[1] && (
              <div className="lg:col-span-7 flex flex-col">
                <ProjectCard
                  project={filteredProjects[1]}
                  index={1}
                  layoutVariant="wide"
                  onOpenModal={(p) => setActiveProject(p)}
                />
              </div>
            )}
            {filteredProjects[2] && (
              <div className="lg:col-span-5 flex flex-col">
                <ProjectCard
                  project={filteredProjects[2]}
                  index={2}
                  layoutVariant="compact"
                  onOpenModal={(p) => setActiveProject(p)}
                />
              </div>
            )}
          </div>

          {/* 3. Inverted Asymmetric Pair: 5-col vs 7-col split (Projects 04 & 05) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {filteredProjects[3] && (
              <div className="lg:col-span-5 flex flex-col">
                <ProjectCard
                  project={filteredProjects[3]}
                  index={3}
                  layoutVariant="compact"
                  onOpenModal={(p) => setActiveProject(p)}
                />
              </div>
            )}
            {filteredProjects[4] && (
              <div className="lg:col-span-7 flex flex-col">
                <ProjectCard
                  project={filteredProjects[4]}
                  index={4}
                  layoutVariant="wide"
                  onOpenModal={(p) => setActiveProject(p)}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              layoutVariant="standard"
              onOpenModal={(p) => setActiveProject(p)}
            />
          ))}
        </div>
      )}

      {/* Bottom GitHub Banner Callout */}
      <div className="mt-14 sm:mt-16 p-7 sm:p-9 rounded-[32px] bg-[#0E0E0E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 text-[#FF6A00]">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-white block">
              30+ Completed Systems Documented on GitHub
            </span>
            <span className="text-xs text-[#A1A1A1] font-mono">
              Explore open-source repositories, ML scripts, data engineering pipelines, and Streamlit demos.
            </span>
          </div>
        </div>

        <a
          href="https://github.com/dharmeshsharma8085"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#161616] hover:bg-[#FF6A00] text-white hover:text-black border border-white/10 hover:border-[#FF6A00] transition-all group shrink-0"
        >
          <span>Explore All Repositories</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Deep Architecture Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
