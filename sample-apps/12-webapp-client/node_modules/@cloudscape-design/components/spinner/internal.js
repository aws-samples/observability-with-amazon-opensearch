import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
export default function InternalSpinner(_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.variant, variant = _c === void 0 ? 'normal' : _c, __internalRootRef = _a.__internalRootRef, props = __rest(_a, ["size", "variant", "__internalRootRef"]);
    var baseProps = getBaseProps(props);
    return (React.createElement("span", __assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles["size-".concat(size)], styles["variant-".concat(variant)]), ref: __internalRootRef }),
        React.createElement("span", { className: clsx(styles.circle, styles['circle-left']) }),
        React.createElement("span", { className: clsx(styles.circle, styles['circle-right']) })));
}
//# sourceMappingURL=internal.js.map