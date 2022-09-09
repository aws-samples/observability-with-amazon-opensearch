// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useRef } from 'react';
import clsx from 'clsx';
import { TICK_LENGTH, TICK_MARGIN } from './constants';
import styles from './styles.css.js';
import { formatTicks, getVisibleTicks } from './label-utils';
var OFFSET_PX = 12;
export default memo(LeftLabels);
// Renders the visible tick labels on the left axis, as well as their grid lines.
function LeftLabels(_a) {
    var _b = _a.axis, axis = _b === void 0 ? 'y' : _b, width = _a.width, height = _a.height, scale = _a.scale, ticks = _a.ticks, tickFormatter = _a.tickFormatter, title = _a.title, ariaRoleDescription = _a.ariaRoleDescription;
    var virtualTextRef = useRef(null);
    var yOffset = axis === 'x' && scale.isCategorical() ? Math.max(0, scale.d3Scale.bandwidth() - 1) / 2 : 0;
    var cacheRef = useRef({});
    var getLabelSpace = function (label) {
        if (cacheRef.current[label] !== undefined) {
            return cacheRef.current[label];
        }
        if (virtualTextRef.current && virtualTextRef.current.getBBox) {
            virtualTextRef.current.textContent = label;
            cacheRef.current[label] = virtualTextRef.current.getBBox().height;
            return cacheRef.current[label];
        }
        return 0;
    };
    var formattedTicks = formatTicks({ ticks: ticks, scale: scale, getLabelSpace: getLabelSpace, tickFormatter: tickFormatter });
    if (virtualTextRef.current) {
        virtualTextRef.current.textContent = '';
    }
    var from = 0 - OFFSET_PX - yOffset;
    var until = height + OFFSET_PX - yOffset;
    var visibleTicks = getVisibleTicks(formattedTicks, from, until);
    return (React.createElement("g", { className: clsx(styles['labels-left']), "aria-label": title, role: "list", "aria-roledescription": ariaRoleDescription, "aria-hidden": true },
        visibleTicks.map(function (_a, index) {
            var position = _a.position, lines = _a.lines;
            return isFinite(position) && (React.createElement("g", { key: index, role: "listitem", transform: "translate(0,".concat(position + yOffset, ")"), className: clsx(styles.ticks, axis === 'x' ? styles['ticks--x'] : styles['ticks--y']) },
                axis === 'y' && (React.createElement("line", { className: clsx(styles.grid, styles.ticks_line), x1: -TICK_LENGTH, y1: 0, x2: width, y2: 0, "aria-hidden": "true" })),
                React.createElement("text", { className: styles.ticks__text, x: -(TICK_LENGTH + TICK_MARGIN), y: 0 }, lines.join(' '))));
        }),
        React.createElement("text", { ref: virtualTextRef, x: 0, y: 0, style: { visibility: 'hidden' }, "aria-hidden": "true" })));
}
//# sourceMappingURL=left-labels.js.map