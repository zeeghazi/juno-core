import type { Doc } from '../types/doc.types';
import type { ListParams, ListResults } from '../types/list.types';
import type { SatelliteOptions } from '../types/satellite.types';
export declare const getDoc: <D>({ satellite, ...rest }: {
    collection: string;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
} & Pick<Doc<D>, "key">) => Promise<Doc<D> | undefined>;
export declare const getManyDocs: ({ satellite, ...rest }: {
    docs: ({
        collection: string;
    } & Pick<Doc<any>, 'key'>)[];
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<(Doc<any> | undefined)[]>;
export declare const setDoc: <D>({ satellite, ...rest }: {
    collection: string;
    doc: Doc<D>;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<Doc<D>>;
export declare const setManyDocs: ({ satellite, ...rest }: {
    docs: {
        collection: string;
        doc: Doc<any>;
    }[];
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<Doc<any>[]>;
export declare const deleteDoc: <D>({ satellite, ...rest }: {
    collection: string;
    doc: Doc<D>;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<void>;
export declare const deleteManyDocs: ({ satellite, ...rest }: {
    docs: {
        collection: string;
        doc: Doc<any>;
    }[];
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<void>;
export declare const listDocs: <D>({ satellite, filter, ...rest }: {
    collection: string;
    filter?: ListParams | undefined;
    satellite?: Partial<import("../types/satellite.types").Satellite> | undefined;
}) => Promise<ListResults<Doc<D>>>;
