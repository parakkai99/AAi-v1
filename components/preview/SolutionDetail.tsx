import React, { useEffect } from 'react';
import {
  Solution,
  Domain,
  Subdomain,
  Capability,
} from '@/src/types';
import { useArchitectAny } from '@/src/context/ArchitectAnyContext';
import {
  ArrowLeft,
  Sparkles,
  Boxes,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Server,
  Zap,
  ExternalLink,
  Code2,
  Share2,
} from 'lucide-react';

export interface SolutionDetailProps {
  solutionId: string;
  solution: Solution | null;
  domains: Domain[];
  subdomains: Subdomain[];
  capabilities: Capability[];
  onBackToUniverse: () => void;
  onSelectDomain?: (domainId: string) => void;
}

export const SolutionDetail: React.FC<SolutionDetailProps> = ({
  solutionId,
  solution,
  domains,
  subdomains,
  capabilities,
  onBackToUniverse,
  onSelectDomain,
}) => {
  const { getDomainName, t } = useArchitectAny();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [solutionId]);

  if (!solution) {
    return (
      <main className="min-h-[calc(100vh-74px)] bg-[#020914] text-[#eaf7ff] pt-24 px-4 flex flex-col items-center justify-center">
        <div className="p-8 rounded-2xl bg-[#031526] border border-[#00dfff]/30 text-center max-w-md">
          <span className="text-xs font-mono text-[#00dfff] uppercase tracking-widest block mb-2">
            ArchitectAny AAi
          </span>
          <h2 className="text-xl font-bold mb-2">{t('solution_not_found')}</h2>
          <p className="text-xs text-[#82a5bb] mb-6">
            The requested solution ID ({solutionId}) could not be resolved in the AAi catalog.
          </p>
          <button
            onClick={onBackToUniverse}
            className="px-5 py-2.5 rounded-xl bg-[#00e3fd] text-[#020914] font-mono text-xs font-bold hover:bg-[#51dfff] transition-all cursor-pointer"
          >
            ← {t('back_to_universe')}
          </button>
        </div>
      </main>
    );
  }

  const primaryDomain = domains.find((d) => solution.domainIds.includes(d.id)) || domains[0];
  const color = primaryDomain?.visual?.color || '#00e3fd';
  const primaryDomainName = primaryDomain ? getDomainName(primaryDomain.id, primaryDomain.name) : 'Domain';

  return (
    <main className="min-h-[calc(100vh-74px)] bg-gradient-to-b from-[#020914] via-[#010b17] to-[#020914] text-[#eaf7ff] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb & Back Action */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToUniverse}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#031526]/80 hover:bg-[#04243f] border border-[#00dfff]/30 text-xs font-mono text-[#00dfff] hover:text-[#eaf7ff] transition-all group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{t('back_to_universe')}</span>
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6e9bb3]">
            <span>AAi</span>
            <span>/</span>
            <span>Universe</span>
            <span>/</span>
            <span>{primaryDomainName}</span>
            <span>/</span>
            <span className="text-[#00dfff] font-bold">{solution.id}</span>
          </div>
        </div>

        {/* Hero Solution Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#03182b]/95 via-[#021120]/95 to-[#010912]/95 border border-[#00dfff]/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,180,255,0.08)] backdrop-blur-2xl mb-8">
          {/* Ambient Glow */}
          <div
            className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ backgroundColor: color }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span
                  className="px-3 py-1 rounded-lg font-mono text-xs font-black tracking-wider text-black shadow-[0_0_12px_rgba(0,227,253,0.5)]"
                  style={{ backgroundColor: color }}
                >
                  {solution.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-[#00dfff]/15 text-[#00dfff] border border-[#00dfff]/30 uppercase">
                  {t('mode')}: {solution.mode || 'Hybrid'}
                </span>
                <span className="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {t('status')}: {solution.status || 'Active'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#eaf7ff] tracking-tight mb-3">
                {solution.name}
              </h1>

              <p className="text-sm sm:text-base text-[#9bd5e8] leading-relaxed mb-6 max-w-2xl">
                {solution.description ||
                  'Architected enterprise solution composition mapping business domains, verified service meshes, and autonomous integration pipelines.'}
              </p>

              {/* Connected Domains */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#6e9bb3] uppercase tracking-wider mr-1">
                  {t('bound_domains')}:
                </span>
                {domains.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDomain?.(d.id);
                      onBackToUniverse();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#020e1a] hover:bg-[#031d33] border border-[#00dfff]/25 hover:border-[#00e3fd] text-xs font-mono text-[#dff7ff] transition-all cursor-pointer"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: d.visual?.color || '#00e3fd' }}
                    />
                    <span>{getDomainName(d.id, d.name)} ({d.id})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00d9ff] to-[#2c9dff] text-[#020914] font-mono text-xs font-black hover:opacity-95 shadow-[0_0_20px_rgba(0,227,253,0.4)] transition-all cursor-pointer">
                <Zap className="w-4 h-4" />
                <span>{t('launch_composition')}</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#02101e] hover:bg-[#031d33] border border-[#00dfff]/30 text-xs font-mono text-[#eaf7ff] transition-all cursor-pointer">
                <Workflow className="w-4 h-4 text-[#00dfff]" />
                <span>{t('view_architecture_mesh')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Capability Matrix & Subdomains Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Subdomains Panel */}
          <div className="p-6 rounded-2xl bg-[#021222]/90 border border-[#00dfff]/20 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#00dfff]/15">
              <Layers className="w-5 h-5 text-[#00dfff]" />
              <h3 className="text-base font-bold text-[#eaf7ff]">
                {t('subdomains')} ({subdomains.length})
              </h3>
            </div>
            <div className="space-y-2.5">
              {subdomains.map((sd) => (
                <div
                  key={sd.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#03192e]/60 border border-[#00dfff]/15"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-[#00dfff] bg-[#00dfff]/10 px-2 py-0.5 rounded font-bold">
                      {sd.id}
                    </span>
                    <strong className="text-xs font-semibold text-[#eaf7ff]">{sd.name}</strong>
                  </div>
                  <span className="text-[10px] font-mono text-[#6e9bb3]">Domain: {sd.domainId}</span>
                </div>
              ))}
              {subdomains.length === 0 && (
                <p className="text-xs text-[#6e9bb3] font-mono italic">
                  Inherits standard business capabilities from bound domains.
                </p>
              )}
            </div>
          </div>

          {/* Capabilities Panel */}
          <div className="p-6 rounded-2xl bg-[#021222]/90 border border-[#00dfff]/20 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#00dfff]/15">
              <Cpu className="w-5 h-5 text-[#00dfff]" />
              <h3 className="text-base font-bold text-[#eaf7ff]">
                {t('capabilities')} ({capabilities.length})
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#03192e]/60 border border-[#00dfff]/15"
                >
                  <span className="font-mono text-[10px] text-[#00dfff] bg-[#00dfff]/10 px-1.5 py-0.5 rounded font-bold">
                    {cap.id}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-[#eaf7ff] truncate">
                      {cap.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#6e9bb3] uppercase">
                      {cap.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Architecture Flow Blueprint */}
        <div className="p-6 rounded-2xl bg-[#020f1c]/90 border border-[#00dfff]/20 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#00dfff]/15">
            <div className="flex items-center gap-2.5">
              <Server className="w-5 h-5 text-[#00dfff]" />
              <h3 className="text-base font-bold text-[#eaf7ff]">
                {t('pipeline_flow')}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#00dfff]">
              ArchitectAny Composition Layer
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { step: '01', title: 'Intent Match', desc: 'Natural Language & Domain' },
              { step: '02', title: 'Capability Bind', desc: 'API & Service Mesh' },
              { step: '03', title: 'Configuration', desc: 'Multi-Tenant Specs' },
              { step: '04', title: 'Composition', desc: 'Code & Container Graph' },
              { step: '05', title: 'PostgreSQL DB', desc: 'Isolated Repo Boundary' },
              { step: '06', title: 'Delivery', desc: 'Cloud Run & Edge Node' },
            ].map((f) => (
              <div
                key={f.step}
                className="p-3 rounded-xl bg-[#03182b]/60 border border-[#00dfff]/15 flex flex-col items-center justify-center"
              >
                <span className="text-xs font-mono font-bold text-[#00dfff]">{f.step}</span>
                <strong className="text-xs text-[#eaf7ff] mt-1">{f.title}</strong>
                <span className="text-[10px] text-[#6e9bb3] mt-0.5">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
