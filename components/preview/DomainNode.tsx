import React from 'react';
import { Domain } from '@/src/types';
import {
  ShoppingCart,
  MapPin,
  Calendar,
  Monitor,
  Cpu,
  Sliders,
  Leaf,
  GraduationCap,
  Heart,
  CreditCard,
  Building2,
  Truck,
  Zap,
  PlayCircle,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  shopping_cart: ShoppingCart,
  location_on: MapPin,
  event: Calendar,
  computer: Monitor,
  memory: Cpu,
  settings: Sliders,
  eco: Leaf,
  school: GraduationCap,
  favorite: Heart,
  payments: CreditCard,
  apartment: Building2,
  local_shipping: Truck,
  bolt: Zap,
  play_circle: PlayCircle,
};

export interface DomainNodeProps {
  domain: Domain;
  isSelected: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  xPercent: number;
  yPercent: number;
  depthScale?: number;
  depthOpacity?: number;
  zIndex?: number;
  onSelect: (domain: Domain) => void;
  onHover: (domain: Domain | null) => void;
}

export const DomainNode: React.FC<DomainNodeProps> = ({
  domain,
  isSelected,
  isHovered,
  isAnyHovered,
  xPercent,
  yPercent,
  depthScale = 1.0,
  depthOpacity = 1.0,
  zIndex = 20,
  onSelect,
  onHover,
}) => {
  const IconComponent = ICON_MAP[domain.icon] || Cpu;
  const color = domain.visual?.color || '#00e3fd';
  const glowColor = domain.visual?.glowColor || `${color}66`;

  const isSubdued = isAnyHovered && !isHovered && !isSelected;
  const effectiveScale = isSelected ? 1.22 : isHovered ? 1.18 : depthScale;
  const effectiveOpacity = isSubdued ? 0.32 : isSelected ? 1 : isHovered ? 1 : depthOpacity;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Explore ${domain.name} domain (${domain.id})`}
      aria-pressed={isSelected}
      onClick={() => onSelect(domain)}
      onMouseEnter={() => onHover(domain)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(domain)}
      onBlur={() => onHover(null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(domain);
        }
      }}
      className="absolute cursor-pointer focus:outline-none select-none pointer-events-auto will-change-transform"
      style={{
        left: `${xPercent}%`,
        top: `${yPercent}%`,
        zIndex: isSelected ? 50 : isHovered ? 45 : zIndex,
        opacity: effectiveOpacity,
        transform: `translate3d(-50%, -50%, 0) scale(${effectiveScale})`,
        transition: 'transform 0.15s ease-out, opacity 0.2s ease-out',
      }}
    >
      <div className="flex flex-col items-center group">
        {/* Domain ID Pill */}
        <div
          className={`font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-all duration-300 mb-1 px-1.5 py-0.5 rounded-sm ${
            isSelected
              ? 'text-white bg-white/25 shadow-[0_0_10px_rgba(255,255,255,0.4)] opacity-100 font-bold'
              : isHovered
              ? 'text-white bg-white/15 opacity-100'
              : 'text-[#8f9095] opacity-75 group-hover:opacity-100'
          }`}
        >
          {domain.id}
        </div>

        {/* Luminous Nucleus Sphere / Atmosphere Platform */}
        <div className="relative flex items-center justify-center">
          {/* Outer Atmosphere Glow Disc */}
          <div
            className={`absolute -inset-3.5 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
              isSelected
                ? 'opacity-95 scale-130'
                : isHovered
                ? 'opacity-85 scale-120'
                : 'opacity-40 scale-100 group-hover:opacity-75'
            }`}
            style={{ backgroundColor: color }}
          />

          {/* Under-node Elliptical Surface Shadow & Orbit Footprint */}
          <div
            className="absolute -bottom-2 w-12 h-3.5 rounded-full blur-sm transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: color,
              opacity: isSelected ? 0.85 : isHovered ? 0.65 : 0.28,
            }}
          />

          {/* Nucleus Disc */}
          <div
            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
              isSelected
                ? 'border-2 border-white ring-2 ring-offset-2 ring-offset-[#051424] shadow-[0_0_30px_#00e3fd]'
                : 'border border-white/20 group-hover:border-white/70'
            }`}
            style={{
              backgroundColor: 'rgba(5, 20, 36, 0.88)',
              boxShadow: isSelected
                ? `0 0 30px ${color}, inset 0 0 15px ${glowColor}`
                : isHovered
                ? `0 0 22px ${color}, inset 0 0 12px ${glowColor}`
                : `0 0 12px ${glowColor}`,
              color: color,
            }}
          >
            {/* Glowing Icon */}
            <IconComponent
              className={`w-5 h-5 transition-transform duration-300 ${
                isHovered || isSelected ? 'scale-110' : 'scale-100'
              }`}
              style={{ color: isSelected ? '#ffffff' : color }}
            />

            {/* Selected Active Ring Pulse */}
            {isSelected && (
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-35 pointer-events-none"
                style={{ backgroundColor: color }}
              />
            )}
          </div>
        </div>

        {/* Domain Name Label */}
        <div className="text-center w-28 sm:w-36 mt-1.5 transition-all duration-300 pointer-events-none">
          <p
            className={`font-sans text-[11px] sm:text-[12px] leading-tight font-medium tracking-tight truncate transition-colors ${
              isSelected
                ? 'text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                : isHovered
                ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                : 'text-[#c3c6cf] group-hover:text-white'
            }`}
          >
            {domain.name}
          </p>
          {isSelected && (
            <span className="inline-block mt-0.5 text-[9px] font-mono tracking-wider text-[#00e3fd] uppercase font-semibold">
              Active Vector
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
