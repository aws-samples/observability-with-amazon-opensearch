// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import styles from './styles.css.js';
export default function ToolsHeader(_a) {
    var header = _a.header, filter = _a.filter, pagination = _a.pagination, preferences = _a.preferences;
    var _b = useContainerBreakpoints(['xs']), breakpoint = _b[0], ref = _b[1];
    var isSmall = breakpoint === 'default';
    var hasTools = filter || pagination || preferences;
    return (React.createElement(React.Fragment, null,
        header,
        hasTools && (React.createElement("div", { ref: ref, className: clsx(styles.tools, isSmall && styles['tools-small']) },
            filter && React.createElement("div", { className: styles['tools-filtering'] }, filter),
            React.createElement("div", { className: styles['tools-align-right'] },
                pagination && React.createElement("div", { className: styles['tools-pagination'] }, pagination),
                preferences && React.createElement("div", { className: styles['tools-preferences'] }, preferences))))));
}
//# sourceMappingURL=tools-header.js.map