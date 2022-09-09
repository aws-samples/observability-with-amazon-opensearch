// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalBox from '../../box/internal';
export function EmptyState(_a) {
    var title = _a.title, subtitle = _a.subtitle, action = _a.action;
    return (React.createElement(InternalBox, { textAlign: "center", color: "inherit" },
        React.createElement(InternalBox, { variant: "strong", textAlign: "center", color: "inherit" }, title),
        React.createElement(InternalBox, { variant: "p", padding: { bottom: 's' }, color: "inherit" }, subtitle),
        action));
}
//# sourceMappingURL=empty-state.js.map