import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  UserCheck,
  ArrowRight,
  ArrowLeft,
  FileCode,
  Terminal,
  Server,
  Layers,
  Workflow
} from 'lucide-react';
import { FOUNDER_QUOTE, FOUNDER_BIO, FOUNDER_PORTRAIT } from '../data';
import { CircuitBackground } from './CircuitBackground';

interface PageAboutTrustProps {
  onOpenBooking: () => void;
  onReturnToHome?: () => void;
  isStandalonePage?: boolean;
}

export const PageAboutTrust: React.FC<PageAboutTrustProps> = ({ 
  onOpenBooking,
  onReturnToHome,
  isStandalonePage = false 
}) => {
  const [bioExpanded, setBioExpanded] = useState(true);

  return (
    <section 
      id="about" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-10 sm:py-14 bg-[#0A1420] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile-only Back to Full Overview */}
        {isStandalonePage && onReturnToHome && (
          <div className="mb-4 sm:hidden">
            <button
              type="button"
              onClick={onReturnToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-xs font-bold text-[#00E5FF] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Overview</span>
            </button>
          </div>
        )}

        {/* 1. MISSION & WORKFLOW-FIRST PHILOSOPHY */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>About Workcraft · Philosophy & Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Workflow-First Systems. <span className="text-[#00E5FF]">Human Accountability.</span>
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            WORKCRAFT was founded on a simple observation: most operational bottlenecks aren't solved by adding another AI subscription. They are solved by structuring the workflow, establishing clear decision rights, and automating only where it delivers measurable reliability.
          </p>
        </div>

        {/* 2. FOUNDER IDENTITY & COMPLETE BIOGRAPHY */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Portrait, Credentials & Philosophy */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-5 sm:p-7 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col items-center text-center gap-3">
                <img
                  src={FOUNDER_PORTRAIT}
                  alt="Farhan Abid - Founder, WorkCraft"
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl border-2 border-cyan-500/40 shrink-0 mx-auto"
                />
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Farhan Abid
                  </h2>
                  <p className="text-sm font-semibold text-cyan-300 mt-1">
                    Founder, WorkCraft
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 rounded-xl bg-[#0A1420] border border-cyan-500/20 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "{FOUNDER_QUOTE}"
              </div>

              {/* Full Biography */}
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-3 pt-2">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Founder Background & Methodology:
                </h3>
                <p>{FOUNDER_BIO}</p>
                <p className="pt-1 text-slate-300 leading-relaxed">
                  Every automation and integration is architected and stress-tested directly with production-level reliability in mind. Farhan works directly alongside your operators to eliminate system bottlenecks, ensuring your team retains full sovereign ownership, transparency, and operational clarity across every stage.
                </p>
                <p className="pt-1 text-slate-300 leading-relaxed">
                  Our engagements operate with direct engineering accountability: no outsourced junior developers, no handoff runaround, and no opaque black-box tools. We establish transparent milestones so your team maintains clear understanding and full operational control.
                </p>
              </div>
            </div>

            {/* Core Architectural Commitments */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs mt-4">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Deterministic Node.js & LangGraph state machines</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Workflow documentation and configuration handover as agreed in scope</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Strict shadow-mode validation alongside your team before production cutover</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Direct senior engineering ownership from initial discovery to deployment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Clear system boundaries with no unexpected runtime lock-in</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Operating Principles + Governance Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 3. HOW WORKCRAFT APPROACHES BUSINESS PROBLEMS */}
            <div className="rounded-2xl bg-[#0D2136] border border-slate-800 p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#00E5FF]" />
                <span>How WORKCRAFT Solves Operational Problems</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe that applying technology to a broken process merely creates faster errors. Our four operating principles ensure every engagement produces resilient business value:
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0A1420] border border-slate-800">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">1. Workflow before software</strong>
                      <span className="text-slate-300 mt-0.5 block leading-relaxed">
                        Understand and document the real human process before selecting or connecting any tools.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151206] border-2 border-[#fbbf24] shadow-md shadow-amber-500/20">
                  <div className="flex items-start gap-2.5">
                    <UserCheck className="w-4 h-4 text-[#fbbf24] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fbbf24] block text-sm font-bold">2. Human decision rights</strong>
                      <span className="text-amber-100/90 mt-0.5 block leading-relaxed">
                        Preserve human oversight where judgment, pricing, or client relationships count. Zero blind dispatch.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A1420] border border-slate-800">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">3. Useful over flashy</strong>
                      <span className="text-slate-300 mt-0.5 block leading-relaxed">
                        Build reliable, maintainable systems rather than fragile tech demos that break when APIs update.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A1420] border border-slate-800">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">4. Measure honestly</strong>
                      <span className="text-slate-300 mt-0.5 block leading-relaxed">
                        Agree on real operational baselines first. Evaluate actual results rather than speculative estimates.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. RESPONSIBLE AI, 5. DATA PRIVACY & 6. TESTING STANDARDS */}
            <div className="flex-1 rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
                  <span>Governance, Data Sovereignty & Scope Boundaries</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <p className="leading-relaxed">
                    <strong>Data Access & Minimization:</strong> Client data is processed strictly within private VPC tenants. Data handling and retention settings are agreed per engagement, and systems access only the specific fields necessary for the task.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Client IP & Infrastructure Sovereignty:</strong> Every workflow, database trigger, and API connector is deployed directly within your own cloud accounts or workspace tenants. You maintain complete intellectual property rights, unrestricted code access, and zero platform lock-in.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Testing & Verification:</strong> All automated handoffs are validated in shadow-mode alongside your staff before live deployment. Outputs are benchmarked against historical cases to verify schema accuracy.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Deterministic Fallbacks & Circuit Breakers:</strong> In the event of downstream API outages or unexpected data payloads, automations fail safe into structured human notification queues rather than causing silent data corruption or unverified dispatch.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Ongoing Maintenance:</strong> Operational SOPs are delivered to your team at project completion. Long-term monitoring, model updates, and prompt hardening can be maintained internally and at our site retainer.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Audit Trails & System Logging:</strong> Every automated handoff, payload transformation, and human approval step writes an immutable audit record directly to your cloud storage for verifiable compliance.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Schema Guardrails & Incident Quarantine:</strong> Incoming client payloads are validated against strict type definitions in real time, safely isolating schema anomalies to operator review queues before ingestion.
                  </p>
                </div>
              </div>

              {/* 8. CTA TO START CONVERSATION */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                <span className="text-xs text-slate-400">
                  Ready to assess your agency's operational friction?
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#4DE8FF] text-[#0A1420] font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Discuss an Operational Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default PageAboutTrust;
