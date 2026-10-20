import React, { useState, useRef } from 'react';
import { CheckCircle2, Linkedin, ArrowRight, ShieldCheck, AlertCircle, ExternalLink, Clock, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';
import { WEB3FORMS_CONFIG } from '../config';
import { CircuitBackground } from './CircuitBackground';

interface PageContactProps {
  topic?: string;
  onOpenLinkedInModal?: () => void;
  onOpenSampleDeliverable?: () => void;
}

export const PageContact: React.FC<PageContactProps> = ({
  topic = 'General inquiry',
  onOpenLinkedInModal,
  onOpenSampleDeliverable,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workflowProblem: '',
    recordingLink: '',
    botcheck: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [submissionError, setSubmissionError] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(false);

    if (!formData.name.trim() || !formData.email.trim()) {
      setValidationError('Please provide your name and business email.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setValidationError('Please enter a valid work email address.');
      return;
    }

    const trimmedLink = formData.recordingLink.trim();
    if (trimmedLink && !/^https?:\/\//i.test(trimmedLink)) {
      setValidationError('Please enter a valid link, or leave this blank.');
      return;
    }

    setValidationError('');
    setSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_CONFIG.access_key,
      subject: WEB3FORMS_CONFIG.subject,
      from_name: WEB3FORMS_CONFIG.from_name,
      name: formData.name.trim(),
      email: formData.email.trim(),
      replyto: formData.email.trim(),
      company: formData.company.trim(),
      message: formData.workflowProblem.trim(),
      topic: topic || 'General inquiry',
      recording_link: trimmedLink,
      botcheck: formData.botcheck ? 'true' : '',
    };

    try {
      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success === true) {
        setSubmitted(true);
        setSubmissionError(false);
      } else {
        setSubmissionError(true);
      }
    } catch {
      setSubmissionError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendAMessageClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (nameInputRef.current) {
      nameInputRef.current.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'center',
      });
      nameInputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <section 
      id="contact" 
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 py-14 sm:py-20 bg-[#0D2136] text-slate-100 border-t border-slate-800 relative overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exact Required Text */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
            <span>Start a Conversation</span>
          </div>

          {/* Exact Required Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Let's Identify the Workflow Worth Improving.
          </h2>

          {/* Exact Required Supporting Copy */}
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Tell us where work gets repetitive, disconnected or difficult to manage. We'll start by understanding the workflow—not by assuming you need another tool.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Inquiry Form Card */}
            <div className="rounded-2xl bg-[#0A1420] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Hidden Topic Field */}
                  <input type="hidden" name="topic" value={topic || 'General inquiry'} />

                  {/* Honeypot Spam Trap (Real users never see or interact with this) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                    checked={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  <div>
                    <div className="pb-3 border-b border-slate-800">
                      <h3 className="text-lg font-bold text-white">
                        Submit Operational Workflow Inquiry
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Describe your daily process bottlenecks for a thoughtful, asynchronous review.
                      </p>
                    </div>

                    {validationError && (
                      <div className="mt-3 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-xs text-red-200 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {submissionError && (
                      <div className="mt-3 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          Something went wrong and your message was not sent. Please try again, or{' '}
                          <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#00E5FF] underline hover:text-[#4DE8FF] font-medium"
                          >
                            connect with Farhan on LinkedIn
                          </a>
                          .
                        </div>
                      </div>
                    )}

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Your Name <span className="text-[#00E5FF]">*</span>
                        </label>
                        <input
                          ref={nameInputRef}
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (validationError) setValidationError('');
                          }}
                          placeholder="e.g. Alex Morgan"
                          required
                          className="w-full px-3.5 py-2.5 bg-[#0D2136] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>

                      {/* Business Email Field */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Business Email <span className="text-[#00E5FF]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (validationError) setValidationError('');
                          }}
                          placeholder="alex@company.com"
                          required
                          className="w-full px-3.5 py-2.5 bg-[#0D2136] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div className="mt-4">
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Digital Agency"
                        className="w-full px-3.5 py-2.5 bg-[#0D2136] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>

                    {/* Workflow Problem Description */}
                    <div className="mt-4">
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Workflow Problem or Repetitive Bottleneck <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.workflowProblem}
                        onChange={(e) => setFormData({ ...formData, workflowProblem: e.target.value })}
                        placeholder="Briefly describe what tasks consume team hours, which tools are disconnected, or where handoffs break down..."
                        className="w-full px-3.5 py-2.5 bg-[#0D2136] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] resize-none"
                      />
                    </div>

                    {/* Optional Workflow Overview Link Field */}
                    <div className="mt-4">
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Optional: Workflow Overview Link
                      </label>
                      <input
                        type="url"
                        value={formData.recordingLink}
                        onChange={(e) => {
                          setFormData({ ...formData, recordingLink: e.target.value });
                          if (validationError) setValidationError('');
                        }}
                        placeholder="Paste a link here (optional)"
                        className="w-full px-3.5 py-2.5 bg-[#0D2136] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                      <p className="mt-1.5 text-[11px] text-slate-400 leading-relaxed">
                        Prefer speaking? Share a Loom link or another accessible recording that briefly explains the workflow challenge. Please avoid including passwords, confidential client information, or unrestricted system-access links.
                      </p>
                    </div>

                    {/* Privacy-conscious Guidance */}
                    <div className="mt-4 p-3 rounded-xl bg-[#0D2136]/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-300 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Privacy-Conscious Inquiry Guidance</span>
                      </div>
                      <p>
                        Please do not include passwords, API secret keys, personal identifying data (PII), or confidential client contracts in this initial form.
                      </p>
                    </div>
                  </div>

                  {/* Primary CTA Button & Sub-notes directly below Guidance Box */}
                  <div className="mt-5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                    >
                      <span>{submitting ? 'Sending...' : 'Discuss an Operational Workflow'}</span>
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>

                    <div className="mt-2 space-y-0.5 text-center font-mono text-[11px] text-slate-400">
                      <p>
                        Direct communication with Farhan Abid · Typical response within 1 business day
                      </p>
                      <p>
                        Messages are delivered through a secure form-processing service.
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                /* Submission Success Feedback */
                <div className="py-8 text-center space-y-4 my-auto">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your message has been sent. You will receive a reply by email.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          workflowProblem: '',
                          recordingLink: '',
                          botcheck: false,
                        });
                        setSubmissionError(false);
                        setValidationError('');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT: What Happens Next & Alternative Routes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 text-left text-xs sm:text-sm">
            
            {/* (1) What Happens Next Card */}
            <div className="rounded-2xl bg-[#0A1420] border border-slate-800 p-6 space-y-3.5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00E5FF]" />
                  <span>What Happens After You Inquire:</span>
                </h3>
                <ul className="mt-3 space-y-3 text-slate-300 text-xs">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#0D2136] text-[#00E5FF] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                      01
                    </span>
                    <span><strong>Asynchronous Review:</strong> Farhan Abid, the founder, personally reviews your stated workflow and software stack.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#0D2136] text-[#00E5FF] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                      02
                    </span>
                    <span><strong>Viability Assessment:</strong> We provide an honest written opinion on whether automation is actually appropriate or if manual process cleanup is needed first.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#0D2136] text-[#00E5FF] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                      03
                    </span>
                    <span><strong>Written Scoping:</strong> If mutually aligned, we review your operational context by email or LinkedIn message, with a recorded walkthrough or a short call if you prefer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#0D2136] text-[#00E5FF] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                      04
                    </span>
                    <span><strong>Non-Binding Next Steps:</strong> Exploratory discussions are non-binding. Confidentiality arrangements are agreed before sensitive information is shared. You receive clear diagnostic options, with scope and timelines confirmed in writing.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-800 text-[10px] font-mono text-cyan-300">
                Typical response within 1 business day
              </div>
            </div>

            {/* (2) Other Ways to Connect */}
            <div className="rounded-2xl bg-[#0A1420] border border-slate-800 p-5 space-y-3">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono text-slate-400">
                OTHER WAYS TO CONNECT:
              </h4>

              <div className="space-y-2">
                {/* Send a message button */}
                <button
                  type="button"
                  onClick={handleSendAMessageClick}
                  className="w-full p-3.5 rounded-xl bg-[#0D2136] border border-slate-800 hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] flex items-center justify-between text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MessageSquare className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span className="text-xs truncate">Send a message</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>

                {/* LinkedIn Route */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#0D2136] border border-slate-800 hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Linkedin className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span className="text-xs truncate">Connect with Farhan Abid on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </a>
              </div>
            </div>

            {/* (3) Curious about the 5-day audit report format? View Sample Blueprint → */}
            {onOpenSampleDeliverable && (
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs flex-1">
                <span className="text-cyan-200">
                  Curious about the 5-day audit report format?
                </span>
                <button
                  type="button"
                  onClick={onOpenSampleDeliverable}
                  className="font-bold text-[#00E5FF] hover:underline whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Sample Blueprint →
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
export default PageContact;
