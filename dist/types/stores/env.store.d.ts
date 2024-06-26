import type { Environment } from '../types/env.types';
import { Store } from './store';
export declare class EnvStore extends Store<Environment | undefined> {
    private static instance;
    private env;
    private constructor();
    static getInstance(): EnvStore;
    set(env: Environment | undefined): void;
    get(): Environment | undefined;
    subscribe(callback: (data: Environment | null | undefined) => void): () => void;
}
