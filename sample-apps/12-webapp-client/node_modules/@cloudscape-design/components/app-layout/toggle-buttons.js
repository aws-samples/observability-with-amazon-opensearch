// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import SpaceBetween from '../space-between/internal';
import styles from './styles.css.js';
export function ToggleButtons(_a) {
    var children = _a.children, ariaLabels = _a.ariaLabels, anyPanelOpen = _a.anyPanelOpen, isHidden = _a.isHidden, opaqueBackground = _a.opaqueBackground;
    return (React.createElement("div", { className: clsx(styles['button-toggles-container'], anyPanelOpen && styles['button-toggles-container-open'], isHidden && styles['button-toggles-container-is-hidden'], opaqueBackground && styles['opaque-background']) },
        React.createElement("aside", { "aria-label": ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tools, className: clsx(styles['visual-refresh-toggle'], styles["visual-refresh-toggle-type-tools"]) },
            React.createElement(SpaceBetween, { size: "xs" }, children))));
}
//# sourceMappingURL=toggle-buttons.js.map