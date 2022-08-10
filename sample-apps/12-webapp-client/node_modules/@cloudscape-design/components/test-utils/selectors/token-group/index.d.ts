import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import TokenWrapper from './token';
export default class TokenGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTokens(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TokenWrapper>;
    /**
     * Returns a token from the group for a given index.
     *
     * @param tokenIndex 1-based index of the token to return.
     */
    findToken(tokenIndex: number): TokenWrapper;
    /**
     * Returns the token toggle button.
     */
    findTokenToggle(): ElementWrapper;
}
