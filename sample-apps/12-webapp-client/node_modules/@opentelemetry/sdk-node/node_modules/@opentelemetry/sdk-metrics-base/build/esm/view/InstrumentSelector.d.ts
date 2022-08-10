import { InstrumentType } from '../InstrumentDescriptor';
import { Predicate } from './Predicate';
export interface InstrumentSelectorCriteria {
    name?: string;
    type?: InstrumentType;
}
export declare class InstrumentSelector {
    private _nameFilter;
    private _type?;
    constructor(criteria?: InstrumentSelectorCriteria);
    getType(): InstrumentType | undefined;
    getNameFilter(): Predicate;
}
//# sourceMappingURL=InstrumentSelector.d.ts.map