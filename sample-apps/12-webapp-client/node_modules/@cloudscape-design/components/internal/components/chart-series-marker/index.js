// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
export default memo(ChartSeriesMarker);
function ChartSeriesMarker(_a) {
    var _b = _a.type, type = _b === void 0 ? 'line' : _b, color = _a.color;
    return (React.createElement("span", { className: clsx(styles.marker, styles["marker--".concat(type)]), style: { backgroundColor: color }, "aria-hidden": "true" }));
}
//# sourceMappingURL=index.js.map