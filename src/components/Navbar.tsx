import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-[28px] sm:rounded-full ${
          isScrolled 
            ? 'bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/12 shadow-2xl shadow-black/90 py-2.5 px-4 sm:px-6' 
            : 'bg-[#0A0A0A]/70 backdrop-blur-xl border border-white/8 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5 group"
            id="nav-brand-link"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-black font-extrabold text-xs shadow-[0_0_15px_rgba(255,106,0,0.3)] group-hover:scale-105 transition-transform duration-200">
              DS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#FF6A00] transition-colors duration-200">
                {portfolioConfig.name}
              </span>
              <span className="text-[10px] text-[#707070] font-mono tracking-wider uppercase hidden sm:inline">
                AI / ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121212]/90 p-1.5 rounded-full border border-white/8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white/12 text-white shadow-xs border border-white/10'
                      : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action / "Let's Talk" */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              id="nav-cta-talk"
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#FF6A00] hover:bg-[#FF8A2A] text-black shadow-[0_0_15px_rgba(255,106,0,0.25)] transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#141414] text-[#A1A1A1] hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/12 text-white font-semibold'
                      : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
