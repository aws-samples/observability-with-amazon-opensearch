import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalFormField from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function FormField(_a) {
    var _b = _a.stretch, stretch = _b === void 0 ? false : _b, props = __rest(_a, ["stretch"]);
    var baseComponentProps = useBaseComponent('FormField');
    return React.createElement(InternalFormField, __assign({ stretch: stretch }, props, { __hideLabel: false }, baseComponentProps));
}
applyDisplayName(FormField, 'FormField');
//# sourceMappingURL=index.js.map