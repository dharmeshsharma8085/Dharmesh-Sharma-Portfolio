import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Sparkles, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    
    // Prepare mailto link with note content
    const subject = encodeURIComponent(`Collaboration Inquiry from ${senderEmail || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Hi Dharmesh,\n\n${note}\n\nBest regards,\n${senderEmail || 'Visitor'}`);
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Cinematic warm orange atmospheric ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] h-[500px] sm:h-[650px] pointer-events-none rounded-full blur-[180px] opacity-18"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.3) 0%, rgba(255,138,42,0.08) 45%, transparent 75%)'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-[#FF8A2A] uppercase bg-[#111111] border border-white/10 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Large Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-white leading-[1.02]">
          Have an idea? <br />
          <span className="text-[#FF6A00]">
            Let's build it.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#A1A1A1] max-w-2xl mx-auto leading-relaxed font-normal">
          Interested in AI systems, intelligent products, high-throughput pipelines, or challenging engineering collaborations? Let's connect.
        </p>

        {/* Action Buttons: Email Me, LinkedIn, GitHub */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${portfolioConfig.email}`}
            id="contact-btn-email"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_4px_24px_rgba(255,106,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={portfolioConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-btn-linkedin"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#111111] hover:bg-[#181818] text-white border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            <Linkedin className="w-4 h-4 text-[#FF6A00]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-[#707070]" />
          </a>

          <a
            href={portfolioConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-btn-github"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#111111] hover:bg-[#181818] text-white border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            <Github className="w-4 h-4 text-[#FF6A00]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#707070]" />
          </a>
        </div>

        {/* Email Copy Card */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0E0E0E] border border-white/10 shadow-sm text-xs font-mono">
            <span className="text-[#707070]">Direct:</span>
            <span className="text-white font-medium">{portfolioConfig.email}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="p-1 rounded text-[#A1A1A1] hover:text-[#FF6A00] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            {copied && <span className="text-[10px] text-emerald-400 font-semibold">Copied!</span>}
          </div>
        </div>

        {/* Quick Collaboration Note Card */}
        <div className="pt-6 max-w-xl mx-auto text-left">
          <form 
            onSubmit={handleSendMessage}
            className="p-6 sm:p-8 rounded-[32px] bg-[#0E0E0E] border border-white/10 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1]">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Send className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>QUICK COLLABORATION INQUIRY</span>
              </span>
              <span className="text-[10px] text-[#707070]">Direct Dispatch</span>
            </div>

            <input
              type="email"
              placeholder="Your email address (e.g. founder@startup.com)"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#141414] border border-white/8 text-sm text-white placeholder-[#707070] focus:outline-none focus:border-[#FF6A00]/50 transition-colors font-mono"
            />

            <textarea
              rows={3}
              placeholder="Briefly describe what you're building or the AI problem you're tackling..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#141414] border border-white/8 text-sm text-white placeholder-[#707070] focus:outline-none focus:border-[#FF6A00]/50 transition-colors resize-none font-mono"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-mono text-[#707070]">
                Dispatches to {portfolioConfig.email}
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black transition-all flex items-center gap-1.5 active:scale-95"
              >
                <span>Send Note</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
