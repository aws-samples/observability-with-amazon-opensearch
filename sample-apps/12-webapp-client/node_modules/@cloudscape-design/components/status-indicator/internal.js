import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import InternalIcon from '../icon/internal';
import InternalSpinner from '../spinner/internal';
var typeToIcon = function (size) { return ({
    error: React.createElement(InternalIcon, { name: "status-negative", size: size }),
    warning: React.createElement(InternalIcon, { name: "status-warning", size: size }),
    success: React.createElement(InternalIcon, { name: "status-positive", size: size }),
    info: React.createElement(InternalIcon, { name: "status-info", size: size }),
    stopped: React.createElement(InternalIcon, { name: "status-stopped", size: size }),
    pending: React.createElement(InternalIcon, { name: "status-pending", size: size }),
    'in-progress': React.createElement(InternalIcon, { name: "status-in-progress", size: size }),
    loading: React.createElement(InternalSpinner, null)
}); };
export default function StatusIndicator(_a) {
    var _b;
    var type = _a.type, children = _a.children, iconAriaLabel = _a.iconAriaLabel, colorOverride = _a.colorOverride, _c = _a.wrapText, wrapText = _c === void 0 ? true : _c, _d = _a.__animate, __animate = _d === void 0 ? false : _d, __internalRootRef = _a.__internalRootRef, _e = _a.__size, __size = _e === void 0 ? 'normal' : _e, rest = __rest(_a, ["type", "children", "iconAriaLabel", "colorOverride", "wrapText", "__animate", "__internalRootRef", "__size"]);
    var baseProps = getBaseProps(rest);
    return (React.createElement("span", __assign({}, baseProps, { className: clsx(styles.root, styles["status-".concat(type)], (_b = {},
            _b[styles["color-override-".concat(colorOverride)]] = colorOverride,
            _b), baseProps.className), ref: __internalRootRef }),
        React.createElement("span", { className: clsx(styles.container, wrapText === false && styles['overflow-ellipsis'], __animate && styles['container-fade-in']) },
            React.createElement("span", { className: clsx(styles.icon, __animate && styles['icon-shake']), "aria-label": iconAriaLabel, role: iconAriaLabel ? 'img' : undefined }, typeToIcon(__size)[type]),
            children)));
}
//# sourceMappingURL=internal.js.map