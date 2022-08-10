import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalCheckbox from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
var Checkbox = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var baseComponentProps = useBaseComponent('Checkbox');
    return React.createElement(InternalCheckbox, __assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(Checkbox, 'Checkbox');
export default Checkbox;
//# sourceMappingURL=index.js.map