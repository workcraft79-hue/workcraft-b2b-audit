import React from 'react';

export const ToolsStrip: React.FC = () => {
  const toolCategories = [
    { category: 'CRM', tools: ['HubSpot', 'Salesforce', 'Pipedrive'] },
    { category: 'Communication', tools: ['Slack', 'Gmail', 'Microsoft 365'] },
    { category: 'Projects & Tasks', tools: ['Asana', 'ClickUp', 'Notion'] },
    { category: 'Documents & Contracts', tools: ['Google Docs', 'DocuSign', 'PandaDoc'] },
  ];

  return (
    <section className="bg-[#070E17] border-y border-slate-800/80 py-5 sm:py-6 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading & Subline */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
            Tools commonly connected, scoped per project
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Your workflow comes first. We assess your existing tools, available integrations, access requirements and practical constraints before recommending how systems should connect.
          </p>
        </div>

        {/* Compact Text-Only Ribbon */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
          {toolCategories.map((group) => (
            <div 
              key={group.category}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0A1420] border border-slate-800/80 flex flex-wrap items-center gap-2"
            >
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                {group.category}:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-slate-300">
                {group.tools.map((tool, idx) => (
                  <span 
                    key={tool}
                    className="hover:text-[#00E5FF] transition-colors focus:text-[#00E5FF] outline-none"
                    tabIndex={0}
                  >
                    {tool}{idx < group.tools.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Required Small Note */}
        <p className="mt-3 text-[11px] text-slate-400 text-center max-w-2xl mx-auto font-mono leading-relaxed">
          Examples only. Whether a specific connection is possible depends on each tool's API, permissions, plan and your environment. Confirmed during the audit.
        </p>

      </div>
    </section>
  );
};
