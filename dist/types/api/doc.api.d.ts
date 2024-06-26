import type { Doc } from '../types/doc.types';
import type { ListParams, ListResults } from '../types/list.types';
import type { Satellite } from '../types/satellite.types';
export declare const getDoc: <D>({ collection, key, satellite }: {
    collection: string;
    satellite: Satellite;
} & Pick<Doc<D>, "key">) => Promise<Doc<D> | undefined>;
export declare const getManyDocs: ({ docs, satellite }: {
    docs: ({
        collection: string;
    } & Pick<Doc<any>, 'key'>)[];
    satellite: Satellite;
}) => Promise<(Doc<any> | undefined)[]>;
export declare const setDoc: <D>({ collection, doc, satellite }: {
    collection: string;
    doc: Doc<D>;
    satellite: Satellite;
}) => Promise<Doc<D>>;
export declare const setManyDocs: ({ docs, satellite }: {
    docs: {
        collection: string;
        doc: Doc<any>;
    }[];
    satellite: Satellite;
}) => Promise<Doc<any>[]>;
export declare const deleteDoc: <D>({ collection, doc, satellite }: {
    collection: string;
    doc: Doc<D>;
    satellite: Satellite;
}) => Promise<void>;
export declare const deleteManyDocs: ({ docs, satellite }: {
    docs: {
        collection: string;
        doc: Doc<any>;
    }[];
    satellite: Satellite;
}) => Promise<void>;
export declare const listDocs: <D>({ collection, filter, satellite }: {
    collection: string;
    filter: ListParams;
    satellite: Satellite;
}) => Promise<ListResults<Doc<D>>>;
