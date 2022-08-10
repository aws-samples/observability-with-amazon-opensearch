import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalColumnLayout, { COLUMN_TRIGGERS } from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function ColumnLayout(_a) {
    var _b = _a.columns, columns = _b === void 0 ? 1 : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, _d = _a.borders, borders = _d === void 0 ? 'none' : _d, _e = _a.disableGutters, disableGutters = _e === void 0 ? false : _e, props = __rest(_a, ["columns", "variant", "borders", "disableGutters"]);
    var baseComponentProps = useBaseComponent('ColumnLayout');
    var _f = useContainerBreakpoints(COLUMN_TRIGGERS), breakpoint = _f[0], ref = _f[1];
    var externalProps = getExternalProps(props);
    return (React.createElement(InternalColumnLayout, __assign({ columns: columns, variant: variant, borders: borders, disableGutters: disableGutters }, externalProps, baseComponentProps, { __breakpoint: breakpoint, ref: ref })));
}
applyDisplayName(ColumnLayout, 'ColumnLayout');
//# sourceMappingURL=index.js.map