import type { User } from './types/auth.types';
import type { Environment } from './types/env.types';
import type { Unsubscribe } from './types/subscription.types';
export * from './providers/auth.providers';
export { signIn, signOut, unsafeIdentity } from './services/auth.services';
export * from './services/doc.services';
export * from './services/storage.services';
export * from './types/auth.types';
export * from './types/doc.types';
export * from './types/env.types';
export { ListOrder, ListPaginate, ListParams, ListResults } from './types/list.types';
export * from './types/satellite.types';
export * from './types/storage.types';
export * from './types/subscription.types';
export declare const initJuno: (env: Environment) => Promise<Unsubscribe[]>;
export declare const authSubscribe: (callback: (authUser: User | null) => void) => Unsubscribe;