import React from 'react';
import { MenuProps, GetOptionProps } from '../utils/use-select';
import { DropdownOption } from '../../internal/components/option/interfaces';
import { HighlightType } from '../../internal/components/options-list/utils/use-highlight-option';
export interface SelectListProps {
    menuProps: MenuProps;
    getOptionProps: GetOptionProps;
    filteredOptions: ReadonlyArray<DropdownOption>;
    filteringValue: string;
    highlightType: HighlightType;
    checkboxes?: boolean;
    hasDropdownStatus?: boolean;
    listBottom?: React.ReactNode;
    useInteractiveGroups?: boolean;
    screenReaderContent?: string;
}
export declare namespace SelectListProps {
    type SelectListRef = (index: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<SelectListProps & React.RefAttributes<SelectListProps.SelectListRef>>;
export default _default;
//# sourceMappingURL=plain-list.d.ts.map