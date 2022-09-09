import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import InternalMixedLineBarChart from '../mixed-line-bar-chart/internal';
import useBaseComponent from '../internal/hooks/use-base-component';
function LineChart(_a) {
    var _b = _a.series, series = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 500 : _c, _d = _a.xScaleType, xScaleType = _d === void 0 ? 'linear' : _d, _e = _a.yScaleType, yScaleType = _e === void 0 ? 'linear' : _e, _f = _a.detailPopoverSize, detailPopoverSize = _f === void 0 ? 'medium' : _f, _g = _a.statusType, statusType = _g === void 0 ? 'finished' : _g, _h = _a.emphasizeBaselineAxis, emphasizeBaselineAxis = _h === void 0 ? true : _h, props = __rest(_a, ["series", "height", "xScaleType", "yScaleType", "detailPopoverSize", "statusType", "emphasizeBaselineAxis"]);
    var baseComponentProps = useBaseComponent('LineChart');
    var baseProps = getBaseProps(props);
    var className = clsx(baseProps.className, styles.root);
    return (React.createElement(InternalMixedLineBarChart, __assign({}, props, baseComponentProps, { className: className, height: height, xScaleType: xScaleType, yScaleType: yScaleType, stackedBars: false, horizontalBars: false, series: series, detailPopoverSize: detailPopoverSize, statusType: statusType, emphasizeBaselineAxis: emphasizeBaselineAxis })));
}
applyDisplayName(LineChart, 'LineChart');
export default LineChart;
//# sourceMappingURL=index.js.map