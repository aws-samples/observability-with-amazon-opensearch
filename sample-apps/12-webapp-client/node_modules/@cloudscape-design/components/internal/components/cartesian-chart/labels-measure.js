// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { useContainerQuery } from '../../hooks/container-queries';
export default memo(LabelsMeasure);
// Places the invisible left-hand side labels to calculate their maximum width.
function LabelsMeasure(_a) {
    var scale = _a.scale, ticks = _a.ticks, tickFormatter = _a.tickFormatter, autoWidth = _a.autoWidth;
    var _b = useContainerQuery(function (rect) { return rect.width; }), width = _b[0], ref = _b[1];
    // Tell elements's width to the parent.
    useEffect(function () {
        autoWidth(width || 0);
    }, [autoWidth, width]);
    var labelMapper = function (value) {
        var scaledValue = scale.d3Scale(value);
        if (scaledValue === undefined || !isFinite(scaledValue)) {
            return null;
        }
        return (React.createElement("div", { key: "".concat(value), className: styles['labels-left__label'], "aria-hidden": "true" }, tickFormatter ? tickFormatter(value) : value.toString()));
    };
    return (React.createElement("div", { ref: ref, className: clsx(styles['labels-left'], styles['labels-left--hidden']) }, ticks.map(labelMapper)));
}
//# sourceMappingURL=labels-measure.js.map