/**
 * ArchitectAny AAi - Global Intent Service
 * Powers the Intent Gateway, natural-language parsing & multi-entity search
 */

import {
  IntentState,
  SearchResultItem,
  IIntentService,
} from '../contracts/intent';
import { LocationContextState } from '../contracts/location';
import domainsData from '@/data/universe/domains.json';
import subdomainsData from '@/data/universe/subdomains.json';
import capabilitiesData from '@/data/universe/solution-capabilities.json';
import solutionsData from '@/data/universe/solutions.json';
import { SAMPLE_SERVICES } from './locationService';

export const SUGGESTED_INTENTS: string[] = [
  'Build a village event marketplace',
  'Find banana tissue culture suppliers near me',
  'Create an AI data solution',
  'Find catering services in Coimbatore',
  'Hyperlocal grocery & multi-vendor delivery',
  'Enterprise cloud telemetry & microservices',
  'Micro-finance & rural credit platform',
  'Smart agricultural supply chain & cold storage',
];

class IntentService implements IIntentService {
  private currentIntent: IntentState = {
    query: '',
    rawQuery: '',
    domainId: null,
    subdomainId: null,
    capabilityId: null,
    solutionId: null,
    serviceId: null,
    providerId: null,
    category: null,
    intentType: 'general',
  };

  private listeners: Array<(intent: IntentState) => void> = [];

  getIntent(): IntentState {
    return this.currentIntent;
  }

  setIntent(intent: Partial<IntentState>): void {
    this.currentIntent = {
      ...this.currentIntent,
      ...intent,
    };
    this.notify();
  }

  getSuggestedIntents(): string[] {
    return SUGGESTED_INTENTS;
  }

  async parseIntent(query: string): Promise<IntentState> {
    const q = query.trim().toLowerCase();
    const parsed: IntentState = {
      query,
      rawQuery: query,
      domainId: null,
      subdomainId: null,
      capabilityId: null,
      solutionId: null,
      serviceId: null,
      providerId: null,
      category: null,
      intentType: 'general',
    };

    if (!q) return parsed;

    // 1. Check direct domain match
    const domains = domainsData as any[];
    const matchedDomain = domains.find(
      (d) =>
        d.id?.toLowerCase() === q ||
        d.name?.toLowerCase().includes(q) ||
        d.key?.toLowerCase().includes(q),
    );
    if (matchedDomain) {
      parsed.domainId = matchedDomain.id;
      parsed.intentType = 'domain';
      parsed.category = matchedDomain.name;
    }

    // 2. Check solution match
    const solutions = solutionsData as any[];
    const matchedSolution = solutions.find(
      (s) =>
        s.id?.toLowerCase() === q ||
        s.name?.toLowerCase().includes(q) ||
        s.key?.toLowerCase().includes(q),
    );
    if (matchedSolution) {
      parsed.solutionId = matchedSolution.id;
      parsed.domainId = matchedSolution.domainIds?.[0] || parsed.domainId;
      parsed.intentType = 'solution';
    }

    // 3. Keyword Heuristics for natural language
    if (q.includes('market') || q.includes('vendor') || q.includes('commerce') || q.includes('event')) {
      parsed.domainId = parsed.domainId || 'D01';
      parsed.category = 'Marketplace & Events';
    } else if (q.includes('banana') || q.includes('agri') || q.includes('farm') || q.includes('rural')) {
      parsed.domainId = parsed.domainId || 'D07';
      parsed.category = 'Agriculture & Rural';
    } else if (q.includes('ai') || q.includes('model') || q.includes('data') || q.includes('vector')) {
      parsed.domainId = parsed.domainId || 'D05';
      parsed.category = 'AI & Data';
    } else if (q.includes('cater') || q.includes('food') || q.includes('wedding')) {
      parsed.domainId = parsed.domainId || 'D01';
      parsed.serviceId = 'SRV-001';
      parsed.category = 'Hospitality & Catering';
    } else if (q.includes('local') || q.includes('delivery') || q.includes('courier')) {
      parsed.domainId = parsed.domainId || 'D02';
      parsed.category = 'Hyperlocal';
    }

    return parsed;
  }

  async search(query: string, location?: LocationContextState): Promise<SearchResultItem[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: SearchResultItem[] = [];

    // 1. Search Solutions
    const solutions = solutionsData as any[];
    solutions.forEach((sol) => {
      if (
        sol.name.toLowerCase().includes(q) ||
        sol.id.toLowerCase().includes(q) ||
        (sol.description && sol.description.toLowerCase().includes(q))
      ) {
        results.push({
          id: sol.id,
          type: 'solution',
          name: sol.name,
          description: sol.description,
          domainId: sol.domainIds?.[0] || 'D01',
          category: 'Solution Architecture',
          badge: sol.mode || 'Composed',
        });
      }
    });

    // 2. Search Domains
    const domains = domainsData as any[];
    domains.forEach((dom) => {
      if (
        dom.name.toLowerCase().includes(q) ||
        dom.id.toLowerCase().includes(q) ||
        (dom.description && dom.description.toLowerCase().includes(q))
      ) {
        results.push({
          id: dom.id,
          type: 'domain',
          name: `${dom.id} — ${dom.name}`,
          description: dom.description,
          domainId: dom.id,
          category: 'Domain Galaxy',
          badge: 'Domain',
        });
      }
    });

    // 3. Search Capabilities
    const capabilities = capabilitiesData as any[];
    capabilities.forEach((cap) => {
      if (cap.name.toLowerCase().includes(q) || cap.id.toLowerCase().includes(q)) {
        results.push({
          id: cap.id,
          type: 'capability',
          name: cap.name,
          description: `Category: ${cap.category}`,
          domainId: cap.domainId,
          category: 'Capability',
          badge: 'API Mesh',
        });
      }
    });

    // 4. Search Location-Aware Services & Providers
    SAMPLE_SERVICES.forEach((srv) => {
      const matchText =
        srv.name.toLowerCase().includes(q) ||
        srv.category.toLowerCase().includes(q) ||
        srv.location.city.toLowerCase().includes(q) ||
        srv.location.pincode.includes(q) ||
        (srv.description && srv.description.toLowerCase().includes(q));

      if (matchText) {
        results.push({
          id: srv.id,
          type: 'service',
          name: srv.name,
          description: srv.description,
          category: srv.category,
          badge: srv.location.city,
          location: {
            city: srv.location.city,
            pincode: srv.location.pincode,
            latitude: srv.location.latitude,
            longitude: srv.location.longitude,
            address: srv.location.address,
          },
          meta: {
            providerId: srv.providerId,
            rating: srv.rating,
          },
        });
      }
    });

    return results.slice(0, 8);
  }

  subscribe(listener: (intent: IntentState) => void): () => void {
    this.listeners.push(listener);
    listener(this.currentIntent);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l(this.currentIntent));
  }
}

export const intentService = new IntentService();
