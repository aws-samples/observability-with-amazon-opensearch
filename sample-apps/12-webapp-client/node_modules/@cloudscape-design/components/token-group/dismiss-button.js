import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalIcon from '../icon/internal';
import useFocusVisible from '../internal/hooks/focus-visible';
export default function DismissButton(_a) {
    var disabled = _a.disabled, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss;
    var tokenAttributes = {
        tabIndex: -1
    };
    if (dismissLabel) {
        tokenAttributes['aria-label'] = dismissLabel;
    }
    if (!disabled) {
        tokenAttributes.onClick = onDismiss;
        tokenAttributes.tabIndex = 0;
    }
    var focusVisible = useFocusVisible();
    return (React.createElement("button", __assign({ type: "button", className: clsx(styles['dismiss-button']) }, tokenAttributes, focusVisible),
        React.createElement(InternalIcon, { name: "close" })));
}
//# sourceMappingURL=dismiss-button.js.map