import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getColumnAriaLabel, compareDates } from './table-utils';
import { formatSize, formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { joinObjectPath } from '../utils';
export function VersionsTable(_a) {
    var forwardFocusRef = _a.forwardFocusRef, pathSegments = _a.pathSegments, i18nStrings = _a.i18nStrings, isVisualRefresh = _a.isVisualRefresh, isItemDisabled = _a.isItemDisabled, fetchData = _a.fetchData, visibleColumns = _a.visibleColumns, onSelect = _a.onSelect;
    return (React.createElement(BasicS3Table, { forwardFocusRef: forwardFocusRef, trackBy: "VersionId", fetchData: function () {
            var bucketName = pathSegments[0], rest = pathSegments.slice(1);
            return fetchData(bucketName, joinObjectPath(rest));
        }, i18nStrings: __assign(__assign({}, getSharedI18Strings(i18nStrings)), { header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions, filteringAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering(i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions), filteringPlaceholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsSearchPlaceholder, loadingText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsLoading, emptyText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsNoItems, selectionLabels: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsVersionsSelection }), isVisualRefresh: isVisualRefresh, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled, columnDefinitions: [
            {
                id: 'ID',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID),
                sortingField: 'VersionId',
                cell: function (item) { return item.VersionId; },
                minWidth: '250px'
            },
            {
                id: 'LastModified',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified),
                sortingComparator: function (a, b) { return compareDates(a.LastModified, b.LastModified); },
                cell: function (item) { return formatDefault(item.LastModified); }
            },
            {
                id: 'Size',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize),
                sortingField: 'Size',
                cell: function (item) { return formatSize(item.Size); }
            },
        ], onSelect: function (item) { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.VersionId) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=versions-table.js.map