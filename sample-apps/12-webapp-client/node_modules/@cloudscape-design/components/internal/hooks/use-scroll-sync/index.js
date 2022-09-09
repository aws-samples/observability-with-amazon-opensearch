// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
/**
 * useScrollSync returns scroll event handler to be attached to synchronised scroll elements.
 *
 * For example
 *    const handleScroll = useScrollSync([ref1, ref2]);
 *    <div ref={ref1} onScroll={handleScroll}/>
 *    <div ref={ref2} onScroll={handleScroll}/>
 */
export function useScrollSync(refs, disabled) {
    if (disabled === void 0) { disabled = false; }
    var activeElement = useRef(null);
    var onScroll = function (event) {
        var targetElement = event.target;
        // remembers the first element that fires onscroll to align with other elements against it
        if (targetElement && (activeElement.current === null || activeElement.current === targetElement)) {
            requestAnimationFrame(function () {
                activeElement.current = targetElement;
                refs.forEach(function (ref) {
                    var element = ref.current;
                    if (element && element !== targetElement) {
                        element.scrollLeft = targetElement.scrollLeft;
                    }
                });
                // unblock the ability to scroll the synced elements
                requestAnimationFrame(function () {
                    activeElement.current = null;
                });
            });
        }
    };
    return !disabled ? onScroll : undefined;
}
//# sourceMappingURL=index.js.map