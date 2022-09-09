import { differenceInDays, add } from 'date-fns';
import { X_TICK_COUNT_RATIO, Y_TICK_COUNT_RATIO } from './constants';
// The number of ticks is currently defined by the length of the scale.
// The x scale tends to have longer labels, so we're using less ticks for it.
// These numbers are currently based on first impressions and might change in the future.
// We might also open up an API in the future to control the amount of ticks displayed.
export function getXTickCount(width) {
    return Math.ceil(width / X_TICK_COUNT_RATIO);
}
export function getYTickCount(height) {
    return Math.ceil(height / Y_TICK_COUNT_RATIO);
}
export function createXTicks(scale, values) {
    if (scale.isNumeric()) {
        return scale.d3Scale.ticks(values);
    }
    else if (scale.isTime()) {
        var rawTicks = scale.d3Scale.ticks(values);
        var domain = scale.d3Scale.domain();
        return uniform(rawTicks, domain[domain.length - 1]);
    }
    else {
        return scale.d3Scale.domain();
    }
}
export function createYTicks(scale, values) {
    var ticks = scale.d3Scale.ticks(values);
    // The logarithmic scale sometimes produces a very large amount of (major and minor) ticks,
    // at which point we need to reduce them significantly for space.
    if (scale.scaleType === 'log' && ticks.length > 10) {
        return scale.d3Scale.ticks(3);
    }
    return ticks;
}
/**
 * Ensure uniformly-spaced ticks for 2-day intervals. d3-scale generates
 * ticks for even or odd numbers, which causes varying interval lengths
 * between months.
 */
function uniform(ticks, max) {
    if (ticks.length < 3 || !isMixedDayInterval(ticks)) {
        return ticks;
    }
    return createTwoDayInterval(ticks[0], max);
}
function isMixedDayInterval(ticks) {
    var oneDayInterval = false;
    var twoDayInterval = false;
    for (var i = 1; i < ticks.length; i++) {
        oneDayInterval = oneDayInterval || isDayInterval(ticks[i - 1], ticks[i], 1);
        twoDayInterval = twoDayInterval || isDayInterval(ticks[i - 1], ticks[i], 2);
    }
    return oneDayInterval && twoDayInterval;
}
function isDayInterval(a, b, difference) {
    if (difference === void 0) { difference = 1; }
    return Math.abs(differenceInDays(a, b)) === difference;
}
function createTwoDayInterval(start, max) {
    var result = [];
    var curr = start;
    while (curr < max) {
        result.push(curr);
        curr = add(curr, { days: 2 });
    }
    return result;
}
//# sourceMappingURL=ticks.js.map