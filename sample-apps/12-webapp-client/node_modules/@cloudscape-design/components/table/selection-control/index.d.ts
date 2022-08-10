import { KeyboardEventHandler } from 'react';
import { TableProps } from '../interfaces';
export interface SelectionControlProps {
    selectionType: TableProps['selectionType'];
    checked: boolean;
    disabled: boolean;
    name: string;
    indeterminate?: boolean;
    onChange?: () => void;
    onShiftToggle?(shiftPressed: boolean): void;
    onFocusUp?: KeyboardEventHandler;
    onFocusDown?: KeyboardEventHandler;
    ariaLabel?: string;
    tabIndex?: -1;
}
export default function SelectionControl({ selectionType, indeterminate, onShiftToggle, onFocusUp, onFocusDown, name, ariaLabel, ...sharedProps }: SelectionControlProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map