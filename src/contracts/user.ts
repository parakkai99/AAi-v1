/**
 * ArchitectAny AAi - Global User & Role Contracts
 */

export type UserRole =
  | 'ADMIN'
  | 'CHIEF_ARCHITECT'
  | 'ARCHITECT'
  | 'DEVELOPER'
  | 'SOLUTION_BUILDER'
  | 'PROVIDER'
  | 'SELLER'
  | 'CLIENT'
  | 'CUSTOMER'
  | 'VIEWER';

export type Permission =
  | 'universe.view'
  | 'domain.view'
  | 'domain.manage'
  | 'subdomain.manage'
  | 'capability.manage'
  | 'solution.view'
  | 'solution.manage'
  | 'solution.compose'
  | 'service.view'
  | 'service.manage'
  | 'provider.view'
  | 'provider.manage'
  | 'user.manage'
  | 'system.admin'
  | 'system.manage';

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  role: UserRole;
  title: string;
  locale: string;
  countryCode: string;
  timezone: string;
  status: 'active' | 'inactive' | 'suspended';
  avatar?: string;
  signature?: string;
  permissions: Permission[];
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  ADMIN: [
    'universe.view',
    'domain.view',
    'domain.manage',
    'subdomain.manage',
    'capability.manage',
    'solution.view',
    'solution.manage',
    'solution.compose',
    'service.view',
    'service.manage',
    'provider.view',
    'provider.manage',
    'user.manage',
    'system.admin',
    'system.manage',
  ],
  CHIEF_ARCHITECT: [
    'universe.view',
    'domain.view',
    'domain.manage',
    'subdomain.manage',
    'capability.manage',
    'solution.view',
    'solution.manage',
    'solution.compose',
    'service.view',
    'service.manage',
    'provider.view',
    'provider.manage',
    'user.manage',
    'system.admin',
    'system.manage',
  ],
  ARCHITECT: [
    'universe.view',
    'domain.view',
    'solution.view',
    'solution.compose',
    'solution.manage',
    'capability.manage',
    'service.view',
    'provider.view',
  ],
  DEVELOPER: [
    'universe.view',
    'domain.view',
    'solution.view',
    'solution.compose',
    'capability.manage',
    'service.view',
  ],
  SOLUTION_BUILDER: [
    'universe.view',
    'domain.view',
    'solution.view',
    'solution.compose',
    'service.view',
    'provider.view',
  ],
  PROVIDER: [
    'universe.view',
    'service.view',
    'service.manage',
    'provider.view',
    'provider.manage',
  ],
  SELLER: [
    'universe.view',
    'service.view',
    'service.manage',
    'provider.view',
  ],
  CLIENT: [
    'universe.view',
    'domain.view',
    'solution.view',
    'service.view',
  ],
  CUSTOMER: [
    'universe.view',
    'solution.view',
    'service.view',
  ],
  VIEWER: [
    'universe.view',
    'domain.view',
    'solution.view',
  ],
};
