import { InternalContainerProps } from '../container/internal';
import { TableProps } from './interfaces';
export declare const applyTrackBy: <T>(trackBy: TableProps.TrackBy<T>, item: T) => any;
export declare const getItemKey: <T>(trackBy: TableProps.TrackBy<T> | undefined, item: T, index: number) => any;
export declare const getTrackableValue: <T>(trackBy: TableProps.TrackBy<T> | undefined, item: T) => any;
export declare const getColumnKey: <T>(column: TableProps.ColumnDefinition<T>, index: number) => string | number;
export declare const toContainerVariant: (variant: TableProps.Variant | undefined) => InternalContainerProps['variant'];
export declare function checkSortingState<T>(columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<T>>, sortingComparator: TableProps.SortingColumn<T>['sortingComparator']): void;
//# sourceMappingURL=utils.d.ts.map