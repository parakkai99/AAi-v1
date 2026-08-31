import React from 'react';
import { Domain, Subdomain, Capability, Solution } from '@/src/types';
import { useArchitectAny } from '@/src/context/ArchitectAnyContext';
import {
  Layers,
  Cpu,
  Boxes,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export interface SolutionRailProps {
  domains: Domain[];
  selectedDomain: Domain | null;
  subdomains: Subdomain[];
  capabilities: Capability[];
  solutions: Solution[];
  onSelectDomain: (domainId: string) => void;
  onSelectSolution: (solutionId: string) => void;
}

export const SolutionRail: React.FC<SolutionRailProps> = ({
  domains,
  selectedDomain,
  subdomains,
  capabilities,
  solutions,
  onSelectDomain,
  onSelectSolution,
}) => {
  const { getDomainName, getDomainDesc, t } = useArchitectAny();

  if (!selectedDomain) return null;

  const domainId = selectedDomain.id;
  const domainSubdomains = subdomains.filter((s) => s.domainId === domainId);
  const domainSolutions = solutions.filter(
    (s) => s.domainIds && s.domainIds.includes(domainId),
  );

  const color = selectedDomain.visual?.color || '#00e3fd';
  const translatedDomainName = getDomainName(selectedDomain.id, selectedDomain.name);
  const translatedDomainDesc = getDomainDesc(selectedDomain.id, selectedDomain.description);

  return (
    <section
      role="region"
      aria-label="Solution Navigation Rail"
      className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 my-4 transition-all duration-400 ease-out"
    >
      <div
        key={selectedDomain.id}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#021425]/95 to-[#010a14]/95 border-2 border-[#00dfff]/40 p-4 sm:p-5 shadow-[0_15px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(0,227,253,0.15)] backdrop-blur-xl animate-in fade-in zoom-in-[0.99] duration-200"
      >
        {/* Top Header / Domain Switcher Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#00dfff]/15">
          <div className="flex items-center gap-3">
            <div
              className="px-2.5 py-1 rounded-lg font-mono text-xs font-black tracking-wider text-black shrink-0 shadow-[0_0_16px_rgba(0,227,253,0.6)] animate-pulse"
              style={{ backgroundColor: color }}
            >
              {selectedDomain.id}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#eaf7ff] tracking-tight">
                  {translatedDomainName}
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#00dfff]/15 text-[#00e3fd] border border-[#00dfff]/40 font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(0,227,253,0.25)]">
                  <Sparkles className="w-3 h-3 text-[#00e3fd] animate-spin" /> {t('active_vector')}
                </span>
              </div>
              <p className="text-xs text-[#82a5bb] line-clamp-1 max-w-xl">
                {translatedDomainDesc}
              </p>
            </div>
          </div>

          {/* Metrics Pill */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto bg-[#020d18] px-3 py-1.5 rounded-xl border border-[#00dfff]/15">
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <Layers className="w-3 h-3 text-[#6e9bb3]" />
              <span className="text-[#eaf7ff] font-bold">{domainSubdomains.length}</span>
              <span className="text-[#6e9bb3] text-[10px]">{t('subdomains')}</span>
            </div>
            <div className="h-3 w-px bg-[#00dfff]/20" />
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <Boxes className="w-3 h-3 text-[#00dfff]" />
              <span className="text-[#00dfff] font-bold">{domainSolutions.length}</span>
              <span className="text-[#6e9bb3] text-[10px]">{t('solutions')}</span>
            </div>
          </div>
        </div>

        {/* Solutions Track: Single-Click Navigation to Solution Detail */}
        <div className="pt-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6e9bb3] font-semibold">
              {t('solutions_in_domain')}:
            </span>
            <span className="text-[10px] font-mono text-[#00dfff]">
              {t('click_to_inspect')} →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {domainSolutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => onSelectSolution(sol.id)}
                className="group flex items-center justify-between p-3 rounded-xl bg-[#03182b]/70 hover:bg-[#04243f] border border-[#00dfff]/20 hover:border-[#00e3fd] transition-all text-left cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,227,253,0.25)] hover:scale-[1.01]"
              >
                <div className="flex flex-col min-w-0 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#00dfff]">
                      {sol.id}
                    </span>
                    <strong className="text-xs font-bold text-[#eaf7ff] group-hover:text-[#00e3fd] transition-colors truncate">
                      {sol.name}
                    </strong>
                  </div>
                  <span className="text-[10px] text-[#82a5bb] line-clamp-1 mt-0.5">
                    {sol.description || `Architected for ${translatedDomainName}`}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-[#00dfff] bg-[#00dfff]/10 group-hover:bg-[#00dfff] group-hover:text-[#020914] px-2 py-1 rounded-md transition-all">
                  <span>{t('explore')}</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}

            {domainSolutions.length === 0 && (
              <div className="col-span-full py-4 text-center text-xs text-[#6e9bb3] font-mono bg-[#020d18]/50 rounded-xl border border-dashed border-[#00dfff]/15">
                No dedicated standalone solutions in catalog for this domain yet. Subdomains are ready for custom composition.
              </div>
            )}
          </div>
        </div>

        {/* Subdomains Tag Cloud */}
        {domainSubdomains.length > 0 && (
          <div className="mt-3 pt-3 border-t border-[#00dfff]/10 flex flex-wrap items-center gap-1.5">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#55798c] mr-1">
              {t('subdomains')}:
            </span>
            {domainSubdomains.map((sub) => (
              <span
                key={sub.id}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#02101e] border border-[#00dfff]/15 text-[#9bd5e8]"
              >
                {sub.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
