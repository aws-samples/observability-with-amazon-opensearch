import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import { getBaseProps } from '../internal/base-component';
import { matchBreakpointMapping } from '../internal/breakpoints';
import { isDevelopment } from '../internal/is-development';
import * as logging from '../internal/logging';
import styles from './styles.css.js';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
var InternalGrid = React.forwardRef(function (_a, ref) {
    var _b;
    var __breakpoint = _a.__breakpoint, _c = _a.gridDefinition, gridDefinition = _c === void 0 ? [] : _c, _d = _a.disableGutters, disableGutters = _d === void 0 ? false : _d, children = _a.children, __responsiveClassName = _a.__responsiveClassName, _e = _a.__internalRootRef, __internalRootRef = _e === void 0 ? null : _e, restProps = __rest(_a, ["__breakpoint", "gridDefinition", "disableGutters", "children", "__responsiveClassName", "__internalRootRef"]);
    var _f = useContainerBreakpoints(undefined), defaultBreakpoint = _f[0], defaultRef = _f[1];
    if (__breakpoint !== undefined) {
        defaultBreakpoint = __breakpoint;
        defaultRef = ref;
    }
    var baseProps = getBaseProps(restProps);
    /*
   Flattening the children allows us to "see through" React Fragments and nested arrays.
   */
    var flattenedChildren = flattenChildren(children);
    if (isDevelopment) {
        var columnCount = gridDefinition.length;
        var childCount = flattenedChildren.length;
        if (columnCount !== childCount) {
            logging.warnOnce('Grid', "The number of children (".concat(childCount, ") does not match the number of columns defined (").concat(columnCount, ")."));
        }
    }
    var mergedRef = useMergeRefs(defaultRef, __internalRootRef);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(styles.grid, baseProps.className, (_b = {}, _b[styles['no-gutters']] = disableGutters, _b), __responsiveClassName ? __responsiveClassName(defaultBreakpoint) : null), ref: mergedRef }), flattenedChildren.map(function (child, i) {
        var _a, _b, _c, _d;
        // If this react child is a primitive value, the key will be undefined
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var key = child.key;
        return (React.createElement("div", { key: key, className: clsx(styles['grid-column'], getColumnClassNames('colspan', (_a = gridDefinition[i]) === null || _a === void 0 ? void 0 : _a.colspan, defaultBreakpoint), getColumnClassNames('offset', (_b = gridDefinition[i]) === null || _b === void 0 ? void 0 : _b.offset, defaultBreakpoint), getColumnClassNames('pull', (_c = gridDefinition[i]) === null || _c === void 0 ? void 0 : _c.pull, defaultBreakpoint), getColumnClassNames('push', (_d = gridDefinition[i]) === null || _d === void 0 ? void 0 : _d.push, defaultBreakpoint)) },
            React.createElement("div", { className: styles['restore-pointer-events'] }, child)));
    })));
});
function getColumnClassNames(prop, mapping, breakpoint) {
    if (typeof mapping === 'number') {
        return styles["".concat(prop, "-").concat(mapping)];
    }
    if (breakpoint === null || mapping === undefined) {
        return null;
    }
    return styles["".concat(prop, "-").concat(matchBreakpointMapping(mapping, breakpoint))];
}
export default InternalGrid;
//# sourceMappingURL=internal.js.map