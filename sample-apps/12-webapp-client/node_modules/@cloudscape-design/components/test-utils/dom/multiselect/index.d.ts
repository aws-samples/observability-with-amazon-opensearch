import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import TokenWrapper from '../token-group/token';
import InputWrapper from '../input';
import DropdownHostComponentWrapper from '../internal/dropdown-host';
export default class MultiselectWrapper extends DropdownHostComponentWrapper {
    static rootSelector: string;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * Returns the input that is used for filtering. Returns `null` if `enableFiltering` is not set to `true`.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findFilteringInput(options?: {
        expandToViewport: boolean;
    }): InputWrapper | null;
    findPlaceholder(): ElementWrapper | null;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findStatusIndicator(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * Returns a token.
     *
     * @param tokenIndex 1-based index of the token to return
     */
    findToken(tokenIndex: number): TokenWrapper | null;
    /**
     * Returns a token toggle button.
     */
    findTokenToggle(): ElementWrapper | null;
    findTokens(): Array<TokenWrapper>;
    findTrigger(): ElementWrapper;
    isDisabled(): boolean;
}
