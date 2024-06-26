import type { AssetNoContent } from '../../declarations/satellite/satellite.did';
import type { ListParams } from '../types/list.types';
import type { SatelliteOptions } from '../types/satellite.types';
import type { AssetKey, Assets, Storage } from '../types/storage.types';
export declare const uploadBlob: (params: Storage & {
    satellite?: SatelliteOptions;
}) => Promise<AssetKey>;
export declare const uploadFile: (params: Partial<Pick<Storage, 'filename'>> & Omit<Storage, 'filename' | 'data'> & {
    data: File;
} & {
    satellite?: SatelliteOptions;
}) => Promise<AssetKey>;
export declare const listAssets: ({ collection, satellite: satelliteOptions, filter }: {
    collection: string;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
    filter?: ListParams | undefined;
}) => Promise<Assets>;
export declare const deleteAsset: ({ collection, fullPath, satellite }: {
    collection: string;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
} & Pick<AssetKey, "fullPath">) => Promise<void>;
export declare const deleteManyAssets: ({ assets, satellite }: {
    assets: ({
        collection: string;
    } & Pick<AssetKey, 'fullPath'>)[];
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
} & Pick<AssetKey, "fullPath">) => Promise<void>;
export declare const getAsset: ({ satellite, ...rest }: {
    collection: string;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
} & Pick<AssetKey, "fullPath">) => Promise<AssetNoContent | undefined>;
export declare const getManyAssets: ({ satellite, ...rest }: {
    assets: ({
        collection: string;
    } & Pick<AssetKey, 'fullPath'>)[];
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<(AssetNoContent | undefined)[]>;
