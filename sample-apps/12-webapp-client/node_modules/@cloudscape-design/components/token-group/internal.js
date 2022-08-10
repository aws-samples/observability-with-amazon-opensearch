import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import clsx from 'clsx';
import Option from '../internal/components/option';
import { fireNonCancelableEvent } from '../internal/events';
import checkControlled from '../internal/hooks/check-controlled';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { getBaseProps } from '../internal/base-component';
import SpaceBetween from '../space-between/internal';
import DismissButton from './dismiss-button';
import SelectToggle from './toggle';
import styles from './styles.css.js';
export default function InternalTokenGroup(_a) {
    var items = _a.items, alignment = _a.alignment, onDismiss = _a.onDismiss, __internalRootRef = _a.__internalRootRef, limit = _a.limit, props = __rest(_a, ["items", "alignment", "onDismiss", "__internalRootRef", "limit"]);
    checkControlled('TokenGroup', 'items', items, 'onDismiss', onDismiss);
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var controlId = useUniqueId();
    var hasItems = items.length > 0;
    var hasHiddenItems = hasItems && limit !== undefined && items.length > limit;
    var slicedItems = hasHiddenItems && !expanded ? items.slice(0, limit) : items;
    var baseProps = getBaseProps(props);
    var className = clsx(baseProps.className, styles.root, hasItems && styles['has-items']);
    return (React.createElement("div", __assign({}, baseProps, { className: className, ref: __internalRootRef }),
        hasItems && (React.createElement(SpaceBetween, { id: controlId, direction: alignment, size: "xs" }, slicedItems.map(function (item, itemIndex) { return (React.createElement(Token, __assign({ key: itemIndex }, item, { onDismiss: function () { return fireNonCancelableEvent(onDismiss, { itemIndex: itemIndex }); } }))); }))),
        hasHiddenItems && (React.createElement(SelectToggle, { controlId: controlId, allHidden: limit === 0, expanded: expanded, numberOfHiddenOptions: items.length - slicedItems.length, i18nStrings: props.i18nStrings, onClick: function () { return setExpanded(!expanded); } }))));
}
export function Token(_a) {
    var disabled = _a.disabled, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss, props = __rest(_a, ["disabled", "dismissLabel", "onDismiss"]);
    return (React.createElement("div", { className: clsx(styles.token, disabled && styles['token-disabled']), "aria-disabled": disabled ? 'true' : undefined },
        React.createElement(Option, { option: __assign(__assign({}, props), { disabled: disabled }) }),
        React.createElement(DismissButton, { disabled: disabled, dismissLabel: dismissLabel, onDismiss: onDismiss })));
}
//# sourceMappingURL=internal.js.map