var BREAKPOINT_MAPPING = [
    ['xl', 1840],
    ['l', 1320],
    ['m', 1120],
    ['s', 912],
    ['xs', 688],
    ['xxs', 465],
    ['default', -1],
];
export var mobileBreakpoint = BREAKPOINT_MAPPING.filter(function (b) { return b[0] === 'xs'; })[0][1];
var BREAKPOINTS_DESCENDING = BREAKPOINT_MAPPING.map(function (_a) {
    var bp = _a[0];
    return bp;
});
/**
 * Take a breakpoint mapping and return the breakpoint value that most closely matches the actual breakpoint.
 */
export function matchBreakpointMapping(subset, actual) {
    var qualifyingBreakpoints = BREAKPOINT_MAPPING.slice(BREAKPOINTS_DESCENDING.indexOf(actual));
    for (var _i = 0, qualifyingBreakpoints_1 = qualifyingBreakpoints; _i < qualifyingBreakpoints_1.length; _i++) {
        var breakpoint = qualifyingBreakpoints_1[_i][0];
        var breakpointValue = subset[breakpoint];
        if (breakpointValue !== undefined) {
            return breakpointValue;
        }
    }
    return null;
}
/**
 * Get the named breakpoint for a provided width, optionally filtering to a subset of breakpoints.
 */
export function getMatchingBreakpoint(width, breakpointFilter) {
    for (var _i = 0, BREAKPOINT_MAPPING_1 = BREAKPOINT_MAPPING; _i < BREAKPOINT_MAPPING_1.length; _i++) {
        var _a = BREAKPOINT_MAPPING_1[_i], breakpoint = _a[0], breakpointWidth = _a[1];
        if (width > breakpointWidth && (!breakpointFilter || breakpointFilter.indexOf(breakpoint) !== -1)) {
            return breakpoint;
        }
    }
    return 'default';
}
//# sourceMappingURL=breakpoints.js.map