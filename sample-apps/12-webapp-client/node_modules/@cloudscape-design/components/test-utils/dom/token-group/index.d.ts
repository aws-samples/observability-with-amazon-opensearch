import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import TokenWrapper from './token';
export default class TokenGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTokens(): Array<TokenWrapper>;
    /**
     * Returns a token from the group for a given index.
     *
     * @param tokenIndex 1-based index of the token to return.
     */
    findToken(tokenIndex: number): TokenWrapper | null;
    /**
     * Returns the token toggle button.
     */
    findTokenToggle(): ElementWrapper | null;
}
