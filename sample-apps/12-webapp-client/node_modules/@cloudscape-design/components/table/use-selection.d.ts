import { KeyboardEvent } from 'react';
import { TableProps } from './interfaces';
export declare function useFocusMove(selectionType: TableProps['selectionType'], totalItems: number): {
    moveFocusDown?: undefined;
    moveFocusUp?: undefined;
    moveFocus?: undefined;
} | {
    moveFocusDown: (event: KeyboardEvent) => void;
    moveFocusUp: (event: KeyboardEvent) => void;
    moveFocus: (sourceElement: HTMLElement, fromIndex: number, direction: -1 | 1) => void;
};
export declare const focusMarkers: {
    item: {
        [x: string]: string;
    };
    all: {
        [x: string]: string;
    };
    root: {
        [x: string]: string;
    };
};
export declare function useSelection<T>({ items, selectedItems, selectionType, isItemDisabled, trackBy, onSelectionChange, ariaLabels, }: Pick<TableProps<T>, 'ariaLabels' | 'items' | 'selectedItems' | 'selectionType' | 'isItemDisabled' | 'trackBy' | 'onSelectionChange'>): {
    isItemSelected: (item: T) => boolean;
    selectAllProps: {
        name: string;
        disabled: boolean;
        selectionType: TableProps.SelectionType | undefined;
        indeterminate: boolean;
        checked: boolean;
        onChange: () => void;
        ariaLabel: string | undefined;
    };
    getItemSelectionProps: (item: T) => {
        name: string;
        selectionType: TableProps.SelectionType | undefined;
        ariaLabel: string | undefined;
        onChange: () => void;
        checked: boolean;
        disabled: boolean;
    };
    updateShiftToggle: (value: boolean) => void;
};
//# sourceMappingURL=use-selection.d.ts.map