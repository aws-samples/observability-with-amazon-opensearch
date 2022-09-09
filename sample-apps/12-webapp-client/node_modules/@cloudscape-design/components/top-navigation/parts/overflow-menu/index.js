// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Router, { Route } from './router';
import UtilitiesView from './views/utilities';
import SubmenuView from './views/submenu';
import styles from '../../styles.css.js';
var OverflowMenu = function (_a) {
    var headerText = _a.headerText, dismissIconAriaLabel = _a.dismissIconAriaLabel, backIconAriaLabel = _a.backIconAriaLabel, _b = _a.items, items = _b === void 0 ? [] : _b, onClose = _a.onClose;
    return (React.createElement("div", { className: styles['overflow-menu'], onKeyUp: function (event) {
            if (event.key === 'Escape') {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        } },
        React.createElement(Router, null,
            React.createElement(Route, { view: "utilities", element: function (data) { return (React.createElement(UtilitiesView, { headerText: headerText, items: items, focusIndex: data === null || data === void 0 ? void 0 : data.utilityIndex, dismissIconAriaLabel: dismissIconAriaLabel, backIconAriaLabel: backIconAriaLabel, onClose: onClose })); } }),
            React.createElement(Route, { view: "dropdown-menu", element: function (data) { return (React.createElement(SubmenuView, { headerText: data === null || data === void 0 ? void 0 : data.headerText, headerSecondaryText: data === null || data === void 0 ? void 0 : data.headerSecondaryText, dismissIconAriaLabel: dismissIconAriaLabel, backIconAriaLabel: backIconAriaLabel, definition: data === null || data === void 0 ? void 0 : data.definition, utilityIndex: data === null || data === void 0 ? void 0 : data.utilityIndex, onClose: onClose })); } }))));
};
export default OverflowMenu;
//# sourceMappingURL=index.js.map