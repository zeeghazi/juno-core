import type { Satellite } from '../types/satellite.types';
export declare const satelliteUrl: ({ satelliteId: customSatelliteId, container: customContainer }: Satellite) => string;
export declare const customOrEnvSatelliteId: ({ satelliteId }: Pick<Satellite, 'satelliteId'>) => Pick<Satellite, 'satelliteId'>;
export declare const customOrEnvContainer: ({ container: customContainer }: Pick<Satellite, 'container'>) => Pick<Satellite, 'container'>;
