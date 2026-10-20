import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Linkedin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { ServiceItem } from '../types';
import { SOCIAL_LINKS } from '../data';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('10–25 employees');
  const [workflowNote, setWorkflowNote] = useState(preselectedService || '');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and work email.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setErrorMsg('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 bg-[#060D15]/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-xl rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 text-left">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-700/60">
          <div>
            <div className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
              Asynchronous Workflow Review
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Request an Operational Assessment
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Direct email conversation with founder Farhan Abid and the Workcraft systems team.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-950/80 text-[#00E5FF] border border-cyan-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Workflow Submitted for Review</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Farhan Abid and our engineering team will evaluate your operational parameters and send a comprehensive, written workflow assessment directly to <strong className="text-[#00E5FF]">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/50 text-xs text-red-200 font-medium">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#0A1420] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#0A1420] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company Team Size
              </label>
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0A1420] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
              >
                <option value="5–15 employees">5–15 employees</option>
                <option value="16–35 employees">16–35 employees</option>
                <option value="36–75 employees">36–75 employees</option>
                <option value="75+ employees">75+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Primary Workflow to Automate
              </label>
              <input
                type="text"
                placeholder="e.g. Lead handling, invoice reconciliation, document processing"
                value={workflowNote}
                onChange={(e) => setWorkflowNote(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0A1420] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Brief Details of Your Current Manual Friction Points
              </label>
              <textarea
                rows={3}
                placeholder="What repetitive tasks or tool handoffs slow down your team?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0A1420] border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
              >
                {submitting ? 'Submitting...' : 'Submit for Email Assessment'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface LinkedInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkedInModal: React.FC<LinkedInModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleConnectionNote =
    "Hi Farhan, I came across Workcraft's B2B AI operations systems and would like to connect to discuss workflow automation.";

  const handleCopyNote = () => {
    navigator.clipboard.writeText(sampleConnectionNote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 bg-[#060D15]/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 text-left">
        <div className="flex items-start justify-between pb-4 border-b border-slate-700/60">
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="text-xl font-bold text-white">Connect on LinkedIn</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-xs text-slate-300">
          <p className="leading-relaxed">
            Connect with Farhan Abid and the Workcraft systems team for practical perspectives on autonomous agent architectures, operational friction removal, and B2B workflow design.
          </p>

          <div className="p-3 rounded-xl bg-[#0A1420] border border-slate-700 space-y-2">
            <span className="text-[11px] text-slate-400 block font-semibold">
              Suggested Connection Message:
            </span>
            <p className="italic text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-800 font-mono text-[11px]">
              "{sampleConnectionNote}"
            </p>
            <button
              type="button"
              onClick={handleCopyNote}
              className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:underline"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to clipboard' : 'Copy Connection Note'}</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Dismiss
            </button>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-colors"
            >
              <span>Open LinkedIn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookScope: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookScope }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 bg-[#060D15]/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 text-left max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-slate-700/60">
          <div>
            <span className="font-mono text-xs font-bold text-[#00E5FF] tracking-wider">
              SERVICE SPECIFICATION #{service.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm text-slate-300">
          <p className="leading-relaxed text-slate-200">
            {service.fullDescription}
          </p>

          <div className="p-4 rounded-xl bg-[#0A1420] border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E5FF] block mb-1">
              Operational Objective:
            </span>
            <p className="text-xs text-slate-300">
              {service.operationalBenefit}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
              Included Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0A1420]/70 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-400">
            <strong>Ideal For:</strong> {service.idealFor}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookScope(service.title);
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-colors shadow-md shadow-cyan-500/20"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
