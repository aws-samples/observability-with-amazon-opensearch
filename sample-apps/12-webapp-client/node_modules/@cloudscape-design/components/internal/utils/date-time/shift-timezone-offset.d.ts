/**
 * Re-formats an ISO8601 date string so that it is expressed using the
 * target timezone offset. The returned date string still represents the
 * same instant in time, but contains no visible offset.
 *
 * Example:
 * ```
 * shiftTimezoneOffset("2020-01-01T09:00:00+03:00", 2 * 60) === "2020-01-01T08:00:00"
 * ```
 */
export declare function shiftTimezoneOffset(dateString: string, targetTimezoneOffset?: number): string;
//# sourceMappingURL=shift-timezone-offset.d.ts.map