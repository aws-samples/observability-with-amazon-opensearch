import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent, fireCancelableEvent } from '../internal/events';
import { Header, ItemList } from './internal';
import { generateExpandableItemsMapping, checkDuplicateHrefs } from './util';
import styles from './styles.css.js';
import { isDevelopment } from '../internal/is-development';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function SideNavigation(_a) {
    var header = _a.header, activeHref = _a.activeHref, _b = _a.items, items = _b === void 0 ? [] : _b, onFollow = _a.onFollow, onChange = _a.onChange, props = __rest(_a, ["header", "activeHref", "items", "onFollow", "onChange"]);
    var __internalRootRef = useBaseComponent('SideNavigation').__internalRootRef;
    var baseProps = getBaseProps(props);
    var parentMap = useMemo(function () { return generateExpandableItemsMapping(items); }, [items]);
    if (isDevelopment) {
        // This code should be wiped in production anyway.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(function () { return checkDuplicateHrefs(items); }, [items]);
    }
    var onChangeHandler = useCallback(function (item, expanded) {
        // generateExpandableItemsMapping walks through the entire tree, so we're certain about getting a value.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireNonCancelableEvent(onChange, { item: item, expanded: expanded, expandableParents: parentMap.get(item) });
    }, [onChange, parentMap]);
    var onFollowHandler = useCallback(function (item, sourceEvent) {
        fireCancelableEvent(onFollow, item, sourceEvent);
    }, [onFollow]);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(styles.root, baseProps.className), ref: __internalRootRef }),
        header && (React.createElement(Header, { definition: header, activeHref: activeHref, fireChange: onChangeHandler, fireFollow: onFollowHandler })),
        items && (React.createElement("div", { className: styles['list-container'] },
            React.createElement(ItemList, { variant: "root", items: items, fireFollow: onFollowHandler, fireChange: onChangeHandler, activeHref: activeHref })))));
}
applyDisplayName(SideNavigation, 'SideNavigation');
//# sourceMappingURL=index.js.map