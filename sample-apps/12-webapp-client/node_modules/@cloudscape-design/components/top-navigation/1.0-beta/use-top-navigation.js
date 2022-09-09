import { __spreadArray } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useMemo, useRef, useState } from 'react';
import { useMergeRefs } from '../../internal/hooks/use-merge-refs';
import { useContainerBreakpoints, useContainerQuery } from '../../internal/hooks/container-queries';
import styles from './styles.css.js';
// A small buffer to make calculations more lenient against browser lag or padding adjustments.
var RESPONSIVENESS_BUFFER = 20;
export function useTopNavigation(_a) {
    var mainRef = _a.__internalRootRef, identity = _a.identity, search = _a.search, utilities = _a.utilities;
    // Refs and breakpoints
    var virtualRef = useRef(null);
    var _b = useContainerBreakpoints(['xxs', 's']), breakpoint = _b[0], breakpointRef = _b[1];
    // Responsiveness state
    // The component works by calculating the possible resize states that it can
    // be in, and having a state variable to track which state we're currently in.
    var hasSearch = !!search;
    var hasTitleWithLogo = identity && !!identity.logo && !!identity.title;
    var responsiveStates = useMemo(function () {
        return generateResponsiveStateKeys(utilities, hasSearch, hasTitleWithLogo);
    }, [utilities, hasSearch, hasTitleWithLogo]);
    // To hide/show elements dynamically, we need to know how much space they take up,
    // even if they're not being rendered. The top navigation elements are hidden/resized
    // based on the available size or if a search bar is open, and they need to be available
    // for calculations so we know where to toggle them. So we render a second, more stable
    // top-nav off screen to do these calculations against.
    //
    // We can't "affix" these values to pixels because they can depend on spacing tokens.
    // It's easier to render all of these utilities separately rather than figuring out
    // spacing token values, icon sizes, text widths, etc.
    //
    // TODO: Some of these values can be memoized to improve perf.
    var _c = useContainerQuery(function () {
        var _a, _b, _c, _d;
        if (!(mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) || !virtualRef.current) {
            return responsiveStates[0];
        }
        var sizeConfiguration = {
            hasSearch: !!search,
            // Get widths and paddings from the visible top navigation
            availableWidth: getContentBoxWidth(mainRef.current.querySelector(".".concat(styles['padding-box']))),
            utilitiesLeftPadding: parseFloat(getComputedStyle(virtualRef.current.querySelector(".".concat(styles.utilities))).paddingLeft),
            // Get widths from the hidden top navigation
            fullIdentityWidth: virtualRef.current.querySelector(".".concat(styles.identity)).getBoundingClientRect().width,
            titleWidth: (_b = (_a = virtualRef.current.querySelector(".".concat(styles.title))) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) !== null && _b !== void 0 ? _b : 0,
            searchSlotWidth: (_d = (_c = virtualRef.current.querySelector(".".concat(styles.search))) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().width) !== null && _d !== void 0 ? _d : 0,
            searchUtilityWidth: virtualRef.current.querySelector('[data-utility-special="search"]').getBoundingClientRect()
                .width,
            utilityWithLabelWidths: Array.prototype.slice
                .call(virtualRef.current.querySelectorAll("[data-utility-hide=\"false\"]"))
                .map(function (element) { return element.getBoundingClientRect().width; }),
            utilityWithoutLabelWidths: Array.prototype.slice
                .call(virtualRef.current.querySelectorAll("[data-utility-hide=\"true\"]"))
                .map(function (element) { return element.getBoundingClientRect().width; }),
            menuTriggerUtilityWidth: virtualRef.current
                .querySelector('[data-utility-special="menu-trigger"]')
                .getBoundingClientRect().width
        };
        return determineBestResponsiveState(responsiveStates, sizeConfiguration);
    }, [mainRef, search, responsiveStates]), responsiveState = _c[0], containerQueryRef = _c[1];
    // Search slot expansion on small screens
    var _d = useState(true), isSearchMinimized = _d[0], setSearchMinimized = _d[1];
    var isSearchExpanded = !isSearchMinimized && breakpoint !== 's' && hasSearch && (responsiveState === null || responsiveState === void 0 ? void 0 : responsiveState.hideSearch);
    // If the search was expanded, and then the screen resized so that the
    // expansion is no longer necessary. So we implicitly minimize it.
    useEffect(function () {
        if (!(responsiveState === null || responsiveState === void 0 ? void 0 : responsiveState.hideSearch)) {
            setSearchMinimized(true);
        }
    }, [responsiveState]);
    // If the search is expanded after clicking on the search utility, move
    // the focus to the input. Since this is a user-controlled slot, we're just
    // assuming that it contains an input, though it's a pretty safe guess.
    useEffect(function () {
        var _a, _b;
        if (isSearchExpanded) {
            (_b = (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(styles.search, " input"))) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [isSearchExpanded, mainRef]);
    var mergedRef = useMergeRefs.apply(void 0, __spreadArray(__spreadArray([], (mainRef ? [mainRef] : []), false), [containerQueryRef, breakpointRef], false));
    return {
        ref: mergedRef,
        virtualRef: virtualRef,
        responsiveState: responsiveState !== null && responsiveState !== void 0 ? responsiveState : responsiveStates[0],
        breakpoint: breakpoint !== null && breakpoint !== void 0 ? breakpoint : 'default',
        isSearchExpanded: !!isSearchExpanded,
        onSearchUtilityClick: function () { return setSearchMinimized(function (isSearchMinimized) { return !isSearchMinimized; }); }
    };
}
/**
 * Get the width of the content box (assuming the element's box-sizing is border-box).
 */
function getContentBoxWidth(element) {
    var style = getComputedStyle(element);
    return parseFloat(style.width) - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
}
/**
 * Generates the series of responsive steps that can be performed on the header in order.
 */
export function generateResponsiveStateKeys(utilities, canHideSearch, canHideTitle) {
    var states = [{}];
    if (utilities.some(function (utility) { return utility.text; })) {
        states.push({ hideUtilityText: true });
    }
    if (canHideSearch) {
        states.push({
            hideUtilityText: true,
            hideSearch: true
        });
    }
    var hiddenUtilties = [];
    for (var i = 0; i < utilities.length; i++) {
        if (!utilities[i].disableUtilityCollapse) {
            hiddenUtilties.push(i);
            states.push({
                hideUtilityText: true,
                hideSearch: canHideSearch || undefined,
                hideUtilities: hiddenUtilties.length > 0 ? hiddenUtilties.slice() : undefined
            });
        }
    }
    if (canHideTitle) {
        states.push({
            hideUtilityText: true,
            hideSearch: canHideSearch || undefined,
            hideUtilities: hiddenUtilties.length > 0 ? hiddenUtilties.slice() : undefined,
            hideTitle: true
        });
    }
    return states;
}
/**
 * Determines the best responsive state configuration of the top navigation, based on the given list of possible responsive states
 * and the current sizes of all elements inside the navigation bar.
 */
export function determineBestResponsiveState(possibleStates, sizes) {
    var hasSearch = sizes.hasSearch, availableWidth = sizes.availableWidth, utilitiesLeftPadding = sizes.utilitiesLeftPadding, fullIdentityWidth = sizes.fullIdentityWidth, titleWidth = sizes.titleWidth, searchSlotWidth = sizes.searchSlotWidth, searchUtilityWidth = sizes.searchUtilityWidth, utilityWithLabelWidths = sizes.utilityWithLabelWidths, utilityWithoutLabelWidths = sizes.utilityWithoutLabelWidths, menuTriggerUtilityWidth = sizes.menuTriggerUtilityWidth;
    var _loop_1 = function (state) {
        var searchWidth = hasSearch ? (state.hideSearch ? searchUtilityWidth : searchSlotWidth) : 0;
        var utilitiesWidth = (state.hideUtilityText ? utilityWithoutLabelWidths : utilityWithLabelWidths)
            .filter(function (_width, i) { return !state.hideUtilities || state.hideUtilities.indexOf(i) === -1; })
            .reduce(function (sum, width) { return sum + width; }, 0);
        var menuTriggerWidth = state.hideUtilities ? menuTriggerUtilityWidth : 0;
        var identityWidth = state.hideTitle ? fullIdentityWidth - titleWidth : fullIdentityWidth;
        var expectedInnerWidth = identityWidth + searchWidth + utilitiesLeftPadding + utilitiesWidth + menuTriggerWidth;
        if (expectedInnerWidth <= availableWidth - RESPONSIVENESS_BUFFER) {
            return { value: state };
        }
    };
    // Iterate through each state and calculate its expected required width.
    for (var _i = 0, possibleStates_1 = possibleStates; _i < possibleStates_1.length; _i++) {
        var state = possibleStates_1[_i];
        var state_1 = _loop_1(state);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // If nothing matches, pick the smallest possible state.
    return possibleStates[possibleStates.length - 1];
}
//# sourceMappingURL=use-top-navigation.js.map