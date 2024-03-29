import type { ActorMethod, ActorSubclass } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';
import type { Satellite } from '../types/satellite.types';
export declare const createActor: <T = Record<string, ActorMethod<unknown[], unknown>>>({ satelliteId: canisterId, idlFactory, identity, fetch, container }: {
    idlFactory: IDL.InterfaceFactory;
} & Required<Pick<Satellite, "satelliteId" | "identity">> & Pick<Satellite, "fetch" | "container">) => Promise<ActorSubclass<T>>;
