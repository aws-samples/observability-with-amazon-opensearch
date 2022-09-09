import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../../internal/events';
import VisualContext from '../../internal/components/visual-context';
import Portal from '../../internal/components/portal';
import useFocusVisible from '../../internal/hooks/focus-visible';
import { useTopNavigation } from './use-top-navigation.js';
import Utility from './parts/utility';
import OverflowMenu from './parts/overflow-menu';
import styles from './styles.css.js';
import { checkSafeUrl } from '../../internal/utils/check-safe-url';
export default function InternalTopNavigation(_a) {
    var __internalRootRef = _a.__internalRootRef, identity = _a.identity, i18nStrings = _a.i18nStrings, _b = _a.utilities, utilities = _b === void 0 ? [] : _b, search = _a.search, restProps = __rest(_a, ["__internalRootRef", "identity", "i18nStrings", "utilities", "search"]);
    checkSafeUrl('TopNavigation', identity.href);
    var baseProps = getBaseProps(restProps);
    var _c = useTopNavigation({
        __internalRootRef: __internalRootRef,
        identity: identity,
        search: search,
        utilities: utilities
    }), ref = _c.ref, virtualRef = _c.virtualRef, breakpoint = _c.breakpoint, responsiveState = _c.responsiveState, isSearchExpanded = _c.isSearchExpanded, onSearchUtilityClick = _c.onSearchUtilityClick;
    var isNarrowViewport = breakpoint === 'default';
    var isMediumViewport = breakpoint === 'xxs';
    var onIdentityClick = function (event) {
        if (isPlainLeftClick(event)) {
            fireCancelableEvent(identity.onFollow, {}, event);
        }
    };
    var focusVisible = useFocusVisible();
    // Render the top nav twice; once as the top nav that users can see, and another
    // "virtual" top nav used just for calculations. The virtual top nav doesn't react to
    // layout changes and renders two sets of utilities: one with labels and one without.
    var content = function (isVirtual) {
        var _a, _b;
        var _c, _d, _e, _f;
        var Wrapper = isVirtual ? 'div' : 'header';
        var showIdentity = isVirtual || !isSearchExpanded;
        var showTitle = isVirtual || !responsiveState.hideTitle;
        var showSearchSlot = search && (isVirtual || !responsiveState.hideSearch || isSearchExpanded);
        var showSearchUtility = isVirtual || (search && responsiveState.hideSearch);
        var showUtilities = isVirtual || !isSearchExpanded;
        var showMenuTrigger = isVirtual || (!isSearchExpanded && responsiveState.hideUtilities);
        return (React.createElement(Wrapper, { ref: isVirtual ? virtualRef : ref, "aria-hidden": isVirtual ? true : undefined, 
            // False positive, "Wrapper" is either a "div" or a "header"
            // eslint-disable-next-line react/forbid-component-props
            className: clsx(styles['top-navigation'], (_a = {},
                _a[styles.hidden] = isVirtual,
                _a[styles.narrow] = isNarrowViewport,
                _a[styles.medium] = isMediumViewport,
                _a)) },
            React.createElement("div", { className: styles['padding-box'] },
                showIdentity && (React.createElement("div", { className: clsx(styles.identity, !identity.logo && styles['no-logo']) },
                    React.createElement("a", __assign({}, focusVisible, { className: styles['identity-link'], href: identity.href, onClick: onIdentityClick }),
                        identity.logo && (React.createElement("img", { role: "img", src: (_c = identity.logo) === null || _c === void 0 ? void 0 : _c.src, alt: (_d = identity.logo) === null || _d === void 0 ? void 0 : _d.alt, className: clsx(styles.logo, (_b = {},
                                _b[styles.narrow] = isNarrowViewport,
                                _b)) })),
                        showTitle && React.createElement("span", { className: styles.title }, identity.title)))),
                React.createElement("div", { className: styles.inputs }, showSearchSlot && (React.createElement("div", { className: clsx(styles.search, !isVirtual && isSearchExpanded && styles['search-expanded']) }, search))),
                React.createElement("div", { className: styles.utilities },
                    showSearchUtility && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-button'], styles['utility-type-button-link']), "data-utility-special": "search" },
                        React.createElement(Utility, { hideText: true, isNarrowViewport: isNarrowViewport, definition: {
                                type: 'button',
                                iconName: isSearchExpanded ? 'close' : 'search',
                                ariaLabel: isSearchExpanded
                                    ? i18nStrings.searchDismissIconAriaLabel
                                    : i18nStrings.searchIconAriaLabel,
                                onClick: onSearchUtilityClick
                            } }))),
                    showUtilities &&
                        utilities
                            .filter(function (_utility, i) {
                            return isVirtual || !responsiveState.hideUtilities || responsiveState.hideUtilities.indexOf(i) === -1;
                        })
                            .map(function (utility, i) {
                            var _a;
                            var hideText = !!responsiveState.hideUtilityText;
                            var last = (isVirtual || !showMenuTrigger) && i === utilities.length - 1;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles["utility-type-".concat(utility.type)], last && styles['utility-wrapper-last'], utility.type === 'button' && styles["utility-type-button-".concat((_a = utility.variant) !== null && _a !== void 0 ? _a : 'link')]), "data-utility-index": i, "data-utility-hide": "".concat(hideText) },
                                React.createElement(Utility, { hideText: hideText, definition: utility, last: last, isNarrowViewport: isNarrowViewport })));
                        }),
                    isVirtual &&
                        utilities.map(function (utility, i) {
                            var _a;
                            var hideText = !responsiveState.hideUtilityText;
                            var last = !showMenuTrigger && i === utilities.length - 1;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles["utility-type-".concat(utility.type)], last && styles['utility-wrapper-last'], utility.type === 'button' && styles["utility-type-button-".concat((_a = utility.variant) !== null && _a !== void 0 ? _a : 'link')]), "data-utility-index": i, "data-utility-hide": "".concat(hideText) },
                                React.createElement(Utility, { hideText: hideText, definition: utility, last: last, isNarrowViewport: isNarrowViewport })));
                        }),
                    showMenuTrigger && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-menu-dropdown'], styles['utility-wrapper-last']), "data-utility-special": "menu-trigger" },
                        React.createElement(OverflowMenu, { utilities: (_f = (_e = responsiveState.hideUtilities) === null || _e === void 0 ? void 0 : _e.map(function (i) { return utilities[i]; })) !== null && _f !== void 0 ? _f : [], isNarrowViewport: isNarrowViewport }, i18nStrings.overflowMenuTriggerText)))))));
    };
    return (React.createElement("div", __assign({}, baseProps, { ref: __internalRootRef }),
        React.createElement(VisualContext, { contextName: "top-navigation" },
            content(false),
            React.createElement(Portal, null, content(true)))));
}
//# sourceMappingURL=internal.js.map