import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import InternalGrid from './internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Grid(_a) {
    var _b = _a.gridDefinition, gridDefinition = _b === void 0 ? [] : _b, _c = _a.disableGutters, disableGutters = _c === void 0 ? false : _c, children = _a.children, restProps = __rest(_a, ["gridDefinition", "disableGutters", "children"]);
    var baseComponentProps = useBaseComponent('Grid');
    var baseProps = getBaseProps(restProps);
    var _d = useContainerBreakpoints(undefined), breakpoint = _d[0], ref = _d[1];
    return (React.createElement(InternalGrid, __assign({}, baseProps, baseComponentProps, { ref: ref, __breakpoint: breakpoint, gridDefinition: gridDefinition, disableGutters: disableGutters }), children));
}
applyDisplayName(Grid, 'Grid');
//# sourceMappingURL=index.js.map