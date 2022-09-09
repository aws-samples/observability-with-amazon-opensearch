import MaskFormat from './utils/mask-format';
export interface HandlerResult {
    position: number;
    value: string;
}
/**
 * Handles character removal
 *
 * @param initialValue Current value of input
 * @param format MaskFormat object
 * @param selectionStart Starting index value of selection cursor
 * @param selectionEnd Ending Index value of selection cursor
 */
export declare const backspaceHandler: (initialValue: string, format: MaskFormat, selectionStart: number, selectionEnd: number) => HandlerResult;
/**
 * Handle key down events
 *
 * @param initialValue Current value of input
 * @param key Key that was pressed
 * @param format MaskFormat object
 * @param selectionStart Starting index value of selection cursor
 * @param selectionEnd Ending Index value of selection cursor
 */
export declare const keyHandler: (initialValue: string, key: string, format: MaskFormat, selectionStart: number, selectionEnd: number) => HandlerResult;
export declare const enterHandler: (value: string, format: MaskFormat) => HandlerResult;
//# sourceMappingURL=keyboard-handler.d.ts.map