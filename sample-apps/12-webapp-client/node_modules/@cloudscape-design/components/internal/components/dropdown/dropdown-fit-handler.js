// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { getOverflowParents, getOverflowParentDimensions } from '../../utils/scrollable-containers';
import styles from './styles.css.js';
var AVAILABLE_SPACE_RESERVE_DEFAULT = 50;
var AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL = 19; // 50 - 31
var AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL = 20;
var getClosestParentDimensions = function (element) {
    var parents = getOverflowParents(element).map(function (el) {
        var _a = el.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, left = _a.left;
        return {
            height: height,
            width: width,
            top: top,
            left: left
        };
    });
    return parents.shift();
};
export var getAvailableSpace = function (trigger, dropdown, overflowParents, stretchWidth, stretchHeight, isMobile) {
    if (stretchWidth === void 0) { stretchWidth = false; }
    if (stretchHeight === void 0) { stretchHeight = false; }
    var availableSpaceReserveVertical = stretchHeight
        ? 0
        : isMobile
            ? AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL
            : AVAILABLE_SPACE_RESERVE_DEFAULT;
    var availableSpaceReserveHorizontal = stretchWidth
        ? 0
        : isMobile
            ? AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL
            : AVAILABLE_SPACE_RESERVE_DEFAULT;
    var _a = trigger.getBoundingClientRect(), triggerBottom = _a.bottom, triggerLeft = _a.left, triggerRight = _a.right;
    return overflowParents.reduce(function (_a, overflowParent) {
        var above = _a.above, below = _a.below, left = _a.left, right = _a.right;
        var offsetTop = triggerBottom - overflowParent.top;
        var currentAbove = offsetTop - trigger.offsetHeight - availableSpaceReserveVertical;
        var currentBelow = overflowParent.height - offsetTop - availableSpaceReserveVertical;
        var currentLeft = triggerRight - overflowParent.left - availableSpaceReserveHorizontal;
        var currentRight = overflowParent.left + overflowParent.width - triggerLeft - availableSpaceReserveHorizontal;
        return {
            above: Math.min(above, currentAbove),
            below: Math.min(below, currentBelow),
            left: Math.min(left, currentLeft),
            right: Math.min(right, currentRight)
        };
    }, { above: Number.MAX_VALUE, below: Number.MAX_VALUE, left: Number.MAX_VALUE, right: Number.MAX_VALUE });
};
export var getInteriorAvailableSpace = function (trigger, dropdown, overflowParents, isMobile) {
    var AVAILABLE_SPACE_RESERVE_VERTICAL = isMobile
        ? AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL
        : AVAILABLE_SPACE_RESERVE_DEFAULT;
    var AVAILABLE_SPACE_RESERVE_HORIZONTAL = isMobile
        ? AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL
        : AVAILABLE_SPACE_RESERVE_DEFAULT;
    var _a = trigger.getBoundingClientRect(), triggerBottom = _a.bottom, triggerTop = _a.top, triggerLeft = _a.left, triggerRight = _a.right;
    return overflowParents.reduce(function (_a, overflowParent) {
        var above = _a.above, below = _a.below, left = _a.left, right = _a.right;
        var currentAbove = triggerBottom - overflowParent.top - AVAILABLE_SPACE_RESERVE_VERTICAL;
        var currentBelow = overflowParent.height - triggerTop + overflowParent.top - AVAILABLE_SPACE_RESERVE_VERTICAL;
        var currentLeft = triggerLeft - overflowParent.left - AVAILABLE_SPACE_RESERVE_HORIZONTAL;
        var currentRight = overflowParent.left + overflowParent.width - triggerRight - AVAILABLE_SPACE_RESERVE_HORIZONTAL;
        return {
            above: Math.min(above, currentAbove),
            below: Math.min(below, currentBelow),
            left: Math.min(left, currentLeft),
            right: Math.min(right, currentRight)
        };
    }, { above: Number.MAX_VALUE, below: Number.MAX_VALUE, left: Number.MAX_VALUE, right: Number.MAX_VALUE });
};
export var getDropdownPosition = function (trigger, dropdown, overflowParents, minWidth, preferCenter, stretchWidth, stretchHeight, isMobile) {
    if (preferCenter === void 0) { preferCenter = false; }
    if (stretchWidth === void 0) { stretchWidth = false; }
    if (stretchHeight === void 0) { stretchHeight = false; }
    var availableSpace = getAvailableSpace(trigger, dropdown, overflowParents, stretchWidth, stretchHeight, isMobile);
    var triggerWidth = trigger.getBoundingClientRect().width;
    minWidth = minWidth ? Math.min(triggerWidth, minWidth) : triggerWidth;
    var requiredWidth = dropdown.getBoundingClientRect().width;
    // dropdown should not be smaller than the trigger
    var idealWidth = Math.max(requiredWidth, minWidth);
    var dropLeft;
    var left = null;
    var width = idealWidth;
    //1. Can it be positioned with ideal width to the right?
    if (idealWidth <= availableSpace.right) {
        dropLeft = false;
        //2. Can it be positioned with ideal width to the left?
    }
    else if (idealWidth <= availableSpace.left) {
        dropLeft = true;
        //3. Fit into biggest available space either on left or right
    }
    else {
        dropLeft = availableSpace.left > availableSpace.right;
        width = Math.max(availableSpace.left, availableSpace.right, minWidth);
    }
    if (preferCenter) {
        var spillOver = (idealWidth - triggerWidth) / 2;
        // availableSpace always includes the trigger width, but we want to exclude that
        var availableOutsideLeft = availableSpace.left - triggerWidth;
        var availableOutsideRight = availableSpace.right - triggerWidth;
        var fitsInCenter = availableOutsideLeft >= spillOver && availableOutsideRight >= spillOver;
        if (fitsInCenter) {
            left = -spillOver;
        }
    }
    var dropUp = availableSpace.below < dropdown.offsetHeight && availableSpace.above > availableSpace.below;
    var availableHeight = dropUp ? availableSpace.above : availableSpace.below;
    // Try and crop the bottom item when all options can't be displayed, affordance for "there's more"
    var croppedHeight = stretchHeight ? availableHeight : Math.floor(availableHeight / 31) * 31 + 16;
    return {
        dropUp: dropUp,
        dropLeft: dropLeft,
        left: left === null ? 'auto' : "".concat(left, "px"),
        height: "".concat(croppedHeight, "px"),
        width: "".concat(width, "px")
    };
};
export var getInteriorDropdownPosition = function (trigger, dropdown, overflowParents, isMobile) {
    var availableSpace = getInteriorAvailableSpace(trigger, dropdown, overflowParents, isMobile);
    var _a = trigger.getBoundingClientRect(), triggerBottom = _a.bottom, triggerTop = _a.top, triggerWidth = _a.width;
    var _b = getClosestParentDimensions(trigger), parentDropdownTop = _b.top, parentDropdownHeight = _b.height;
    var dropLeft;
    var width = dropdown.getBoundingClientRect().width;
    var top = triggerTop - parentDropdownTop;
    if (width <= availableSpace.right) {
        dropLeft = false;
    }
    else if (width <= availableSpace.left) {
        dropLeft = true;
    }
    else {
        dropLeft = availableSpace.left > availableSpace.right;
        width = Math.max(availableSpace.left, availableSpace.right);
    }
    var left = dropLeft ? 0 - width : triggerWidth;
    var dropUp = availableSpace.below < dropdown.offsetHeight && availableSpace.above > availableSpace.below;
    var bottom = dropUp ? parentDropdownTop + parentDropdownHeight - triggerBottom : 0;
    var availableHeight = dropUp ? availableSpace.above : availableSpace.below;
    // Try and crop the bottom item when all options can't be displayed, affordance for "there's more"
    var croppedHeight = Math.floor(availableHeight / 31) * 31 + 16;
    return {
        dropUp: dropUp,
        dropLeft: dropLeft,
        height: "".concat(croppedHeight, "px"),
        width: "".concat(width, "px"),
        top: "".concat(top, "px"),
        bottom: "".concat(bottom, "px"),
        left: "".concat(left, "px")
    };
};
export var calculatePosition = function (dropdownElement, triggerElement, verticalContainerElement, interior, expandToViewport, preferCenter, stretchWidth, stretchHeight, isMobile, minWidth) {
    // cleaning previously assigned values,
    // so that they are not reused in case of screen resize and similar events
    verticalContainerElement.style.maxHeight = '';
    dropdownElement.style.width = '';
    dropdownElement.style.top = '';
    dropdownElement.style.bottom = '';
    dropdownElement.style.left = '';
    dropdownElement.classList.remove(styles['dropdown-drop-left']);
    dropdownElement.classList.remove(styles['dropdown-drop-right']);
    dropdownElement.classList.remove(styles['dropdown-drop-up']);
    var overflowParents = getOverflowParentDimensions(dropdownElement, interior, expandToViewport, stretchHeight);
    var position = interior
        ? getInteriorDropdownPosition(triggerElement, dropdownElement, overflowParents, isMobile)
        : getDropdownPosition(triggerElement, dropdownElement, overflowParents, minWidth, preferCenter, stretchWidth, stretchHeight, isMobile);
    var triggerBox = triggerElement.getBoundingClientRect();
    return [position, triggerBox];
};
//# sourceMappingURL=dropdown-fit-handler.js.map