import React from 'react';
import { ArrowRight, Play, ShieldCheck, CheckCircle2, Workflow } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface PageHomeProps {
  onDiscussWorkflow: () => void;
  onOpenVideoDemo: () => void;
  onOpenSampleDeliverable?: () => void;
}

export const PageHome: React.FC<PageHomeProps> = ({ 
  onDiscussWorkflow, 
  onOpenVideoDemo,
  onOpenSampleDeliverable
}) => {
  return (
    <section 
      id="home" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-18 bg-[#0A1420] text-slate-100 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Headline, Copy, Supporting Statement & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Category Definition Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold text-[#00E5FF] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span>Workflow Systems for Agencies, B2B SaaS & Service Providers</span>
            </div>

            {/* Full Headline with Solid Color Fallback */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              AI-Powered Work Systems <span className="text-[#00E5FF]">for Modern Businesses</span>
            </h1>

            {/* Supporting Copy - Expanded 3+ Sectors */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              WORKCRAFT helps marketing & digital agencies, B2B SaaS, and operational service providers identify workflow bottlenecks, improve repetitive processes and connect tools using AI-assisted automation and human oversight.
            </p>

            {/* Simple Box: We start with the workflow—not the tool */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0D2136] border border-cyan-500/40 shadow-xl">
              <p className="text-base sm:text-lg font-bold text-white tracking-tight">
                We start with the workflow—not the tool.
              </p>
            </div>

            {/* Trust Anchors in One Clean Row with Icons */}
            <div className="pt-1 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 font-medium text-amber-300 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <span>Human-in-the-loop review</span>
              </span>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>No client data model training</span>
              </span>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-slate-300">
                <Workflow className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Integrates with existing software</span>
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Walkthrough Box aligned higher level with AI-Powered Work heading */}
          <div className="lg:col-span-5 w-full lg:pt-7">
            <div className="relative rounded-2xl bg-[#0D2136] border border-cyan-500/40 p-2 sm:p-3 shadow-2xl overflow-hidden">
              <div 
                onClick={onOpenVideoDemo}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenVideoDemo(); }}
                className="relative aspect-video rounded-xl overflow-hidden bg-[#0A1420] border border-slate-800 cursor-pointer flex flex-col items-center justify-center hover:border-cyan-500/60 transition-all p-4 text-center focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
                aria-label="Play Lead to Client Ingestion and Human Oversight Demo"
              >
                {/* Circuit Grid Pattern Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                
                {/* Visual Poster Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-950/90 border-2 border-[#00E5FF] text-[#00E5FF] flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-3 hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF] block">
                    Workflow Walkthrough
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug max-w-xs">
                    Lead → Client Ingestion & Human Oversight Demo
                  </h3>
                </div>
              </div>
            </div>

            {/* Clickable CTA Button directly under Walkthrough Box, spanning equal width */}
            <button
              type="button"
              onClick={onDiscussWorkflow}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              <span>Discuss an Operational Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Sample Deliverable Teaser */}
            {onOpenSampleDeliverable && (
              <div className="mt-2.5 p-3 rounded-xl bg-[#0A1420] border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <span className="text-slate-300 text-[11px]">
                  Want to inspect an illustrative 5-day audit?
                </span>
                <button
                  type="button"
                  onClick={onOpenSampleDeliverable}
                  className="font-bold text-[#00E5FF] hover:underline whitespace-nowrap text-[11px] cursor-pointer"
                >
                  View Sample Blueprint →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
