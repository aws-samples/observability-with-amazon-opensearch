import { __spreadArray } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isItemGroup } from './utils';
export default function createItemsTree(items) {
    var itemToIndex = new Map();
    var indexToItem = new Map();
    var flatIndices = [];
    traverseItems(items, function (item, index) {
        var indexKey = stringifyIndex(index);
        itemToIndex.set(item, indexKey);
        indexToItem.set(indexKey, item);
        flatIndices.push(indexKey);
    });
    return {
        getItem: function (index) {
            var indexKey = stringifyIndex(index);
            return indexToItem.get(indexKey) || null;
        },
        getItemIndex: function (item) {
            var indexKey = itemToIndex.get(item);
            if (!indexKey) {
                throw new Error('Invariant violation: item is not found.');
            }
            return parseIndex(indexKey);
        },
        getSequentialIndex: function (index, direction) {
            var indexKey = stringifyIndex(index);
            var position = flatIndices.indexOf(indexKey);
            var nextIndexKey = flatIndices[position + direction];
            if (!nextIndexKey) {
                return null;
            }
            return parseIndex(nextIndexKey);
        },
        getParentIndex: function (item) {
            var indexKey = itemToIndex.get(item);
            if (!indexKey) {
                throw new Error('Invariant violation: item is not found.');
            }
            var index = parseIndex(indexKey);
            // No parent
            if (index.length === 1) {
                return null;
            }
            return index.slice(0, index.length - 1);
        }
    };
}
function traverseItems(items, act, parentIndex) {
    if (parentIndex === void 0) { parentIndex = []; }
    items.forEach(function (item, index) {
        var itemIndex = __spreadArray(__spreadArray([], parentIndex, true), [index], false);
        act(item, itemIndex);
        if (isItemGroup(item)) {
            traverseItems(item.items, act, itemIndex);
        }
    });
}
function stringifyIndex(index) {
    return index.join('-');
}
function parseIndex(index) {
    return index.split('-').map(function (it) { return parseInt(it); });
}
//# sourceMappingURL=create-items-tree.js.map