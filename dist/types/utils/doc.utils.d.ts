import type { DelDoc, Doc as DocApi, SetDoc } from '../../declarations/satellite/satellite.did';
import type { Doc } from '../types/doc.types';
export declare const toSetDoc: <D>(doc: Doc<D>) => Promise<SetDoc>;
export declare const toDelDoc: <D>(doc: Doc<D>) => DelDoc;
export declare const fromDoc: <D>({ doc, key }: {
    doc: DocApi;
    key: string;
}) => Promise<Doc<D>>;
