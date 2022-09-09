import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import CollectionPreferencesWrapper from '../collection-preferences';
import PaginationWrapper from '../pagination';
import TextFilterWrapper from '../text-filter';
export declare class CardSectionWrapper extends ComponentWrapper {
    findSectionHeader(): ElementWrapper | null;
    findContent(): ElementWrapper | null;
}
export declare class CardWrapper extends ComponentWrapper {
    /**
     * Note: for integration/selector-based tests you should add `1` to the expected section index,
     * for example, `.findSections().get(sectionIndex+1)`. The `get` call in this context
     * is '2-indexed', that is, the first section in a card has an index of `2`.
     */
    findSections(): Array<CardSectionWrapper>;
    findCardHeader(): ElementWrapper | null;
    findSelectionArea(): ElementWrapper | null;
}
export default class CardsWrapper extends ComponentWrapper {
    static rootSelector: string;
    private containerWrapper;
    findItems(): Array<CardWrapper>;
    findSelectedItems(): Array<CardWrapper>;
    findHeader(): ElementWrapper | null;
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion(): ElementWrapper | null;
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion(): ElementWrapper | null;
    findEmptySlot(): ElementWrapper | null;
    findLoadingText(): ElementWrapper | null;
    findTextFilter(): TextFilterWrapper | null;
    findPagination(): PaginationWrapper | null;
    findCollectionPreferences(): CollectionPreferencesWrapper | null;
}
