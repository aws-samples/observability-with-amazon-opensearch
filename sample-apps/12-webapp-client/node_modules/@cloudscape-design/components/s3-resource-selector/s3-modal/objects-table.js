import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { compareDates, getColumnAriaLabel, includes } from './table-utils';
import InternalIcon from '../../icon/internal';
import InternalLink from '../../link/internal';
import { formatSize, formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { joinObjectPath } from '../utils';
export function ObjectsTable(_a) {
    var forwardFocusRef = _a.forwardFocusRef, pathSegments = _a.pathSegments, i18nStrings = _a.i18nStrings, isVisualRefresh = _a.isVisualRefresh, isItemDisabled = _a.isItemDisabled, selectableItemsTypes = _a.selectableItemsTypes, fetchData = _a.fetchData, visibleColumns = _a.visibleColumns, onDrilldown = _a.onDrilldown, onSelect = _a.onSelect;
    return (React.createElement(BasicS3Table, { 
        // remount fresh component every we change the path to reset the inner state (e.g. selection/filtering)
        key: pathSegments.join('/'), forwardFocusRef: forwardFocusRef, trackBy: "Key", fetchData: function () {
            var bucketName = pathSegments[0], rest = pathSegments.slice(1);
            return fetchData(bucketName, joinObjectPath(rest));
        }, i18nStrings: __assign(__assign({}, getSharedI18Strings(i18nStrings)), { header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjects, filteringAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering(i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjects), filteringPlaceholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsSearchPlaceholder, loadingText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsLoading, emptyText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsNoItems, selectionLabels: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsObjectsSelection }), isVisualRefresh: isVisualRefresh, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled || (function () { return !includes(selectableItemsTypes, 'objects'); }), columnDefinitions: [
            {
                id: 'Key',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectKey,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectKey),
                sortingField: 'Key',
                cell: function (item) {
                    var isClickable = item.IsFolder || includes(selectableItemsTypes, 'versions');
                    return (React.createElement(React.Fragment, null,
                        React.createElement(InternalIcon, { name: item.IsFolder ? 'folder' : 'file' }),
                        ' ',
                        isClickable ? (React.createElement(InternalLink, { onFollow: function () { return item.Key && onDrilldown(item); }, variant: "link" }, item.Key)) : (item.Key)));
                },
                minWidth: '250px'
            },
            {
                id: 'LastModified',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectLastModified,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectLastModified),
                sortingComparator: function (a, b) { return compareDates(a.LastModified, b.LastModified); },
                cell: function (item) { return formatDefault(item.LastModified); }
            },
            {
                id: 'Size',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectSize,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectSize),
                sortingField: 'Size',
                cell: function (item) { return formatSize(item.Size); }
            },
        ], onSelect: function (item) { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.Key) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=objects-table.js.map