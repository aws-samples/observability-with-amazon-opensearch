var _a, _b, _c;
import { __spreadArray } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { fireNonCancelableEvent } from '../internal/events';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { findUpUntil } from '../internal/utils/dom';
import { getTrackableValue } from './utils';
import selectionStyles from './selection-control/styles.css.js';
import { joinStrings } from '../internal/utils/strings';
var SELECTION_ITEM = 'selection-item';
var SELECTION_ROOT = 'selection-root';
function findSelectionControlByIndex(rootContainer, index) {
    if (index === -1) {
        // find "select all" checkbox
        return rootContainer.querySelector("[data-".concat(SELECTION_ITEM, "=\"all\"] .").concat(selectionStyles.root, " input"));
    }
    return rootContainer.querySelectorAll("[data-".concat(SELECTION_ITEM, "=\"item\"] .").concat(selectionStyles.root, " input"))[index];
}
function findRootContainer(element) {
    return findUpUntil(element, function (node) { return node.dataset.selectionRoot === 'true'; });
}
export function useFocusMove(selectionType, totalItems) {
    if (selectionType !== 'multi') {
        return {};
    }
    function moveFocus(sourceElement, fromIndex, direction) {
        var index = fromIndex;
        var rootContainer = findRootContainer(sourceElement);
        while (index >= -1 && index < totalItems) {
            index += direction;
            var control = findSelectionControlByIndex(rootContainer, index);
            if (control && !control.disabled) {
                control.focus();
                break;
            }
        }
    }
    var _a = [1, -1].map(function (direction) {
        return function (event) {
            var target = event.currentTarget;
            var itemNode = findUpUntil(target, function (node) { return node.dataset.selectionItem === 'item'; });
            var fromIndex = Array.prototype.indexOf.call(itemNode.parentElement.children, itemNode);
            moveFocus(target, fromIndex, direction);
        };
    }), moveFocusDown = _a[0], moveFocusUp = _a[1];
    return {
        moveFocusDown: moveFocusDown,
        moveFocusUp: moveFocusUp,
        moveFocus: moveFocus
    };
}
// A set, that compares items by their "trackables" (the results of applying `trackBy` to them)
var ItemSet = /** @class */ (function () {
    function ItemSet(trackBy, items) {
        var _this = this;
        this.map = new Map();
        this.put = function (item) { return _this.map.set.call(_this.map, getTrackableValue(_this.trackBy, item), item); };
        this.has = function (item) { return _this.map.has.call(_this.map, getTrackableValue(_this.trackBy, item)); };
        this.forEach = this.map.forEach.bind(this.map);
        this.trackBy = trackBy;
        items.forEach(this.put);
    }
    return ItemSet;
}());
export var focusMarkers = {
    item: (_a = {}, _a['data-' + SELECTION_ITEM] = 'item', _a),
    all: (_b = {}, _b['data-' + SELECTION_ITEM] = 'all', _b),
    root: (_c = {}, _c['data-' + SELECTION_ROOT] = 'true', _c)
};
export function useSelection(_a) {
    var _b;
    var items = _a.items, _c = _a.selectedItems, selectedItems = _c === void 0 ? [] : _c, selectionType = _a.selectionType, _d = _a.isItemDisabled, isItemDisabled = _d === void 0 ? function () { return false; } : _d, trackBy = _a.trackBy, onSelectionChange = _a.onSelectionChange, ariaLabels = _a.ariaLabels;
    var _e = useState(false), shiftPressed = _e[0], setShiftPressed = _e[1];
    var _f = useState(null), lastClickedItem = _f[0], setLastClickedItem = _f[1];
    var selectionName = useUniqueId();
    var finalSelectedItems = selectionType === 'single' ? selectedItems.slice(0, 1) : selectedItems;
    var selectedSet = new ItemSet(trackBy, finalSelectedItems);
    var itemIndexesMap = new Map();
    items.forEach(function (item, i) { return itemIndexesMap.set(getTrackableValue(trackBy, item), i); });
    var isItemSelected = selectedSet.has.bind(selectedSet);
    var getItemState = function (item) { return ({
        disabled: isItemDisabled(item),
        selected: isItemSelected(item)
    }); };
    var _g = selectionType
        ? items.reduce(function (_a, item) {
            var allDisabled = _a[0], allEnabledSelected = _a[1];
            var _b = getItemState(item), disabled = _b.disabled, selected = _b.selected;
            return [
                // all items are disabled (or none are present)
                allDisabled && disabled,
                // all enabled items are selected (or none are present)
                allEnabledSelected && (selected || disabled),
            ];
        }, [true, true])
        : [true, true], allDisabled = _g[0], allEnabledSelected = _g[1];
    // the page has at least one selected item
    var hasSelected = finalSelectedItems.length > 0;
    var handleToggleAll = function () {
        var requestedItems = new ItemSet(trackBy, items);
        var newSelectedItems = allEnabledSelected ? deselectItems(requestedItems) : selectItems(requestedItems);
        fireNonCancelableEvent(onSelectionChange, { selectedItems: newSelectedItems });
    };
    var getRequestedItems = function (item) {
        var requestedItems = new ItemSet(trackBy, [item]);
        var lastClickedItemIndex = lastClickedItem ? itemIndexesMap.get(getTrackableValue(trackBy, lastClickedItem)) : -1;
        if (lastClickedItemIndex === undefined) {
            lastClickedItemIndex = -1;
        }
        // we use lastClickedItemIndex to determine if filtering/sorting/pagination
        // made previously selected item invisible, therefore we reset state for shift-select
        if (shiftPressed && lastClickedItemIndex !== -1) {
            // item is always in items
            var currentItemIndex = itemIndexesMap.get(getTrackableValue(trackBy, item));
            var start = Math.min(currentItemIndex, lastClickedItemIndex);
            var end = Math.max(currentItemIndex, lastClickedItemIndex);
            items.slice(start, end + 1).forEach(function (item) { return requestedItems.put(item); });
        }
        return requestedItems;
    };
    var deselectItems = function (requestedItems) {
        var newSelectedItems = [];
        selectedItems.forEach(function (selectedItem) {
            var toUnselect = requestedItems.has(selectedItem);
            if (!toUnselect || isItemDisabled(selectedItem)) {
                newSelectedItems.push(selectedItem);
            }
        });
        return newSelectedItems;
    };
    var selectItems = function (requestedItems) {
        var newSelectedItems = __spreadArray([], selectedItems, true);
        requestedItems.forEach(function (newItem) {
            var _a = getItemState(newItem), selected = _a.selected, disabled = _a.disabled;
            if (!selected && !disabled) {
                newSelectedItems.push(newItem);
            }
        });
        return newSelectedItems;
    };
    var handleToggleItem = function (item) { return function () {
        var _a = getItemState(item), disabled = _a.disabled, selected = _a.selected;
        if (disabled || (selectionType === 'single' && selected)) {
            return;
        }
        if (selectionType === 'single') {
            fireNonCancelableEvent(onSelectionChange, { selectedItems: [item] });
        }
        else {
            var requestedItems = getRequestedItems(item);
            var selectedItems_1 = selected ? deselectItems(requestedItems) : selectItems(requestedItems);
            fireNonCancelableEvent(onSelectionChange, { selectedItems: selectedItems_1 });
            setLastClickedItem(item);
        }
    }; };
    return {
        isItemSelected: isItemSelected,
        selectAllProps: {
            name: selectionName,
            disabled: allDisabled,
            selectionType: selectionType,
            indeterminate: hasSelected && !allEnabledSelected,
            checked: hasSelected && allEnabledSelected,
            onChange: handleToggleAll,
            ariaLabel: joinStrings(ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.selectionGroupLabel, (_b = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.allItemsSelectionLabel) === null || _b === void 0 ? void 0 : _b.call(ariaLabels, { selectedItems: selectedItems }))
        },
        getItemSelectionProps: function (item) {
            var _a;
            return ({
                name: selectionName,
                selectionType: selectionType,
                ariaLabel: joinStrings(ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.selectionGroupLabel, (_a = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.itemSelectionLabel) === null || _a === void 0 ? void 0 : _a.call(ariaLabels, { selectedItems: selectedItems }, item)),
                onChange: handleToggleItem(item),
                checked: isItemSelected(item),
                disabled: isItemDisabled(item)
            });
        },
        updateShiftToggle: function (value) {
            setShiftPressed(value);
        }
    };
}
//# sourceMappingURL=use-selection.js.map