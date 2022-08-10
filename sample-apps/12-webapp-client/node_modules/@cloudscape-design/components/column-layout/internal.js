import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import InternalGrid from '../grid/internal';
import { getBaseProps } from '../internal/base-component';
import { repeat } from './util';
import styles from './styles.css.js';
export var COLUMN_TRIGGERS = ['default', 'xxs', 'xs'];
var COLUMN_DEFS = {
    1: { colspan: { "default": 12, xxs: 12, xs: 12 } },
    2: { colspan: { "default": 12, xxs: 6, xs: 6 } },
    3: { colspan: { "default": 12, xxs: 6, xs: 4 } },
    4: { colspan: { "default": 12, xxs: 6, xs: 3 } }
};
/**
 * A responsive grid layout.
 */
export default React.forwardRef(function ColumnLayout(_a, ref) {
    var _b;
    var _c;
    var _d = _a.columns, columns = _d === void 0 ? 1 : _d, _e = _a.variant, variant = _e === void 0 ? 'default' : _e, _f = _a.borders, borders = _f === void 0 ? 'none' : _f, _g = _a.disableGutters, disableGutters = _g === void 0 ? false : _g, children = _a.children, __breakpoint = _a.__breakpoint, __internalRootRef = _a.__internalRootRef, restProps = __rest(_a, ["columns", "variant", "borders", "disableGutters", "children", "__breakpoint", "__internalRootRef"]);
    var baseProps = getBaseProps(restProps);
    var isTextGridVariant = variant === 'text-grid';
    var shouldDisableGutters = !isTextGridVariant && disableGutters;
    var shouldHaveHorizontalBorders = !isTextGridVariant && (borders === 'horizontal' || borders === 'all');
    var shouldHaveVerticalBorders = !isTextGridVariant && (borders === 'vertical' || borders === 'all');
    /*
     Flattening the children allows us to "see through" React Fragments and nested arrays.
     */
    var flattenedChildren = flattenChildren(children);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(baseProps.className, styles['column-layout']), ref: __internalRootRef }),
        React.createElement(InternalGrid, { ref: ref, disableGutters: true, gridDefinition: repeat((_c = COLUMN_DEFS[columns]) !== null && _c !== void 0 ? _c : {}, flattenedChildren.length), className: clsx(styles.grid, styles["grid-columns-".concat(columns)], styles["grid-variant-".concat(variant)], (_b = {},
                _b[styles['grid-horizontal-borders']] = shouldHaveHorizontalBorders,
                _b[styles['grid-vertical-borders']] = shouldHaveVerticalBorders,
                _b[styles['grid-no-gutters']] = shouldDisableGutters,
                _b)), __breakpoint: __breakpoint, __responsiveClassName: function (breakpoint) { return breakpoint && styles["grid-breakpoint-".concat(breakpoint)]; } }, children)));
});
//# sourceMappingURL=internal.js.map