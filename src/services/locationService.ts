/**
 * ArchitectAny AAi - Location Service & Provider Abstraction
 * Direct integration with Indian Postal API & OpenStreetMap Nominatim
 * Supports live pincode resolution, coordinates, reverse geocoding & multi-provider maps
 */

import {
  LocationContextState,
  LocationResult,
  LocationProvider,
  MapProviderConfig,
  LocationFilter,
} from '../contracts/location';
import { ServiceLocationData, MapMarker } from '../contracts/service';

// Default Location Context (India · Coimbatore / Bengaluru)
export const DEFAULT_LOCATION: LocationContextState = {
  countryCode: 'IN',
  stateCode: 'TN',
  district: 'Coimbatore',
  city: 'Coimbatore',
  area: 'RS Puram',
  pincode: '641001',
  latitude: 11.0168,
  longitude: 76.9558,
  displayName: 'Coimbatore, Tamil Nadu (641001)',
  source: 'default',
};

// Built-in Indian Postal & City Index for Instant Offline Resolution
export const POPULAR_INDIAN_LOCATIONS: LocationResult[] = [
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Coimbatore',
    city: 'Coimbatore',
    area: 'RS Puram',
    pincode: '641001',
    latitude: 11.0168,
    longitude: 76.9558,
    displayName: 'Coimbatore, TN (641001)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Coimbatore',
    city: 'Coimbatore',
    area: 'Gandhipuram',
    pincode: '641012',
    latitude: 11.0183,
    longitude: 76.9699,
    displayName: 'Gandhipuram, Coimbatore (641012)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Coimbatore',
    city: 'Coimbatore',
    area: 'Peelamedu',
    pincode: '641004',
    latitude: 11.0264,
    longitude: 77.0125,
    displayName: 'Peelamedu, Coimbatore (641004)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'KA',
    district: 'Bengaluru Urban',
    city: 'Bengaluru',
    area: 'Indiranagar',
    pincode: '560038',
    latitude: 12.9784,
    longitude: 77.6408,
    displayName: 'Bengaluru, KA (560038)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'KA',
    district: 'Bengaluru Urban',
    city: 'Bengaluru',
    area: 'Koramangala',
    pincode: '560034',
    latitude: 12.9352,
    longitude: 77.6245,
    displayName: 'Koramangala, Bengaluru (560034)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Chennai',
    city: 'Chennai',
    area: 'T. Nagar',
    pincode: '600017',
    latitude: 13.0418,
    longitude: 80.2341,
    displayName: 'Chennai, TN (600017)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Madurai',
    city: 'Madurai',
    area: 'Town',
    pincode: '625001',
    latitude: 9.9252,
    longitude: 78.1198,
    displayName: 'Madurai, TN (625001)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TN',
    district: 'Salem',
    city: 'Salem',
    area: 'Fairlands',
    pincode: '636016',
    latitude: 11.6643,
    longitude: 78.146,
    displayName: 'Salem, TN (636016)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'MH',
    district: 'Mumbai City',
    city: 'Mumbai',
    area: 'Nariman Point',
    pincode: '400021',
    latitude: 18.9256,
    longitude: 72.8242,
    displayName: 'Mumbai, MH (400021)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'DL',
    district: 'New Delhi',
    city: 'New Delhi',
    area: 'Connaught Place',
    pincode: '110001',
    latitude: 28.6304,
    longitude: 77.2177,
    displayName: 'New Delhi, DL (110001)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'TG',
    district: 'Hyderabad',
    city: 'Hyderabad',
    area: 'Hitec City',
    pincode: '500081',
    latitude: 17.4435,
    longitude: 78.3772,
    displayName: 'Hyderabad, TG (500081)',
    source: 'pincode',
  },
  {
    countryCode: 'IN',
    stateCode: 'KL',
    district: 'Ernakulam',
    city: 'Kochi',
    area: 'Marine Drive',
    pincode: '682031',
    latitude: 9.9816,
    longitude: 76.2753,
    displayName: 'Kochi, KL (682031)',
    source: 'pincode',
  },
];

