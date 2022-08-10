import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import useFocusVisible from '../internal/hooks/focus-visible';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
export var TabButton = React.forwardRef(function (_a, ref) {
    var _b;
    var active = _a.active, disabled = _a.disabled, iconName = _a.iconName, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, tabIndex = _a.tabIndex, ariaHidden = _a.ariaHidden, ariaLabel = _a.ariaLabel, paneId = _a.paneId, isRefresh = _a.isRefresh, text = _a.text, className = _a.className;
    var focusVisible = useFocusVisible();
    return (React.createElement("button", __assign({ className: clsx([styles['tab-button'], className], (_b = {},
            _b[styles['tab-button--active']] = active,
            _b[styles['tab-button--disabled']] = disabled,
            _b[styles['tab-button--refresh']] = isRefresh,
            _b)), onClick: onClick, onFocus: onFocus, onBlur: onBlur, disabled: disabled, ref: ref, tabIndex: tabIndex, role: "tab", "aria-selected": active, "aria-controls": paneId, "aria-hidden": ariaHidden, "aria-label": ariaLabel }, focusVisible),
        React.createElement(InternalIcon, { name: iconName }),
        " ",
        text));
});
//# sourceMappingURL=tab-button.js.map