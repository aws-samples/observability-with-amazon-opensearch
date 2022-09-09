import React from 'react';
import { FilteringOption, FilteringProperty, GroupText, I18nStrings, LoadItemsDetail, Token } from './interfaces';
import { NonCancelableEventHandler } from '../internal/events';
import { DropdownStatusProps } from '../internal/components/dropdown-status/interfaces';
interface TokenEditorProps {
    asyncProperties?: boolean;
    asyncProps: DropdownStatusProps;
    customGroupsText: readonly GroupText[];
    disabled?: boolean;
    disableFreeTextFiltering?: boolean;
    expandToViewport?: boolean;
    filteringOptions: readonly FilteringOption[];
    filteringProperties: readonly FilteringProperty[];
    i18nStrings: I18nStrings;
    onLoadItems?: NonCancelableEventHandler<LoadItemsDetail>;
    setToken: (newToken: Token) => void;
    token: Token;
    triggerComponent?: React.ReactNode;
}
export declare function TokenEditor({ asyncProperties, asyncProps, customGroupsText, disableFreeTextFiltering, expandToViewport, filteringOptions, filteringProperties, i18nStrings, onLoadItems, setToken, token, triggerComponent, }: TokenEditorProps): JSX.Element;
export {};
//# sourceMappingURL=token-editor.d.ts.map