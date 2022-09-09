import React from 'react';
import { DropdownOption } from '../../internal/components/option/interfaces';
import { HighlightType } from '../../internal/components/options-list/utils/use-highlight-option.js';
export interface ItemProps {
    option: DropdownOption;
    highlighted?: boolean;
    selected?: boolean;
    filteringValue?: string;
    hasCheckbox?: boolean;
    virtualPosition?: number;
    padBottom?: boolean;
    isNextSelected?: boolean;
    screenReaderContent?: string;
    ariaPosinset?: number;
    ariaSetsize?: number;
    highlightType?: HighlightType;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
//# sourceMappingURL=item.d.ts.map