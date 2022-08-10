import React from 'react';
import { S3ResourceSelectorProps } from '../interfaces';
import { TableProps } from '../../table/interfaces';
import { ForwardFocusRef } from '../../internal/hooks/forward-focus';
interface ObjectsTableProps {
    forwardFocusRef: React.Ref<ForwardFocusRef>;
    pathSegments: ReadonlyArray<string>;
    visibleColumns: ReadonlyArray<string>;
    isItemDisabled: TableProps.IsItemDisabled<S3ResourceSelectorProps.Object> | undefined;
    selectableItemsTypes: S3ResourceSelectorProps['selectableItemsTypes'];
    fetchData: S3ResourceSelectorProps['fetchObjects'];
    i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined;
    isVisualRefresh?: boolean;
    onDrilldown: (path: S3ResourceSelectorProps.Object) => void;
    onSelect: (uri: string) => void;
}
export declare function ObjectsTable({ forwardFocusRef, pathSegments, i18nStrings, isVisualRefresh, isItemDisabled, selectableItemsTypes, fetchData, visibleColumns, onDrilldown, onSelect, }: ObjectsTableProps): JSX.Element;
export {};
//# sourceMappingURL=objects-table.d.ts.map