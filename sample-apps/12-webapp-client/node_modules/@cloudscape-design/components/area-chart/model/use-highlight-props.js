// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect } from 'react';
import { fireNonCancelableEvent } from '../../internal/events';
import { useControllable } from '../../internal/hooks/use-controllable';
// Provides controlled or uncontrolled props to highlight chart elements.
export default function useHighlightProps(series, controlledHighlightedSeries, controlledOnHighlightChange) {
    var _a = useControllable(controlledHighlightedSeries, controlledOnHighlightChange, null, {
        componentName: 'AreaChart',
        controlledProp: 'highlightedSeries',
        changeHandler: 'onHighlightChange'
    }), _b = _a[0], highlightedSeries = _b === void 0 ? null : _b, setHighlightedSeries = _a[1];
    var notifyHighlightedSeries = useCallback(function (s) {
        fireNonCancelableEvent(controlledOnHighlightChange, { highlightedSeries: s });
    }, [controlledOnHighlightChange]);
    // Reset highlights if series change.
    useEffect(function () {
        if (controlledHighlightedSeries) {
            var highlightedSeriesIndex = series.indexOf(controlledHighlightedSeries);
            if (highlightedSeriesIndex === -1) {
                setHighlightedSeries(null);
                notifyHighlightedSeries(null);
            }
        }
    }, [series, controlledHighlightedSeries, setHighlightedSeries, notifyHighlightedSeries]);
    return [highlightedSeries, notifyHighlightedSeries];
}
//# sourceMappingURL=use-highlight-props.js.map