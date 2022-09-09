// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { fireNonCancelableEvent, fireCancelableEvent } from '../internal/events/index';
import { findUpUntil } from '../internal/utils/dom';
import styles from './styles.css.js';
export function useRowEvents(_a) {
    var onRowClick = _a.onRowClick, onRowContextMenu = _a.onRowContextMenu;
    var onRowClickHandler = function (rowIndex, item, event) {
        var tableCell = findUpUntil(event.target, function (element) { return element.tagName.toLowerCase() === 'td'; });
        if (!tableCell || !tableCell.classList.contains(styles['selection-control'])) {
            var details = { rowIndex: rowIndex, item: item };
            fireNonCancelableEvent(onRowClick, details);
        }
    };
    var onRowContextMenuHandler = function (rowIndex, item, event) {
        var details = {
            rowIndex: rowIndex,
            item: item,
            clientX: event.clientX,
            clientY: event.clientY
        };
        fireCancelableEvent(onRowContextMenu, details, event);
    };
    return {
        onRowClickHandler: onRowClick && onRowClickHandler,
        onRowContextMenuHandler: onRowContextMenu && onRowContextMenuHandler
    };
}
//# sourceMappingURL=use-row-events.js.map