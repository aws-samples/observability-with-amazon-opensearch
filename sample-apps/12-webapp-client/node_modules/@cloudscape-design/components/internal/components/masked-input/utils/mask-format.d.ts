interface FormatSegment {
    min: number;
    max: number | ((value: string) => number);
    length: number;
    default?: number;
}
export interface MaskArgs {
    separator: string;
    inputSeparators?: Array<string>;
    segments: Array<FormatSegment>;
}
export interface ChangeResult {
    value: string;
    position: number;
}
declare class MaskFormat {
    separator: string;
    private inputSeparators;
    private segments;
    private positionFormats;
    constructor({ separator, inputSeparators, segments }: MaskArgs);
    tryAppendSeparator(value: string): string;
    isSeparator(key: string): boolean;
    isValid(value: string): boolean;
    getValidValue(value: string): string;
    autoComplete(value: string): string;
    getSegmentValueWithAddition(position: number, value: string, enteredDigit: string): number;
    replaceDigitsWithZeroes(value: string, cursorStart: number, cursorEnd: number): ChangeResult;
    handleSeparatorInput(value: string, position: number): ChangeResult | void;
    isCursorAtSeparator(position: number): boolean;
    isSegmentStart(position: number): boolean;
    getSegmentMaxValue(value: string, position: number): number;
    getSegmentMinValue(value: string, position: number): number;
    getMaxLength(): number;
    deleteSeparator(value: string, position: number): ChangeResult;
    deleteDigit(value: string, position: number): ChangeResult;
    correctMinMaxValues(value: string): string;
    formatPastedText(text: string, value: string, cursorStart: number, cursorEnd: number): string;
    processKey(initialValue: string, key: string, initialPosition: number): {
        value: string;
        position: number;
    };
    private padWithDefaultValue;
    private enrichSegmentDefinitions;
}
export default MaskFormat;
//# sourceMappingURL=mask-format.d.ts.map