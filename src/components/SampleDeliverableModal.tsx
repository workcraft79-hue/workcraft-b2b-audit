import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Layers, 
  ArrowRight, 
  Copy, 
  Download,
  ExternalLink,
  Lock,
  Workflow
} from 'lucide-react';

interface SampleDeliverableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAudit?: () => void;
}

export const SampleDeliverableModal: React.FC<SampleDeliverableModalProps> = ({
  isOpen,
  onClose,
  onSelectAudit
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'frictionMatrix' | 'implementationPlan'>('architecture');

  // Reset to Tab 1: System Architecture every time the modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab('architecture');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#070E17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase bg-cyan-950/80 text-[#00E5FF] border border-cyan-500/40 rounded font-bold">
                Illustrative Sample — Not a Client Case Study
              </span>
              <span className="text-xs text-slate-400 font-mono">Document Ref: WCR-AUDIT-2026-EX</span>
            </div>
            <h3 className="text-xl font-bold text-white">Workcraft Operational Workflow Audit & System Blueprint</h3>
            <p className="text-xs text-slate-400 mt-1">
              Representative 5-day diagnostic deliverable illustrating workflow mapping, friction analysis, and human-in-the-loop governance. All figures are hypothetical examples. A real engagement sets baselines from your actual data.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors self-end sm:self-auto"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900/20 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-6 py-3.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'architecture'
                ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Workflow size={14} />
            1. System Architecture
          </button>
          <button
            onClick={() => setActiveTab('frictionMatrix')}
            className={`flex items-center gap-2 px-6 py-3.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'frictionMatrix'
                ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers size={14} />
            2. Friction Matrix
          </button>
          <button
            onClick={() => setActiveTab('implementationPlan')}
            className={`flex items-center gap-2 px-6 py-3.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'implementationPlan'
                ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck size={14} />
            3. Governance & Rollout
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Cpu size={16} className="text-[#00E5FF]" />
                  Target State Topology: B2B Pipeline Automation
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Below is the architecture schematic generated during the diagnostic. High-latency manual handover points are replaced with deterministic API micro-triggers and LLM classification gateways.
                </p>

                {/* Architecture Diagram Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[#00E5FF] font-bold block mb-1">Node 01: Inbound Webhook</span>
                    <span className="text-slate-400 block text-[10px]">Sources: Typeform, Partner Mail, HubSpot API</span>
                    <span className="text-slate-500 block text-[9px] mt-2 font-mono">Payload: JSON Schema v2.1</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[#00E5FF] font-bold block mb-1">Node 02: Entity Synthesizer</span>
                    <span className="text-slate-400 block text-[10px]">Private LLM Extractor (Temp: 0.0)</span>
                    <span className="text-slate-500 block text-[9px] mt-2 font-mono">Outputs: Tier, Size, ICP Score</span>
                  </div>

                  {/* Node 03: Human Gateway (Amber Accent) */}
                  <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/40">
                   <span className="text-[#fbbf24] font-bold block mb-1">Node 03: Human Gateway</span>
                    <span className="text-slate-300 block text-[10px]">Slack Interactive Card / 1-Tap AE Signoff</span>
                    <span className="text-amber-400/90 block text-[9px] mt-2 font-mono">Policy: Zero blind dispatch</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[#00E5FF] font-bold block mb-1">Node 04: Downstream Writes</span>
                    <span className="text-slate-400 block text-[10px]">Salesforce API + Personalized Email</span>
                    <span className="text-slate-500 block text-[9px] mt-2 font-mono">Audit: Idempotent Ledger Hash</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-white block mb-1">Orchestration Framework</strong>
                  <span className="text-slate-400">Node.js / TypeScript microservice with LangGraph state machine. Workflow documentation and configuration are handed over as agreed in the engagement scope.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-white block mb-1">Data Sovereignty Standard</strong>
                  <span className="text-slate-400">Isolated VPC tenant. Data handling and retention settings are agreed per engagement. AES-256 encrypted payload cache.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FRICTION MATRIX */}
          {activeTab === 'frictionMatrix' && (
            <div className="space-y-4">
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Identified Bottleneck</th>
                      <th className="p-3">Current Waste</th>
                      <th className="p-3">Automated Resolution</th>
                      <th className="p-3">Projected Recovery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    <tr className="bg-[#0D2136]/50">
                      <td className="p-3 font-medium text-white">Inbound Lead Research & Apollo querying</td>
                      <td className="p-3 font-mono text-[#fb7185] font-semibold">14 hrs / week</td>
                      <td className="p-3">Automated webhook enrichment pipeline</td>
                      <td className="p-3 font-mono text-[#00E5FF] font-bold">12.5 hrs saved</td>
                    </tr>
                    <tr className="bg-[#0D2136]/30">
                      <td className="p-3 font-medium text-white">Proposal Brief Assembly & Scope Compilation</td>
                      <td className="p-3 font-mono text-[#fb7185] font-semibold">18 hrs / week</td>
                      <td className="p-3">Private context-aware drafting agent</td>
                      <td className="p-3 font-mono text-[#00E5FF] font-bold">14.0 hrs saved</td>
                    </tr>
                    <tr className="bg-[#0D2136]/50">
                      <td className="p-3 font-medium text-white">Manual CRM Deal Logging & Handoff Emails</td>
                      <td className="p-3 font-mono text-[#fb7185] font-semibold">9 hrs / week</td>
                      <td className="p-3">1-tap human signoff with bidirectional sync</td>
                      <td className="p-3 font-mono text-[#00E5FF] font-bold">7.5 hrs saved</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="w-full sm:w-auto text-center sm:text-left">
                  <span className="font-bold text-white block">Hypothetical Net Capacity Reclaimed (Illustrative Example, not a WORKCRAFT result):</span>
                  <span className="text-slate-300 block">~34 employee hours / week potentially redirected to client advisory</span>
                </div>
                <div className="text-center sm:text-right shrink-0">
                  <span className="font-mono text-xl font-bold text-[#00E5FF] block">~147 hrs / mo</span>
                  <span className="text-[9px] font-mono text-slate-400">Hypothetical calculation</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GOVERNANCE & IMPLEMENTATION */}
          {activeTab === 'implementationPlan' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#00E5FF]" />
                  Illustrative Phased Rollout & Safety Architecture (Hypothetical example, not a WORKCRAFT result)
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Every deployment follows a strict human-in-the-loop transition phase. AI tools run in shadow mode alongside operators before live routing permissions are granted.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#0A1420] border border-slate-800 flex items-start gap-3">
                  <div className="px-2 py-1 rounded bg-[#0D2136] font-mono text-[#00E5FF] font-bold text-[10px] shrink-0">
                    WEEK 1-2
                  </div>
                  <div>
                    <strong className="text-white block">Decision Tree Engineering & Schema Hardening</strong>
                    <span className="text-slate-400">Build deterministic routing rules, context extractors, and edge-case exception fallback routines.</span>
                  </div>
                </div>

                {/* WEEK 3: Amber Governance Highlight */}
                <div className="p-3 rounded-xl bg-[#0A1420] border border-amber-500/30 flex items-start gap-3">
                  <div className="px-2 py-1 rounded bg-[#78350f]/60 border border-[#f59e0b]/60 font-mono text-[#fbbf24] font-bold text-[10px] shrink-0">
                    WEEK 3
                  </div>
                  <div>
                    <strong className="text-white block">Shadow-Mode Testing & Parallel Run Validation</strong>
                    <span className="text-slate-400">System runs in read-only shadow mode alongside human team. Outputs benchmarked without downstream writes.</span>
                  </div>
                </div>

                {/* WEEK 4: Cyan Rollout Highlight */}
                <div className="p-3 rounded-xl bg-[#0A1420] border border-cyan-500/30 flex items-start gap-3">
                  <div className="px-2 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 font-mono text-[#00E5FF] font-bold text-[10px] shrink-0">
                    WEEK 4
                  </div>
                  <div>
                    <strong className="text-white block">Production Cutover, Human Review Enablement & Scope Handover</strong>
                    <span className="text-slate-400">Activate live human-review checkpoint, deliver team training workshops, and hand over workflow documentation and configuration as agreed in engagement scope.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 text-center sm:text-left">
            <Lock size={14} className="text-[#00E5FF] shrink-0" />
            <span>Client names & API keys sanitized for sample demonstration</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-medium text-center"
            >
              Close
            </button>
            {onSelectAudit && (
              <button
                onClick={() => {
                  onClose();
                  onSelectAudit();
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#00E5FF] hover:bg-[#00b8cc] text-slate-950 font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#00E5FF]/10 whitespace-nowrap"
              >
                Request Audit for Your Team
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};