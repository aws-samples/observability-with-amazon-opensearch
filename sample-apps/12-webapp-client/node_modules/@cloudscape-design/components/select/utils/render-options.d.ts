import { VirtualItem } from 'react-virtual';
import { DropdownOption } from '../../internal/components/option/interfaces';
import { HighlightType } from '../../internal/components/options-list/utils/use-highlight-option';
export interface RenderOptionProps {
    options: ReadonlyArray<DropdownOption>;
    getOptionProps: any;
    filteringValue: string;
    highlightType: HighlightType;
    checkboxes?: boolean;
    hasDropdownStatus?: boolean;
    virtualItems?: VirtualItem[];
    useInteractiveGroups?: boolean;
    screenReaderContent?: string;
    ariaSetsize?: number;
}
export declare const renderOptions: ({ options, getOptionProps, filteringValue, highlightType, checkboxes, hasDropdownStatus, virtualItems, useInteractiveGroups, screenReaderContent, ariaSetsize, }: RenderOptionProps) => JSX.Element[];
//# sourceMappingURL=render-options.d.ts.map