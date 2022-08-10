// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ResizeObserver, ResizeObserverEntry } from '@juggle/resize-observer';
import { useEffect, useLayoutEffect } from 'react';
import { useStableEventHandler } from '../use-stable-event-handler';
/**
 * Attaches resize-observer to the referenced element.
 *
 * Examples:
 *     // With React reference
 *     const ref = useRef(null)
 *     useResizeObserver(ref, (entry) => setState(getWidth(entry)))
 *
 *     // With ID reference
 *     const getElement = useCallback(() => document.getElementById(id), [id])
 *     useResizeObserver(getElement, (entry) => setState(getWidth(entry)))
 *
 * @param elementRef React reference or memoized getter for the target element
 * @param onObserve Function to fire when observation occurs
 */
export function useResizeObserver(elementRef, onObserve) {
    var stableOnObserve = useStableEventHandler(onObserve);
    // This effect provides a synchronous update required to prevent flakiness when initial state and first observed state are different.
    // Can potentially conflict with React concurrent mode: https://17.reactjs.org/docs/concurrent-mode-intro.html.
    // A possible solution would be to make consumers not render any content until the first (asynchronous) observation is available.
    useLayoutEffect(function () {
        var element = typeof elementRef === 'function' ? elementRef() : elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
        if (element) {
            onObserve(convertResizeObserverEntry(new ResizeObserverEntry(element)));
        }
    }, 
    // This effect is only needed for the first render to provide a synchronous update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    useEffect(function () {
        var element = typeof elementRef === 'function' ? elementRef() : elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
        if (element) {
            var connected_1 = true;
            var observer_1 = new ResizeObserver(function (entries) {
                // Prevent observe notifications on already unmounted component.
                if (connected_1) {
                    stableOnObserve(convertResizeObserverEntry(entries[0]));
                }
            });
            observer_1.observe(element);
            return function () {
                connected_1 = false;
                observer_1.disconnect();
            };
        }
    }, [elementRef, stableOnObserve]);
}
function convertResizeObserverEntry(entry) {
    return {
        target: entry.target,
        contentBoxWidth: entry.contentBoxSize[0].inlineSize,
        contentBoxHeight: entry.contentBoxSize[0].blockSize,
        borderBoxWidth: entry.borderBoxSize[0].inlineSize,
        borderBoxHeight: entry.borderBoxSize[0].blockSize,
        width: entry.contentBoxSize[0].inlineSize,
        height: entry.contentBoxSize[0].blockSize
    };
}
//# sourceMappingURL=use-resize-observer.js.map