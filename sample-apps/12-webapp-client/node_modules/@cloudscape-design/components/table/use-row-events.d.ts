import { TableProps } from './interfaces';
export declare function useRowEvents<T>({ onRowClick, onRowContextMenu }: Pick<TableProps, 'onRowClick' | 'onRowContextMenu'>): {
    onRowClickHandler: ((rowIndex: number, item: T, event: React.MouseEvent) => void) | undefined;
    onRowContextMenuHandler: ((rowIndex: number, item: T, event: React.MouseEvent) => void) | undefined;
};
//# sourceMappingURL=use-row-events.d.ts.map