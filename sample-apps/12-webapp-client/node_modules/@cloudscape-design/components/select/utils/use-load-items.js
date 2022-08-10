// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { fireNonCancelableEvent } from '../../internal/events';
export var useLoadItems = function (_a) {
    var onLoadItems = _a.onLoadItems, options = _a.options, statusType = _a.statusType;
    var prevFilteringText = useRef(undefined);
    var fireLoadItems = function (filteringText) {
        if (prevFilteringText.current === filteringText) {
            return;
        }
        prevFilteringText.current = filteringText;
        fireNonCancelableEvent(onLoadItems, { filteringText: filteringText, firstPage: true, samePage: false });
    };
    var handleLoadMore = function () {
        var firstPage = options.length === 0;
        statusType === 'pending' &&
            fireNonCancelableEvent(onLoadItems, {
                firstPage: firstPage,
                samePage: false,
                filteringText: prevFilteringText.current || ''
            });
    };
    var handleRecoveryClick = function () {
        return fireNonCancelableEvent(onLoadItems, {
            firstPage: false,
            samePage: true,
            filteringText: prevFilteringText.current || ''
        });
    };
    return {
        fireLoadItems: fireLoadItems,
        handleLoadMore: handleLoadMore,
        handleRecoveryClick: handleRecoveryClick
    };
};
//# sourceMappingURL=use-load-items.js.map