// Sample Location-Aware Services Catalog
export const SAMPLE_SERVICES: ServiceLocationData[] = [
  {
    serviceId: 'SRV-001',
    providerId: 'PRV-001',
    name: 'Kovai Grand Wedding & Event Catering',
    category: 'Catering & Hospitality',
    description: 'Authentic South Indian & multi-cuisine event catering services',
    location: {
      address: '74, D.B. Road, RS Puram',
      area: 'RS Puram',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      country: 'IN',
      pincode: '641001',
      latitude: 11.0168,
      longitude: 76.9558,
    },
    availability: true,
    rating: 4.9,
    priceModel: 'Per Plate / Event Contract',
  },
  {
    serviceId: 'SRV-002',
    providerId: 'PRV-002',
    name: 'GreenAgri Banana Tissue Culture Nursery',
    category: 'Agriculture & Biotechnology',
    description: 'Certified G-9 & Grand Naine high-yield banana saplings and agro-consultancy',
    location: {
      address: 'Agri Innovation Park, Thondamuthur Road',
      area: 'Thondamuthur',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      country: 'IN',
      pincode: '641109',
      latitude: 10.9985,
      longitude: 76.8421,
    },
    availability: true,
    rating: 4.8,
    priceModel: 'Per Sapling / Bulk Lot',
  },
  {
    serviceId: 'SRV-003',
    providerId: 'PRV-003',
    name: 'Apex AI Vector Database & Model Hosting',
    category: 'Technology & AI Cloud',
    description: 'Enterprise generative AI pipeline, GPU inference & telemetry node',
    location: {
      address: 'Cyber Tech Park, Whitefield',
      area: 'Whitefield',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'IN',
      pincode: '560066',
      latitude: 12.9698,
      longitude: 77.75,
    },
    availability: true,
    rating: 5.0,
    priceModel: 'Usage Based / Subscription',
  },
  {
    serviceId: 'SRV-004',
    providerId: 'PRV-004',
    name: 'Hyperlocal Courier & EV Last-Mile Delivery',
    category: 'Logistics & Supply Chain',
    description: '15-minute express cold chain & merchant delivery network',
    location: {
      address: 'Anna Salai, Guindy',
      area: 'Guindy',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'IN',
      pincode: '600032',
      latitude: 13.0067,
      longitude: 80.2023,
    },
    availability: true,
    rating: 4.7,
    priceModel: 'Per Trip / Fleet Contract',
  },
  {
    serviceId: 'SRV-005',
    providerId: 'PRV-005',
    name: 'Precision Drone Aerial Survey & Mapping',
    category: 'Survey & GeoSpatial',
    description: 'DGCA-certified cadastral land mapping, 3D elevation & crop health multispectral survey',
    location: {
      address: 'Avinashi Road, Peelamedu',
      area: 'Peelamedu',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      country: 'IN',
      pincode: '641004',
      latitude: 11.0264,
      longitude: 77.0125,
    },
    availability: true,
    rating: 4.9,
    priceModel: 'Per Acre / Flight Day',
  },
];

/**
 * Free Indian Government Postal API & OpenStreetMap Live Provider
 */
