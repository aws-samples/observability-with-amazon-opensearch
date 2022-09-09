// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __assign, __rest, __spreadArray } from "tslib";
import { useMemo, useState } from 'react';
import { filterOptions } from './utils/utils';
import { generateTestIndexes } from '../internal/components/options-list/utils/test-indexes';
import { useHighlightedOption, } from '../internal/components/options-list/utils/use-highlight-option';
var isHighlightable = function (option) {
    return !!option && option.type !== 'parent';
};
var parentMap = new WeakMap();
export var getParentGroup = function (item) { return parentMap.get(item); };
var isInteractive = function (option) { return !!option && !option.disabled && option.type !== 'parent'; };
export var useAutosuggestItems = function (_a) {
    var options = _a.options, filterValue = _a.filterValue, filterText = _a.filterText, filteringType = _a.filteringType, hideEnteredTextLabel = _a.hideEnteredTextLabel, onSelectItem = _a.onSelectItem;
    var _b = useState(false), showAll = _b[0], setShowAll = _b[1];
    var items = useMemo(function () { return createItems(options); }, [options]);
    var filteredItems = useMemo(function () {
        var filteredItems = filteringType === 'auto' && !showAll ? filterOptions(items, filterText) : __spreadArray([], items, true);
        if (filterValue && !hideEnteredTextLabel) {
            filteredItems.unshift({ value: filterValue, type: 'use-entered', option: { value: filterValue } });
        }
        generateTestIndexes(filteredItems, getParentGroup);
        return filteredItems;
    }, [items, filterValue, filterText, filteringType, showAll, hideEnteredTextLabel]);
    var _c = useHighlightedOption({
        options: filteredItems,
        isHighlightable: isHighlightable
    }), highlightedOptionState = _c[0], highlightedOptionHandlers = _c[1];
    var selectHighlightedOptionWithKeyboard = function () {
        if (highlightedOptionState.highlightedOption && isInteractive(highlightedOptionState.highlightedOption)) {
            onSelectItem(highlightedOptionState.highlightedOption);
            return true;
        }
        return false;
    };
    var highlightVisibleOptionWithMouse = function (index) {
        if (filteredItems[index] && isHighlightable(filteredItems[index])) {
            highlightedOptionHandlers.setHighlightedIndexWithMouse(index);
        }
    };
    var selectVisibleOptionWithMouse = function (index) {
        if (filteredItems[index] && isInteractive(filteredItems[index])) {
            onSelectItem(filteredItems[index]);
        }
    };
    return [
        __assign(__assign({}, highlightedOptionState), { items: filteredItems, showAll: showAll }),
        __assign(__assign({}, highlightedOptionHandlers), { setShowAll: setShowAll, selectHighlightedOptionWithKeyboard: selectHighlightedOptionWithKeyboard, highlightVisibleOptionWithMouse: highlightVisibleOptionWithMouse, selectVisibleOptionWithMouse: selectVisibleOptionWithMouse }),
    ];
};
function createItems(options) {
    var items = [];
    for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
        var option = options_1[_i];
        if (isGroup(option)) {
            for (var _a = 0, _b = flattenGroup(option); _a < _b.length; _a++) {
                var item = _b[_a];
                items.push(item);
            }
        }
        else {
            items.push(__assign(__assign({}, option), { option: option }));
        }
    }
    return items;
}
function isGroup(optionOrGroup) {
    return 'options' in optionOrGroup;
}
function flattenGroup(group) {
    var options = group.options, rest = __rest(group, ["options"]);
    var hasOnlyDisabledChildren = true;
    var items = [__assign(__assign({}, rest), { type: 'parent', option: group })];
    for (var _i = 0, options_2 = options; _i < options_2.length; _i++) {
        var option = options_2[_i];
        if (!option.disabled) {
            hasOnlyDisabledChildren = false;
        }
        var childOption = __assign(__assign({}, option), { type: 'child', disabled: option.disabled || rest.disabled, option: option });
        items.push(childOption);
        // TODO: Refactor parentMap and remove this side effect
        parentMap.set(childOption, __assign(__assign({}, group), { option: group }));
    }
    items[0].disabled = items[0].disabled || hasOnlyDisabledChildren;
    return items;
}
//# sourceMappingURL=options-controller.js.map