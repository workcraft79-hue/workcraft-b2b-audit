import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Clock,
  Workflow,
  Calendar,
  Video,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface SampleAuditSectionProps {
  onOpenSampleModal: () => void;
  onDiscussAudit?: () => void;
}

export const SampleAuditSection: React.FC<SampleAuditSectionProps> = ({
  onOpenSampleModal,
  onDiscussAudit
}) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [isSpecimenExpanded, setIsSpecimenExpanded] = useState<boolean>(false);

  const timelineDays = [
    {
      day: 1,
      title: 'Workflow Inventory',
      desc: 'Review the agreed workflow, tools, inputs, outputs, handoffs and any existing documentation.',
      icon: Layers,
    },
    {
      day: 2,
      title: 'Bottleneck & Friction Mapping',
      desc: 'Identify repeated data entry, delays, unclear ownership, avoidable manual steps and failure points; agree what baseline to measure.',
      icon: AlertCircle,
    },
    {
      day: 3,
      title: 'Target Workflow & Human Review',
      desc: 'Map the proposed workflow and where human approval, exception handling and accountability are required.',
      icon: ShieldCheck,
    },
    {
      day: 4,
      title: 'Feasibility & Implementation Roadmap',
      desc: 'Assess integration constraints, automation suitability, dependencies, risks, options and estimated implementation scope.',
      icon: Workflow,
    },
    {
      day: 5,
      title: 'Findings & Blueprint Walkthrough',
      desc: 'Deliver the written audit, annotated system blueprint, proposed measurement plan and a recorded walkthrough; agree whether to build.',
      icon: FileText,
    },
  ];

  const auditDeliverables = [
    'Written diagnostic audit',
    'Annotated system blueprint',
    'Proposed measurement plan',
    'Recorded video walkthrough'
  ];

  return (
    <section 
      id="sample-audit"
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-8 sm:py-10 bg-[#0D2136] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
              <span>5-Day Diagnostic</span>
            </div>
            
            {/* Required Full Heading (A1) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
              The 5-Day Workflow Audit
            </h2>
            
            {/* Required Exact Description (B2) */}
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              A written, asynchronous diagnostic of one agency workflow, delivered as a Workflow Audit & System Blueprint.
            </p>

            {/* Exact Required Disclosures (A3 & B2) */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-200 bg-[#0A1420] px-3.5 py-1.5 rounded-lg border border-cyan-500/40">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                <strong>Illustrative Sample — Not a Client Case Study.</strong>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                All figures are hypothetical examples. A real engagement sets baselines from your actual data.
              </span>
            </div>
          </div>

          {/* Primary Action: View Complete Sample */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSampleModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#4DE8FF] text-[#0A1420] font-bold text-xs sm:text-sm transition-all shadow-xl shadow-cyan-500/20 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              <span>View Sample Workflow Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5-DAY AUDIT TIMELINE (Visible on desktop; vertical list on mobile) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-6 pt-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00E5FF]" />
              Diagnostic Engagement Timeline
            </span>
            <span className="text-[11px] font-mono text-cyan-300">
              Asynchronous Delivery (5 Days)
            </span>
          </div>

          {/* Desktop: 5-Day Horizontal Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-2.5">
            {timelineDays.map((step) => {
              const isDay3 = step.day === 3;
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.day}
                  className={`p-4 rounded-xl transition-all flex flex-col justify-between ${
                    isDay3
                      ? 'bg-[#151206]/90 border border-amber-500/50 shadow-lg shadow-amber-500/15 ring-1 ring-amber-500/30'
                      : 'bg-[#0A1420] border border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs flex items-center gap-1.5 ${
                        isDay3
                          ? 'bg-amber-950/90 border border-amber-500/50 text-[#fbbf24]'
                          : 'bg-cyan-950/80 border border-cyan-500/30 text-[#00E5FF]'
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>Day {step.day}</span>
                      </span>
                      {isDay3 && (
                        <span className="text-[10px] font-mono uppercase font-bold text-[#fbbf24] px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                          Human Gate
                        </span>
                      )}
                    </div>
                    <h3 className={`font-bold text-xs leading-snug ${isDay3 ? 'text-amber-200' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[11px] text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Accessible Compact Vertical List */}
          <div className="md:hidden space-y-2">
            {timelineDays.map((step) => {
              const isOpen = expandedDay === step.day;
              const isDay3 = step.day === 3;
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.day}
                  className={`rounded-xl p-2.5 sm:p-3 transition-all ${
                    isDay3
                      ? 'bg-[#151206]/90 border border-amber-500/50 ring-1 ring-amber-500/30'
                      : 'bg-[#0A1420] border border-slate-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedDay(isOpen ? null : step.day)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 ${
                        isDay3
                          ? 'bg-amber-950/90 border border-amber-500/50 text-[#fbbf24]'
                          : 'bg-cyan-950/80 border border-cyan-500/30 text-[#00E5FF]'
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>Day {step.day}</span>
                      </span>
                      <span className={`font-bold text-xs ${isDay3 ? 'text-amber-200' : 'text-white'}`}>
                        {step.title}
                      </span>
                      {isDay3 && (
                        <span className="text-[9px] font-mono uppercase font-bold text-[#fbbf24] px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                          Human Gate
                        </span>
                      )}
                    </div>
                    {isOpen ? (
                      <ChevronUp className={`w-4 h-4 ${isDay3 ? 'text-[#fbbf24]' : 'text-[#00E5FF]'}`} />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed pl-1 pt-1 border-t border-slate-800/80 animate-in fade-in duration-150">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Deliverables summary strip */}
          <div className="mt-3.5 p-3 rounded-xl bg-[#0A1420] border border-slate-800/90 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <span className="font-mono text-[11px] text-slate-400 uppercase font-bold">
              Deliverables Included:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {auditDeliverables.map((item, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0D2136] border border-slate-800 text-slate-200 text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXPANDABLE WORKFLOW AUDIT & SYSTEM BLUEPRINT SPECIMEN          */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-6 rounded-2xl bg-[#0A1420] border border-cyan-500/30 overflow-hidden shadow-xl">
          {/* Expandable Control Bar */}
          <div className="p-3.5 sm:p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                DOC
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Workflow Audit & System Blueprint Specimen
                  </h3>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#0D2136] border border-slate-800 text-[10px] font-mono text-cyan-300">
                    6-Point Diagnostic
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ref: WCR-AUDIT-2026-EX · Illustrative asynchronous deliverable structure
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSpecimenExpanded(!isSpecimenExpanded)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D2136] hover:bg-cyan-950/60 border border-cyan-500/40 text-[#00E5FF] font-bold text-xs transition-all cursor-pointer whitespace-nowrap shadow-md self-start sm:self-auto"
              aria-expanded={isSpecimenExpanded}
            >
              <span>{isSpecimenExpanded ? 'Collapse Specimen Preview' : 'Preview 6-Point Blueprint Specimen'}</span>
              {isSpecimenExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Collapsible Document Grid Preview */}
          {isSpecimenExpanded && (
            <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-slate-800/80 animate-in fade-in duration-200 text-left">
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                
                {/* 1. Current Workflow Summary & 2. Identified Bottlenecks */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-[#00E5FF] font-mono font-bold text-[11px] uppercase">
                    <Layers className="w-4 h-4" />
                    <span>1. Current Workflow & Bottlenecks</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Inbound requests arrive across partner inboxes and forms. Manual triage causes extended turnaround latency, data re-entry friction, and unassigned ownership gaps.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-[10px] text-red-300 font-mono">
                    Hypothetical example: 32 team hrs/week spent on administrative triage.
                  </div>
                </div>

                {/* 3. Proposed Future Workflow & 4. Automation Opportunities */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-[#00E5FF] font-mono font-bold text-[11px] uppercase">
                    <Workflow className="w-4 h-4" />
                    <span>2. Proposed Target Architecture</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Deterministic webhook ingestion, private LLM context extraction, and automated brief assembly designed to reduce routine triage prior to human signoff.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-[10px] text-cyan-300 font-mono">
                    Opportunity: 1-tap Slack sign-off card for Account Executives.
                  </div>
                </div>

                {/* 5. Tool Connections & 6. Human Review Gates */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-[#fbbf24] font-mono font-bold text-[11px] uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>3. Tool Bridges & Human Gate</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Bridges HubSpot / Salesforce CRM, Slack, and Google Workspace. All client-facing proposals and pricing are locked behind mandatory Account Director review.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-mono">
                    Policy: Zero blind dispatch to prospective clients.
                  </div>
                </div>

                {/* 7. Implementation Priorities */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-slate-300 font-mono font-bold text-[11px] uppercase">
                    <Clock className="w-4 h-4 text-[#00E5FF]" />
                    <span>4. Phased Implementation Timeline</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Structured rollout: W1–2 schema validation; W3 shadow-mode testing alongside operators; W4 cutover & configuration handoff; W5 live monitoring.
                  </p>
                </div>

                {/* 8. Proposed Measurement Plan */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-slate-300 font-mono font-bold text-[11px] uppercase">
                    <TrendingUp className="w-4 h-4 text-[#00E5FF]" />
                    <span>5. Proposed Measurement Plan</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Measure response turnaround delta, operator review time, and schema validation error rates compared to agreed baselines from actual data.
                  </p>
                </div>

                {/* 9. Risks, Dependencies & Assumptions */}
                <div className="p-4 rounded-xl bg-[#0D2136]/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-slate-300 font-mono font-bold text-[11px] uppercase">
                    <AlertCircle className="w-4 h-4 text-[#00E5FF]" />
                    <span>6. Risks & Dependencies</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Requires client API credentials, verified CRM field schemas, and team participation in shadow-mode validation. Workflow documentation and configuration are handed over as agreed in the engagement scope.
                  </p>
                </div>

              </div>

              {/* Bottom Card Action Footer */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-slate-400 text-[11px]">
                  The full deliverable includes node diagrams, schema specifications, and rollout schedules. All figures are hypothetical examples.
                </span>
                <button
                  type="button"
                  onClick={onOpenSampleModal}
                  className="font-bold text-[#00E5FF] hover:underline inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Complete Sample Blueprint Modal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
