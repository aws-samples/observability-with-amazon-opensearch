import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import Header from '../header';
import { UtilityMenuItem } from '../menu-item';
import styles from '../../../styles.css.js';
import { useUniqueId } from '../../../../internal/hooks/use-unique-id';
var UtilitiesView = function (_a) {
    var headerText = _a.headerText, dismissIconAriaLabel = _a.dismissIconAriaLabel, onClose = _a.onClose, _b = _a.items, items = _b === void 0 ? [] : _b, focusIndex = _a.focusIndex;
    var headerId = useUniqueId('overflow-menu-header');
    var ref = useRef(null);
    useEffect(function () {
        var _a;
        // A focus index is used to set the focus back to the submenu trigger
        // returning from a submenu.
        if (typeof focusIndex === 'number') {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [focusIndex]);
    return (React.createElement(FocusLock, { returnFocus: true },
        React.createElement(Header, { dismissIconAriaLabel: dismissIconAriaLabel, onClose: onClose },
            React.createElement("span", { id: headerId }, headerText)),
        React.createElement("ul", { className: styles['overflow-menu-list'], "aria-labelledby": headerId }, items.map(function (utility, index) { return (React.createElement(UtilityMenuItem, __assign({ key: index, index: index, ref: index === focusIndex ? ref : undefined }, utility))); }))));
};
export default UtilitiesView;
//# sourceMappingURL=utilities.js.map