export class LiveIndiaLocationProvider implements LocationProvider {
  /**
   * Search for locations using OpenStreetMap Nominatim & fallback index
   */
  async search(query: string): Promise<LocationResult[]> {
    const q = query.trim();
    if (!q) return POPULAR_INDIAN_LOCATIONS;

    // Check if query is 6-digit Indian pincode
    const isPincode = /^\d{6}$/.test(q);
    if (isPincode) {
      const pinResult = await this.resolvePincode(q);
      if (pinResult) return [pinResult];
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=5&countrycodes=in&q=${encodeURIComponent(
          q,
        )}`,
        {
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        },
      );
      clearTimeout(timeoutId);

      if (res.ok) {
        const results = await res.json();
        if (Array.isArray(results) && results.length > 0) {
          return results.map((item: any) => ({
            countryCode: 'IN',
            stateCode: 'IN',
            district: item.display_name.split(',')[1]?.trim() || 'India',
            city: item.display_name.split(',')[0] || q,
            area: item.display_name.split(',')[1]?.trim() || null,
            pincode: null,
            displayName: item.display_name,
            latitude: Number(item.lat),
            longitude: Number(item.lon),
            source: 'search' as const,
          }));
        }
      }
    } catch (e) {
      console.warn('Live geocode search fallback used:', e);
    }

    // Fallback to internal catalog
    const lower = q.toLowerCase();
    return POPULAR_INDIAN_LOCATIONS.filter(
      (loc) =>
        loc.pincode?.includes(lower) ||
        loc.city?.toLowerCase().includes(lower) ||
        loc.area?.toLowerCase().includes(lower) ||
        loc.district?.toLowerCase().includes(lower) ||
        loc.displayName?.toLowerCase().includes(lower),
    );
  }

  /**
   * Reverse geocode coordinates using OpenStreetMap Nominatim
   */
  async reverseGeocode(latitude: number, longitude: number): Promise<LocationResult | null> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        },
      );
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.address) {
          const addr = data.address;
          const city = addr.city || addr.town || addr.village || addr.county || 'India';
          const area = addr.suburb || addr.neighbourhood || addr.road || '';
          const pincode = addr.postcode?.replace(/\D/g, '').slice(0, 6);
          const state = addr.state || '';

          return {
            countryCode: 'IN',
            stateCode: state ? state.slice(0, 2).toUpperCase() : 'IN',
            district: addr.state_district || addr.county || city,
            city,
            area,
            pincode,
            latitude,
            longitude,
            displayName: data.display_name || `${city}, ${state}`,
            source: 'gps',
          };
        }
      }
    } catch (e) {
      console.warn('Live reverse geocoding fallback used:', e);
    }

    // Nearest popular location fallback
    let nearest: LocationResult = POPULAR_INDIAN_LOCATIONS[0];
    let minDist = Infinity;
    for (const loc of POPULAR_INDIAN_LOCATIONS) {
      if (loc.latitude && loc.longitude) {
        const d = Math.hypot(loc.latitude - latitude, loc.longitude - longitude);
        if (d < minDist) {
          minDist = d;
          nearest = loc;
        }
      }
    }

    return {
      ...nearest,
      latitude,
      longitude,
      source: 'gps',
      displayName: `${nearest.city || 'Location'} (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`,
    };
  }

  /**
   * Resolve 6-digit Indian Postal Code using the official free India Post API
   * and fallback to OSM or offline index
   */
  async resolvePincode(pincode: string): Promise<LocationResult | null> {
    const cleanPin = pincode.replace(/\D/g, '').slice(0, 6);
    if (cleanPin.length !== 6) return null;

    // 1. Try Indian Postal API: api.postalpincode.in
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json[0]?.Status === 'Success' && json[0]?.PostOffice?.length > 0) {
          const po = json[0].PostOffice[0];
          const area = po.Name;
          const district = po.District;
          const state = po.State;
          const city = po.Division || district || area;

          // Resolve coordinates using OSM for this specific pincode / post office
          let lat = 20.5937;
          let lng = 78.9629;

          try {
            const osmRes = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(
                `${area}, ${district}, ${state} ${cleanPin}`,
              )}`,
            );
            if (osmRes.ok) {
              const osmData = await osmRes.json();
              if (osmData?.[0]) {
                lat = Number(osmData[0].lat);
                lng = Number(osmData[0].lon);
              }
            }
          } catch {
            // Coordinate fetch failed, keep approximate state coords
          }

          // Check if coordinates were found or match local known cities
          if (lat === 20.5937 && lng === 78.9629) {
            const match = POPULAR_INDIAN_LOCATIONS.find(
              (l) => l.pincode === cleanPin || l.district?.toLowerCase() === district?.toLowerCase(),
            );
            if (match && match.latitude && match.longitude) {
              lat = match.latitude;
              lng = match.longitude;
            }
          }

          return {
            countryCode: 'IN',
            stateCode: state.slice(0, 2).toUpperCase(),
            district,
            city,
            area,
            pincode: cleanPin,
            latitude: lat,
            longitude: lng,
            displayName: `${area}, ${district}, ${state} (${cleanPin})`,
            source: 'pincode',
          };
        }
      }
    } catch (e) {
      console.warn('India Post API lookup fallback:', e);
    }

    // 2. Try OSM Nominatim search directly with postal code
    try {
      const osmRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&postalcode=${cleanPin}`,
      );
      if (osmRes.ok) {
        const osmData = await osmRes.json();
        if (osmData?.[0]) {
          const item = osmData[0];
          return {
            countryCode: 'IN',
            stateCode: 'IN',
            district: item.display_name.split(',')[1]?.trim() || 'India',
            city: item.display_name.split(',')[0] || `Pincode ${cleanPin}`,
            area: item.display_name.split(',')[1]?.trim() || null,
            pincode: cleanPin,
            latitude: Number(item.lat),
            longitude: Number(item.lon),
            displayName: item.display_name,
            source: 'pincode',
          };
        }
      }
    } catch {
      // Ignore
    }

    // 3. Fallback to built-in cache or synthetic approximation
    const found = POPULAR_INDIAN_LOCATIONS.find((l) => l.pincode === cleanPin);
    if (found) return found;

    return {
      countryCode: 'IN',
      stateCode: cleanPin.startsWith('64') ? 'TN' : cleanPin.startsWith('56') ? 'KA' : 'IN',
      district: cleanPin.startsWith('64') ? 'Coimbatore' : 'India Region',
      city: cleanPin.startsWith('64') ? 'Coimbatore' : 'India',
      area: `PIN ${cleanPin}`,
      pincode: cleanPin,
      latitude: 11.0168,
      longitude: 76.9558,
      displayName: `Pincode ${cleanPin}, India`,
      source: 'pincode',
    };
  }

  /**
   * Browser Geolocation detection with reverse geocode
   */
  async getCurrentLocation(): Promise<LocationResult | null> {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      return DEFAULT_LOCATION;
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const resolved = await this.reverseGeocode(latitude, longitude);
          resolve(resolved || DEFAULT_LOCATION);
        },
        () => {
          resolve(DEFAULT_LOCATION);
        },
        { timeout: 6000, enableHighAccuracy: false },
      );
    });
  }
}

class LocationService {
  private provider: LocationProvider = new LiveIndiaLocationProvider();
  private currentLocation: LocationContextState = DEFAULT_LOCATION;
  private mapConfig: MapProviderConfig = {
    provider: 'osm',
    enabled: true,
  };
  private listeners: Array<(loc: LocationContextState) => void> = [];

  setProvider(provider: LocationProvider): void {
    this.provider = provider;
  }

  getProvider(): LocationProvider {
    return this.provider;
  }

  getLocation(): LocationContextState {
    return this.currentLocation;
  }

  getMapConfig(): MapProviderConfig {
    return this.mapConfig;
  }

  setMapConfig(config: Partial<MapProviderConfig>): void {
    this.mapConfig = { ...this.mapConfig, ...config };
  }

  setLocation(location: Partial<LocationContextState>): void {
    this.currentLocation = {
      ...this.currentLocation,
      ...location,
    };
    this.notify();
  }

  async searchLocations(query: string): Promise<LocationResult[]> {
    return this.provider.search(query);
  }

  async resolvePincode(pincode: string): Promise<LocationResult | null> {
    const res = await this.provider.resolvePincode(pincode);
    if (res) {
      this.setLocation(res);
    }
    return res;
  }

  async requestCurrentLocation(): Promise<LocationResult | null> {
    const loc = await this.provider.getCurrentLocation();
    if (loc) {
      this.setLocation(loc);
    }
    return loc;
  }

  findNearbyServices(filter: LocationFilter = {}): ServiceLocationData[] {
    const current = this.currentLocation;
    const targetPin = filter.pincode || current.pincode;
    const targetCity = (filter.city || current.city || '').toLowerCase();

    return SAMPLE_SERVICES.filter((srv) => {
      if (filter.category && !srv.category.toLowerCase().includes(filter.category.toLowerCase())) {
        return false;
      }
      if (targetPin && srv.location.pincode === targetPin) return true;
      if (targetCity && srv.location.city.toLowerCase() === targetCity) return true;
      return true;
    });
  }

  getMapMarkers(services: ServiceLocationData[]): MapMarker[] {
    return services.map((srv) => ({
      id: srv.serviceId,
      type: 'service',
      name: srv.name,
      latitude: srv.location.latitude,
      longitude: srv.location.longitude,
      serviceId: srv.serviceId,
      providerId: srv.providerId,
      category: srv.category,
      address: `${srv.location.address}, ${srv.location.city} - ${srv.location.pincode}`,
      pincode: srv.location.pincode,
    }));
  }

  subscribe(listener: (loc: LocationContextState) => void): () => void {
    this.listeners.push(listener);
    listener(this.currentLocation);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l(this.currentLocation));
  }
}

export const locationService = new LocationService();
