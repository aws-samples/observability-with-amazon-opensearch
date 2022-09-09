// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import smoothScroll from './smooth-scroll';
export var onPaginationClick = function (headerBarRef, direction) {
    if (!(headerBarRef === null || headerBarRef === void 0 ? void 0 : headerBarRef.current)) {
        return;
    }
    var element = headerBarRef.current;
    // Scroll each paginated section by 75% of what is already visible
    var paginatedSectionSize = Math.ceil(element.clientWidth * 0.75);
    if (direction === 1) {
        smoothScroll(element, Math.min(element.scrollLeft + paginatedSectionSize, element.scrollWidth - element.offsetWidth));
    }
    if (direction === -1) {
        smoothScroll(element, Math.max(element.scrollLeft - paginatedSectionSize, 0));
    }
};
export var hasHorizontalOverflow = function (headerBar, leftOverflowButton) {
    var offsetWidth = headerBar.offsetWidth, scrollWidth = headerBar.scrollWidth;
    // Need to account for pagination button width when deciding if there would be overflow without them
    var paginationButtonsWidth = leftOverflowButton.current && 2 * leftOverflowButton.current.offsetWidth;
    return paginationButtonsWidth ? scrollWidth > offsetWidth + paginationButtonsWidth : scrollWidth > offsetWidth;
};
export var hasLeftOverflow = function (headerBar) {
    return headerBar.scrollLeft > 0;
};
export var hasRightOverflow = function (headerBar) {
    var offsetWidth = headerBar.offsetWidth, scrollLeft = headerBar.scrollLeft, scrollWidth = headerBar.scrollWidth;
    // scrollLeft can be a decimal value on systems using display scaling
    return Math.ceil(scrollLeft) < scrollWidth - offsetWidth;
};
export var scrollIntoView = function (tabHeader, headerBar, smooth) {
    if (smooth === void 0) { smooth = true; }
    if (!tabHeader || !headerBar) {
        return;
    }
    // Extra left and right margin to always make the focus ring visible
    var margin = 2;
    var updatedLeftScroll = headerBar.scrollLeft;
    // Anchor tab to left of scroll parent
    updatedLeftScroll = Math.min(updatedLeftScroll, tabHeader.offsetLeft - margin);
    // Anchor tab to right of scroll parent
    updatedLeftScroll = Math.max(updatedLeftScroll, tabHeader.offsetLeft + tabHeader.offsetWidth - headerBar.offsetWidth + margin);
    if (smooth) {
        smoothScroll(headerBar, updatedLeftScroll);
    }
    else {
        headerBar.scrollLeft = updatedLeftScroll;
    }
};
//# sourceMappingURL=scroll-utils.js.map