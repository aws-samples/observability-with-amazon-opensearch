import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalIcon from './internal';
export default function Icon(_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.variant, variant = _c === void 0 ? 'normal' : _c, props = __rest(_a, ["size", "variant"]);
    var baseComponentProps = useBaseComponent('Icon');
    return React.createElement(InternalIcon, __assign({ size: size, variant: variant }, props, baseComponentProps));
}
applyDisplayName(Icon, 'Icon');
//# sourceMappingURL=index.js.map