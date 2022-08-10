import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { InternalButton } from '../../../button/internal';
import InternalLink from '../../../link/internal';
import InternalIcon from '../../../icon/internal';
import MenuDropdown from '../../../internal/components/menu-dropdown';
import styles from '../styles.css.js';
import { checkSafeUrl } from '../../../internal/utils/check-safe-url';
export default function Utility(_a) {
    var _b;
    var hideText = _a.hideText, definition = _a.definition, last = _a.last, isNarrowViewport = _a.isNarrowViewport;
    var shouldHideText = hideText && !definition.disableTextCollapse && hasIcon(definition);
    var ariaLabel = (_b = definition.ariaLabel) !== null && _b !== void 0 ? _b : definition.text;
    if (definition.type === 'button') {
        checkSafeUrl('TopNavigation', definition.href);
        if (definition.variant === 'primary-button') {
            return (React.createElement(InternalButton, { variant: "primary", href: definition.href, target: definition.external ? '_blank' : undefined, onClick: definition.onClick, ariaLabel: ariaLabel, iconName: definition.iconName, iconUrl: definition.iconUrl, iconAlt: definition.iconAlt, iconSvg: definition.iconSvg, className: clsx(last && styles['last-utility']) }, shouldHideText ? null : (React.createElement(React.Fragment, null,
                definition.text,
                definition.external && (React.createElement(React.Fragment, null,
                    ' ',
                    React.createElement("span", { className: styles['utility-button-external-icon'], "aria-label": definition.externalIconAriaLabel, role: definition.externalIconAriaLabel ? 'img' : undefined },
                        React.createElement(InternalIcon, { name: "external" }))))))));
        }
        else {
            // Link
            return (React.createElement(InternalLink, { variant: "top-navigation", href: definition.href, external: definition.external, externalIconAriaLabel: definition.externalIconAriaLabel, onFollow: definition.onClick, ariaLabel: ariaLabel, className: clsx(last && styles['last-utility']) },
                hasIcon(definition) && (React.createElement("span", { className: styles['utility-link-icon'] },
                    React.createElement(InternalIcon, { name: definition.iconName, url: definition.iconUrl, alt: definition.iconAlt, svg: definition.iconSvg, badge: definition.badge }))),
                !shouldHideText && definition.text));
        }
    }
    else if (definition.type === 'menu-dropdown') {
        var paddingRight = isNarrowViewport ? 'l' : 'xxl';
        var title = definition.title || definition.text;
        var shouldShowTitle = shouldHideText || !definition.text;
        checkSafeUrlRecursively(definition.items);
        return (React.createElement(MenuDropdown, __assign({}, definition, { title: shouldShowTitle ? title : '', ariaLabel: ariaLabel, className: styles['utility-dropdown'], offsetRight: last ? paddingRight : undefined }), !shouldHideText && definition.text));
    }
    return null;
}
function hasIcon(definition) {
    return !!definition.iconName || !!definition.iconUrl || !!definition.iconAlt || !!definition.iconSvg;
}
function checkSafeUrlRecursively(itemOrGroup) {
    for (var _i = 0, itemOrGroup_1 = itemOrGroup; _i < itemOrGroup_1.length; _i++) {
        var item = itemOrGroup_1[_i];
        checkSafeUrl('TopNavigation', item.href);
        if ('items' in item) {
            checkSafeUrlRecursively(item.items);
        }
    }
}
//# sourceMappingURL=utility.js.map