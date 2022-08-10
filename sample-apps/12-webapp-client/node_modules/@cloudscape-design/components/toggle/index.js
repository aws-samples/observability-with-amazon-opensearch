import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalToggle from './internal';
var Toggle = React.forwardRef(function (props, ref) {
    var baseComponentProps = useBaseComponent('Toggle');
    return React.createElement(InternalToggle, __assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(Toggle, 'Toggle');
export default Toggle;
//# sourceMappingURL=index.js.map