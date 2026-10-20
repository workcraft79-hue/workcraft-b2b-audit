import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_QUESTIONS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of workflows can WORKCRAFT help improve?',
    answer:
      'WORKCRAFT focuses on repetitive, rule-based business workflows that move information between inboxes, documents, and commercial software. Typical examples include inbound lead qualification, project scoping and discovery brief synthesis, client onboarding document generation, cross-platform CRM synchronization, and operational handoffs between sales and delivery teams.',
  },
  {
    id: 'faq-2',
    question: 'Do we need to replace our existing tools?',
    answer:
      'No. WORKCRAFT is designed around your existing software stack rather than forcing you into a completely new platform. We build API bridges and webhook connectors linking the tools your team already uses—such as HubSpot, Salesforce, Slack, Gmail, Google Workspace, Linear, and Asana. The exact tool connections are determined during the initial workflow assessment.',
  },
  {
    id: 'faq-3',
    question: 'How does human oversight fit into AI-assisted workflows?',
    answer:
      'Human review is preserved at every critical decision boundary. Our architecture enforces a strict "Zero blind dispatch" policy: AI nodes can extract context, organize records, and draft proposals, but client-facing communications, pricing decisions, and contract generation require explicit human verification and one-click sign-off from your team.',
  },
  {
    id: 'faq-4',
    question: 'How do you determine whether automation is appropriate?',
    answer:
      'We start with the workflow, not the technology. Not every business process should be automated—automating an unclear or shifting process only introduces friction. During our diagnostic audit, we evaluate whether a workflow is sufficiently standardized, whether manual time is genuinely wasted, and whether automation will produce measurable operational value before writing any code.',
  },
  {
    id: 'faq-5',
    question: 'How do you approach business data and privacy?',
    answer:
      'Data access, handling and retention settings are agreed per engagement. We operate with strict data minimization: workflows access only the specific fields necessary for the task. Client data is not used to train AI models.',
  },
  {
    id: 'faq-6',
    question: 'What does an initial engagement involve?',
    answer:
      'An initial engagement typically begins with a focused 5-day Workflow Assessment & Diagnostic Audit. We document your current operational procedures, identify manual bottlenecks, evaluate tool compatibility, map a proposed future-state architecture, and establish baseline metrics. You receive a tangible blueprint deliverable outlining exact scope and priorities before committing to full implementation.',
  },
  {
    id: 'faq-7',
    question: 'How do you measure whether a workflow improvement works?',
    answer:
      'Measurement requires establishing real operational baselines before implementation begins. We track actual operational data: turnaround latency from lead receipt to first response, operator review time, and administrative touchpoints eliminated. We evaluate post-deployment performance against those initial baselines rather than relying on speculative estimates.',
  },
];

interface FAQProps {
  onOpenInquiry?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenInquiry }) => {
  // All questions visible, answers collapsed initially
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section 
      id="faq" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-14 sm:py-18 bg-[#0A1420] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Common Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Frequently Asked Questions
          </h2>
          
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            Clear, honest answers about workflow qualification, human oversight, software integrations, and engagement structure.
          </p>
        </div>

        {/* 7 Questions List: All questions visible, answers collapsed initially */}
        <div className="mt-8 sm:mt-10 space-y-3.5">
          {FAQ_QUESTIONS_LIST.map((item, idx) => {
            const isOpen = !!openIds[item.id];

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0D2136] border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                    : 'bg-[#0D2136]/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  id={`faq-header-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#00E5FF] mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isOpen ? 'text-[#00E5FF]' : 'text-slate-100 hover:text-[#00E5FF]'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-[#0A1420] border border-cyan-500/30">
                    <ChevronDown
                      className={`w-4 h-4 text-[#00E5FF] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-header-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-800/80 animate-in fade-in duration-150"
                  >
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0D2136] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#00E5FF] shrink-0" />
            <span>Have a specific operational question about your tech stack?</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#4DE8FF] text-[#0A1420] font-bold transition-all shadow-md cursor-pointer text-center"
              >
                Inquire Directly
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
export default FAQ;
