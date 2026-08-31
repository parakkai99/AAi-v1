/**
 * ArchitectAny AAi - Identity & Authentication Service
 * Manages user lifecycle, roles, data-driven permissions, and sessions
 */

import { User, UserRole, Permission, ROLE_PERMISSIONS } from '../contracts/user';
import { AuthSession, AuthState, IAuthService } from '../contracts/auth';

export const CHIEF_ARCHITECT_USER: User = {
  id: 'USR-000001',
  username: 'admin',
  displayName: 'Vijay Kumar K',
  email: 'vijaya.k.kumar@architectany.com',
  role: 'CHIEF_ARCHITECT',
  title: 'Chief Architect & Inventor',
  locale: 'en-IN',
  countryCode: 'IN',
  timezone: 'Asia/Kolkata',
  status: 'active',
  avatar: '/assets/vijay-profile-sm.jpg',
  signature: '/assets/vijay-profile-sm.jpg',
  permissions: ROLE_PERMISSIONS.CHIEF_ARCHITECT,
};

class AuthService implements IAuthService {
  private currentSession: AuthSession = {
    state: 'authenticated',
    user: CHIEF_ARCHITECT_USER,
    token: 'aai-session-token-live',
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  private listeners: Array<(session: AuthSession) => void> = [];

  getSession(): AuthSession {
    return this.currentSession;
  }

  getUser(): User | null {
    return this.currentSession.user;
  }

  getRole(): UserRole | null {
    return this.currentSession.user?.role || null;
  }

  getPermissions(): Permission[] {
    return this.currentSession.user?.permissions || [];
  }

  isAuthenticated(): boolean {
    return this.currentSession.state === 'authenticated' && !!this.currentSession.user;
  }

  hasPermission(permission: Permission): boolean {
    if (!this.isAuthenticated() || !this.currentSession.user) {
      return false;
    }
    return this.currentSession.user.permissions.includes(permission);
  }

  login(userUpdate?: Partial<User>): void {
    const user: User = {
      ...CHIEF_ARCHITECT_USER,
      ...userUpdate,
    };
    user.permissions = ROLE_PERMISSIONS[user.role] || user.permissions;

    this.currentSession = {
      state: 'authenticated',
      user,
      token: 'aai-session-token-live',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };
    this.notify();
  }

  logout(): void {
    this.currentSession = {
      state: 'unauthenticated',
      user: null,
      token: undefined,
      expiresAt: undefined,
    };
    this.notify();
  }

  setRole(role: UserRole): void {
    if (this.currentSession.user) {
      const updatedUser: User = {
        ...this.currentSession.user,
        role,
        permissions: ROLE_PERMISSIONS[role] || [],
      };
      this.currentSession = {
        ...this.currentSession,
        user: updatedUser,
      };
      this.notify();
    }
  }

  setSessionState(state: AuthState): void {
    this.currentSession = {
      ...this.currentSession,
      state,
      user: state === 'authenticated' ? this.currentSession.user || CHIEF_ARCHITECT_USER : null,
    };
    this.notify();
  }

  subscribe(listener: (session: AuthSession) => void): () => void {
    this.listeners.push(listener);
    listener(this.currentSession);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l(this.currentSession));
  }
}

export const authService = new AuthService();
