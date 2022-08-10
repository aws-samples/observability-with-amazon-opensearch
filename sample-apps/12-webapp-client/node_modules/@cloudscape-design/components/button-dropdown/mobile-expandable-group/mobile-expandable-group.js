// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
var MobileExpandableGroup = function (_a) {
    var _b;
    var children = _a.children, trigger = _a.trigger, open = _a.open;
    return (React.createElement("div", { className: clsx(styles.root) },
        React.createElement("div", { className: styles.trigger }, trigger),
        React.createElement("div", { className: clsx(styles.dropdown, (_b = {}, _b[styles.open] = open, _b)), "data-open": open }, children)));
};
export default MobileExpandableGroup;
//# sourceMappingURL=mobile-expandable-group.js.map