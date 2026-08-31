/**
 * ArchitectAny AAi - Global Location Contracts & Provider Abstraction
 */

export interface LocationContextState {
  countryCode: string; // e.g. "IN"
  stateCode: string | null; // e.g. "TN", "KA"
  district: string | null; // e.g. "Coimbatore", "Bengaluru Urban"
  city: string | null; // e.g. "Coimbatore", "Bengaluru"
  area: string | null; // e.g. "RS Puram", "Indiranagar"
  pincode: string | null; // e.g. "641001", "560001"
  latitude: number | null; // e.g. 11.0168
  longitude: number | null; // e.g. 76.9558
  displayName: string | null; // e.g. "Coimbatore, Tamil Nadu (641001)"
  source: 'manual' | 'gps' | 'pincode' | 'default' | 'search';
}

export interface LocationResult extends LocationContextState {}

export interface LocationProvider {
  search(query: string): Promise<LocationResult[]>;
  reverseGeocode(latitude: number, longitude: number): Promise<LocationResult | null>;
  getCurrentLocation(): Promise<LocationResult | null>;
  resolvePincode(pincode: string): Promise<LocationResult | null>;
}

export type SupportedMapProvider = 'mappls' | 'osm' | 'mapbox' | 'google' | 'custom';

export interface MapProviderConfig {
  provider: SupportedMapProvider;
  enabled: boolean;
  apiBaseUrl?: string;
  searchEndpoint?: string;
  reverseGeocodeEndpoint?: string;
  mapEndpoint?: string;
  apiKeyEnv?: string;
}

export interface LocationFilter {
  countryCode?: string;
  stateCode?: string;
  district?: string;
  city?: string;
  area?: string;
  pincode?: string;
  radiusKm?: number;
  latitude?: number;
  longitude?: number;
  category?: string;
  availableOnly?: boolean;
}
