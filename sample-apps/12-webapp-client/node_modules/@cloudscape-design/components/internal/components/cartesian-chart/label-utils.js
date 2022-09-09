var SPACE_BETWEEN = 4;
export function formatTicks(_a) {
    var ticks = _a.ticks, scale = _a.scale, getLabelSpace = _a.getLabelSpace, tickFormatter = _a.tickFormatter;
    return ticks.map(function (tick) {
        var _a;
        var position = (_a = scale.d3Scale(tick)) !== null && _a !== void 0 ? _a : NaN;
        var label = tickFormatter ? tickFormatter(tick) : tick.toString();
        var lines = (label + '').split('\n');
        return { position: position, lines: lines, space: Math.max.apply(Math, lines.map(getLabelSpace)) };
    });
}
export function getVisibleTicks(ticks, from, until, balanceTicks) {
    if (balanceTicks === void 0) { balanceTicks = false; }
    ticks = getTicksInRange(ticks, from, until);
    return balanceTicks ? getReducedTicks(ticks) : removeIntersections(ticks);
}
function getTicksInRange(ticks, from, until) {
    return ticks.filter(function (tick) { return from <= tick.position - tick.space / 2 && tick.position + tick.space / 2 <= until; });
}
function getReducedTicks(ticks) {
    var reduceLabelRatio = findReduceLabelRatio(ticks);
    var reducedTicks = [];
    for (var index = 0; index < ticks.length; index += reduceLabelRatio) {
        reducedTicks.push(ticks[index]);
    }
    return reducedTicks;
}
// Returns a ratio such that all elements can be displayed with no intersections.
function findReduceLabelRatio(ticks, ratio) {
    if (ratio === void 0) { ratio = 1; }
    if (ratio >= ticks.length) {
        return ratio;
    }
    for (var i = ratio; i < ticks.length; i += ratio) {
        if (hasIntersection(ticks[i - ratio], ticks[i])) {
            return findReduceLabelRatio(ticks, ratio + 1);
        }
    }
    return ratio;
}
function removeIntersections(ticks) {
    var visibleTicks = [];
    var prevTick = null;
    for (var _i = 0, ticks_1 = ticks; _i < ticks_1.length; _i++) {
        var tick = ticks_1[_i];
        if (!prevTick || !hasIntersection(prevTick, tick)) {
            visibleTicks.push(tick);
            prevTick = tick;
        }
    }
    return visibleTicks;
}
function hasIntersection(a, b) {
    var _a = a.position < b.position ? [a, b] : [b, a], left = _a[0], right = _a[1];
    var leftEdge = left.position + left.space / 2 + SPACE_BETWEEN;
    var rightEdge = right.position - right.space / 2;
    return leftEdge > rightEdge;
}
//# sourceMappingURL=label-utils.js.map