import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../../base-component';
import InternalBox from '../../../box/internal';
import ChartSeriesMarker from '../chart-series-marker';
import styles from './styles.css.js';
export default memo(ChartSeriesDetails);
function ChartSeriesDetails(_a) {
    var details = _a.details, restProps = __rest(_a, ["details"]);
    var baseProps = getBaseProps(restProps);
    var className = clsx(baseProps.className, styles.root);
    return (React.createElement("div", __assign({}, baseProps, { className: className }),
        React.createElement("ul", { className: styles.list }, details.map(function (_a, index) {
            var _b;
            var key = _a.key, value = _a.value, markerType = _a.markerType, color = _a.color, isDimmed = _a.isDimmed;
            return (React.createElement("li", { key: index, className: clsx((_b = {},
                    _b[styles.dimmed] = isDimmed,
                    _b[styles['list-item']] = true,
                    _b)) },
                React.createElement("div", { className: styles.key },
                    markerType && color && React.createElement(ChartSeriesMarker, { type: markerType, color: color }),
                    React.createElement("span", null, key)),
                React.createElement(InternalBox, { textAlign: "right" }, value)));
        }))));
}
//# sourceMappingURL=index.js.map