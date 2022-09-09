// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import balanced from 'balanced-match';
import { calculateOnce } from './calculate-once';
export function findUpUntil(node, callback) {
    var current = node;
    while (current && !callback(current)) {
        current = current.parentElement;
        // If a component is used within an svg (i.e. as foreignObject), then it will
        // have some ancestor nodes that are SVGElement. We want to skip those,
        // as they have very different properties to HTLMElements.
        while (current && !(current instanceof HTMLElement)) {
            current = current.parentElement;
        }
    }
    return current;
}
/**
 * Returns whether the browser supports CSS position sticky.
 * In our list of supported browsers, only returns false for IE11.
 */
export function supportsStickyPosition() {
    var _a, _b, _c;
    if (typeof window === 'undefined') {
        // render no-sticky UI on server-side
        return false;
    }
    return (_c = (_b = (_a = window.CSS) === null || _a === void 0 ? void 0 : _a.supports) === null || _b === void 0 ? void 0 : _b.call(_a, 'position', 'sticky')) !== null && _c !== void 0 ? _c : false;
}
/**
 * Returns whether `position: fixed` can be relative to transformed parents or
 * whether it's always relative to the viewport. Returns `true` on all browsers
 * except IE.
 */
var supportsContainingBlockPositioning = calculateOnce(function () {
    var parent = document.createElement('div');
    parent.style.transform = 'translateY(5px)';
    document.body.appendChild(parent);
    var child = document.createElement('div');
    child.style.position = 'fixed';
    child.style.top = '0';
    parent.appendChild(child);
    var result = parent.getBoundingClientRect().top === child.getBoundingClientRect().top;
    document.body.removeChild(parent);
    return result;
});
/**
 * Returns an element that is used to position the given element.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
 */
export function getContainingBlock(startElement) {
    if (!startElement.parentElement) {
        return null;
    }
    return supportsContainingBlockPositioning()
        ? findUpUntil(startElement.parentElement, function (element) {
            var computedStyle = getComputedStyle(element);
            return ((!!computedStyle.transform && computedStyle.transform !== 'none') ||
                (!!computedStyle.perspective && computedStyle.perspective !== 'none'));
        })
        : null;
}
var cssVariableExpression = /--.+?\s*,\s*(.+)/;
/**
 * Parses a CSS color value that might contain CSS Custom Properties
 * and returns a value that will be understood by the browser, no matter of support level.
 * If the browser support CSS Custom Properties, the value will be return as is. Otherwise,
 * the fallback value will be extracted and returned instead.
 */
export function parseCssVariable(value) {
    var _a, _b, _c;
    if ((_c = (_b = (_a = window.CSS) === null || _a === void 0 ? void 0 : _a.supports) === null || _b === void 0 ? void 0 : _b.call(_a, 'color', 'var(--dummy, #000)')) !== null && _c !== void 0 ? _c : false) {
        return value;
    }
    var varIndex = value.lastIndexOf('var(');
    if (varIndex === -1) {
        return value;
    }
    var expr = balanced('(', ')', value.substr(varIndex));
    if (!expr) {
        return value;
    }
    var match = expr.body.match(cssVariableExpression);
    return match ? match[1] : value;
}
/**
 * Checks whether the given node is a parent of the other descendant node.
 * This utility is helpful when the parent might be an SVG element,
 * which doesn't have a native `contains` implementation on some browsers like IE11.
 * @param parent Parent node
 * @param descendant Node that is checked to be a descendant of the parent node
 */
export function nodeContains(parent, descendant) {
    if (!parent || !descendant) {
        return false;
    }
    // Use the native `contains` method when available
    if (parent.contains && descendant.nodeType === Node.ELEMENT_NODE) {
        return parent === descendant || parent.contains(descendant);
    }
    // Fall back to a simple upwards tree traversal
    var upperNode = descendant;
    while (upperNode && parent !== upperNode) {
        upperNode = upperNode.parentNode;
    }
    return upperNode === parent;
}
/**
 * Checks whether the given node is a descendant of a container.
 * @param container Container node
 * @param node Node that is checked to be a descendant of the container
 */
export function containsOrEqual(container, node) {
    if (container === null) {
        return false;
    }
    return container === node || container.contains(node);
}
//# sourceMappingURL=dom.js.map