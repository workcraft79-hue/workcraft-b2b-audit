import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, UserCheck, Cpu, Lock } from 'lucide-react';
import { FOUNDER_PORTRAIT, FOUNDER_INTRO, FOUNDER_BIO, FOUNDER_QUOTE } from '../data';
import { CircuitBackground } from './CircuitBackground';

interface FounderSectionProps {
  onNavigateToAbout?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onNavigateToAbout }) => {
  return (
    <section 
      id="about-preview"
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-10 sm:py-14 bg-[#0A1420] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <div id="about" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32" />
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Leadership & Accountability</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Founder Introduction
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every engagement has direct engineering leadership. Meet the person responsible for WORKCRAFT system design and operational integrity.
          </p>
        </div>

        {/* Expansive Full-Width 2-Column Executive Card */}
        <div className="mt-7 sm:mt-9 w-full rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-stretch">
            
            {/* LEFT COLUMN: Portrait, Name, Title & Exact Quote */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              <div className="flex flex-col items-center text-center gap-3">
                {/* Preserved Portrait - Top Middle */}
                <img
                  src={FOUNDER_PORTRAIT}
                  alt="Farhan Abid - Founder, WORKCRAFT"
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-2xl border-2 border-cyan-500/40 shrink-0 mx-auto"
                />

                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Farhan Abid
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300 mt-1">
                    Founder, WorkCraft
                  </p>
                </div>
              </div>

              {/* Founder Direct Quote */}
              <div className="p-4 rounded-xl bg-[#0A1420] border border-cyan-500/20 text-xs sm:text-sm text-slate-200 italic leading-relaxed text-center sm:text-left">
                "{FOUNDER_QUOTE}"
              </div>

              {/* Navigation to About Page (if provided) */}
              {onNavigateToAbout && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onNavigateToAbout}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#4DE8FF] text-[#0A1420] font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    <span>Read Full Governance & Philosophy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Full Systems Background & Operational Commitments (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-10 space-y-5 text-left">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                  <span>Engineering Philosophy & Background</span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {FOUNDER_INTRO}
                </p>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 whitespace-pre-line">
                  {FOUNDER_BIO}
                </div>
              </div>

              {/* Three Core Leadership Commitments */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#0A1420]/80 border border-slate-800">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00E5FF] block mb-1">
                    01 · Process First
                  </span>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Fix procedural friction before selecting or connecting any AI model.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0A1420]/80 border border-slate-800">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#fbbf24] block mb-1">
                    02 · Human Oversight
                  </span>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Mandatory human approval checkpoints on all client-facing touchpoints.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0A1420]/80 border border-slate-800">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00E5FF] block mb-1">
                    03 · Scope Handover
                  </span>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Complete documentation and configuration handover as agreed in scope.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
