// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
export var useAutosuggestLoadMore = function (_a) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, statusType = _a.statusType, onLoadItems = _a.onLoadItems;
    var lastFilteringText = useRef(null);
    var fireLoadMore = function (_a) {
        var _b;
        var firstPage = _a.firstPage, samePage = _a.samePage, filteringText = _a.filteringText;
        if (filteringText === undefined || lastFilteringText.current !== filteringText) {
            if (filteringText !== undefined) {
                lastFilteringText.current = filteringText;
            }
            onLoadItems({ filteringText: (_b = lastFilteringText.current) !== null && _b !== void 0 ? _b : '', firstPage: firstPage, samePage: samePage });
        }
    };
    var fireLoadMoreOnScroll = function () {
        options.length > 0 && statusType === 'pending' && fireLoadMore({ firstPage: false, samePage: false });
    };
    var fireLoadMoreOnRecoveryClick = function () { return fireLoadMore({ firstPage: false, samePage: true }); };
    var fireLoadMoreOnInputFocus = function () { return fireLoadMore({ firstPage: true, samePage: false, filteringText: '' }); };
    var fireLoadMoreOnInputChange = function (filteringText) {
        return fireLoadMore({ firstPage: true, samePage: false, filteringText: filteringText });
    };
    return { fireLoadMoreOnScroll: fireLoadMoreOnScroll, fireLoadMoreOnRecoveryClick: fireLoadMoreOnRecoveryClick, fireLoadMoreOnInputFocus: fireLoadMoreOnInputFocus, fireLoadMoreOnInputChange: fireLoadMoreOnInputChange };
};
//# sourceMappingURL=load-more-controller.js.map