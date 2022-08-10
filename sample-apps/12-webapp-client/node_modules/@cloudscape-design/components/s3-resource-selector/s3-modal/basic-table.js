import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useState, useRef } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { InternalButton } from '../../button/internal';
import InternalHeader from '../../header/internal';
import InternalPagination from '../../pagination/internal';
import InternalTable from '../../table/internal';
import InternalTextFilter from '../../text-filter/internal';
import useForwardFocus from '../../internal/hooks/forward-focus';
import { useStableEventHandler } from '../../internal/hooks/use-stable-event-handler';
import { EmptyState } from './empty-state';
export function getSharedI18Strings(i18nStrings) {
    return {
        filteringCounterText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringCounterText,
        labelRefresh: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelRefresh,
        labelsPagination: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsPagination,
        noMatchTitle: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringNoMatches,
        noMatchSubtitle: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringCantFindMatch,
        clearFilterButtonText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.clearFilterButtonText
    };
}
export function BasicS3Table(_a) {
    var _b;
    var forwardFocusRef = _a.forwardFocusRef, columnDefinitions = _a.columnDefinitions, fetchData = _a.fetchData, trackBy = _a.trackBy, _c = _a.i18nStrings, i18nStrings = _c === void 0 ? {} : _c, isVisualRefresh = _a.isVisualRefresh, visibleColumns = _a.visibleColumns, isItemDisabled = _a.isItemDisabled, onSelect = _a.onSelect;
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState([]), allItems = _e[0], setAllItems = _e[1];
    var textFilterRef = useRef(null);
    var onSelectLatest = useStableEventHandler(onSelect);
    function loadData() {
        setLoading(true);
        fetchData()
            .then(function (items) {
            setAllItems(items);
            setLoading(false);
        })["catch"](function () {
            // error handling should happen on the customer side, outside of this component
            setLoading(false);
        });
    }
    useEffect(function () {
        loadData();
        // Data loading is only happening on initial render, or via refresh button
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useForwardFocus(forwardFocusRef, textFilterRef);
    var _f = useCollection(allItems, {
        selection: { trackBy: trackBy },
        filtering: {
            empty: i18nStrings.emptyText,
            noMatch: (React.createElement(EmptyState, { title: i18nStrings.noMatchTitle, subtitle: i18nStrings.noMatchSubtitle, action: React.createElement(InternalButton, { onClick: function () { return actions.setFiltering(''); } }, i18nStrings.clearFilterButtonText) }))
        },
        pagination: {},
        sorting: {}
    }), items = _f.items, filteredItemsCount = _f.filteredItemsCount, collectionProps = _f.collectionProps, filterProps = _f.filterProps, paginationProps = _f.paginationProps, actions = _f.actions;
    var selectedItem = (_b = collectionProps.selectedItems) === null || _b === void 0 ? void 0 : _b[0];
    // selectedItem can change internally inside the hook after pagination or filtering
    // useEffect will capture all possible changes
    useEffect(function () {
        onSelectLatest(selectedItem);
    }, [selectedItem, onSelectLatest]);
    return (React.createElement(InternalTable, __assign({ variant: "embedded" }, collectionProps, { header: React.createElement(InternalHeader, { variant: isVisualRefresh ? 'h3' : 'h2', actions: React.createElement(InternalButton, { iconName: "refresh", ariaLabel: i18nStrings.labelRefresh, onClick: loadData }), counter: selectedItem ? "(1/".concat(allItems.length, ")") : "(".concat(allItems.length, ")") }, i18nStrings.header), trackBy: trackBy, filter: React.createElement(InternalTextFilter, __assign({}, filterProps, { ref: textFilterRef, filteringAriaLabel: i18nStrings.filteringAriaLabel, filteringPlaceholder: i18nStrings.filteringPlaceholder, countText: i18nStrings.filteringCounterText ? i18nStrings.filteringCounterText(filteredItemsCount) : '' })), pagination: React.createElement(InternalPagination, __assign({}, paginationProps, { ariaLabels: i18nStrings.labelsPagination })), selectionType: "single", ariaLabels: i18nStrings.selectionLabels, loading: loading, loadingText: i18nStrings.loadingText, items: items, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled, columnDefinitions: columnDefinitions })));
}
//# sourceMappingURL=basic-table.js.map