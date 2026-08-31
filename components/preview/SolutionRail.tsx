import React from 'react';
import { Domain, Subdomain, SolutionCapability, Solution } from '@/src/types';
import {
  Sparkles,
  Layers,
  Cpu,
  Boxes,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export interface SolutionRailProps {
  selectedDomain: Domain | null;
  subdomains: Subdomain[];
  capabilities: SolutionCapability[];
  solutions: Solution[];
  onComposeClick?: () => void;
}

export const SolutionRail: React.FC<SolutionRailProps> = ({
  selectedDomain,
  subdomains,
  capabilities,
  solutions,
  onComposeClick,
}) => {
  if (!selectedDomain) return null;

  const domainSubdomains = subdomains.filter(
    (s) => s.domainId === selectedDomain.id
  );
  const domainCapabilities = capabilities.filter(
    (c) => c.domainId === selectedDomain.id
  );
  const domainSolutions = solutions.filter(
    (s) => s.domainId === selectedDomain.id
  );

  const color = selectedDomain.visual?.color || '#00e3fd';

  return (
    <div
      role="region"
      aria-label={`${selectedDomain.name} Solution Details`}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-500 ease-out"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-[#051424]/90 backdrop-blur-2xl border border-white/10 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        style={{
          borderLeft: `4px solid ${color}`,
        }}
      >
        {/* Subtle Ambient Background Gradient */}
        <div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ backgroundColor: color }}
        />

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-start sm:items-center gap-3">
            <span
              className="px-2.5 py-1 rounded font-mono text-[11px] font-bold tracking-wider uppercase text-white shadow-sm"
              style={{ backgroundColor: color }}
            >
              {selectedDomain.id}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {selectedDomain.name}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-[#00e3fd] bg-[#00e3fd]/10 px-2 py-0.5 rounded border border-[#00e3fd]/20">
                  <Sparkles className="w-3 h-3" /> Universe Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mt-0.5 max-w-2xl leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>
          </div>

          {/* Dynamic Metrics Counters */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            <div className="text-center">
              <span className="block text-base sm:text-lg font-bold font-mono text-white">
                {String(domainSubdomains.length).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8f9095] flex items-center gap-1 justify-center">
                <Layers className="w-2.5 h-2.5" /> Subdomains
              </span>
            </div>

            <div className="h-7 w-px bg-white/10" />

            <div className="text-center">
              <span className="block text-base sm:text-lg font-bold font-mono text-[#00e3fd]">
                {String(domainCapabilities.length).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8f9095] flex items-center gap-1 justify-center">
                <Cpu className="w-2.5 h-2.5" /> Capabilities
              </span>
            </div>

            <div className="h-7 w-px bg-white/10" />

            <div className="text-center">
              <span className="block text-base sm:text-lg font-bold font-mono text-[#ddb7ff]">
                {String(domainSolutions.length).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8f9095] flex items-center gap-1 justify-center">
                <Boxes className="w-2.5 h-2.5" /> Solutions
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Solutions Track */}
        <div className="mt-4 pt-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 w-full overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8f9095]">
                Composed Solutions & Services:
              </span>
            </div>

            {/* Horizontal Scrollable/Flowing Solution Nodes */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {domainSolutions.map((sol) => (
                <div
                  key={sol.id}
                  className="group shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5"
                    style={{ color: color }}
                  />
                  <span className="text-xs font-medium text-[#d4e4fa] group-hover:text-white transition-colors">
                    {sol.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#8f9095] bg-black/30 px-1.5 py-0.5 rounded">
                    {sol.type}
                  </span>
                </div>
              ))}

              {domainSolutions.length === 0 && (
                <div className="text-xs text-[#8f9095] italic">
                  No registered standalone solutions mapped yet.
                </div>
              )}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto mt-2 md:mt-0">
            <button
              onClick={onComposeClick}
              className="w-full sm:w-auto px-5 py-2 rounded-full font-mono text-xs font-semibold text-[#051424] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 active:scale-95"
              style={{
                backgroundColor: color,
              }}
            >
              <span>Compose Intent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
