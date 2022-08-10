import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTokenGroup from './internal';
export default function TokenGroup(_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.alignment, alignment = _c === void 0 ? 'horizontal' : _c, props = __rest(_a, ["items", "alignment"]);
    var baseComponentProps = useBaseComponent('TokenGroup');
    return React.createElement(InternalTokenGroup, __assign({ items: items, alignment: alignment }, props, baseComponentProps));
}
applyDisplayName(TokenGroup, 'TokenGroup');
//# sourceMappingURL=index.js.map