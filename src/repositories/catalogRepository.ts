/**
 * Repository interface and JSON implementation for the Canonical 5-Layer Capability Catalog
 */

import {
  CatalogItem,
  DomainItem,
  SubdomainItem,
  CapabilityItem,
  SolutionBundleItem,
  SolutionItem,
  CapabilityCatalogData,
} from '../contracts/catalog';
import catalogDataRaw from '../../data/universe/capability-catalog.json';

export interface ICapabilityCatalogRepository {
  getDomains(): Promise<DomainItem[]>;
  getSubdomains(domainId?: string): Promise<SubdomainItem[]>;
  getCapabilities(subdomainId?: string): Promise<CapabilityItem[]>;
  getSolutionBundles(capabilityId?: string): Promise<SolutionBundleItem[]>;
  getSolutions(solutionBundleId?: string, domainId?: string): Promise<SolutionItem[]>;
  getItemById(id: string): Promise<CatalogItem | null>;
  searchItems(query: string): Promise<CatalogItem[]>;
}

export class JsonCapabilityCatalogRepository implements ICapabilityCatalogRepository {
  private data: CapabilityCatalogData;

  constructor(customData?: CapabilityCatalogData) {
    this.data = (customData || catalogDataRaw) as unknown as CapabilityCatalogData;
  }

  async getDomains(): Promise<DomainItem[]> {
    return this.data.domains;
  }

  async getSubdomains(domainId?: string): Promise<SubdomainItem[]> {
    if (!domainId) return this.data.subdomains;
    return this.data.subdomains.filter((s) => s.domainId === domainId || s.parentId === domainId);
  }

  async getCapabilities(subdomainId?: string): Promise<CapabilityItem[]> {
    if (!subdomainId) return this.data.capabilities;
    return this.data.capabilities.filter((c) => c.subdomainId === subdomainId || c.parentId === subdomainId);
  }

  async getSolutionBundles(capabilityId?: string): Promise<SolutionBundleItem[]> {
    if (!capabilityId) return this.data.solutionBundles;
    return this.data.solutionBundles.filter((b) => b.capabilityId === capabilityId || b.parentId === capabilityId);
  }

  async getSolutions(solutionBundleId?: string, domainId?: string): Promise<SolutionItem[]> {
    let list = this.data.solutions;
    if (solutionBundleId) {
      list = list.filter((s) => s.solutionBundleId === solutionBundleId || s.parentId === solutionBundleId);
    }
    if (domainId) {
      list = list.filter((s) => s.domainId === domainId);
    }
    return list;
  }

  async getItemById(id: string): Promise<CatalogItem | null> {
    const allItems: CatalogItem[] = [
      ...this.data.domains,
      ...this.data.subdomains,
      ...this.data.capabilities,
      ...this.data.solutionBundles,
      ...this.data.solutions,
    ];
    return allItems.find((item) => item.id.toLowerCase() === id.toLowerCase()) || null;
  }

  async searchItems(query: string): Promise<CatalogItem[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const allItems: CatalogItem[] = [
      ...this.data.domains,
      ...this.data.subdomains,
      ...this.data.capabilities,
      ...this.data.solutionBundles,
      ...this.data.solutions,
    ];

    return allItems.filter((item) => {
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));
      const matchAliases = item.aliases?.some((a) => a.toLowerCase().includes(q));
      const matchId = item.id.toLowerCase().includes(q);
      return matchName || matchDesc || matchKeywords || matchAliases || matchId;
    });
  }
}

export const catalogRepository = new JsonCapabilityCatalogRepository();
