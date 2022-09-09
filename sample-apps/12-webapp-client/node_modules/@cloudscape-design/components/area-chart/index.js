import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAreaChart from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
function AreaChart(_a) {
    var _b = _a.height, height = _b === void 0 ? 500 : _b, _c = _a.xScaleType, xScaleType = _c === void 0 ? 'linear' : _c, _d = _a.yScaleType, yScaleType = _d === void 0 ? 'linear' : _d, _e = _a.statusType, statusType = _e === void 0 ? 'finished' : _e, _f = _a.detailPopoverSize, detailPopoverSize = _f === void 0 ? 'medium' : _f, _g = _a.i18nStrings, i18nStrings = _g === void 0 ? {} : _g, props = __rest(_a, ["height", "xScaleType", "yScaleType", "statusType", "detailPopoverSize", "i18nStrings"]);
    var baseComponentProps = useBaseComponent('AreaChart');
    return (React.createElement(InternalAreaChart, __assign({ height: height, xScaleType: xScaleType, yScaleType: yScaleType, statusType: statusType, detailPopoverSize: detailPopoverSize, i18nStrings: i18nStrings }, props, baseComponentProps)));
}
applyDisplayName(AreaChart, 'AreaChart');
export default AreaChart;
//# sourceMappingURL=index.js.map