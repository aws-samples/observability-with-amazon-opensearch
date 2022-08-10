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
function BarChart(_a) {
    var _b = _a.series, series = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 500 : _c, _d = _a.xScaleType, xScaleType = _d === void 0 ? 'linear' : _d, _e = _a.yScaleType, yScaleType = _e === void 0 ? 'linear' : _e, _f = _a.stackedBars, stackedBars = _f === void 0 ? false : _f, _g = _a.horizontalBars, horizontalBars = _g === void 0 ? false : _g, _h = _a.detailPopoverSize, detailPopoverSize = _h === void 0 ? 'medium' : _h, _j = _a.statusType, statusType = _j === void 0 ? 'finished' : _j, _k = _a.emphasizeBaselineAxis, emphasizeBaselineAxis = _k === void 0 ? true : _k, props = __rest(_a, ["series", "height", "xScaleType", "yScaleType", "stackedBars", "horizontalBars", "detailPopoverSize", "statusType", "emphasizeBaselineAxis"]);
    var baseComponentProps = useBaseComponent('BarChart');
    var baseProps = getBaseProps(props);
    var className = clsx(baseProps.className, styles.root);
    return (React.createElement(InternalMixedLineBarChart, __assign({}, props, baseComponentProps, { className: className, height: height, xScaleType: xScaleType, yScaleType: yScaleType, stackedBars: stackedBars, horizontalBars: horizontalBars, series: series, detailPopoverSize: detailPopoverSize, statusType: statusType, emphasizeBaselineAxis: emphasizeBaselineAxis })));
}
applyDisplayName(BarChart, 'BarChart');
export default BarChart;
//# sourceMappingURL=index.js.map