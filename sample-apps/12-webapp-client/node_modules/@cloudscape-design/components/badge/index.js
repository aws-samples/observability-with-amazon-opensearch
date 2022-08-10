import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import clsx from 'clsx';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Badge(_a) {
    var _b = _a.color, color = _b === void 0 ? 'grey' : _b, children = _a.children, rest = __rest(_a, ["color", "children"]);
    var __internalRootRef = useBaseComponent('Badge').__internalRootRef;
    var baseProps = getBaseProps(rest);
    var className = clsx(baseProps.className, styles.badge, styles["badge-color-".concat(color)]);
    return (React.createElement("span", __assign({}, baseProps, { className: className }, { ref: __internalRootRef }), children));
}
applyDisplayName(Badge, 'Badge');
//# sourceMappingURL=index.js.map