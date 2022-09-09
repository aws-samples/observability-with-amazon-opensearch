import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import clsx from 'clsx';
import styles from './styles.css.js';
export default function InternalBox(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'div' : _b, tagOverride = _a.tagOverride, _c = _a.margin, margin = _c === void 0 ? {} : _c, _d = _a.padding, padding = _d === void 0 ? {} : _d, display = _a.display, textAlign = _a.textAlign, float = _a.float, fontSize = _a.fontSize, fontWeight = _a.fontWeight, color = _a.color, children = _a.children, _e = _a.__internalRootRef, __internalRootRef = _e === void 0 ? null : _e, props = __rest(_a, ["variant", "tagOverride", "margin", "padding", "display", "textAlign", "float", "fontSize", "fontWeight", "color", "children", "__internalRootRef"]);
    var baseProps = getBaseProps(props);
    var marginsClassNamesSuffices = getClassNamesSuffixes(margin);
    var paddingsClassNamesSuffices = getClassNamesSuffixes(padding);
    // This can be any arbitrary string if passed into tagOverride.
    // We appease the compiler with an incorrect type.
    var Tag = getTag(variant, tagOverride);
    var className = clsx(baseProps.className, styles.root, styles.box, styles["".concat(variant.replace(/^awsui-/, ''), "-variant")], marginsClassNamesSuffices.map(function (suffix) { return styles["m-".concat(suffix)]; }), paddingsClassNamesSuffices.map(function (suffix) { return styles["p-".concat(suffix)]; }), styles["d-".concat(display)], styles["f-".concat(float)], styles["color-".concat(color || 'default')], styles["font-size-".concat(fontSize || 'default')], styles["font-weight-".concat(fontWeight || 'default')], styles["t-".concat(textAlign)]);
    return (React.createElement(Tag, __assign({}, baseProps, { className: className, ref: __internalRootRef }), children));
}
var getClassNamesSuffixes = function (value) {
    if (typeof value === 'string') {
        return [value];
    }
    var sides = ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'];
    return sides.filter(function (side) { return !!value[side]; }).map(function (side) { return "".concat(side, "-").concat(value[side]); });
};
var getTag = function (variant, tagOverride) {
    if (tagOverride) {
        return tagOverride;
    }
    if (variant === 'awsui-value-large') {
        return 'span';
    }
    if (variant === 'awsui-key-label') {
        return 'div';
    }
    return variant;
};
//# sourceMappingURL=internal.js.map