// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getParentGroup } from './options-controller';
import VirtualList from './virtual-list';
import PlainList from './plain-list';
import { useAnnouncement } from '../select/utils/use-announcement';
var createMouseEventHandler = function (handler) { return function (itemIndex) {
    // prevent mouse events to avoid losing focus from the input
    if (itemIndex > -1) {
        handler(itemIndex);
    }
}; };
export default function AutosuggestOptionsList(_a) {
    var autosuggestItemsState = _a.autosuggestItemsState, autosuggestItemsHandlers = _a.autosuggestItemsHandlers, highlightedOptionId = _a.highlightedOptionId, highlightText = _a.highlightText, listId = _a.listId, controlId = _a.controlId, enteredTextLabel = _a.enteredTextLabel, handleLoadMore = _a.handleLoadMore, hasDropdownStatus = _a.hasDropdownStatus, virtualScroll = _a.virtualScroll, selectedAriaLabel = _a.selectedAriaLabel, renderHighlightedAriaLive = _a.renderHighlightedAriaLive, listBottom = _a.listBottom;
    var handleMouseUp = createMouseEventHandler(autosuggestItemsHandlers.selectVisibleOptionWithMouse);
    var handleMouseMove = createMouseEventHandler(autosuggestItemsHandlers.highlightVisibleOptionWithMouse);
    var ListComponent = virtualScroll ? VirtualList : PlainList;
    var announcement = useAnnouncement({
        announceSelected: true,
        highlightedOption: autosuggestItemsState.highlightedOption,
        getParent: function (option) { var _a; return (_a = getParentGroup(option)) === null || _a === void 0 ? void 0 : _a.option; },
        selectedAriaLabel: selectedAriaLabel,
        renderHighlightedAriaLive: renderHighlightedAriaLive
    });
    return (React.createElement(ListComponent, { listBottom: listBottom, handleLoadMore: handleLoadMore, autosuggestItemsState: autosuggestItemsState, highlightText: highlightText, enteredTextLabel: enteredTextLabel, highlightedA11yProps: highlightedOptionId ? { id: highlightedOptionId } : {}, hasDropdownStatus: hasDropdownStatus, menuProps: { id: listId, ariaLabelledby: controlId, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove }, screenReaderContent: announcement }));
}
//# sourceMappingURL=options-list.js.map