import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import OptionsList from '../internal/components/options-list';
import { scrollElementIntoView } from '../internal/utils/scrollable-containers';
import { getBaseProps } from '../internal/base-component';
import AutosuggestOption from './autosuggest-option';
import styles from './styles.css.js';
export var getOptionProps = function (index, item, filteredItems, highlightedA11yProps, highlightedOption, hasDropdownStatus) {
    var nativeAttributes = item === highlightedOption ? highlightedA11yProps : {};
    var baseOptionProps = getBaseProps(nativeAttributes);
    var isLastItem = index === filteredItems.length - 1;
    var isNotEnteredTextItem = filteredItems.length > 1;
    var padBottom = !hasDropdownStatus && isNotEnteredTextItem && isLastItem;
    return __assign({ nativeAttributes: nativeAttributes, padBottom: padBottom }, baseOptionProps);
};
var PlainList = function (_a) {
    var autosuggestItemsState = _a.autosuggestItemsState, handleLoadMore = _a.handleLoadMore, menuProps = _a.menuProps, enteredTextLabel = _a.enteredTextLabel, highlightedA11yProps = _a.highlightedA11yProps, hasDropdownStatus = _a.hasDropdownStatus, highlightText = _a.highlightText, listBottom = _a.listBottom, screenReaderContent = _a.screenReaderContent;
    var listRef = useRef(null);
    useEffect(function () {
        var _a;
        var item = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelector("[data-mouse-target=\"".concat(autosuggestItemsState.highlightedIndex, "\"]"));
        if (autosuggestItemsState.highlightType === 'keyboard' && item) {
            scrollElementIntoView(item);
        }
    }, [autosuggestItemsState.highlightType, autosuggestItemsState.highlightedIndex]);
    return (React.createElement(OptionsList, __assign({}, menuProps, { onLoadMore: handleLoadMore, open: true, ref: listRef, 
        // to prevent closing the list when clicking the scrollbar on IE11
        nativeAttributes: { unselectable: 'on' } }),
        autosuggestItemsState.items.map(function (item, index) {
            var optionProps = getOptionProps(index, item, autosuggestItemsState.items, highlightedA11yProps, autosuggestItemsState.highlightedOption, hasDropdownStatus);
            return (React.createElement(AutosuggestOption, __assign({ highlightText: highlightText, option: item, highlighted: item === autosuggestItemsState.highlightedOption, key: index, "data-mouse-target": index, enteredTextLabel: enteredTextLabel, screenReaderContent: screenReaderContent, highlightType: autosuggestItemsState.highlightType }, optionProps)));
        }),
        listBottom ? (React.createElement("li", { role: "option", className: styles['list-bottom'] }, listBottom)) : null));
};
export default PlainList;
//# sourceMappingURL=plain-list.js.map