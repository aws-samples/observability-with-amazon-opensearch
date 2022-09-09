import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import AutosuggestWrapper from '../autosuggest';
import FilteringTokenWrapper from '../internal/filtering-token';
export default class PropertyFilterWrapper extends AutosuggestWrapper {
    static rootSelector: string;
    findResultsCount(): ElementWrapper;
    findTokens(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<FilteringTokenWrapper>;
    /**
     * Returns the button that toggles if the tokens above `tokenLimit` are visible.
     */
    findTokenToggle(): ElementWrapper;
    /**
     * Returns the button that removes all current tokens.
     */
    findRemoveAllButton(): ElementWrapper;
}
