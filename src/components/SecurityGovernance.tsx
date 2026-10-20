import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Server,
  FileCode,
  AlertCircle
} from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface SecurityGovernanceProps {
  onOpenBoundaryInquiry?: (context?: string) => void;
}

export const SecurityGovernance: React.FC<SecurityGovernanceProps> = ({ 
  onOpenBoundaryInquiry 
}) => {

  return (
    <section 
      id="security-governance" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-10 sm:py-14 bg-[#08111D] border-t border-slate-800 text-slate-100 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Responsible Automation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Trust, Governance & Human Oversight
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Responsible automation begins with clear boundaries. We address accountability, data privacy, and operational integrity upfront before deployment.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* THREE COMPACT PRINCIPLES                                      */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-7 sm:mt-9 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          
          {/* Principle 1: Human Accountability */}
          <div className="rounded-2xl bg-[#151206] border-2 border-[#fbbf24] shadow-md shadow-amber-500/20 p-5 sm:p-6 flex flex-col justify-between hover:border-amber-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-950/90 border border-[#fbbf24] text-[#fbbf24] flex items-center justify-center mb-4 shadow-sm shadow-amber-500/20">
                <UserCheck className="w-5 h-5" />
              </div>

              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#fbbf24] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                <span>Principle 01 · Oversight</span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#fbbf24] mt-1">
                Human Accountability
              </h3>

              <p className="mt-2 text-xs text-amber-100/90 leading-relaxed">
                Important decisions have clear ownership and mandatory human review. Automation supports the process rather than removing accountability.
              </p>

              <div className="mt-4 pt-3 border-t border-amber-500/30 space-y-1.5 text-xs text-amber-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fbbf24] shrink-0 mt-0.5" />
                  <span>Mandatory review gates for external client touchpoints</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fbbf24] shrink-0 mt-0.5" />
                  <span>Zero blind dispatch on proposals or commercial terms</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-500/30 text-[10px] font-mono text-amber-400 font-bold">
              Policy: Zero blind dispatch
            </div>
          </div>

          {/* Principle 2: Thoughtful Data Handling */}
          <div className="rounded-2xl bg-[#0D2136] border border-cyan-500/40 p-5 sm:p-6 shadow-xl flex flex-col justify-between hover:border-cyan-400 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>

              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
                Principle 02 · Boundaries
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Thoughtful Data Handling
              </h3>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Data access, handling requirements and relevant restrictions are agreed upfront. Client data is not used to train AI models.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Access restricted strictly to fields necessary for the task</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Data handling and retention settings are agreed per engagement</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-cyan-300">
              Agreed per engagement
            </div>
          </div>

          {/* Principle 3: Clear Documentation */}
          <div className="rounded-2xl bg-[#0D2136] border border-slate-800 p-5 sm:p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0A1420] border border-slate-700 text-slate-200 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#00E5FF]" />
              </div>

              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Principle 03 · Sovereignty
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Clear Documentation & Handover
              </h3>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Workflow behavior, responsibilities, exceptions and relevant implementation decisions are documented within the agreed scope.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Transparent process flow documentation & operational SOPs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Documented exception fallback procedures & full sovereignty</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Clear team handoff
            </div>
          </div>

        </div>

        {/* Streamlined Governance Inquiry Prompt */}
        {onOpenBoundaryInquiry && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0D2136] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="text-sm font-bold text-white">
                Have specific data or access requirements?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Data handling, access boundaries and approval rules are scoped during the audit.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBoundaryInquiry('Data Boundaries & Governance Review')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] transition-all cursor-pointer whitespace-nowrap shadow-md shrink-0"
            >
              <span>Discuss Governance Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
