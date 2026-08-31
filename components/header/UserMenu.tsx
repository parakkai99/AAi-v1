import React, { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  LogOut,
  LogIn,
  UserCheck,
  Key,
  ChevronDown,
  Layers,
  Sparkles,
  Shield,
} from 'lucide-react';
import { useArchitectAny } from '@/src/context/ArchitectAnyContext';
import { UserRole } from '@/src/contracts/user';

export interface UserMenuProps {
  className?: string;
}

const ROLES_LIST: UserRole[] = [
  'CHIEF_ARCHITECT',
  'ADMIN',
  'ARCHITECT',
  'DEVELOPER',
  'SOLUTION_BUILDER',
  'PROVIDER',
  'SELLER',
  'CLIENT',
  'CUSTOMER',
  'VIEWER',
];

export const UserMenu: React.FC<UserMenuProps> = ({ className = '' }) => {
  const { auth, user, role, permissions, login, logout, setRole } = useArchitectAny();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isAuthenticated = auth.state === 'authenticated';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* User Header Capsule */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 pl-2 border-l border-[#00dfff]/25 cursor-pointer group select-none focus:outline-none"
        title="Vijay Kumar K — Chief Architect & Inventor"
      >
        {/* Name and Role text (Desktop only) */}
        <div className="hidden lg:flex flex-col items-end text-right">
          <span className="font-sans text-xs font-bold text-[#eaf7ff] group-hover:text-[#00e3fd] transition-colors leading-tight">
            {user?.displayName || 'Vijay Kumar K'}
          </span>
          <span className="font-mono text-[9px] text-[#00dfff] uppercase tracking-wider leading-tight flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-2.5 h-2.5" />
            {role === 'CHIEF_ARCHITECT' ? 'Chief Architect' : role || 'Architect'}
          </span>
        </div>

        {/* Avatar Ring & Online Status Dot */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#021827] p-0.5 border border-[#00e3fd]/50 ring-2 ring-[#00e3fd]/30 shadow-[0_0_15px_rgba(0,227,253,0.35)] group-hover:ring-[#00e3fd] transition-all overflow-hidden shrink-0">
          <img
            alt={user?.displayName || 'Vijay Kumar K'}
            className="w-full h-full object-cover rounded-full"
            src={user?.avatar || '/assets/vijay-profile-sm.jpg'}
            referrerPolicy="no-referrer"
          />
          <span
            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-[#020914] ${
              isAuthenticated ? 'bg-[#00e3fd]' : 'bg-[#eab308]'
            }`}
          />
        </div>
      </button>

      {/* User Identity & Session Menu Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-88 bg-[#021222]/95 border border-[#00dfff]/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,227,253,0.2)] backdrop-blur-2xl z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* User Bio Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-[#00dfff]/20">
            <img
              src={user?.avatar || '/assets/vijay-profile-sm.jpg'}
              alt="Vijay Kumar K"
              className="w-12 h-12 rounded-xl object-cover border border-[#00dfff]/40 shadow-md"
            />
            <div className="flex flex-col min-w-0">
              <strong className="text-[#eaf7ff] text-sm font-bold truncate">
                {user?.displayName || 'Vijay Kumar K'}
              </strong>
              <span className="text-[#00dfff] text-[10.5px] font-mono uppercase font-semibold">
                {user?.title || 'Chief Architect & Inventor'}
              </span>
              <span className="text-[#6e9bb3] text-[10px] font-mono">
                ID: {user?.id || 'USR-000001'} · {user?.timezone || 'Asia/Kolkata'}
              </span>
            </div>
          </div>

          {/* Session Attributes & RBAC Role Switcher */}
          <div className="py-2.5 space-y-2 text-xs text-[#82a5bb] font-mono border-b border-[#00dfff]/20">
            <div className="flex justify-between items-center">
              <span>Auth State:</span>
              <span className="text-[#00dfff] font-bold uppercase text-[11px] px-1.5 py-0.5 rounded bg-[#00dfff]/10 border border-[#00dfff]/20">
                {auth.state}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span>Active Role:</span>
              <select
                value={role || 'CHIEF_ARCHITECT'}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="bg-[#010d18] border border-[#00dfff]/30 rounded-lg px-2 py-1 text-xs text-[#00e3fd] font-bold focus:outline-none"
              >
                {ROLES_LIST.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span>Active Permissions:</span>
              <span className="text-[#dff7ff] font-bold">{permissions.length} granted</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex gap-2">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-mono font-bold transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  login();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#00dfff]/15 hover:bg-[#00dfff]/25 text-[#00e3fd] border border-[#00dfff]/40 text-xs font-mono font-bold transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign In as Chief Architect
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
