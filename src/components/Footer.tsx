import React from 'react';
import { Youtube, Compass, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenFAQ?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenFAQ,
}) => {
  return (
    <footer className="bg-[#060D15] text-slate-400 py-3.5 sm:py-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-3.5 sm:pb-4 border-b border-slate-800/80 items-start">
          {/* Bottom-left: Logo & description (5 cols) */}
          <div className="md:col-span-5 space-y-1.5">
            <div className="mb-1 [--logo-h:36px] sm:[--logo-h:40px] md:[--logo-h:44px]">
              <img
                src="/logo-laptop.png"
                alt="WORKCRAFT"
                className="h-[var(--logo-h)] w-auto object-contain brightness-105 contrast-105 block"
              />
              <span 
                className="block text-[#00E5FF] text-[10px] sm:text-[11px] font-semibold tracking-tight leading-none mt-1 whitespace-nowrap"
                style={{
                  marginLeft: 'calc(var(--logo-h) * 718 / 768)'
                }}
              >
                AI-Powered Work Systems for Modern Businesses
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              Workflow systems for agencies, B2B SaaS and service providers, built with AI-assisted automation and human oversight.
            </p>
          </div>

          {/* Nav Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#home" className="hover:text-[#00E5FF] transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00E5FF] transition-colors">
                  Six Core Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#00E5FF] transition-colors">
                  Seven-Stage Method
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00E5FF] transition-colors">
                  About & Trust
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFAQ ? onOpenFAQ() : document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Channels (4 cols) */}
          <div className="md:col-span-4 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
              Official Channels
            </span>

            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="Workcraft YouTube Channel"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A1420] border border-slate-700 hover:border-[#00E5FF] hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] transition-all hover:-translate-y-0.5"
              >
                <Youtube className="w-5 h-5 text-[#ef4444] hover:text-[#00E5FF]" />
              </a>
              <a
                href={SOCIAL_LINKS.pinterest}
                target="_blank"
                rel="noreferrer"
                aria-label="Workcraft Pinterest"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A1420] border border-slate-700 hover:border-[#00E5FF] hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] transition-all hover:-translate-y-0.5"
              >
                <Compass className="w-5 h-5 text-[#fb7185] hover:text-[#00E5FF]" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Workcraft LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A1420] border border-slate-700 hover:border-[#00E5FF] hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5 text-[#38bdf8] hover:text-[#00E5FF]" />
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-0.5 leading-relaxed max-w-sm">
              Follow our official channels for systems breakdowns, walkthroughs, and operational architectures.
            </p>
          </div>
        </div>

        {/* Bottom row: copyright & legal modal triggers */}
        <div className="pt-2.5 sm:pt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs">
          <p>© 2026 WORKCRAFT. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#00E5FF] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#00E5FF] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
