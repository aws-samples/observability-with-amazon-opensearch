// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import { TICK_MARGIN, TICK_LENGTH } from './constants';
import styles from './styles.css.js';
export default memo(EmphasizedBaseline);
function EmphasizedBaseline(_a) {
    var _b;
    var _c = _a.axis, axis = _c === void 0 ? 'x' : _c, width = _a.width, height = _a.height, scale = _a.scale;
    // Y position of the zero baseline, if it exists
    var baselineY = (_b = scale.d3Scale(0)) !== null && _b !== void 0 ? _b : NaN;
    var showYBaseline = axis === 'x' && isFinite(baselineY) && baselineY <= height;
    if (showYBaseline) {
        return (React.createElement("line", { className: clsx(styles.axis, styles['axis--emphasized']), x1: -TICK_MARGIN, x2: width, y1: baselineY, y2: baselineY, "aria-hidden": "true" }));
    }
    if (axis === 'y') {
        return (React.createElement("line", { className: clsx(styles.axis, styles['axis--emphasized']), x1: 0, y1: 0, x2: 0, y2: height + TICK_LENGTH, "aria-hidden": "true" }));
    }
    return null;
}
//# sourceMappingURL=emphasized-baseline.js.map