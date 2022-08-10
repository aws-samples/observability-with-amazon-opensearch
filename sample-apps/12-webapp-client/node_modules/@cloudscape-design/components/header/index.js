import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalHeader from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Header(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'h2' : _b, props = __rest(_a, ["variant"]);
    var baseComponentProps = useBaseComponent('Header');
    return React.createElement(InternalHeader, __assign({ variant: variant }, props, baseComponentProps));
}
applyDisplayName(Header, 'Header');
//# sourceMappingURL=index.js.map