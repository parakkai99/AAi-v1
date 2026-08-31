/**
 * ArchitectAny AAi - Global Application Context
 * Provides Intent, Location, Language, User, and Auth state to all application screens
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  IntentState,
  LocationContextState,
  LanguageContextState,
  SUPPORTED_LANGUAGES,
  AuthSession,
  User,
  UserRole,
  Permission,
  ApiConfig,
  DEFAULT_API_CONFIG,
  MapProviderConfig,
} from '../types';
import { intentService } from '../services/intentService';
import { locationService, DEFAULT_LOCATION } from '../services/locationService';
import { authService } from '../services/authService';
import { t as translateKey, getTranslatedDomain } from '../services/translationService';

export interface ArchitectAnyContextValue {
  // Intent State
  intent: IntentState;
  setIntent: (intent: Partial<IntentState>) => void;
  clearIntent: () => void;

  // Location State
  location: LocationContextState;
  setLocation: (location: Partial<LocationContextState>) => void;
  resolvePincode: (pincode: string) => Promise<void>;
  detectLocation: () => Promise<void>;

  // Language State
  language: LanguageContextState;
  setLanguage: (lang: LanguageContextState) => void;
  supportedLanguages: LanguageContextState[];
  t: (key: string) => string;
  getDomainName: (domainId: string, fallback: string) => string;
  getDomainDesc: (domainId: string, fallback?: string) => string;

  // Auth & User State
  auth: AuthSession;
  user: User | null;
  role: UserRole | null;
  permissions: Permission[];
  hasPermission: (permission: Permission) => boolean;
  login: (userUpdate?: Partial<User>) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;

  // Global Configs
  apiConfig: ApiConfig;
  mapConfig: MapProviderConfig;
  setMapConfig: (config: Partial<MapProviderConfig>) => void;
}

const ArchitectAnyContext = createContext<ArchitectAnyContextValue | null>(null);

export interface ArchitectAnyProviderProps {
  children: ReactNode;
  initialIntent?: Partial<IntentState>;
  initialLocation?: Partial<LocationContextState>;
  initialLanguage?: LanguageContextState;
}

export const ArchitectAnyProvider: React.FC<ArchitectAnyProviderProps> = ({
  children,
  initialIntent,
  initialLocation,
  initialLanguage,
}) => {
  // 1. Intent State
  const [intent, setIntentState] = useState<IntentState>(() => ({
    ...intentService.getIntent(),
    ...initialIntent,
  }));

  // 2. Location State
  const [location, setLocationState] = useState<LocationContextState>(() => ({
    ...locationService.getLocation(),
    ...initialLocation,
  }));

  // 3. Language State (Default: en-IN)
  const [language, setLanguageState] = useState<LanguageContextState>(
    initialLanguage || SUPPORTED_LANGUAGES[0],
  );

  // 4. Auth & User State
  const [auth, setAuthState] = useState<AuthSession>(() => authService.getSession());

  // 5. Configs
  const [apiConfig] = useState<ApiConfig>(DEFAULT_API_CONFIG);
  const [mapConfig, setMapConfigState] = useState<MapProviderConfig>(() =>
    locationService.getMapConfig(),
  );

  // Subscriptions to services
  useEffect(() => {
    const unsubIntent = intentService.subscribe((newIntent) => {
      setIntentState(newIntent);
    });
    const unsubLocation = locationService.subscribe((newLoc) => {
      setLocationState(newLoc);
    });
    const unsubAuth = authService.subscribe((newAuth) => {
      setAuthState(newAuth);
    });

    return () => {
      unsubIntent();
      unsubLocation();
      unsubAuth();
    };
  }, []);

  const handleSetIntent = (update: Partial<IntentState>) => {
    intentService.setIntent(update);
  };

  const handleClearIntent = () => {
    intentService.setIntent({
      query: '',
      rawQuery: '',
      domainId: null,
      subdomainId: null,
      capabilityId: null,
      solutionId: null,
      serviceId: null,
      providerId: null,
      category: null,
    });
  };

  const handleSetLocation = (update: Partial<LocationContextState>) => {
    locationService.setLocation(update);
  };

  const handleResolvePincode = async (pincode: string) => {
    const res = await locationService.resolvePincode(pincode);
    if (res) {
      locationService.setLocation(res);
    }
  };

  const handleDetectLocation = async () => {
    await locationService.requestCurrentLocation();
  };

  const handleSetLanguage = (lang: LanguageContextState) => {
    setLanguageState(lang);
  };

  const handleSetMapConfig = (config: Partial<MapProviderConfig>) => {
    locationService.setMapConfig(config);
    setMapConfigState(locationService.getMapConfig());
  };

  const value: ArchitectAnyContextValue = {
    intent,
    setIntent: handleSetIntent,
    clearIntent: handleClearIntent,

    location,
    setLocation: handleSetLocation,
    resolvePincode: handleResolvePincode,
    detectLocation: handleDetectLocation,

    language,
    setLanguage: handleSetLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    t: (key: string) => translateKey(key, language.code),
    getDomainName: (domainId: string, fallback: string) =>
      getTranslatedDomain(domainId, fallback, undefined, language.code).name,
    getDomainDesc: (domainId: string, fallback?: string) =>
      getTranslatedDomain(domainId, fallback || '', fallback, language.code).description,

    auth,
    user: auth.user,
    role: auth.user?.role || null,
    permissions: auth.user?.permissions || [],
    hasPermission: (perm: Permission) => authService.hasPermission(perm),
    login: (u) => authService.login(u),
    logout: () => authService.logout(),
    setRole: (r) => authService.setRole(r),

    apiConfig,
    mapConfig,
    setMapConfig: handleSetMapConfig,
  };

  return (
    <ArchitectAnyContext.Provider value={value}>
      {children}
    </ArchitectAnyContext.Provider>
  );
};

export function useArchitectAny(): ArchitectAnyContextValue {
  const context = useContext(ArchitectAnyContext);
  if (!context) {
    throw new Error('useArchitectAny must be used within an ArchitectAnyProvider');
  }
  return context;
}
