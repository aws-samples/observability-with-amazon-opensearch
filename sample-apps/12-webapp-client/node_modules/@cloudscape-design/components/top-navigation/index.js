import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTopNavigation from './internal';
export default function TopNavigation(_a) {
    var _b = _a.utilities, utilities = _b === void 0 ? [] : _b, restProps = __rest(_a, ["utilities"]);
    var baseComponentProps = useBaseComponent('TopNavigation');
    return React.createElement(InternalTopNavigation, __assign({}, baseComponentProps, { utilities: utilities }, restProps));
}
applyDisplayName(TopNavigation, 'TopNavigation');
//# sourceMappingURL=index.js.map