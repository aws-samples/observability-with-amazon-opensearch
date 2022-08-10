import React from 'react';
import { S3ResourceSelectorProps } from '../interfaces';
import { TableProps } from '../../table/interfaces';
import { ForwardFocusRef } from '../../internal/hooks/forward-focus';
interface VersionsTableProps {
    forwardFocusRef: React.Ref<ForwardFocusRef>;
    pathSegments: ReadonlyArray<string>;
    visibleColumns: ReadonlyArray<string>;
    isItemDisabled: TableProps.IsItemDisabled<S3ResourceSelectorProps.Version> | undefined;
    fetchData: S3ResourceSelectorProps['fetchVersions'];
    i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined;
    isVisualRefresh?: boolean;
    onSelect: (versionId: string) => void;
}
export declare function VersionsTable({ forwardFocusRef, pathSegments, i18nStrings, isVisualRefresh, isItemDisabled, fetchData, visibleColumns, onSelect, }: VersionsTableProps): JSX.Element;
export {};
//# sourceMappingURL=versions-table.d.ts.map