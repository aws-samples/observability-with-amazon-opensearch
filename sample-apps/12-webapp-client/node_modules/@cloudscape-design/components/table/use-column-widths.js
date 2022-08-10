import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { getColumnKey } from './utils';
import headerCellStyles from './header-cell/styles.css.js';
import { warnOnce } from '../internal/logging';
export var DEFAULT_WIDTH = 120;
var SELECTION_CELL_WIDTH = 54;
function checkProperty(column, name) {
    var value = column[name];
    if (typeof value !== 'number' && typeof value !== 'undefined') {
        warnOnce('Table', "resizableColumns feature requires ".concat(name, " property to be a number, got ").concat(value, ". The component may work incorrectly."));
    }
}
export function checkColumnWidths(columnDefinitions) {
    for (var _i = 0, columnDefinitions_1 = columnDefinitions; _i < columnDefinitions_1.length; _i++) {
        var column = columnDefinitions_1[_i];
        checkProperty(column, 'minWidth');
        checkProperty(column, 'width');
    }
}
function readWidths(headerEl, columnDefinitions, hasSelection) {
    var result = {};
    for (var index = 0; index < columnDefinitions.length; index++) {
        var column = columnDefinitions[index];
        var id = getColumnKey(columnDefinitions[index], index);
        var width = column.width || 0;
        var minWidth = column.minWidth || width || DEFAULT_WIDTH;
        if (!width && // read width from the DOM if it is missing in the config
            index !== columnDefinitions.length - 1 // skip reading for the last column, because it expands to fully fit the container
        ) {
            var colIndex = hasSelection ? index + 2 : index + 1;
            var colEl = headerEl.querySelector(".".concat(headerCellStyles['header-cell'], ":nth-child(").concat(colIndex, ")"));
            width = colEl.getBoundingClientRect().width;
        }
        result[id] = Math.max(width, minWidth);
    }
    return result;
}
function updateWidths(columnDefinitions, oldWidths, newWidth, colIndex) {
    var _a;
    var definition = columnDefinitions[colIndex];
    var id = getColumnKey(definition, colIndex);
    var minWidth = typeof definition.minWidth === 'number' ? definition.minWidth : DEFAULT_WIDTH;
    newWidth = Math.max(newWidth, minWidth);
    if (oldWidths[id] === newWidth) {
        return oldWidths;
    }
    return __assign(__assign({}, oldWidths), (_a = {}, _a[id] = newWidth, _a));
}
var WidthsContext = createContext({
    totalWidth: 0,
    columnWidths: {},
    updateColumn: function () { }
});
export function ColumnWidthsProvider(_a) {
    var tableRef = _a.tableRef, visibleColumnDefinitions = _a.visibleColumnDefinitions, resizableColumns = _a.resizableColumns, hasSelection = _a.hasSelection, children = _a.children;
    var visibleColumns = useRef(null);
    var _b = useState({}), columnWidths = _b[0], setColumnWidths = _b[1];
    useEffect(function () {
        if (!resizableColumns) {
            return;
        }
        var lastVisible = visibleColumns.current;
        if (lastVisible) {
            var _loop_1 = function (index) {
                var column = visibleColumnDefinitions[index];
                var id = getColumnKey(column, index);
                if (!columnWidths[id] && lastVisible.indexOf(column.id) === -1) {
                    setColumnWidths(function (columnWidths) {
                        var _a;
                        return (__assign(__assign({}, columnWidths), (_a = {}, _a[id] = column.width || DEFAULT_WIDTH, _a)));
                    });
                }
            };
            for (var index = 0; index < visibleColumnDefinitions.length; index++) {
                _loop_1(index);
            }
        }
        visibleColumns.current = visibleColumnDefinitions.map(function (column) { return column.id; });
    }, [columnWidths, resizableColumns, visibleColumnDefinitions]);
    useEffect(function () {
        if (!resizableColumns) {
            return;
        }
        setColumnWidths(function () { return readWidths(tableRef.current, visibleColumnDefinitions, hasSelection); });
        // This code is intended to run only at the first render and should not re-run when table props change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function updateColumn(colIndex, newWidth) {
        setColumnWidths(function (columnWidths) { return updateWidths(visibleColumnDefinitions, columnWidths, newWidth, colIndex); });
    }
    var totalWidth = visibleColumnDefinitions.reduce(function (total, column, index) { return total + (columnWidths[getColumnKey(column, index)] || DEFAULT_WIDTH); }, 0);
    if (hasSelection) {
        totalWidth += SELECTION_CELL_WIDTH;
    }
    return React.createElement(WidthsContext.Provider, { value: { columnWidths: columnWidths, totalWidth: totalWidth, updateColumn: updateColumn } }, children);
}
export function useColumnWidths() {
    return useContext(WidthsContext);
}
//# sourceMappingURL=use-column-widths.js.map