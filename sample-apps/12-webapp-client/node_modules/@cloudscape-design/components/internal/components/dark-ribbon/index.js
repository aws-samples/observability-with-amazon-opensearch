// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import { useMutationObserver } from '../../hooks/use-mutation-observer';
import { useStableEventHandler } from '../../hooks/use-stable-event-handler';
import styles from './styles.css.js';
function setIfChanged(oldValue, newValue, setter) {
    if (oldValue !== newValue) {
        setter(newValue);
    }
}
export default function DarkRibbon(_a) {
    var children = _a.children, isRefresh = _a.isRefresh, hasPlainStyling = _a.hasPlainStyling;
    var containerRef = useRef(null);
    var fillRef = useRef(null);
    var syncSizes = useStableEventHandler(function (from, to) {
        // JSDOM calls mutation observer callback even if attribute did not change
        // https://github.com/jsdom/jsdom/issues/3305
        // To prevent infinite loops, we need to check the values before setting
        var size = from.getBoundingClientRect();
        var _a = to.style, oldHeight = _a.height, oldLeft = _a.left, oldRight = _a.right;
        setIfChanged(oldHeight, "".concat(size.height, "px"), function (newHeight) { return (to.style.height = newHeight); });
        setIfChanged(oldLeft, "".concat(-1 * size.left, "px"), function (newLeft) { return (to.style.left = newLeft); });
        setIfChanged(oldRight, "".concat(-1 * (document.body.clientWidth - size.right), "px"), function (newRight) { return (to.style.right = newRight); });
    });
    useMutationObserver(containerRef, function (node) {
        if (fillRef.current) {
            syncSizes(node, fillRef.current);
        }
    });
    useEffect(function () {
        var handler = function () {
            if (containerRef.current && fillRef.current) {
                syncSizes(containerRef.current, fillRef.current);
            }
        };
        window.addEventListener('resize', handler);
        return function () { return window.removeEventListener('resize', handler); };
    }, [syncSizes]);
    if (hasPlainStyling === true || !isRefresh) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement("div", { ref: containerRef, className: "awsui-context-content-header" },
        React.createElement("div", { ref: fillRef, className: styles['background-fill'] }),
        React.createElement("div", { className: styles.content }, children)));
}
//# sourceMappingURL=index.js.map