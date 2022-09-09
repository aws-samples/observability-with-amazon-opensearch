import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import flattenChildren from 'react-keyed-flatten-children';
export default function InternalSpaceBetween(_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'vertical' : _b, size = _a.size, children = _a.children, __internalRootRef = _a.__internalRootRef, props = __rest(_a, ["direction", "size", "children", "__internalRootRef"]);
    var baseProps = getBaseProps(props);
    /*
     Flattening the children allows us to "see through" React Fragments and nested arrays.
     */
    var flattenedChildren = flattenChildren(children);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles[direction], styles["".concat(direction, "-").concat(size)]), ref: __internalRootRef }), flattenedChildren.map(function (child) {
        // If this react child is a primitive value, the key will be undefined
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var key = child.key;
        return (React.createElement("div", { key: key, className: clsx(styles.child, styles["child-".concat(direction, "-").concat(size)]) }, child));
    })));
}
//# sourceMappingURL=internal.js.map