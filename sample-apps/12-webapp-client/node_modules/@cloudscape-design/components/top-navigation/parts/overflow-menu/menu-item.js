import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { fireCancelableEvent, isPlainLeftClick } from '../../../internal/events';
import { useUniqueId } from '../../../internal/hooks/use-unique-id';
import useFocusVisible from '../../../internal/hooks/focus-visible';
import InternalIcon from '../../../icon/internal';
import { useNavigate } from './router';
import styles from '../../styles.css.js';
var ListItem = function (_a) {
    var children = _a.children, startIcon = _a.startIcon, endIcon = _a.endIcon;
    return (React.createElement(React.Fragment, null,
        startIcon && React.createElement("span", { className: styles['overflow-menu-list-item-icon'] }, startIcon),
        React.createElement("span", { className: styles['overflow-menu-list-item-text'] }, children),
        endIcon && endIcon));
};
var LinkItem = forwardRef(function (_a, ref) {
    var children = _a.children, external = _a.external, href = _a.href, startIcon = _a.startIcon, endIcon = _a.endIcon, onFollow = _a.onFollow, context = _a.context, testId = _a.testId;
    var focusVisible = useFocusVisible();
    var rel = external ? 'noopener noreferrer' : undefined;
    var target = external ? '_blank' : undefined;
    var anchorProps = {
        rel: rel,
        target: target,
        href: href,
        onClick: function (event) {
            if (isPlainLeftClick(event)) {
                onFollow === null || onFollow === void 0 ? void 0 : onFollow(event);
            }
        }
    };
    var buttonProps = {
        role: 'button',
        tabIndex: 0,
        onKeyDown: function (event) {
            if (event.key === ' ') {
                event.preventDefault();
            }
        },
        onKeyUp: function (event) {
            if (event.key === ' ' || event.key === 'Enter') {
                onFollow === null || onFollow === void 0 ? void 0 : onFollow(event);
            }
        },
        onClick: onFollow
    };
    return (React.createElement("a", __assign({ ref: ref, className: clsx(styles['overflow-menu-control'], styles['overflow-menu-control-link'], context && styles["overflow-menu-control-".concat(context)]) }, (typeof href === 'string' ? anchorProps : buttonProps), focusVisible, (testId ? { 'data-testid': testId } : {})),
        React.createElement(ListItem, { startIcon: startIcon, endIcon: endIcon }, children)));
});
var ButtonItem = forwardRef(function (_a, ref) {
    var children = _a.children, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onFollow, testId = _a.testId;
    var focusVisible = useFocusVisible();
    return (React.createElement("button", __assign({ ref: ref, className: styles['overflow-menu-control'], onClick: onClick }, focusVisible, (typeof testId === 'string' ? { 'data-testid': testId } : {})),
        React.createElement(ListItem, { startIcon: startIcon, endIcon: endIcon }, children)));
});
var NavigationItem = forwardRef(function (_a, ref) {
    var startIcon = _a.startIcon, children = _a.children, index = _a.index, testId = _a.testId, definition = __rest(_a, ["startIcon", "children", "index", "testId"]);
    var navigate = useNavigate();
    return (React.createElement(ButtonItem, { ref: ref, startIcon: startIcon, endIcon: React.createElement(InternalIcon, { name: "angle-right" }), testId: testId, onFollow: function () {
            return navigate('dropdown-menu', {
                definition: definition,
                headerText: definition.text || definition.title,
                headerSecondaryText: definition.description,
                utilityIndex: index
            });
        } }, children));
});
var ExpandableItem = function (_a) {
    var children = _a.children, onItemClick = _a.onItemClick, definition = __rest(_a, ["children", "onItemClick"]);
    var focusVisible = useFocusVisible();
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var headerId = useUniqueId('overflow-menu-item');
    return (React.createElement(React.Fragment, null,
        React.createElement("button", __assign({ className: clsx(styles['overflow-menu-control'], styles['overflow-menu-control-expandable-menu-trigger']), onClick: function () { return setExpanded(function (value) { return !value; }); }, "aria-expanded": expanded }, focusVisible),
            React.createElement(ListItem, { endIcon: React.createElement("span", { className: clsx(styles.icon, expanded && styles.expanded) },
                    React.createElement(InternalIcon, { name: "caret-up-filled" })) },
                React.createElement("span", { id: headerId }, children))),
        expanded && (React.createElement("ul", { className: clsx(styles['overflow-menu-list'], styles['overflow-menu-list-submenu']), "aria-labelledby": headerId }, definition.items.map(function (item, index) {
            var isGroup = typeof item.items !== 'undefined';
            return (React.createElement("li", { key: index, className: clsx(styles["overflow-menu-list-item"], styles["overflow-menu-list-item-dropdown-menu"]) }, dropdownComponentFactory(item, isGroup, onItemClick)));
        })))));
};
function utilityComponentFactory(utility, index, ref) {
    var label = utility.text || utility.title;
    var hasIcon = !!utility.iconName || !!utility.iconUrl || !!utility.iconAlt || !!utility.iconSvg;
    var startIcon = hasIcon && (React.createElement(InternalIcon, { name: utility.iconName, url: utility.iconUrl, alt: utility.iconAlt, svg: utility.iconSvg }));
    switch (utility.type) {
        case 'button': {
            var handleClick = function (event) {
                fireCancelableEvent(utility.onClick, {}, event);
            };
            if (utility.variant === 'primary-button') {
                return (React.createElement(ButtonItem, { ref: ref, startIcon: startIcon, onFollow: handleClick, testId: "__".concat(index) }, label));
            }
            return (React.createElement(LinkItem, { ref: ref, startIcon: startIcon, href: utility.href, external: utility.external, testId: "__".concat(index), onFollow: handleClick },
                label,
                utility.external && (React.createElement(React.Fragment, null,
                    ' ',
                    React.createElement("span", { "aria-label": utility.externalIconAriaLabel, role: utility.externalIconAriaLabel ? 'img' : undefined },
                        React.createElement(InternalIcon, { name: "external", size: "normal" }))))));
        }
        case 'menu-dropdown': {
            return (React.createElement(NavigationItem, __assign({ ref: ref, startIcon: startIcon, index: index }, utility, { testId: "__".concat(index) }), label));
        }
    }
}
function dropdownComponentFactory(item, expandable, onItemClick) {
    var label = item.text;
    var hasIcon = !!item.iconName || !!item.iconUrl || !!item.iconAlt || !!item.iconSvg;
    var startIcon = hasIcon && (React.createElement(InternalIcon, { name: item.iconName, url: item.iconUrl, alt: item.iconAlt, svg: item.iconSvg }));
    if (expandable) {
        return (React.createElement(ExpandableItem, __assign({}, item, { onItemClick: onItemClick }), label));
    }
    return (React.createElement(LinkItem, { startIcon: startIcon, href: item.href, external: item.external, context: "dropdown-menu", testId: item.id, onFollow: function () { return onItemClick(item); } },
        label,
        item.external && (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("span", { "aria-label": item.externalIconAriaLabel, role: item.externalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", size: "normal" }))))));
}
export var UtilityMenuItem = forwardRef(function (_a, ref) {
    var index = _a.index, props = __rest(_a, ["index"]);
    return (React.createElement("li", { className: clsx(styles["overflow-menu-list-item"], styles["overflow-menu-list-item-utility"]) }, utilityComponentFactory(props, index, ref)));
});
export var SubmenuItem = function (props) {
    var expandable = typeof props.items !== 'undefined';
    return (React.createElement("li", { className: clsx(styles["overflow-menu-list-item"], styles["overflow-menu-list-item-submenu"], expandable && styles["overflow-menu-list-item-expandable"]) }, dropdownComponentFactory(props, expandable, props.onItemClick)));
};
//# sourceMappingURL=menu-item.js.map