import type { InternetIdentityConfig, NFIDConfig, Provider, SignInOptions } from '../types/auth.types';
export interface AuthProviderSignInOptions {
    identityProvider: string;
    windowOpenerFeatures?: string;
}
export interface AuthProvider {
    readonly id: Provider;
    signInOptions: (options: Pick<SignInOptions, 'windowed'>) => AuthProviderSignInOptions;
}
export declare class InternetIdentityProvider implements AuthProvider {
    #private;
    constructor({ domain }: InternetIdentityConfig);
    get id(): Provider;
    signInOptions({ windowed }: Pick<SignInOptions, 'windowed'>): AuthProviderSignInOptions;
}
export declare class NFIDProvider implements AuthProvider {
    #private;
    constructor({ appName, logoUrl }: NFIDConfig);
    get id(): Provider;
    signInOptions({ windowed }: Pick<SignInOptions, 'windowed'>): AuthProviderSignInOptions;
}
