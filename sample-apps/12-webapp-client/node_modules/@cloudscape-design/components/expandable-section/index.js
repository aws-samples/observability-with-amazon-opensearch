import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalExpandableSection from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function ExpandableSection(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, props = __rest(_a, ["variant"]);
    var baseComponentProps = useBaseComponent('ExpandableSection');
    return React.createElement(InternalExpandableSection, __assign({ variant: variant }, props, baseComponentProps));
}
applyDisplayName(ExpandableSection, 'ExpandableSection');
//# sourceMappingURL=index.js.map