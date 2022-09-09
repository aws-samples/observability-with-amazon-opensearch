import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalBreadcrumbGroup from './internal';
export default function BreadcrumbGroup(_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.expandAriaLabel, expandAriaLabel = _c === void 0 ? 'Show path' : _c, props = __rest(_a, ["items", "expandAriaLabel"]);
    var baseComponentProps = useBaseComponent('BreadcrumbGroup');
    return React.createElement(InternalBreadcrumbGroup, __assign({ items: items, expandAriaLabel: expandAriaLabel }, props, baseComponentProps));
}
applyDisplayName(BreadcrumbGroup, 'BreadcrumbGroup');
//# sourceMappingURL=index.js.map