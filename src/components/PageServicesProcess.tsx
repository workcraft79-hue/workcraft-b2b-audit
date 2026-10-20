import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Cpu, 
  Workflow, 
  GraduationCap, 
  GitMerge, 
  ShieldCheck, 
  Play,
  Pause,
  Search,
  UserCheck,
  TrendingUp,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { SERVICES_LIST, METHOD_STAGES, MethodStage } from '../data';
import { ServiceItem } from '../types';
import { CircuitBackground } from './CircuitBackground';

interface PageServicesProcessProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenVideoDemo: () => void;
  isStandalonePage?: boolean;
}

export const PageServicesProcess: React.FC<PageServicesProcessProps> = ({
  onSelectService,
  onOpenBooking,
  onOpenVideoDemo,
  isStandalonePage = false,
}) => {
  // Service Card expansion state (accessible disclosure pattern, one active at a time or toggle)
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Method sequence playback and selection state
  const [activeMethodStep, setActiveMethodStep] = useState<number>(1);
  const [isPlayingSequence, setIsPlayingSequence] = useState<boolean>(false);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) clearInterval(sequenceTimerRef.current);
    };
  }, []);

  const stopSequencePlay = () => {
    if (sequenceTimerRef.current) {
      clearInterval(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    setIsPlayingSequence(false);
  };

  const scrollToMobileStep = (stepNumber: number) => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    setTimeout(() => {
      const el = document.getElementById(`method-stage-mobile-step-${stepNumber}`);
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

  const toggleSequencePlay = () => {
    if (isPlayingSequence) {
      stopSequencePlay();
      return;
    }
    setIsPlayingSequence(true);
    setActiveMethodStep(1);
    scrollToMobileStep(1);
    let currentStep = 1;

    sequenceTimerRef.current = setInterval(() => {
      if (currentStep < 7) {
        currentStep++;
        setActiveMethodStep(currentStep);
        scrollToMobileStep(currentStep);
      } else {
        stopSequencePlay();
        setActiveMethodStep(1);
        scrollToMobileStep(1);
      }
    }, 3000);
  };

  const getMethodIcon = (step: number) => {
    switch (step) {
      case 1: return Search;
      case 2: return Layers;
      case 3: return Workflow;
      case 4: return GitMerge;
      case 5: return UserCheck;
      case 6: return TrendingUp;
      case 7: return ShieldCheck;
      default: return Workflow;
    }
  };

  const toggleService = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'workflow-assessment':
        return <Layers className="w-5 h-5 text-[#00E5FF]" />;
      case 'custom-ai-agents':
        return <Cpu className="w-5 h-5 text-[#00E5FF]" />;
      case 'b2b-process-automation':
        return <Workflow className="w-5 h-5 text-[#00E5FF]" />;
      case 'integration-connectivity':
        return <GitMerge className="w-5 h-5 text-[#00E5FF]" />;
      case 'ai-training-enablement':
        return <GraduationCap className="w-5 h-5 text-[#00E5FF]" />;
      case 'continuous-optimization':
        return <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />;
      default:
        return <Layers className="w-5 h-5 text-[#00E5FF]" />;
    }
  };

  return (
    <div className="bg-[#0A1420] text-slate-100 border-t border-slate-800 relative">
      
      {/* ========================================================================= */}
      {/* 1. SERVICES SECTION (6 Commercial Categories with Touch Disclosure)       */}
      {/* ========================================================================= */}
      <section 
        id="services" 
        className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <CircuitBackground />

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Services & Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Six Core Services for Workflow Improvement
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            We focus on understanding your operational workflow before configuring technology. Each category addresses a concrete operational requirement within an agreed engagement scope.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer text-left ${
                  isExpanded
                    ? 'bg-[#0D2136] border-[#00E5FF] shadow-xl shadow-cyan-500/10'
                    : 'bg-[#0D2136]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0D2136]'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1420] border border-cyan-500/30 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-bold">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Concise Explanation */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Subtle Interaction Cue */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-300 font-medium">
                    <span>{isExpanded ? 'Hide Details' : 'Tap to expand specifications'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>

                  {/* Expanded Scope & Deliverables */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-700/60 space-y-3.5 text-xs animate-in fade-in duration-200">
                      <div>
                        <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                          Problem Addressed:
                        </strong>
                        <p className="text-slate-300 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      <div>
                        <strong className="text-white block font-mono text-[11px] uppercase mb-1.5">
                          What We Examine & Deliver:
                        </strong>
                        <div className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                        <strong>Scope Note:</strong> Specific implementation activities are tailored per engagement.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Action below services */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onOpenBooking('General Services Inquiry')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#4DE8FF] text-[#0A1420] font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            <span>Discuss Service Scope for Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEVEN-STAGE METHOD (FIND → LOCATE → OPTIMIZE → WIRE → VERIFY → MEASURE) */}
      {/* ========================================================================= */}
      <section 
        id="process" 
        className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-8 sm:py-10 bg-[#0D2136] border-t border-slate-800 relative overflow-hidden"
      >
        <CircuitBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                <span>The Seven-Stage Method</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
                How Workcraft Works: The 7-Stage Sequence
              </h2>
              
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                A structured execution methodology designed to ensure operational clarity, thorough validation, and minimal disruption to active client delivery.
              </p>
            </div>

            {/* Action buttons: Flow trigger + Video walkthrough */}
            <div className="shrink-0 flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleSequencePlay}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isPlayingSequence
                    ? 'bg-amber-950/80 border-[#fbbf24] text-[#fbbf24] shadow-lg shadow-amber-500/20'
                    : 'bg-[#0A1420] border-cyan-500/40 text-white hover:bg-cyan-950/40 shadow-md'
                }`}
                title={isPlayingSequence ? 'Pause automated sequence playback' : 'Play automated progression through all 7 stages'}
              >
                {isPlayingSequence ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#fbbf24]" />
                    <span>Pause Flow</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#00E5FF] fill-current" />
                    <span>Auto-Play Flow</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenVideoDemo}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0A1420] border border-cyan-500/40 text-white font-bold text-xs sm:text-sm transition-all hover:bg-cyan-950/40 shadow-md cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#00E5FF] fill-current" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Helper function to render active slide with amber highlighting for Step 3 & 5 */}
          {(() => {
            const renderStageSlide = (stage: MethodStage) => {
              const isHumanReview = stage.step === 3;
              const isHumanGate = stage.step === 5;
              const isHumanStage = isHumanReview || isHumanGate;

              return (
                <div className={`mt-3 p-3.5 sm:p-5 rounded-2xl text-xs sm:text-sm shadow-xl transition-all ${
                  isHumanStage
                    ? 'bg-[#151206]/95 border-2 border-[#fbbf24] shadow-amber-500/20'
                    : 'bg-[#0A1420] border border-cyan-500/30'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-mono font-bold text-xs ${
                        isHumanStage
                          ? 'bg-[#fbbf24] text-[#0A1420]'
                          : 'bg-cyan-950/80 border border-cyan-500/30 text-[#00E5FF]'
                      }`}>
                        PHASE 0{stage.step}: {stage.code}
                      </span>
                      {isHumanReview && (
                        <span className="px-2 py-0.5 rounded bg-amber-950/90 border border-[#fbbf24] text-[#fbbf24] font-mono font-bold text-[11px] flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-[#fbbf24]" />
                          <span>Human Review Point</span>
                        </span>
                      )}
                      {isHumanGate && (
                        <span className="px-2 py-0.5 rounded bg-amber-950/90 border border-[#fbbf24] text-[#fbbf24] font-mono font-bold text-[11px] flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-[#fbbf24]" />
                          <span>Human Gate Checkpoint</span>
                        </span>
                      )}
                      <h3 className={`text-base sm:text-lg font-bold ${isHumanStage ? 'text-amber-200' : 'text-white'}`}>
                        {stage.name}
                      </h3>
                    </div>
                    <span className={`font-mono text-xs ${isHumanStage ? 'text-amber-300 font-semibold' : 'text-slate-400'}`}>
                      {stage.definition}
                    </span>
                  </div>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {stage.details}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
                      Key Outputs & Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stage.outputs.map((out, idx) => {
                        const isHumanOutput = out.toLowerCase().includes('human') || out.toLowerCase().includes('gate');
                        return (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                              isHumanOutput
                                ? 'bg-[#151206] border-2 border-[#fbbf24] text-[#fbbf24] font-bold shadow-sm shadow-amber-500/20'
                                : 'bg-[#0D2136] border border-slate-800 text-cyan-200'
                            }`}
                          >
                            {isHumanOutput ? (
                              <UserCheck className="w-3 h-3 text-[#fbbf24] shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-3 h-3 text-[#00E5FF] shrink-0" />
                            )}
                            <span>{out}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            };

            const currentStage = METHOD_STAGES.find((s) => s.step === activeMethodStep) || METHOD_STAGES[0];

            return (
              <>
                {/* 7-Stage Method Cards Container */}
                <div className="mt-6">
                  {/* DESKTOP LAYOUT (md: and above): Horizontal 7-column grid */}
                  <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    {METHOD_STAGES.map((stage) => {
                      const isActive = activeMethodStep === stage.step;
                      const isHumanReview = stage.step === 3;
                      const isHumanGate = stage.step === 5;
                      const isHumanStage = isHumanReview || isHumanGate;
                      const IconComponent = getMethodIcon(stage.step);

                      return (
                        <div
                          key={stage.step}
                          onClick={() => {
                            if (isPlayingSequence) stopSequencePlay();
                            setActiveMethodStep(stage.step);
                          }}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isActive
                              ? isHumanStage
                                ? 'bg-[#151206] border-2 border-[#fbbf24] shadow-lg shadow-amber-500/20 ring-1 ring-[#fbbf24]'
                                : 'bg-[#0A1420] border-2 border-[#00E5FF] shadow-lg shadow-cyan-500/20 ring-1 ring-[#00E5FF]'
                              : isHumanStage
                              ? 'bg-[#151206]/40 border-amber-500/40 hover:border-[#fbbf24]'
                              : 'bg-[#0A1420]/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs font-mono mb-2">
                              <span className={`px-1.5 py-0.5 rounded font-bold flex items-center gap-1 ${
                                isActive
                                  ? isHumanStage
                                    ? 'bg-[#fbbf24] text-[#0A1420]'
                                    : 'bg-[#00E5FF] text-[#0A1420]'
                                  : isHumanStage
                                  ? 'bg-amber-950 text-[#fbbf24] border border-amber-500/30'
                                  : 'bg-slate-800 text-slate-400'
                              }`}>
                                <IconComponent className="w-3 h-3" />
                                <span>0{stage.step}</span>
                              </span>
                              <span className={`font-bold ${isHumanStage ? 'text-[#fbbf24]' : 'text-[#00E5FF]'}`}>
                                {stage.code}
                              </span>
                            </div>
                            <h4 className={`text-xs sm:text-sm font-bold leading-tight ${isHumanStage ? 'text-amber-200' : 'text-white'}`}>
                              {stage.name}
                            </h4>
                            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                              {stage.definition}
                            </p>
                          </div>

                          <div className={`mt-3 pt-2 border-t text-[10px] font-mono ${
                            isHumanStage ? 'border-amber-500/30 text-amber-400' : 'border-slate-800/80 text-cyan-300'
                          }`}>
                            {isHumanReview ? (
                              <span className="flex items-center gap-1 font-bold text-[#fbbf24]">
                                <UserCheck className="w-3 h-3 text-[#fbbf24]" />
                                <span>Human Review Point</span>
                              </span>
                            ) : isHumanGate ? (
                              <span className="flex items-center gap-1 font-bold text-[#fbbf24]">
                                <ShieldCheck className="w-3 h-3 text-[#fbbf24]" />
                                <span>Human Gate Checkpoint</span>
                              </span>
                            ) : (
                              `Step ${stage.step} of 7`
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* MOBILE LAYOUT (< md): Vertical stack where active slide renders EXACTLY underneath its stage box! */}
                  <div className="md:hidden space-y-2">
                    {METHOD_STAGES.map((stage) => {
                      const isActive = activeMethodStep === stage.step;
                      const isHumanReview = stage.step === 3;
                      const isHumanGate = stage.step === 5;
                      const isHumanStage = isHumanReview || isHumanGate;
                      const IconComponent = getMethodIcon(stage.step);

                      return (
                        <div 
                          key={stage.step} 
                          id={`method-stage-mobile-step-${stage.step}`}
                          className="space-y-2 scroll-mt-20"
                        >
                          <div
                            onClick={() => {
                              if (isPlayingSequence) stopSequencePlay();
                              const nextStep = isActive ? 0 : stage.step;
                              setActiveMethodStep(nextStep);
                              if (nextStep > 0) {
                                scrollToMobileStep(nextStep);
                              }
                            }}
                            className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isActive
                                ? isHumanStage
                                  ? 'bg-[#151206] border-2 border-[#fbbf24] shadow-lg shadow-amber-500/20'
                                  : 'bg-[#0A1420] border-2 border-[#00E5FF] shadow-lg shadow-cyan-500/20'
                                : isHumanStage
                                ? 'bg-[#151206]/50 border border-amber-500/40'
                                : 'bg-[#0A1420]/60 border border-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                                isActive
                                  ? isHumanStage ? 'bg-[#fbbf24] text-[#0A1420]' : 'bg-[#00E5FF] text-[#0A1420]'
                                  : isHumanStage ? 'bg-amber-950 text-[#fbbf24] border border-amber-500/40' : 'bg-slate-800 text-slate-400'
                              }`}>
                                0{stage.step}
                              </span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs font-mono font-bold ${isHumanStage ? 'text-[#fbbf24]' : 'text-[#00E5FF]'}`}>
                                    {stage.code}
                                  </span>
                                  {isHumanReview && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950 border border-amber-500/40 text-[#fbbf24] font-semibold flex items-center gap-1">
                                      <UserCheck className="w-2.5 h-2.5" />
                                      <span>Human Review</span>
                                    </span>
                                  )}
                                  {isHumanGate && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950 border border-amber-500/40 text-[#fbbf24] font-semibold flex items-center gap-1">
                                      <ShieldCheck className="w-2.5 h-2.5" />
                                      <span>Human Gate</span>
                                    </span>
                                  )}
                                </div>
                                <h4 className={`text-sm font-bold ${isHumanStage ? 'text-amber-200' : 'text-white'}`}>
                                  {stage.name}
                                </h4>
                              </div>
                            </div>
                            <div className="text-slate-400 shrink-0">
                              {isActive ? <ChevronUp className="w-4 h-4 text-[#00E5FF]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                            </div>
                          </div>

                          {/* Render slide EXACTLY underneath this stage box on mobile */}
                          {isActive && (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-200 pl-1">
                              {renderStageSlide(stage)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* DESKTOP Active Step Details Panel (hidden on mobile, shown on md:) */}
                <div className="hidden md:block">
                  {renderStageSlide(currentStage)}
                </div>
              </>
            );
          })()}

          {/* Unified Methodology Considerations */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs text-left">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A1420] border border-slate-800">
              <strong className="text-white text-sm block mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                Testing & Shadow-Mode Validation (VERIFY)
              </strong>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Before connecting automated writes to live platforms, systems run in read-only shadow mode alongside human operators. Outputs are compared against historical examples during shadow mode, before anything reaches live systems.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A1420] border border-slate-800">
              <strong className="text-white text-sm block mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                Full Documentation & Handover (MAINTAIN)
              </strong>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Technical architecture, prompt schemas, and SOPs are handed over as agreed in the engagement scope. Your organization retains complete sovereignty over all deployed workflows without vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
