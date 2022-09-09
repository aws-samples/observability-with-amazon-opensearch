// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback } from 'react';
import { fireNonCancelableEvent } from '../internal/events';
import InternalIcon from '../icon/internal';
import InternalLink from '../link/internal';
import styles from './styles.css.js';
export default (function (_a) {
    var children = _a.children, recoveryText = _a.recoveryText, onRecoveryClick = _a.onRecoveryClick;
    var onFollow = useCallback(function () { return fireNonCancelableEvent(onRecoveryClick); }, [onRecoveryClick]);
    return (React.createElement("div", { className: styles['error-screen'] },
        React.createElement(InternalIcon, { name: "status-negative", variant: "error" }),
        "\u00A0",
        children,
        "\u00A0",
        React.createElement(InternalLink, { variant: "recovery", onFollow: onFollow }, recoveryText)));
});
//# sourceMappingURL=error-screen.js.map