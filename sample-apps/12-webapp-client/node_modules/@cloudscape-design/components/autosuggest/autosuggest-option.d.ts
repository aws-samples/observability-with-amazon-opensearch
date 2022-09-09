import React from 'react';
import { BaseComponentProps } from '../internal/base-component';
import { AutosuggestItem } from './interfaces';
import { HighlightType } from '../internal/components/options-list/utils/use-highlight-option';
export interface AutosuggestOptionProps extends BaseComponentProps {
    nativeAttributes?: Record<string, any>;
    highlightText: string;
    option: AutosuggestItem;
    highlighted: boolean;
    highlightType: HighlightType;
    enteredTextLabel: (value: string) => string;
    virtualPosition?: number;
    padBottom?: boolean;
    screenReaderContent?: string;
    ariaSetsize?: number;
    ariaPosinset?: number;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<AutosuggestOptionProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
//# sourceMappingURL=autosuggest-option.d.ts.map