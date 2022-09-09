import { FilteringOption, FilteringProperty, GroupText, I18nStrings, JoinOperation, LoadItemsDetail, Token } from './interfaces';
import { NonCancelableEventHandler } from '../internal/events';
import { DropdownStatusProps } from '../internal/components/dropdown-status/interfaces';
interface TokenProps {
    asyncProperties?: boolean;
    asyncProps: DropdownStatusProps;
    customGroupsText: readonly GroupText[];
    disabled?: boolean;
    disableFreeTextFiltering?: boolean;
    expandToViewport?: boolean;
    filteringOptions: readonly FilteringOption[];
    filteringProperties: readonly FilteringProperty[];
    first?: boolean;
    hideOperations?: boolean;
    i18nStrings: I18nStrings;
    onLoadItems?: NonCancelableEventHandler<LoadItemsDetail>;
    operation: JoinOperation;
    removeToken: () => void;
    setOperation: (newOperation: JoinOperation) => void;
    setToken: (newToken: Token) => void;
    token: Token;
}
export declare const TokenButton: ({ token, operation, first, removeToken, setToken, setOperation, filteringOptions, filteringProperties, asyncProps, onLoadItems, i18nStrings, asyncProperties, hideOperations, customGroupsText, disabled, disableFreeTextFiltering, expandToViewport, }: TokenProps) => JSX.Element;
export {};
//# sourceMappingURL=token.d.ts.map