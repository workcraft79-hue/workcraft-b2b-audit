import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Clock, 
  FileCheck,
  Calculator,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface WorkflowComparisonProps {
  onOpenAssessmentRequest?: (context?: string) => void;
}

export const WorkflowComparison: React.FC<WorkflowComparisonProps> = ({ 
  onOpenAssessmentRequest 
}) => {
  const [showEstimator, setShowEstimator] = useState<boolean>(false);

  // Illustrative operational estimator state
  const [teamMembers, setTeamMembers] = useState<number>(15);
  const [hoursSpentManual, setHoursSpentManual] = useState<number>(8);
  
  // Illustrative estimate calculation with clear assumption transparency
  const estimatedPotentialReduction = 0.5; // illustrative 50% target reduction on repetitive tasks
  const estimatedWeeklyHoursPotential = Math.round(teamMembers * hoursSpentManual * estimatedPotentialReduction);

  return (
    <section 
      id="workflow-comparison" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-10 sm:py-14 bg-[#0A1420] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Operational Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Before → After
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Compare familiar operational friction points with proposed structured improvements. We clarify responsibilities and data handoffs before configuring automation.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2-PANEL COMPARISON: SIDE-BY-SIDE ON DESKTOP, STACKED ON MOBILE  */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-7 sm:mt-9 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch max-w-5xl mx-auto">
          
          {/* PANEL 1: BEFORE — Disconnected Workflow */}
          <div className="rounded-2xl bg-[#0D2136] border border-red-500/30 p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-red-950/80 border border-red-500/40 text-[#f87171] flex items-center justify-center">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#f87171]">
                    BEFORE — Disconnected Workflow
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Typical Friction</span>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-red-950/30 border border-red-500/30 shadow-md">
                <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono uppercase font-bold text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Unmanaged Manual Friction & Handoff Loss</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Fragmented Information & Manual Bottlenecks
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Observed in service agencies operating without standardized workflow routing:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Scattered Ingestion:</strong> Inbound leads fragmented across personal inboxes, documents, chat threads, and web forms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Repeated Manual Re-Entry:</strong> Staff re-type identical contact info and scope notes between spreadsheets and CRM software.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Delayed Follow-Up:</strong> Prospective clients experience delayed response times due to constant team context switching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Unclear Handoffs:</strong> Handoffs stall between sales and delivery with limited operational visibility for leadership.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Zero Audit Trails:</strong> Key changes, scope revisions, and proposal numbers disappear in untracked direct messaging channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
                  <span><strong>Key-Person Bottlenecks:</strong> Procedures break whenever individual key operators take leave, creating emergency backlogs.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              Impact: Frequent operational drag, lost client context, and severe cognitive fatigue on senior operators.
            </div>
          </div>

          {/* PANEL 2: AFTER — Structured Workflow */}
          <div className="rounded-2xl bg-[#0D2136] border border-cyan-500/40 p-5 sm:p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
                    AFTER — Structured Workflow
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300">Proposed Improvement</span>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-[#151206] border-2 border-[#fbbf24] shadow-md shadow-amber-500/20">
                <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono uppercase font-bold text-[#fbbf24]">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
                  <span>Human Gate & Oversight Architecture</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#fbbf24]">
                  Structured Ingestion, Assisted Prep, and Human Review
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Standardized procedures, assisted context assembly, and explicit decision points:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0" />
                  <span><strong>Normalized Schemas:</strong> Inbound information normalizes into structured schemas immediately regardless of channel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0" />
                  <span><strong>Assisted Context Prep:</strong> Repetitive background research and draft briefing notes assemble automatically.</span>
                </li>
                <li className="flex items-start gap-2 p-1.5 rounded-lg bg-[#151206] border border-[#fbbf24] text-amber-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fbbf24] mt-0.5 shrink-0" />
                  <span><strong className="text-[#fbbf24]">Mandatory Human Gate:</strong> Sign-off preserved on pricing and proposals. Zero blind dispatch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0" />
                  <span><strong>Clear Routing & Ownership:</strong> Automated task templates assign responsible staff immediately with end-to-end visibility.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-cyan-300">
              Benefit: Returns valuable hours to client delivery and high-leverage decisions.
            </div>
          </div>

        </div>

        {/* Implementation Principles Bar (Crisp & Scannable) */}
        <div className="mt-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-[#0D2136] border border-slate-800">
            <strong className="text-white text-xs block mb-1">1. Tool Compatibility</strong>
            <span className="text-slate-300 text-[11px] leading-relaxed">Connects to your existing CRM and software APIs without forced tooling migrations.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0D2136] border border-slate-800">
            <strong className="text-white text-xs block mb-1">2. Baseline Measurement</strong>
            <span className="text-slate-300 text-[11px] leading-relaxed">Real operational time logs measured upfront before comparative claims are verified.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#151206] border-2 border-[#fbbf24] shadow-md shadow-amber-500/20 ring-1 ring-[#fbbf24]">
            <strong className="text-[#fbbf24] text-xs block mb-1 font-bold flex items-center justify-between">
              <span>3. Human Review Points</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-amber-500/20 text-[#fbbf24] border border-[#fbbf24]">
                Human Gate
              </span>
            </strong>
            <span className="text-amber-100 text-[11px] leading-relaxed block">
              Approval checkpoints fit into daily routines without creating new friction.
            </span>
          </div>
        </div>

        {/* Capacity Estimator Toggle */}
        <div className="mt-5 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setShowEstimator(!showEstimator)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D2136] border border-cyan-500/40 hover:border-[#00E5FF] text-cyan-200 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
          >
            <Calculator className="w-4 h-4 text-[#00E5FF]" />
            <span>{showEstimator ? 'Hide Capacity Estimator' : 'Illustrative Capacity Estimator'}</span>
            {showEstimator ? <ChevronUp className="w-4 h-4 text-[#00E5FF]" /> : <ChevronDown className="w-4 h-4 text-[#00E5FF]" />}
          </button>

          {/* Illustrative Savings Estimator (Clearly labelled assumptions, NOT a guarantee) */}
          {showEstimator && (
            <div className="mt-6 w-full max-w-4xl rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-7 text-left animate-in fade-in duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-xs font-mono font-bold uppercase text-[#00E5FF]">
                  Illustrative Operational Model — Subject to Scope & Baseline Audit
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Estimate Potential Capacity Reclaimed
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Adjust team variables to explore potential operational hours that could be redirected to client delivery:
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Team Members Involved in Repetitive Handoffs: <strong className="text-white">{teamMembers}</strong>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(Number(e.target.value))}
                    className="w-full accent-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Weekly Hours Spent on Manual Re-Entry / Person: <strong className="text-white">{hoursSpentManual} hrs</strong>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={hoursSpentManual}
                    onChange={(e) => setHoursSpentManual(Number(e.target.value))}
                    className="w-full accent-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#0A1420] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">
                    Model Assumption: ~50% target reduction on rule-based repetitive tasks
                  </span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    Potential Reclaimed Team Capacity:
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#00E5FF] font-mono">
                    ~{estimatedWeeklyHoursPotential} hrs / week
                  </span>
                  <span className="text-[10px] text-amber-400 block font-mono">
                    Estimate, not a guaranteed saving. (Baseline validated during audit)
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
