import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, ArrowRight, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';

interface WorkflowAssistantProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenEmailInquiry: (workflowTopic?: string) => void;
}

interface Message {
  sender: 'assistant' | 'user';
  text: string;
  options?: string[];
  ctaTopic?: string;
}

export const WorkflowAssistant: React.FC<WorkflowAssistantProps> = ({ 
  isOpen: controlledIsOpen,
  onOpenChange,
  onOpenEmailInquiry 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (open: boolean) => {
    setInternalIsOpen(open);
    onOpenChange?.(open);
  };

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-workcraft-assistant', handleOpen);
    return () => window.removeEventListener('open-workcraft-assistant', handleOpen);
  }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: 'Welcome to WORKCRAFT.\nI can help you identify repetitive business tasks and explore where AI-assisted workflows may help.\n\nWhat would you like to explore?',
      options: [
        'Lead handling and follow-up',
        'Client onboarding',
        'Repetitive internal processes',
        'Connecting existing business tools',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSelectOption = (option: string) => {
    // Add user message
    const userMsg: Message = { sender: 'user', text: option };

    let botResponse = '';
    let cta = option;

    switch (option) {
      case 'Lead handling and follow-up':
        botResponse =
          'For lead handling, Workcraft automates inbound lead scoring from form fills or emails, enriches contact details with external data, and synchronizes status with your CRM—triggering timely, personalized follow-ups without manual copy-pasting.';
        break;
      case 'Client onboarding':
        botResponse =
          'For client onboarding, our autonomous systems automatically generate customized welcome packages, trigger document signing requests, provision project management spaces, and keep account managers notified at each milestone.';
        break;
      case 'Repetitive internal processes':
        botResponse =
          'For internal operations (like invoice reconciliation, contract drafting, or weekly reporting), we build structured multi-step agent graphs that process files, run schema validation, and route exceptions to human supervisors.';
        break;
      case 'Connecting existing business tools':
        botResponse =
          'We bridge your current tools (CRM, ERP, Google Workspace, Slack, SQL databases) using secure API webhooks so data flows automatically without replacing the platforms your team already trusts.';
        break;
      default:
        botResponse =
          'Thank you. We examine your actual process flow first, then implement automation where it reliably eliminates manual friction.';
    }

    const assistantMsg: Message = {
      sender: 'assistant',
      text: `${botResponse}\n\nWould you like our engineering team to review your specific workflow via email?`,
      ctaTopic: cta,
      options: ['Submit workflow for email review', 'Ask about another area'],
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const userMsg: Message = { sender: 'user', text: userText };
    const assistantMsg: Message = {
      sender: 'assistant',
      text: `Thank you for sharing: "${userText}". Our founder, Farhan Abid, and the technical team evaluate each operational friction point individually. Would you like to submit your workflow details for a direct email assessment?`,
      ctaTopic: userText,
      options: ['Submit workflow for email review', 'Explore another workflow'],
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
  };

  return (
    <div className="fixed bottom-24 md:bottom-20 right-4 md:right-6 z-40 select-none">
      {/* Closed State Floating Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 md:gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-full bg-[#0A1420] md:bg[#0A1420]/90 md:backdrop-blur-md border border-[#00E5FF] md:border-[#00E5FF] shadow-none md:shadow-[0_0_20px-rgba(0,229,255,0.4)] hover:border-[#00E5FF] md:hover:border-[#00E5FF] transition-all duration-200"
        >
          <div className="relative">
            <Bot className="w-4 h-4 md:w-5 md:h-5 text-[#00E5FF]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span className="text-[11px] md:text-xs font-bold font-mono tracking-wide text-white">
            WORKCRAFT Assistant
          </span>
        </button>
      )}

      {/* Opened Assistant Modal Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] max-h-[580px] rounded-2xl bg-[#0D2136] border border-cyan-500/50 shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-[#0A1420] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  WORKCRAFT Assistant
                </h4>
                <div className="text-[10px] text-cyan-300 font-mono">
                  Workflow Discovery Concept · Proposed
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Assistant Sub-banner */}
          <div className="px-4 py-1.5 bg-cyan-950/40 border-b border-cyan-900/40 flex items-center gap-1.5 text-[10px] text-slate-300">
            <ShieldAlert className="w-3 h-3 text-[#00E5FF] shrink-0" />
            <span>Illustrative interface only; no live AI connection is claimed.</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs text-slate-200">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[90%] whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#00E5FF] text-[#0A1420] font-medium'
                      : 'bg-[#0A1420] border border-slate-700/80 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons */}
                {msg.options && (
                  <div className="mt-2.5 space-y-1.5 w-full">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          if (opt === 'Submit workflow for email review') {
                            setIsOpen(false);
                            onOpenEmailInquiry(msg.ctaTopic || 'General Workflow Inquiry');
                          } else if (opt === 'Ask about another area' || opt === 'Explore another workflow') {
                            handleSelectOption('Connecting existing business tools');
                          } else {
                            handleSelectOption(opt);
                          }
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-[#0A1420]/80 border border-slate-800 hover:border-[#00E5FF] text-xs text-slate-300 hover:text-[#00E5FF] transition-colors flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleCustomSend}
            className="p-3 bg-[#0A1420] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about a workflow or friction point..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#0D2136] border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#00E5FF] text-[#0A1420] hover:bg-[#4DE8FF] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
