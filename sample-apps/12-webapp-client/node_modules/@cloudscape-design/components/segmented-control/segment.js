import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
import useFocusVisible from '../internal/hooks/focus-visible';
export var Segment = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var disabled = _a.disabled, text = _a.text, iconName = _a.iconName, iconAlt = _a.iconAlt, iconUrl = _a.iconUrl, iconSvg = _a.iconSvg, isActive = _a.isActive, onClick = _a.onClick, onKeyDown = _a.onKeyDown, tabIndex = _a.tabIndex;
    var focusVisible = useFocusVisible();
    return (React.createElement("button", __assign({ className: clsx(styles.segment, (_b = {}, _b[styles.disabled] = !!disabled, _b), (_c = {}, _c[styles.selected] = isActive, _c)) }, focusVisible, { ref: ref, onClick: onClick, onKeyDown: onKeyDown, disabled: disabled, type: "button", tabIndex: tabIndex, "aria-pressed": isActive ? 'true' : 'false', "aria-label": !text ? iconAlt : undefined }),
        (iconName || iconUrl || iconSvg) && (React.createElement(InternalIcon, { className: clsx(styles.icon, text ? styles['with-text'] : styles['with-no-text']), name: iconName, url: iconUrl, svg: iconSvg, alt: iconAlt, variant: disabled ? 'disabled' : 'normal' })),
        React.createElement("span", null, text)));
});
//# sourceMappingURL=segment.js.map