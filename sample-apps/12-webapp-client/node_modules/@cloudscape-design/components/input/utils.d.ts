import { RefObject } from 'react';
import { InternalInputProps } from './internal';
export declare const useSearchProps: (type: string, disabled: boolean | undefined, readOnly: boolean | undefined, value: string, inputRef: RefObject<HTMLInputElement>, onChange: (value: string) => void) => Partial<InternalInputProps>;
/**
 * Converts the boolean or string value of the `autoComplete` property to the correct `autocomplete` attribute value.
 */
export declare const convertAutoComplete: (propertyValue?: boolean | string) => string;
//# sourceMappingURL=utils.d.ts.map