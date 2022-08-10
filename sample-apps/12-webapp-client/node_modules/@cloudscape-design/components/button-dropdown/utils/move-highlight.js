// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isItemGroup, indexEquals } from './utils';
export default function moveHighlight(_a) {
    var startIndex = _a.startIndex, expandedIndex = _a.expandedIndex, getNext = _a.getNext, hasExpandableGroups = _a.hasExpandableGroups, isInRestrictedView = _a.isInRestrictedView;
    var tryMove = function (currentIndex) {
        var _a;
        var next = getNext(currentIndex);
        if (!next) {
            return null;
        }
        // Prevents stepping into disabled expandable groups. However,
        // it's possible to navigate nested groups.
        if (((_a = next.parent) === null || _a === void 0 ? void 0 : _a.disabled) && hasExpandableGroups) {
            return tryMove(next.index);
        }
        // it is not allowed to highlight groups when non-expandable
        if (isItemGroup(next.item) && !hasExpandableGroups) {
            return tryMove(next.index);
        }
        // can only move within same parent unless is in restricted view
        if (hasExpandableGroups && !isInRestrictedView && !isSameParent(startIndex, next.index)) {
            return tryMove(next.index);
        }
        // in restricted view can only navigate to children if group is expanded
        if (hasExpandableGroups &&
            isInRestrictedView &&
            !isSameLevel(next.index, expandedIndex) &&
            !isIncluded(expandedIndex, next.index)) {
            return tryMove(next.index);
        }
        return next.index;
    };
    return tryMove(startIndex);
}
function isSameParent(left, right) {
    return indexEquals(left.slice(0, -1), right.slice(0, -1));
}
function isSameLevel(left, right) {
    return left.length === right.length;
}
function isIncluded(parent, child) {
    return indexEquals(parent, child.slice(0, -1));
}
//# sourceMappingURL=move-highlight.js.map