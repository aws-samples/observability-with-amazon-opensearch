import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalSpinner from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Spinner(_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.variant, variant = _c === void 0 ? 'normal' : _c, props = __rest(_a, ["size", "variant"]);
    var baseComponentProps = useBaseComponent('Spinner');
    return React.createElement(InternalSpinner, __assign({ size: size, variant: variant }, props, baseComponentProps));
}
applyDisplayName(Spinner, 'Spinner');
//# sourceMappingURL=index.js.map