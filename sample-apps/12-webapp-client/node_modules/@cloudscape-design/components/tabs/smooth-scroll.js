// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isMotionDisabled } from '../internal/motion';
import isNativeSmoothScrollingSupported from './native-smooth-scroll-supported';
// The scroll speed depends on the scrolling distance. The equation below is an interpolation of measurements in Chrome.
var getScrollSpeed = function (pixels) { return 0.0015 * Math.abs(pixels) + 0.558; };
var getScrollTime = function (pixels) { return Math.round(Math.abs(pixels) / getScrollSpeed(pixels)); };
var now = function () { return (window.performance ? window.performance.now() : Date.now()); };
var ease = function (k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
};
var step = function (context) {
    var time = now();
    var elapsed = Math.min((time - context.startTime) / context.scrollTime, 1);
    var value = ease(elapsed);
    var currentX = context.startX + (context.endX - context.startX) * value;
    context.scrollable.scrollLeft = currentX;
    // scroll more if we have not reached our destination
    if (currentX !== context.endX) {
        requestAnimationFrame(function () { return step(context); });
    }
};
var simulateSmoothScroll = function (element, endX) {
    var startX = element.scrollLeft;
    step({
        scrollable: element,
        startX: startX,
        endX: endX,
        startTime: now(),
        scrollTime: getScrollTime(endX - startX)
    });
};
var smoothScroll = function (element, to) {
    if (isMotionDisabled(element)) {
        element.scrollLeft = to;
        return;
    }
    if (isNativeSmoothScrollingSupported() && element.scrollTo) {
        element.scrollTo({
            left: to,
            behavior: 'smooth'
        });
        return;
    }
    simulateSmoothScroll(element, to);
};
export default smoothScroll;
//# sourceMappingURL=smooth-scroll.js.map