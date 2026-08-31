import React from 'react';
import { Sparkles, Bell, Settings, Layers } from 'lucide-react';

export interface HeaderProps {
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab = 'Universe',
  onTabChange,
}) => {
  const navItems = ['Universe', 'Domains', 'Intelligence', 'Analytics'];

  return (
    <header className="bg-[#051424]/85 backdrop-blur-xl fixed top-0 left-0 right-0 h-[72px] z-50 border-b border-[#45474b]/20 shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-4 sm:px-8 h-full max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3 select-none">
          <div className="w-9 h-9 rounded-xl bg-[#00e3fd]/10 border border-[#00e3fd]/40 p-0.5 shadow-[0_0_15px_rgba(0,227,253,0.3)] flex items-center justify-center overflow-hidden">
            <img
              src="/assets/architectany-logo-sm.jpg"
              alt="ArchitectAny Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl sm:text-2xl font-bold text-[#bdf4ff] tracking-tight leading-none">
              ArchitectAny
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#00e3fd] uppercase font-semibold">
              Platform Universe
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentTab === item;
            return (
              <button
                key={item}
                onClick={() => onTabChange?.(item)}
                className={`font-mono text-xs tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#bdf4ff] font-semibold'
                    : 'text-[#c6c6cb] hover:text-[#d4e4fa]'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00e3fd] rounded-full shadow-[0_0_8px_#00e3fd]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & User Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            aria-label="Notifications"
            className="text-[#c6c6cb] hover:text-[#d4e4fa] hover:bg-[#273647]/50 p-2 rounded-full transition-colors flex items-center justify-center focus:outline-none"
          >
            <Bell className="w-4 h-4" />
          </button>
          <button
            aria-label="Settings"
            className="text-[#c6c6cb] hover:text-[#d4e4fa] hover:bg-[#273647]/50 p-2 rounded-full transition-colors flex items-center justify-center focus:outline-none"
          >
            <Settings className="w-4 h-4" />
          </button>
          
          {/* User Profile - Vijay Kumar K */}
          <div
            className="flex items-center gap-2.5 pl-2 border-l border-[#45474b]/30 group cursor-pointer"
            title="Vijay Kumar K — Enterprise Solution Architect"
          >
            <div className="hidden lg:flex flex-col items-end text-right select-none">
              <span className="font-sans text-xs font-semibold text-[#d4e4fa] group-hover:text-[#00e3fd] transition-colors leading-tight">
                Vijay Kumar K
              </span>
              <span className="font-mono text-[9px] text-[#8f9095] uppercase tracking-wider leading-tight">
                Solution Architect
              </span>
            </div>

            <div className="relative w-9 h-9 rounded-full bg-[#051424] overflow-hidden border border-[#00e3fd]/40 shrink-0 ring-2 ring-[#00e3fd]/30 shadow-[0_0_12px_rgba(0,227,253,0.35)] group-hover:ring-[#00e3fd] transition-all">
              <img
                alt="Vijay Kumar K - Enterprise Solution Architect"
                className="w-full h-full object-cover"
                src="/assets/vijay-profile-sm.jpg"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00e3fd] ring-1 ring-[#051424]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
