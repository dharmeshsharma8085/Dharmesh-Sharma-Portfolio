import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Network, Layers, Terminal, Activity, Zap } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  highlighted: boolean;
  pulsePhase: number;
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<'graph' | 'latent' | 'pipeline'>('graph');
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const setupCanvas = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', handleResize);

    // Initialize structured neural computation graph
    const layersCount = 5;
    const nodesPerLayer = [3, 5, 6, 5, 3];
    const nodes: Node[] = [];

    nodesPerLayer.forEach((count, lIndex) => {
      const layerX = (width * 0.14) + (lIndex * (width * 0.72) / (layersCount - 1));
      for (let i = 0; i < count; i++) {
        const layerY = (height * 0.16) + (i + 0.5) * ((height * 0.68) / count);
        nodes.push({
          x: layerX + (Math.random() - 0.5) * 16,
          y: layerY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: lIndex === 2 ? 4 : 3,
          layer: lIndex,
          highlighted: Math.random() > 0.62,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    });

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle precision grid marks
      ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      const step = 36;
      for (let x = 18; x < width; x += step) {
        for (let y = 18; y < height; y += step) {
          ctx.fillRect(x - 0.5, y - 0.5, 1.2, 1.2);
        }
      }

      // Update nodes gently
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.025;

        // Bounding constraints
        const baseLayerX = (width * 0.14) + (node.layer * (width * 0.72) / (layersCount - 1));
        if (Math.abs(node.x - baseLayerX) > 20) node.vx *= -1;
        if (node.y < height * 0.12 || node.y > height * 0.88) node.vy *= -1;
      });

      // Draw synapse connection lines between adjacent layers
      nodes.forEach((n1) => {
        nodes.forEach((n2) => {
          if (n2.layer === n1.layer + 1) {
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 190) {
              const isAccent = n1.highlighted && n2.highlighted;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);

              if (isAccent) {
                ctx.strokeStyle = `rgba(255, 106, 0, ${0.22 + 0.1 * Math.sin(frame * 0.04 + n1.layer)})`;
                ctx.lineWidth = 1.1;
              } else {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                ctx.lineWidth = 0.75;
              }
              ctx.stroke();

              // Clean signal pulse packet along active synaptic connections
              if (isAccent && (frame + n1.layer * 22) % 65 < 2) {
                const progress = ((frame * 0.025) % 1);
                const px = n1.x + dx * progress;
                const py = n1.y + dy * progress;
                ctx.beginPath();
                ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = '#FF8A2A';
                ctx.fill();
              }
            }
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        const pulse = 1 + 0.2 * Math.sin(node.pulsePhase);
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);

        if (node.highlighted) {
          ctx.fillStyle = '#FF6A00';
          ctx.fill();

          // Subtle outer ring (no excessive glow)
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulse * 2, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 106, 0, 0.16)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = 'rgba(230, 230, 230, 0.65)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const triggerActivation = () => {
    setPulseCount((prev) => prev + 1);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl flex flex-col justify-between"
      id="hero-cinematic-visual"
    >
      {/* Warm ambient lighting behind visual */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(circle at 65% 30%, rgba(255, 106, 0, 0.16), transparent 55%)'
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 border-b border-white/8 bg-[#0D0D0D]/70 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
          <div className="flex flex-col">
            <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase flex items-center gap-2">
              <span>LATENT COGNITION ENGINE</span>
              <span className="text-[10px] text-[#FF8A2A] px-1.5 py-0.2 rounded bg-[#FF6A00]/10 border border-[#FF6A00]/20">
                v4.8
              </span>
            </span>
            <span className="text-[10px] text-[#707070] font-mono">
              d_model: 1536 • heads: 32 • sparsity: 0.88
            </span>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-full border border-white/8">
          <button
            type="button"
            onClick={() => setActiveTab('graph')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
              activeTab === 'graph'
                ? 'bg-white/12 text-white font-medium shadow-sm'
                : 'text-[#707070] hover:text-[#A1A1A1]'
            }`}
          >
            <Network className="w-3 h-3 text-[#FF6A00]" />
            <span>Topology</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('latent')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
              activeTab === 'latent'
                ? 'bg-white/12 text-white font-medium shadow-sm'
                : 'text-[#707070] hover:text-[#A1A1A1]'
            }`}
          >
            <Layers className="w-3 h-3 text-[#FF6A00]" />
            <span>Vectors</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
              activeTab === 'pipeline'
                ? 'bg-white/12 text-white font-medium shadow-sm'
                : 'text-[#707070] hover:text-[#A1A1A1]'
            }`}
          >
            <Cpu className="w-3 h-3 text-[#FF6A00]" />
            <span>Pipeline</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        {/* Dynamic High-DPI Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Tab 2: Vector Matrix Overlay */}
        {activeTab === 'latent' && (
          <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm p-6 flex flex-col justify-center animate-fadeIn">
            <div className="max-w-md mx-auto w-full space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] border-b border-white/10 pb-2">
                <span>EMBEDDING VECTOR PROJECTION</span>
                <span className="text-[#FF6A00]">cosine_sim: 0.942</span>
              </div>
              <div className="grid grid-cols-4 gap-2 font-mono text-[11px]">
                {["[0.182, -0.441]", "[0.893, +0.104]", "[-0.052, +0.722]", "[0.419, -0.311]",
                  "[0.612, +0.220]", "[-0.781, +0.015]", "[0.902, -0.198]", "[0.334, +0.551]",
                  "[-0.201, +0.672]", "[0.490, -0.801]", "[0.127, +0.943]", "[-0.662, -0.119]"].map((vec, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-[#111111] border border-white/5 text-[#A1A1A1] hover:border-[#FF6A00]/40 hover:text-white transition-colors">
                    <span className="text-[#707070] block text-[9px]">dim_{idx * 128}</span>
                    <span>{vec}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-2xl bg-[#141414] border border-white/8 flex items-center justify-between text-xs font-mono">
                <span className="text-[#A1A1A1]">Cluster: Agentic Reasoning Loop</span>
                <span className="text-[#FF8A2A] font-semibold">1,536 dimensions</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Inference Pipeline Lifecycle Overlay */}
        {activeTab === 'pipeline' && (
          <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm p-6 flex items-center justify-center animate-fadeIn">
            <div className="w-full max-w-lg space-y-3">
              <div className="text-xs font-mono text-[#A1A1A1] uppercase tracking-wider mb-2">
                Production AI Inference Lifecycle
              </div>
              <div className="space-y-2">
                {[
                  { step: '01', title: 'Tokenization & Embeddings', desc: 'Byte-pair encoding -> Dense vector mapping', state: 'Active' },
                  { step: '02', title: 'Hybrid Retrieval (RAG)', desc: 'ChromaDB + BM25 reciprocal rank fusion', state: 'Indexed' },
                  { step: '03', title: 'Self-Attention & Reasoning', desc: 'Multi-head contextual cross-attention', state: 'Streaming' },
                  { step: '04', title: 'Tool Execution & Reflection', desc: 'Autonomous Python sandbox validation', state: 'Ready' }
                ].map((item) => (
                  <div key={item.step} className="p-3 rounded-2xl bg-[#111111] border border-white/8 flex items-center justify-between hover:border-[#FF6A00]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#FF6A00]">{item.step}</span>
                      <div>
                        <div className="text-xs font-medium text-white">{item.title}</div>
                        <div className="text-[10px] font-mono text-[#707070]">{item.desc}</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#A1A1A1]">
                      {item.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Floating Telemetry Badge */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10 pointer-events-auto">
          <div className="p-3.5 rounded-2xl bg-[#0D0D0D]/90 backdrop-blur-md border border-white/10 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[#A1A1A1] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>ACTIVE PIPELINE METRICS</span>
              </span>
              <button
                type="button"
                onClick={triggerActivation}
                className="text-[10px] font-mono text-[#FF8A2A] hover:text-white px-2 py-0.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 transition-all flex items-center gap-1 active:scale-95"
              >
                <Zap className="w-2.5 h-2.5" />
                <span>Stimulate</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-white/5">
              <div>
                <span className="text-[9px] font-mono text-[#707070] block">THROUGHPUT</span>
                <span className="text-xs font-mono font-bold text-white">84.2 tok/s</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#707070] block">LATENCY</span>
                <span className="text-xs font-mono font-bold text-[#FF8A2A]">22.4 ms</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#707070] block">ACCURACY</span>
                <span className="text-xs font-mono font-bold text-white">99.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal / Code snippet stamp */}
        <div className="hidden sm:block absolute top-4 right-4 z-10 pointer-events-none">
          <div className="px-3 py-2 rounded-xl bg-[#0E0E0E]/80 backdrop-blur-md border border-white/8 text-[11px] font-mono text-[#707070]">
            <span className="text-[#FF6A00]">def</span> <span className="text-white">agent_loop</span>(state: AgentState):
            <div className="text-[10px] pl-3 text-[#A1A1A1]">return tool.execute(state.plan)</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 p-3 sm:px-5 border-t border-white/8 bg-[#0D0D0D]/70 backdrop-blur-md flex flex-wrap items-center justify-between text-[11px] font-mono text-[#707070] gap-2">
        <div className="flex items-center gap-3">
          <span>● LAYER_DEPTH: 5</span>
          <span className="hidden sm:inline">● LOSS_CONVERGENCE: 0.0031</span>
          <span>● ACTIVATIONS: {pulseCount}</span>
        </div>
        <div className="text-[#A1A1A1]">
          PYTHON &amp; PYTORCH ARCHITECTURE
        </div>
      </div>
    </div>
  );
};
