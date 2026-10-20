import React from 'react';
import { X, Play, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0 bg-[#060D15]/90 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0D2136] border border-cyan-500/40 p-5 sm:p-7 shadow-2xl z-10 my-8 text-left">
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF]">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                WORKCRAFT System Demo & Architecture
              </h3>
              <span className="text-[11px] text-cyan-300 font-mono">
                Official YouTube Demo Video
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Embed */}
        <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800 relative">
          <iframe
            src={SOCIAL_LINKS.youtubeVideoEmbed}
            title="Workcraft System Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info & direct YouTube button */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-400">
            Learn more on our official channel:{' '}
            <strong className="text-white">@WorkcraftHQ</strong>
          </p>

          <a
            href={SOCIAL_LINKS.youtubeVideoDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A1420] border border-slate-700 hover:border-[#00E5FF] text-[#00E5FF] hover:text-white transition-colors"
          >
            <span>Watch Directly on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
