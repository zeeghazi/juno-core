import type { AssetNoContent } from '../../declarations/satellite/satellite.did';
import type { ListParams, ListResults } from '../types/list.types';
import type { Satellite } from '../types/satellite.types';
import type { AssetKey, Storage } from '../types/storage.types';
export declare const uploadAsset: ({ data, filename, collection, headers, token, fullPath, encoding, description, satellite }: Required<Omit<Storage, "description" | "token" | "encoding">> & Pick<Storage, "description" | "token" | "encoding"> & {
    satellite: Satellite;
}) => Promise<void>;
export declare const listAssets: ({ collection, satellite, filter }: {
    collection: string;
    satellite: Satellite;
    filter: ListParams;
}) => Promise<ListResults<AssetNoContent>>;
export declare const deleteAsset: ({ collection, fullPath, satellite }: {
    collection: string;
    satellite: Satellite;
} & Pick<AssetKey, "fullPath">) => Promise<void>;
export declare const deleteManyAssets: ({ assets, satellite }: {
    assets: ({
        collection: string;
    } & Pick<AssetKey, 'fullPath'>)[];
    satellite: Satellite;
}) => Promise<void>;
export declare const getAsset: ({ collection, fullPath, satellite }: {
    collection: string;
    satellite: Satellite;
} & Pick<AssetKey, "fullPath">) => Promise<AssetNoContent | undefined>;
export declare const getManyAssets: ({ assets, satellite }: {
    assets: ({
        collection: string;
    } & Pick<AssetKey, 'fullPath'>)[];
    satellite: Satellite;
}) => Promise<(AssetNoContent | undefined)[]>;
