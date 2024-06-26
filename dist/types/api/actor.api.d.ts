import type { _SERVICE as SatelliteActor } from '../../declarations/satellite/satellite.did';
import type { Satellite } from '../types/satellite.types';
export declare const getSatelliteActor: ({ satelliteId: customSatelliteId, container: customContainer, ...rest }: Satellite) => Promise<SatelliteActor>;
