import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import { useNavigate } from '../router';
import Header from '../header';
import { SubmenuItem } from '../menu-item';
import { useUniqueId } from '../../../../internal/hooks/use-unique-id';
import styles from '../../../styles.css.js';
import { fireCancelableEvent } from '../../../../internal/events';
var SubmenuView = function (_a) {
    var onClose = _a.onClose, utilityIndex = _a.utilityIndex, headerText = _a.headerText, headerSecondaryText = _a.headerSecondaryText, dismissIconAriaLabel = _a.dismissIconAriaLabel, backIconAriaLabel = _a.backIconAriaLabel, definition = _a.definition;
    var navigate = useNavigate();
    var headerId = useUniqueId('overflow-menu-header');
    return (React.createElement(FocusLock, { returnFocus: true },
        React.createElement(Header, { secondaryText: headerSecondaryText, dismissIconAriaLabel: dismissIconAriaLabel, backIconAriaLabel: backIconAriaLabel, onClose: onClose, onBack: function () { return navigate('utilities', { utilityIndex: utilityIndex }); } },
            React.createElement("span", { id: headerId }, headerText)),
        React.createElement("ul", { className: clsx(styles['overflow-menu-list'], styles['overflow-menu-list-submenu']), "aria-labelledby": headerId }, definition.items.map(function (item, index) { return (React.createElement(SubmenuItem, __assign({ key: index }, item, { onItemClick: function (item) {
                fireCancelableEvent(definition.onItemClick, { id: item.id, href: item.href, external: item.external });
                onClose === null || onClose === void 0 ? void 0 : onClose();
            } }))); }))));
};
export default SubmenuView;
//# sourceMappingURL=submenu.js.map