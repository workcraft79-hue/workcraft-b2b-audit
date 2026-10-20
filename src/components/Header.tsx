import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

export type PageRoute = 'home' | 'services' | 'about' | 'contact';

interface HeaderProps {
  onOpenGetStarted: () => void;
  activeSection: string;
  currentPage?: PageRoute;
  onNavigatePage?: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenGetStarted, 
  activeSection,
  currentPage = 'home',
  onNavigatePage
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageRoute; anchor: string }[] = [
    { label: 'Home', page: 'home', anchor: '#home' },
    { label: 'Services & Process', page: 'services', anchor: '#services' },
    { label: 'About & Trust', page: 'about', anchor: '#about' },
    { label: 'Contact', page: 'contact', anchor: '#contact' },
  ];

  const handleNavClick = (page: PageRoute, anchor: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (onNavigatePage) {
      if (currentPage !== 'home' && page === 'home') {
        onNavigatePage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (currentPage !== page) {
        onNavigatePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    // If already on the page or on home, scroll to anchor
    const el = document.querySelector(anchor);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{ backgroundColor: '#0A1420' }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 border-b bg-[#0A1420] backdrop-blur-md ${
        scrolled
          ? 'border-cyan-500/30 shadow-lg shadow-black/50'
          : 'border-slate-800 shadow-md shadow-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-3 pr-2 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between min-h-[56px] sm:min-h-[60px]">
        
        {/* Top-left: Brand Logo without subtitle */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick('home', '#home', e)}
          className="hover:opacity-95 transition-opacity shrink-0 mr-2 sm:mr-6 lg:mr-8 flex items-center min-w-0 select-none cursor-pointer"
          aria-label="WORKCRAFT Home"
        >
          <img
            src="/logo-laptop.png"
            alt="WORKCRAFT"
            className="h-[36px] sm:h-[44px] md:h-[48px] lg:h-[54px] w-auto object-contain brightness-105 contrast-105 block"
          />
        </a>

        {/* Center: Clean Nav Links for the 4 Core Pages & Sections */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isPageActive = currentPage === item.page;
            const isAnchorActive = currentPage === 'home' && (
              (item.anchor === '#home' && activeSection === 'home') ||
              (item.anchor === '#services' && (activeSection === 'services' || activeSection === 'process')) ||
              (item.anchor === '#about' && activeSection === 'about') ||
              (item.anchor === '#contact' && activeSection === 'contact')
            );

            return (
              <a
                key={item.label}
                href={item.anchor}
                onClick={(e) => handleNavClick(item.page, item.anchor, e)}
                className={`transition-colors relative py-1 hover:text-[#00E5FF] cursor-pointer ${
                  isPageActive || isAnchorActive ? 'text-[#00E5FF] font-semibold' : ''
                }`}
              >
                {item.label}
                {(isPageActive || isAnchorActive) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00E5FF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Top-right: "Discuss an Operational Workflow" / "Get Started" CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {currentPage !== 'home' && (
            <button
              type="button"
              onClick={() => onNavigatePage && onNavigatePage('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Overview</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 text-xs sm:text-sm font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span>Discuss Workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
          {currentPage !== 'home' && (
            <button
              type="button"
              onClick={() => onNavigatePage && onNavigatePage('home')}
              className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-[#00E5FF] bg-cyan-950/80 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 transition-all cursor-pointer shadow-sm"
              aria-label="Return to Full Overview"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Overview</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenGetStarted}
            className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-all shrink-0 cursor-pointer shadow-md shadow-cyan-500/20"
          >
            Discuss
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="p-1.5 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer shrink-0 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5FF]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{ backgroundColor: '#0A1420' }}
          className="md:hidden bg-[#0A1420] border-b border-cyan-500/30 px-5 py-4 shadow-2xl animate-in slide-in-from-top-2 text-left"
        >
          {currentPage !== 'home' && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage && onNavigatePage('home');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-[#00E5FF] bg-cyan-950/80 border border-cyan-500/40 rounded-xl mb-3 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Full Overview (About Section)</span>
            </button>
          )}

          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.anchor}
                onClick={(e) => handleNavClick(item.page, item.anchor, e)}
                className="py-1 text-slate-200 hover:text-[#00E5FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-bold text-[#0A1420] bg-[#00E5FF] rounded-lg cursor-pointer"
              >
                Discuss an Operational Workflow
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
