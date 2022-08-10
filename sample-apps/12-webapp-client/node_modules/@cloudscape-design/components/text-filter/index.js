import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTextFilter from './internal';
var TextFilter = React.forwardRef(function (props, ref) {
    var baseComponentProps = useBaseComponent('TextFilter');
    return React.createElement(InternalTextFilter, __assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(TextFilter, 'TextFilter');
export default TextFilter;
//# sourceMappingURL=index.js.map