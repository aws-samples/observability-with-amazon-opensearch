import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import AutosuggestWrapper from '../autosuggest';
import FilteringTokenWrapper from '../internal/filtering-token';
export default class PropertyFilterWrapper extends AutosuggestWrapper {
    static rootSelector: string;
    findResultsCount(): ElementWrapper;
    findTokens(): Array<FilteringTokenWrapper>;
    /**
     * Returns the button that toggles if the tokens above `tokenLimit` are visible.
     */
    findTokenToggle(): ElementWrapper | null;
    /**
     * Returns the button that removes all current tokens.
     */
    findRemoveAllButton(): ElementWrapper | null;
}
