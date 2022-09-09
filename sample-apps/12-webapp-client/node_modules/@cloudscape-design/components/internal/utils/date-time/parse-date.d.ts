/**
 * Parses date string and returns Date object or null.
 *
 * We cannot use new Date(string) constructor, because it produces GMT time that may have different date than the local.
 */
export declare function parseDate(value: string): Date;
export declare function parseDate(value: string, strict: boolean): Date | null;
//# sourceMappingURL=parse-date.d.ts.map