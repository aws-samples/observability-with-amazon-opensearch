// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { arc } from 'd3-shape';
import styles from './styles.css.js';
import { dimensionsBySize, balanceLabelNodes } from './utils';
import { useResizeObserver } from '../internal/hooks/container-queries';
import ResponsiveText from './responsive-text';
function LabelElement(_a) {
    var x = _a.x, y = _a.y, hideTitles = _a.hideTitles, hideDescriptions = _a.hideDescriptions, rightSide = _a.rightSide, title = _a.title, description = _a.description, containerBoundaries = _a.containerBoundaries;
    return (
    // Reset the transform property to prepare for `balanceLabelNodes`.
    // The dataset attributes are also needed in the function for IE11 support.
    React.createElement("g", { className: styles['label-text'], transform: "", "data-x": x, "data-y": y },
        !hideTitles && (React.createElement(ResponsiveText, { x: x, y: y, rightSide: rightSide, containerBoundaries: containerBoundaries }, title)),
        !hideDescriptions && description && (React.createElement(ResponsiveText, { x: x, y: y + (hideTitles ? 0 : 18), rightSide: rightSide, className: styles.label__description, containerBoundaries: containerBoundaries }, description))));
}
export default (function (_a) {
    var pieData = _a.pieData, size = _a.size, highlightedSegment = _a.highlightedSegment, segmentDescription = _a.segmentDescription, visibleDataSum = _a.visibleDataSum, hideTitles = _a.hideTitles, hideDescriptions = _a.hideDescriptions, containerRef = _a.containerRef;
    var containerBoundaries = useElementBoundaries(containerRef);
    var markers = useMemo(function () {
        var _a = dimensionsBySize[size], radius = _a.outerRadius, innerLabelPadding = _a.innerLabelPadding;
        // More arc factories for the label positioning
        var arcMarkerStart = arc()
            .innerRadius(radius - 1)
            .outerRadius(radius - 1);
        var arcMarkerBreak = arc()
            .innerRadius(radius + innerLabelPadding)
            .outerRadius(radius + innerLabelPadding);
        return pieData.map(function (datum, i) {
            var labelDatum = pieData[i];
            var midAngle = labelDatum.startAngle + (labelDatum.endAngle - labelDatum.startAngle) / 2;
            // Make the marker line longer if the segment is closer to the top or bottom of the chart
            arcMarkerBreak.outerRadius(radius + 20 * (0.5 * Math.cos(2 * midAngle) + 0.5));
            arcMarkerBreak.innerRadius(radius + 20 * (0.5 * Math.cos(2 * midAngle) + 0.5));
            var _a = arcMarkerStart.centroid(datum), startX = _a[0], startY = _a[1];
            var _b = arcMarkerBreak.centroid(datum), breakX = _b[0], breakY = _b[1];
            var rightSide = midAngle < Math.PI;
            var endX = (radius + 20) * (rightSide ? 1 : -1);
            var textX = endX + 5 * (rightSide ? 1 : -1);
            return {
                startX: startX,
                startY: startY,
                breakX: breakX,
                breakY: breakY,
                endX: endX,
                endY: breakY,
                textX: textX,
                textY: breakY,
                rightSide: rightSide,
                datum: datum
            };
        });
    }, [pieData, size]);
    var rootRef = useRef(null);
    useLayoutEffect(function () {
        if (!rootRef.current) {
            return;
        }
        // Relax labels that are overlapping
        var labelNodes = rootRef.current.querySelectorAll(".".concat(styles['label-text']));
        balanceLabelNodes(labelNodes, markers, false);
        balanceLabelNodes(labelNodes, markers, true);
    }, [markers, pieData]);
    return (React.createElement("g", { className: styles.markers, "aria-hidden": "true", ref: rootRef }, markers.map(function (_a) {
        var _b;
        var startX = _a.startX, startY = _a.startY, breakX = _a.breakX, breakY = _a.breakY, endX = _a.endX, endY = _a.endY, textX = _a.textX, textY = _a.textY, rightSide = _a.rightSide, datum = _a.datum;
        var segment = datum.data.datum;
        var description = segmentDescription === null || segmentDescription === void 0 ? void 0 : segmentDescription(segment, visibleDataSum);
        if ((hideTitles && !description) || (hideDescriptions && !segment.title)) {
            return null;
        }
        return (React.createElement("g", { key: datum.data.index, className: clsx(styles.label, (_b = {},
                _b[styles['label--highlighted']] = highlightedSegment === segment,
                _b[styles['label--dimmed']] = highlightedSegment !== null && highlightedSegment !== segment,
                _b[styles['label--align-right']] = !rightSide,
                _b)) },
            React.createElement("line", { x1: startX, y1: startY, x2: breakX, y2: breakY }),
            React.createElement("line", { x1: breakX, y1: breakY, x2: endX, y2: endY, className: styles['label-line'] }),
            React.createElement(LabelElement, { x: textX, y: textY, rightSide: rightSide, title: segment.title, description: description, hideTitles: hideTitles, hideDescriptions: hideDescriptions, containerBoundaries: containerBoundaries })));
    })));
});
function useElementBoundaries(ref) {
    var _a = useState({ left: 0, right: 0 }), state = _a[0], setState = _a[1];
    useResizeObserver(ref, function (entry) {
        var elementRect = entry.target.getBoundingClientRect();
        setState({ left: elementRect.left, right: elementRect.right });
    });
    return state;
}
//# sourceMappingURL=labels.js.map