import React from 'react';
import { TableProps } from '../../table/interfaces';
import { ForwardFocusRef } from '../../internal/hooks/forward-focus';
import { S3ResourceSelectorProps } from '../interfaces';
interface BucketsTableProps {
    forwardFocusRef: React.Ref<ForwardFocusRef>;
    visibleColumns: ReadonlyArray<string>;
    isItemDisabled: TableProps.IsItemDisabled<S3ResourceSelectorProps.Bucket> | undefined;
    selectableItemsTypes: S3ResourceSelectorProps['selectableItemsTypes'];
    fetchData: S3ResourceSelectorProps['fetchBuckets'];
    i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined;
    isVisualRefresh?: boolean;
    onDrilldown: (path: string) => void;
    onSelect: (uri: string) => void;
}
export declare function BucketsTable({ forwardFocusRef, i18nStrings, isVisualRefresh, isItemDisabled, selectableItemsTypes, fetchData, visibleColumns, onDrilldown, onSelect, }: BucketsTableProps): JSX.Element;
export {};
//# sourceMappingURL=buckets-table.d.ts.map