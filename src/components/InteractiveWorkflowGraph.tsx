import React, { useState, useRef } from 'react';
import { 
  Inbox, 
  Search, 
  Sparkles, 
  UserCheck, 
  UserPlus, 
  GitMerge, 
  TrendingUp,
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Play,
  Pause,
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

export type StageId = 
  | 'lead_received' 
  | 'info_organized' 
  | 'ai_prep' 
  | 'human_review' 
  | 'client_onboard' 
  | 'tasks_handoff' 
  | 'tracking_improve';

export interface WorkflowStageData {
  id: StageId;
  stepNumber: number;
  label: string;
  stageName: string;
  responsibleEntity: 'Automated Step' | 'AI-Assisted' | 'Human Decision-Maker' | 'System + Human Review' | 'Human Review & Tasks Handoff';
  isHumanGate: boolean;
  system: string;
  actionTaken: string;
  inputs: string[];
  outputs: string[];
  exceptionHandling: string;
  illustrativeFrictionBefore: string;
  governanceNote: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const LEAD_CLIENT_WORKFLOW_STAGES: Record<StageId, WorkflowStageData> = {
  lead_received: {
    id: 'lead_received',
    stepNumber: 1,
    label: 'Lead Received',
    stageName: 'Stage 01: Multi-Channel Ingestion',
    responsibleEntity: 'Automated Step',
    isHumanGate: false,
    system: 'Inbound Webhook Gateway & Mail Parser',
    actionTaken: 'Normalizes inbound project inquiries from web forms, client emails, and partner referrals into a unified schema.',
    inputs: ['Website inquiry form', 'Client emails to a shared inbox', 'RFP attachments', 'Referral partner webhooks'],
    outputs: ['Normalized JSON payload', 'Timestamp & channel metadata', 'Sanitized raw text file'],
    exceptionHandling: 'Incomplete submissions or missing contact emails route directly to an unassigned intake triage queue for staff attention.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Staff manually copying data from emails into spreadsheets.',
    governanceNote: 'Retention settings are agreed per engagement. Payloads are validated against defined schemas.',
    icon: Inbox,
  },
  info_organized: {
    id: 'info_organized',
    stepNumber: 2,
    label: 'Lead Info Organized',
    stageName: 'Stage 02: Context Organization & Check',
    responsibleEntity: 'Automated Step',
    isHumanGate: false,
    system: 'Entity Parser & CRM Lookup',
    actionTaken: 'Validates corporate domains, extracts required project parameters, and checks records to avoid duplicate entries.',
    inputs: ['Normalized JSON payload', 'Sender domain', 'Historical CRM client records', 'Company registry API'],
    outputs: ['Enriched company profile', 'Organization size bracket', 'Project category tags', 'Associated account history'],
    exceptionHandling: 'Ambiguous business entities or non-standard structures flag a review tag for manual clarification.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Account managers manually searching external databases for company context.',
    governanceNote: 'Grounded against available API endpoints. No speculative assumptions or synthetic data.',
    icon: Search,
  },
  ai_prep: {
    id: 'ai_prep',
    stepNumber: 3,
    label: 'AI-Assisted Preparation',
    stageName: 'Stage 03: Discovery Brief Assembly',
    responsibleEntity: 'AI-Assisted',
    isHumanGate: false,
    system: 'Isolated LLM Processing Node',
    actionTaken: 'Synthesizes lead pain points against service capabilities, matches relevant past case studies, and drafts a structured brief.',
    inputs: ['Client stated goals', 'Service capability catalog', 'Relevant past engagement briefs', 'Scope boundaries'],
    outputs: ['Discovery brief draft', 'Proposed inquiry response draft', 'Discovery questions for discussion'],
    exceptionHandling: 'Requests outside defined capability catalog are highlighted with an operational boundary notice.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Staff drafting preliminary discovery briefs and response notes from scratch.',
    governanceNote: 'Draft output is held in a pending state. The system does not dispatch external client messages.',
    icon: Sparkles,
  },
  human_review: {
    id: 'human_review',
    stepNumber: 4,
    label: 'Human Review',
    stageName: 'Stage 04: Accountable Review Gate',
    responsibleEntity: 'Human Decision-Maker',
    isHumanGate: true,
    system: 'Review Console / Team Notification Card',
    actionTaken: 'Account Director or Operations Lead reviews the prepared brief, verifies pricing nuance, adjusts tone, and grants sign-off.',
    inputs: ['Prepared discovery brief', 'Draft correspondence text', 'Entity context & estimated fit score'],
    outputs: ['Director Approval', 'Inline customized scope edits', 'Assigned Lead Consultant'],
    exceptionHandling: 'Policy: Zero blind dispatch. If no reviewer responds within the agreed window, a reminder is sent without bypassing the gate.',
    illustrativeFrictionBefore: 'Illustrative observation: A structured brief allows review in minutes rather than assembling information manually.',
    governanceNote: 'Core Workcraft Principle: Human judgment governs all client-facing touches and scope commitments.',
    icon: UserCheck,
  },
  client_onboard: {
    id: 'client_onboard',
    stepNumber: 5,
    label: 'Client Onboarding',
    stageName: 'Stage 05: Agreement & Portal Provisioning',
    responsibleEntity: 'System + Human Review',
    isHumanGate: false,
    system: 'E-Signature API & CRM Sync',
    actionTaken: 'Dispatches approved proposal agreement, generates secure client folder, and establishes shared operational communication channel.',
    inputs: ['Approved scope document', 'Authorized signatory email', 'Commercial payment terms'],
    outputs: ['Executed agreement package', 'Dedicated client folder', 'Kickoff meeting notice'],
    exceptionHandling: 'Delays trigger scheduled reminders; customized legal terms pause the workflow for director review.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Administrative time spent manually creating folders and sending agreements.',
    governanceNote: 'All commercial terms and pricing structures are locked to approved template boundaries.',
    icon: UserPlus,
  },
  tasks_handoff: {
    id: 'tasks_handoff',
    stepNumber: 6,
    label: 'Tasks & Handoffs',
    stageName: 'Stage 06: Operational Resource Allocation & Human Review',
    responsibleEntity: 'Human Review & Tasks Handoff',
    isHumanGate: true,
    system: 'Project Management Tool Bridge',
    actionTaken: 'Instantiates standard onboarding task templates, links the discovery brief, and coordinates delivery leads with mandatory human sign-off.',
    inputs: ['Executed project agreement', 'Assigned team capacity calendar', 'Agreed milestone timeline'],
    outputs: ['Populated project board with deliverables', 'Assigned team member notifications', 'Internal kickoff brief'],
    exceptionHandling: 'Unavailable team members or capacity limits flag an operational alert directly to the Operations Director.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Manually creating repetitive onboarding tasks across project boards without verified handoff.',
    governanceNote: 'Handoffs follow documented business procedures with explicit human review and individual task ownership.',
    icon: GitMerge,
  },
  tracking_improve: {
    id: 'tracking_improve',
    stepNumber: 7,
    label: 'Tracking & Improvement',
    stageName: 'Stage 07: Status & Quality Review',
    responsibleEntity: 'Automated Step',
    isHumanGate: false,
    system: 'Workflow Status & Feedback Logging',
    actionTaken: 'Monitors milestone adherence, tracks turnaround latency across handoffs, and records exception rates for continuous tuning.',
    inputs: ['Project delivery timestamps', 'Client milestone approvals', 'Operator feedback notes'],
    outputs: ['Workflow status summary', 'Bottleneck detection alert', 'Workflow tuning suggestions'],
    exceptionHandling: 'Milestone delays escalate an alert to the client success manager.',
    illustrativeFrictionBefore: 'Illustrative bottleneck: Weekly manual spreadsheet consolidation across multiple disconnected tools.',
    governanceNote: 'Logs operational timings and status codes without storing sensitive client proprietary deliverables.',
    icon: TrendingUp,
  },
};

const STAGE_KEYS: StageId[] = [
  'lead_received', 
  'info_organized', 
  'ai_prep', 
  'human_review', 
  'client_onboard', 
  'tasks_handoff', 
  'tracking_improve'
];

interface InteractiveWorkflowGraphProps {
  onOpenAssessmentRequest?: (context?: string) => void;
}

export const InteractiveWorkflowGraph: React.FC<InteractiveWorkflowGraphProps> = ({ 
  onOpenAssessmentRequest 
}) => {
  const [selectedStageId, setSelectedStageId] = useState<StageId | null>('lead_received');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedActiveStage, setSimulatedActiveStage] = useState<StageId | null>(null);
  const simulationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeDesktopStage = selectedStageId 
    ? LEAD_CLIENT_WORKFLOW_STAGES[selectedStageId] 
    : LEAD_CLIENT_WORKFLOW_STAGES['lead_received'];

  const stopSimulation = () => {
    if (simulationTimerRef.current) {
      clearInterval(simulationTimerRef.current);
      simulationTimerRef.current = null;
    }
    setIsSimulating(false);
    setSimulatedActiveStage(null);
  };

  const scrollToMobileStage = (stageId: StageId) => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    setTimeout(() => {
      const el = document.getElementById(`interactive-workflow-stage-mobile-${stageId}`);
      if (el) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 64;
        const targetOffset = headerHeight + 12;
        const elRect = el.getBoundingClientRect();
        const targetScrollTop = window.pageYOffset + elRect.top - targetOffset;

        window.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth'
        });
      }
    }, 80);
  };

  const handleRunSimulation = () => {
    if (isSimulating) {
      stopSimulation();
      return;
    }
    setIsSimulating(true);

    let idx = 0;
    // Step immediately to stage 1
    const initialKey = STAGE_KEYS[0];
    setSimulatedActiveStage(initialKey);
    setSelectedStageId(initialKey);
    scrollToMobileStage(initialKey);
    idx = 1;

    simulationTimerRef.current = setInterval(() => {
      if (idx < STAGE_KEYS.length) {
        const stageKey = STAGE_KEYS[idx];
        setSimulatedActiveStage(stageKey);
        setSelectedStageId(stageKey);
        scrollToMobileStage(stageKey);
        idx++;
      } else {
        // Once flow finishes 7 stages, stop simulation and return to stage 1
        stopSimulation();
        setSelectedStageId(STAGE_KEYS[0]);
        scrollToMobileStage(STAGE_KEYS[0]);
      }
    }, 3000);
  };

  const handleStageCardClick = (stageId: StageId, isMobileToggle = false) => {
    stopSimulation();
    if (isMobileToggle) {
      setSelectedStageId((prev) => {
        const next = prev === stageId ? null : stageId;
        if (next) {
          scrollToMobileStage(next);
        }
        return next;
      });
    } else {
      setSelectedStageId(stageId);
    }
  };

  // Clean up interval on unmount
  React.useEffect(() => {
    return () => {
      if (simulationTimerRef.current) {
        clearInterval(simulationTimerRef.current);
      }
    };
  }, []);

  const renderStageInspector = (stage: WorkflowStageData) => {
    return (
      <div className="rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-4 sm:p-5 md:p-6 shadow-2xl relative overflow-hidden text-left animate-in fade-in slide-in-from-top-2 duration-200">
        {/* Active Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3.5 sm:pb-4 border-b border-slate-700/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                stage.isHumanGate
                  ? 'bg-amber-950/80 text-[#fbbf24] border border-amber-500/40'
                  : 'bg-cyan-950/80 text-[#00E5FF] border border-cyan-500/30'
              }`}>
                STAGE 0{stage.stepNumber} · {stage.responsibleEntity}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                System: {stage.system}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2.5">
              <span>{stage.label}</span>
              {stage.isHumanGate && (
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-[#fbbf24] border border-amber-500/40">
                  Mandatory Human Review Gate (Policy: Zero blind dispatch)
                </span>
              )}
            </h3>
          </div>

          {onOpenAssessmentRequest && (
            <button
              type="button"
              onClick={() => onOpenAssessmentRequest(`Inquiry on Stage 0${stage.stepNumber}: ${stage.label}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
            >
              <span>Discuss This Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 4-Column Detail Breakdown: Inputs | Action | Outputs | Exception */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          
          {/* 1. What Enters */}
          <div className="p-4 rounded-xl bg-[#0A1420] border border-slate-800">
            <span className="font-mono text-[#00E5FF] uppercase font-bold text-[10px] block mb-2">
              1. Information Entering Stage
            </span>
            <ul className="space-y-1.5 text-slate-300">
              {stage.inputs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Action Taken */}
          <div className="p-4 rounded-xl bg-[#0A1420] border border-slate-800">
            <span className="font-mono text-[#00E5FF] uppercase font-bold text-[10px] block mb-2">
              2. Action That Takes Place
            </span>
            <p className="text-slate-200 leading-relaxed">
              {stage.actionTaken}
            </p>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-slate-400 text-[11px]">
              {stage.illustrativeFrictionBefore}
            </div>
          </div>

          {/* 3. Output Produced */}
          <div className="p-4 rounded-xl bg-[#0A1420] border border-slate-800">
            <span className="font-mono text-[#00E5FF] uppercase font-bold text-[10px] block mb-2">
              3. Output Produced
            </span>
            <ul className="space-y-1.5 text-slate-300">
              {stage.outputs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00E5FF] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Exception Handling */}
          <div className={`p-4 rounded-xl border ${
            stage.isHumanGate 
              ? 'bg-amber-950/20 border-amber-500/30' 
              : 'bg-[#0A1420] border-slate-800'
          }`}>
            <span className={`font-mono uppercase font-bold text-[10px] block mb-2 ${
              stage.isHumanGate ? 'text-[#fbbf24]' : 'text-amber-400'
            }`}>
              4. Exception & Review Fallback
            </span>
            <p className="text-slate-300 leading-relaxed">
              {stage.exceptionHandling}
            </p>
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <Lock className="w-3 h-3 text-[#00E5FF]" />
              <span>{stage.governanceNote}</span>
            </div>
          </div>

        </div>

        <p className="mt-4 text-[11px] text-slate-400 font-mono text-center">
          All figures and workflow timings are hypothetical examples. A real engagement sets baselines from your actual data.
        </p>

      </div>
    );
  };

  return (
    <section 
      id="workflow-architecture" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-8 sm:py-10 md:py-12 bg-[#0A1420] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Exact Heading "Interactive Lead → Client Workflow" (A1) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
              <span>Lead to Client Delivery</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Interactive Lead → Client Workflow
            </h2>
            
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Demonstrating what workflow-first thinking looks like in practice. Notice the explicit distinction between automated assistance and human decision rights.
            </p>

            {/* Illustrative Demonstration Disclaimer */}
            <div className="mt-2.5 inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0D2136] px-3 py-1 rounded-md border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Illustrative Sample — Demonstrating human review gates & automated handoffs</span>
            </div>
          </div>

          {/* Quick Simulation Trigger — Pause shows only during workflow playing */}
          <div className="shrink-0 flex items-center gap-2.5">
            {isSimulating ? (
              <button
                type="button"
                onClick={stopSimulation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border cursor-pointer bg-amber-950/80 border-[#fbbf24] text-[#fbbf24] shadow-lg shadow-amber-500/20 hover:bg-amber-900/60"
                title="Pause the automated stage progression"
              >
                <Pause className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Pause Auto-Loop</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleRunSimulation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border cursor-pointer bg-[#0D2136] border-cyan-500/40 text-white hover:bg-cyan-950/40 shadow-lg shadow-cyan-500/10"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#00E5FF]" />
                <span>Simulate 7-Stage Flow</span>
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 7-STAGE WORKFLOW CARDS (Laptop: Grid with Inspector Below; Mobile: Inline Slide Under Each Stage) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-8">
          {/* DESKTOP LAYOUT (>= md): 7 Horizontal Cards in a row */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
            {STAGE_KEYS.map((key) => {
              const stage = LEAD_CLIENT_WORKFLOW_STAGES[key];
              const isSelected = selectedStageId === key;
              const isSimActive = simulatedActiveStage === key;
              const IconComponent = stage.icon;

              return (
                <div
                  key={stage.id}
                  id={`workflow-stage-${stage.id}`}
                  onClick={() => handleStageCardClick(stage.id, false)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStageCardClick(stage.id, false); }}
                  className={`p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#00E5FF] ${
                    isSelected
                      ? stage.isHumanGate
                        ? 'bg-[#151206] border-[#fbbf24] shadow-lg shadow-amber-500/20 ring-1 ring-[#fbbf24]'
                        : 'bg-[#0D2136] border-[#00E5FF] shadow-lg shadow-cyan-500/20 ring-1 ring-[#00E5FF]'
                      : stage.isHumanGate
                      ? 'bg-[#0D2136]/90 border-amber-500/30 hover:border-amber-400'
                      : 'bg-[#0D2136]/60 border-slate-800 hover:border-slate-700'
                  } ${isSimActive ? 'scale-105 transition-transform' : ''}`}
                >
                  {/* Top: Step Number & Responsible Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`w-5 h-5 rounded font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                        stage.isHumanGate 
                          ? 'bg-amber-950 text-[#fbbf24] border border-amber-500/40' 
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        0{stage.stepNumber}
                      </span>

                      {/* Responsible Entity Pill */}
                      <span className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded leading-tight ${
                        stage.isHumanGate
                          ? 'bg-amber-500/20 text-[#fbbf24] border border-amber-500/40'
                          : stage.responsibleEntity === 'AI-Assisted'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {stage.isHumanGate ? 'Human Gate' : stage.responsibleEntity}
                      </span>
                    </div>

                    {/* Icon & Label */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        stage.isHumanGate
                          ? 'bg-amber-950/80 text-[#fbbf24] border border-amber-500/40'
                          : isSelected
                          ? 'bg-[#00E5FF]/20 text-[#00E5FF]'
                          : 'bg-[#0A1420] text-slate-400'
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug">
                        {stage.label}
                      </h3>
                    </div>

                    {/* Stage Action Description - Full text retained */}
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {stage.actionTaken}
                    </p>
                  </div>

                  {/* Bottom selection indicator */}
                  <div className="mt-2.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                    <span className={stage.isHumanGate ? 'text-amber-400' : 'text-cyan-400'}>
                      Stage 0{stage.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] text-cyan-300 font-bold">Selected</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE LAYOUT (< md): Vertical stack where active slide renders EXACTLY underneath its stage box! */}
          <div className="md:hidden space-y-3 pt-2">
            {STAGE_KEYS.map((key) => {
              const stage = LEAD_CLIENT_WORKFLOW_STAGES[key];
              const isSelected = selectedStageId === key;
              const isSimActive = simulatedActiveStage === key;
              const IconComponent = stage.icon;

              return (
                <div 
                  key={stage.id} 
                  id={`interactive-workflow-stage-mobile-${stage.id}`}
                  className="space-y-2.5 scroll-mt-20"
                >
                  <div
                    id={`workflow-stage-mobile-${stage.id}`}
                    onClick={() => handleStageCardClick(stage.id, true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStageCardClick(stage.id, true); }}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#00E5FF] ${
                      isSelected
                        ? stage.isHumanGate
                          ? 'bg-[#151206] border-2 border-[#fbbf24] shadow-lg shadow-amber-500/20 ring-1 ring-[#fbbf24]'
                          : 'bg-[#0D2136] border-2 border-[#00E5FF] shadow-lg shadow-cyan-500/20 ring-1 ring-[#00E5FF]'
                        : stage.isHumanGate
                        ? 'bg-[#0D2136]/90 border border-amber-500/30 hover:border-amber-400'
                        : 'bg-[#0D2136]/60 border border-slate-800 hover:border-slate-700'
                    } ${isSimActive ? 'scale-[1.02] transition-transform' : ''}`}
                  >
                    {/* Top: Step Number & Responsible Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                          stage.isHumanGate 
                            ? 'bg-amber-950 text-[#fbbf24] border border-amber-500/40' 
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          0{stage.stepNumber}
                        </span>

                        {/* Responsible Entity Pill */}
                        <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded leading-tight ${
                          stage.isHumanGate
                            ? 'bg-amber-500/20 text-[#fbbf24] border border-amber-500/40'
                            : stage.responsibleEntity === 'AI-Assisted'
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {stage.isHumanGate ? 'Human Gate' : stage.responsibleEntity}
                        </span>
                      </div>

                      {/* Icon & Label */}
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          stage.isHumanGate
                            ? 'bg-amber-950/80 text-[#fbbf24] border border-amber-500/40'
                            : isSelected
                            ? 'bg-[#00E5FF]/20 text-[#00E5FF]'
                            : 'bg-[#0A1420] text-slate-400'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          {stage.label}
                        </h3>
                      </div>

                      {/* Stage Action Description */}
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {stage.actionTaken}
                      </p>
                    </div>

                    {/* Bottom selection indicator with toggle chevron */}
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                      <span className={stage.isHumanGate ? 'text-amber-400 font-semibold' : 'text-cyan-400 font-semibold'}>
                        Stage 0{stage.stepNumber} of 7
                      </span>
                      <div className="flex items-center gap-1">
                        {isSelected ? (
                          <span className="flex items-center gap-1 text-[#00E5FF] font-bold">
                            <span>Active Slide</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-slate-400">
                            <span>View Details</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Render slide EXACTLY underneath this stage box for mobile view */}
                  {isSelected && (
                    <div className="pt-1">
                      {renderStageInspector(stage)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP ACTIVE STAGE INSPECTOR CARD (hidden on mobile, shown on md:) */}
        <div className="hidden md:block mt-6">
          {renderStageInspector(activeDesktopStage)}
        </div>

      </div>
    </section>
  );
};
