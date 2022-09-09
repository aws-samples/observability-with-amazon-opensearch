import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import CollectionPreferencesWrapper from '../collection-preferences';
import PaginationWrapper from '../pagination';
import TextFilterWrapper from '../text-filter';
export declare class CardSectionWrapper extends ComponentWrapper {
    findSectionHeader(): ElementWrapper;
    findContent(): ElementWrapper;
}
export declare class CardWrapper extends ComponentWrapper {
    /**
     * Note: for integration/selector-based tests you should add `1` to the expected section index,
     * for example, `.findSections().get(sectionIndex+1)`. The `get` call in this context
     * is '2-indexed', that is, the first section in a card has an index of `2`.
     */
    findSections(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<CardSectionWrapper>;
    findCardHeader(): ElementWrapper;
    findSelectionArea(): ElementWrapper;
}
export default class CardsWrapper extends ComponentWrapper {
    static rootSelector: string;
    private containerWrapper;
    findItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<CardWrapper>;
    findSelectedItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<CardWrapper>;
    findHeader(): ElementWrapper;
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion(): ElementWrapper;
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion(): ElementWrapper;
    findEmptySlot(): ElementWrapper;
    findLoadingText(): ElementWrapper;
    findTextFilter(): TextFilterWrapper;
    findPagination(): PaginationWrapper;
    findCollectionPreferences(): CollectionPreferencesWrapper;
}
