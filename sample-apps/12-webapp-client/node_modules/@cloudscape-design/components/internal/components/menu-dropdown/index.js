import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../../base-component';
import { applyDisplayName } from '../../utils/apply-display-name';
import useFocusVisible from '../../hooks/focus-visible';
import InternalButtonDropdown from '../../../button-dropdown/internal';
import InternalIcon from '../../../icon/internal';
import buttonDropdownStyles from '../../../button-dropdown/styles.css.js';
import styles from './styles.css.js';
export var ButtonTrigger = React.forwardRef(function (_a, ref) {
    var _b;
    var iconName = _a.iconName, iconUrl = _a.iconUrl, iconAlt = _a.iconAlt, iconSvg = _a.iconSvg, badge = _a.badge, ariaLabel = _a.ariaLabel, offsetRight = _a.offsetRight, disabled = _a.disabled, expanded = _a.expanded, children = _a.children, onClick = _a.onClick;
    var focusVisible = useFocusVisible();
    var hasIcon = iconName || iconUrl || iconSvg;
    return (React.createElement("button", __assign({}, focusVisible, { ref: ref, type: "button", className: clsx(styles.button, styles["offset-right-".concat(offsetRight)], (_b = {}, _b[styles.expanded] = expanded, _b)), "aria-label": ariaLabel, "aria-expanded": !!expanded, "aria-haspopup": true, disabled: disabled, onClick: function (event) {
            event.preventDefault();
            onClick && onClick();
        } }),
        hasIcon && (React.createElement(InternalIcon, { className: styles.icon, name: iconName, url: iconUrl, alt: iconAlt, svg: iconSvg, badge: badge })),
        children && React.createElement("span", { className: styles.text }, children),
        children && (React.createElement(InternalIcon, { name: "caret-down-filled", className: expanded ? buttonDropdownStyles['rotate-up'] : buttonDropdownStyles['rotate-down'] }))));
});
var MenuDropdown = function (_a) {
    var iconName = _a.iconName, iconUrl = _a.iconUrl, iconAlt = _a.iconAlt, iconSvg = _a.iconSvg, badge = _a.badge, ariaLabel = _a.ariaLabel, offsetRight = _a.offsetRight, children = _a.children, props = __rest(_a, ["iconName", "iconUrl", "iconAlt", "iconSvg", "badge", "ariaLabel", "offsetRight", "children"]);
    var baseProps = getBaseProps(props);
    var dropdownTrigger = function (clickHandler, ref, isDisabled, isExpanded) {
        return (React.createElement(ButtonTrigger, { ref: ref, disabled: isDisabled, expanded: isExpanded, iconName: iconName, iconUrl: iconUrl, iconAlt: iconAlt, iconSvg: iconSvg, badge: badge, ariaLabel: ariaLabel, offsetRight: offsetRight, onClick: clickHandler }, children));
    };
    return (React.createElement(InternalButtonDropdown, __assign({}, baseProps, props, { variant: "navigation", customTriggerBuilder: dropdownTrigger, preferCenter: true })));
};
applyDisplayName(MenuDropdown, 'MenuDropdown');
export default MenuDropdown;
//# sourceMappingURL=index.js.map