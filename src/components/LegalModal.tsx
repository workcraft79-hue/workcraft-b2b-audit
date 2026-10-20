import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Workcraft Data Privacy & Security Principles' : 'Workcraft Terms of Service';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 bg-[#060D15]/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D2136] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 text-left max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="text-lg font-bold text-white">
              {title}
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

        <div className="mt-4 space-y-4 overflow-y-auto pr-2 text-xs text-slate-300 leading-relaxed font-sans">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Zero External Model Training:</strong> Workcraft engineers sovereign AI agent architectures. Data handling and retention settings are agreed per engagement. Your operational data, customer records, and internal communications are never used to train external or foundation models.
              </p>
              <p>
                <strong>2. Data Handling & Security:</strong> Workflows can run directly inside your organization’s private cloud perimeter or within isolated dedicated environments with encryption in transit and at rest.
              </p>
              <p>
                <strong>3. Access Controls & Human Oversight:</strong> All autonomous actions, webhook listeners, and tool executions are cryptographically logged with deterministic audit trails. High-stakes business actions require designated human review before execution.
              </p>
              <p>
                <strong>4. Confidentiality:</strong> All shared technical information, API credentials, and internal workflow maps are treated under strict bilateral confidentiality.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Scope of Engagement:</strong> Workcraft provides custom AI operations engineering, workflow assessment, autonomous agent development, system integration, and organizational prompt training as detailed in written project agreements.
              </p>
              <p>
                <strong>2. Intellectual Property Ownership:</strong> Upon completion of engagement agreements and invoice settlement, client retains ownership of custom orchestration code, prompts, and bespoke workflows developed specifically for their organization.
              </p>
              <p>
                <strong>3. Operational Governance:</strong> Clients maintain full supervisory authority over all deployed agents and can pause, adjust, or revoke system access at any time.
              </p>
              <p>
                <strong>4. Confidentiality & Non-Disclosure:</strong> All business discoveries, workflow maps, and internal configurations are governed by standard non-disclosure terms.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-[#0A1420] bg-[#00E5FF] hover:bg-[#4DE8FF] rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
