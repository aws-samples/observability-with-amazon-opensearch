import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import MenuDropdown from '../../../internal/components/menu-dropdown';
import { fireCancelableEvent } from '../../../internal/events';
import styles from '../styles.css.js';
function transformButtonDropdownItems(items, index) {
    return items.map(function (item) {
        var itemCopy = __assign(__assign({}, item), { id: "".concat(index, "__").concat(item.id || '') });
        if ('items' in itemCopy) {
            itemCopy.items = transformButtonDropdownItems(itemCopy.items, index);
        }
        return itemCopy;
    });
}
export function transformUtility(utility, index) {
    var title = utility.title || utility.text || '';
    var commonProps = {
        // Encode index into the ID, so we can pick out the right handler.
        id: "".concat(index, "__"),
        text: title,
        iconName: utility.iconName,
        iconUrl: utility.iconUrl,
        iconAlt: utility.iconAlt,
        iconSvg: utility.iconSvg
    };
    if (utility.type === 'menu-dropdown') {
        return __assign(__assign({}, commonProps), { items: transformButtonDropdownItems(utility.items, index), description: utility.description });
    }
    else {
        return __assign(__assign({}, commonProps), { href: utility.href, external: utility.external, externalIconAriaLabel: utility.externalIconAriaLabel });
    }
}
export default function OverflowMenu(_a) {
    var children = _a.children, utilities = _a.utilities, isNarrowViewport = _a.isNarrowViewport;
    var onClick = function (isFollow, event) {
        var _a = event.detail.id.split('__'), index = _a[0], rest = _a.slice(1);
        var utility = utilities[parseInt(index)];
        var defaultPrevented = false;
        if ('onItemClick' in utility) {
            defaultPrevented = fireCancelableEvent(utility.onItemClick, __assign(__assign({}, event.detail), { id: rest.join('__') }));
        }
        else if ('onClick' in utility && (isFollow || !utility.href)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            var _b = event.detail, id = _b.id, baseNavigationalDetail = __rest(_b, ["id"]);
            defaultPrevented = fireCancelableEvent(utility.onClick, baseNavigationalDetail);
        }
        if (defaultPrevented) {
            event.preventDefault();
        }
    };
    return (React.createElement(MenuDropdown, { items: utilities.map(transformUtility), offsetRight: isNarrowViewport ? 'l' : 'xxl', className: styles.trigger, expandableGroups: true, onItemClick: onClick.bind(null, false), onItemFollow: onClick.bind(null, true) }, children));
}
//# sourceMappingURL=overflow-menu.js.map