// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { getOverflowParents } from '../internal/utils/scrollable-containers';
/**
 * @param containerRef ref to surrounding container with sticky element
 * @param stickyRef ref to sticky element scrolled inside of containerRef
 * @param containerOffset offset between header and container
 *                        originating borders or paddings
 */
export default function stickyScrolling(containerRef, stickyRef) {
    var scrollToTop = function () {
        if (!containerRef.current || !stickyRef.current) {
            return;
        }
        var scrollingOffset = calculateScrollingOffset(containerRef.current, stickyRef.current);
        if (scrollingOffset > 0) {
            scrollUpBy(scrollingOffset, containerRef.current);
        }
    };
    var scrollToItem = function (item) {
        if (!item || !containerRef.current || !stickyRef.current) {
            return;
        }
        var stickyBottom = stickyRef.current.getBoundingClientRect().bottom;
        var scrollingOffset = stickyBottom - item.getBoundingClientRect().top;
        if (scrollingOffset > 0) {
            scrollUpBy(scrollingOffset, containerRef.current);
        }
    };
    return {
        scrollToTop: scrollToTop,
        scrollToItem: scrollToItem
    };
}
/**
 * Calculates the scrolling offset between container and
 * sticky element with container offset caused by border
 * or padding
 * @param container
 * @param sticky element inside of container
 * @param containerOffset caused by borders or paddings
 */
export function calculateScrollingOffset(container, sticky) {
    var stickyRect = sticky.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();
    return stickyRect.top - containerRect.top;
}
/**
 * Scrolls suitable parent of container up by amount of pixels
 * @param amount pixels to be scrolled up
 * @param container used to determine next parent element for scrolling
 */
export function scrollUpBy(amount, container) {
    var parent = getOverflowParents(container);
    if (parent.length) {
        // Take next overflow parent in stack
        parent[0].scrollTop -= amount;
    }
    else {
        window.scrollTo({ top: window.pageYOffset - amount });
    }
}
//# sourceMappingURL=sticky-scrolling.js.map