// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useEffect, useRef } from 'react';
export default memo(ResponsiveText);
function ResponsiveText(_a) {
    var x = _a.x, y = _a.y, rightSide = _a.rightSide, className = _a.className, children = _a.children, containerBoundaries = _a.containerBoundaries;
    var actualRef = useRef(null);
    var virtualRef = useRef(null);
    // Determine the visible width of the text and if necessary truncate it until it fits.
    useEffect(function () {
        // The debouncing is necessary for visual smoothness.
        var timeoutId = setTimeout(function () {
            var groupRect = virtualRef.current.getBoundingClientRect();
            var visibleWidth = containerBoundaries ? getVisibleWidth(groupRect, containerBoundaries) : 0;
            renderTextContent(actualRef.current, children, visibleWidth);
        }, 25);
        return function () { return clearTimeout(timeoutId); };
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("text", { ref: virtualRef, x: x, y: y, style: { textAnchor: rightSide ? 'start' : 'end', visibility: 'hidden' }, "aria-hidden": "true", className: className }, children),
        React.createElement("text", { ref: actualRef, x: x, y: y, style: { textAnchor: rightSide ? 'start' : 'end' }, className: className }, children)));
}
function getVisibleWidth(element, container) {
    if (element.left < container.left) {
        return element.right - container.left;
    }
    else if (element.right > container.right) {
        return container.right - element.left;
    }
    else {
        return container.right - container.left;
    }
}
function renderTextContent(textNode, text, visibleWidth) {
    var visibleLength = text.length;
    while (visibleLength >= 0) {
        textNode.textContent = truncateText(text, visibleLength);
        if (!textNode.getComputedTextLength || textNode.getComputedTextLength() <= visibleWidth) {
            return;
        }
        else {
            visibleLength--;
        }
    }
}
function truncateText(text, maxLength) {
    if (text.length === maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '…';
}
//# sourceMappingURL=responsive-text.js.map