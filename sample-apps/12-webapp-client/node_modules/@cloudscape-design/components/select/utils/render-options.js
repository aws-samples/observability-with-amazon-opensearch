import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Item from '../parts/item';
import MutliselectItem from '../parts/multiselect-item';
import { getItemProps } from './get-item-props';
export var renderOptions = function (_a) {
    var options = _a.options, getOptionProps = _a.getOptionProps, filteringValue = _a.filteringValue, highlightType = _a.highlightType, _b = _a.checkboxes, checkboxes = _b === void 0 ? false : _b, hasDropdownStatus = _a.hasDropdownStatus, virtualItems = _a.virtualItems, useInteractiveGroups = _a.useInteractiveGroups, screenReaderContent = _a.screenReaderContent, ariaSetsize = _a.ariaSetsize;
    return options.map(function (option, index) {
        var virtualItem = virtualItems && virtualItems[index];
        var globalIndex = virtualItem ? virtualItem.index : index;
        var props = getItemProps({
            option: option,
            index: globalIndex,
            getOptionProps: getOptionProps,
            filteringValue: filteringValue,
            checkboxes: checkboxes
        });
        var isLastItem = index === options.length - 1;
        var padBottom = !hasDropdownStatus && isLastItem;
        var ListItem = useInteractiveGroups ? MutliselectItem : Item;
        return (React.createElement(ListItem, __assign({ key: globalIndex }, props, { virtualPosition: virtualItem && virtualItem.start, ref: virtualItem && virtualItem.measureRef, padBottom: padBottom, screenReaderContent: screenReaderContent, ariaPosinset: globalIndex + 1, ariaSetsize: ariaSetsize, highlightType: highlightType })));
    });
};
//# sourceMappingURL=render-options.js.map