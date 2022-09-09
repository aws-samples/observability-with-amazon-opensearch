import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalBox from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Box(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'div' : _b, _c = _a.margin, margin = _c === void 0 ? {} : _c, _d = _a.padding, padding = _d === void 0 ? {} : _d, props = __rest(_a, ["variant", "margin", "padding"]);
    var baseComponentProps = useBaseComponent('Box');
    return React.createElement(InternalBox, __assign({ variant: variant, margin: margin, padding: padding }, props, baseComponentProps));
}
applyDisplayName(Box, 'Box');
//# sourceMappingURL=index.js.map