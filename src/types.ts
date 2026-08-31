export interface DomainVisual {
  color: string;
  glowColor?: string;
  angle?: number;
  orbit?: 'outer' | 'inner' | string;
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
  visual: DomainVisual;
  [key: string]: any;
}

export interface Subdomain {
  id: string;
  domainId: string;
  name: string;
  description: string;
  [key: string]: any;
}

export interface SolutionCapability {
  id: string;
  domainId: string;
  name: string;
  category: string;
  [key: string]: any;
}

export interface Solution {
  id: string;
  domainId: string;
  name: string;
  status: string;
  type: string;
  [key: string]: any;
}
