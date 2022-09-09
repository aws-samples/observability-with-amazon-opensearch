import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback } from 'react';
import InternalIcon from '../icon/internal';
import useFocusVisible from '../internal/hooks/focus-visible';
import { fireNonCancelableEvent } from '../internal/events';
import styles from './styles.css.js';
var SelectToggle = function (_a) {
    var controlId = _a.controlId, allHidden = _a.allHidden, expanded = _a.expanded, numberOfHiddenOptions = _a.numberOfHiddenOptions, onClick = _a.onClick, _b = _a.i18nStrings, i18nStrings = _b === void 0 ? {} : _b;
    var focusVisible = useFocusVisible();
    var numberOfHiddenOptionLabel = allHidden ? numberOfHiddenOptions : "+".concat(numberOfHiddenOptions);
    var description = expanded
        ? i18nStrings.limitShowFewer
        : "".concat(i18nStrings.limitShowMore || '', " (").concat(numberOfHiddenOptionLabel, ")");
    var handleClick = useCallback(function () {
        fireNonCancelableEvent(onClick, null);
    }, [onClick]);
    return (React.createElement("button", __assign({ type: "button", className: styles.toggle, onClick: handleClick, "aria-controls": controlId, "aria-expanded": expanded }, focusVisible),
        React.createElement(InternalIcon, { name: expanded ? 'treeview-collapse' : 'treeview-expand' }),
        React.createElement("span", { className: styles.description }, description)));
};
export default SelectToggle;
//# sourceMappingURL=toggle.js.map