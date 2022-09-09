// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import InternalBox from '../../../box/internal';
import styles from './styles.css.js';
export default memo(AxisLabel);
function AxisLabel(_a) {
    var title = _a.title, axis = _a.axis, position = _a.position;
    if (!title) {
        return null;
    }
    return (React.createElement(InternalBox, { className: clsx(styles['axis-label'], axis === 'x' ? styles['axis-label--x'] : styles['axis-label--y']), fontWeight: "bold", textAlign: position === 'left' ? 'left' : 'center', margin: { bottom: position === 'left' ? 'l' : 'n' } },
        React.createElement("span", { "aria-hidden": "true" }, title)));
}
//# sourceMappingURL=axis-label.js.map