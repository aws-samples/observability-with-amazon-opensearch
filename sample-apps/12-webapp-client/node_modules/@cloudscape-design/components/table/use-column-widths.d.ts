import React from 'react';
import { TableProps } from './interfaces';
export declare const DEFAULT_WIDTH = 120;
export declare function checkColumnWidths(columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<any>>): void;
interface WidthsContext {
    totalWidth: number;
    columnWidths: Record<string, number>;
    updateColumn: (colIndex: number, newWidth: number) => void;
}
declare const WidthsContext: React.Context<WidthsContext>;
interface WidthProviderProps {
    tableRef: React.MutableRefObject<HTMLElement | null>;
    visibleColumnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<any>>;
    resizableColumns: boolean | undefined;
    hasSelection: boolean;
    children: React.ReactNode;
}
export declare function ColumnWidthsProvider({ tableRef, visibleColumnDefinitions, resizableColumns, hasSelection, children, }: WidthProviderProps): JSX.Element;
export declare function useColumnWidths(): WidthsContext;
export {};
//# sourceMappingURL=use-column-widths.d.ts.map