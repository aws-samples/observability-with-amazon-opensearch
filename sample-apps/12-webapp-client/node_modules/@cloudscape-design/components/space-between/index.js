import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalSpaceBetween from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function SpaceBetween(_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'vertical' : _b, props = __rest(_a, ["direction"]);
    var baseComponentProps = useBaseComponent('SpaceBetween');
    return React.createElement(InternalSpaceBetween, __assign({ direction: direction }, props, baseComponentProps));
}
applyDisplayName(SpaceBetween, 'SpaceBetween');
//# sourceMappingURL=index.js.map