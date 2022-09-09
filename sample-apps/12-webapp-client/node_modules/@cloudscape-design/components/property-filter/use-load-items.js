import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { fireNonCancelableEvent } from '../internal/events/index';
/**
 * This hook generates `onBlur`, `onFocus` and `onLoadItems` handlers that make sure an `onLoadItems` event
 * fires exactly once every time control they are used on gets focused.
 * It is neccesary to do this because Autosuggest and Select dedupe their `onLoadItems` events stopping
 * the same event from firing twice in a row. This means, refocusing the control sometimes results in
 * `onLoadItems` firing, but sometimes not.
 */
export var useLoadItems = function (onLoadItems, focusFilteringText, currentFilteringProperty, currentFilteringText, currentFilteringOperator) {
    var focusIn = useRef(false);
    var handleBlur = function () {
        focusIn.current = true;
    };
    var fireLoadItems = function (detail) {
        var _a;
        fireNonCancelableEvent(onLoadItems, __assign(__assign({}, detail), { filteringText: (_a = currentFilteringText !== null && currentFilteringText !== void 0 ? currentFilteringText : detail.filteringText) !== null && _a !== void 0 ? _a : '', filteringProperty: currentFilteringProperty, filteringOperator: currentFilteringOperator }));
        focusIn.current = false;
    };
    var handleFocus = function () {
        if (focusIn.current) {
            fireLoadItems({ firstPage: true, samePage: false, filteringText: focusFilteringText });
        }
    };
    var handleLoadItems = function (_a) {
        var detail = _a.detail;
        return fireLoadItems(detail);
    };
    return {
        onBlur: handleBlur,
        onFocus: handleFocus,
        onLoadItems: handleLoadItems
    };
};
//# sourceMappingURL=use-load-items.js.map