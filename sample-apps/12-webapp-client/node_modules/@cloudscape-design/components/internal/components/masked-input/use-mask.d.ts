import { RefObject } from 'react';
import { InputProps } from '../../../input/interfaces';
import { NonCancelableEventHandler, CancelableEventHandler } from '../../events';
import MaskFormat from './utils/mask-format';
interface UseMaskHook {
    value: string;
    onChange: NonCancelableEventHandler<InputProps.ChangeDetail>;
    onKeyDown: CancelableEventHandler<InputProps.KeyDetail>;
    onBlur: NonCancelableEventHandler<null>;
    onPaste: (event: ClipboardEvent) => void;
}
interface UseMaskProps {
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: (event: CustomEvent) => void;
    onBlur?: () => void;
    format: MaskFormat;
    autofix?: boolean;
    inputRef: RefObject<HTMLInputElement>;
    disableAutocompleteOnBlur?: boolean;
    setPosition: (position: number | null) => void;
}
declare const useMask: ({ value, onBlur, onChange, onKeyDown, format, inputRef, autofix, disableAutocompleteOnBlur, setPosition, }: UseMaskProps) => UseMaskHook;
export default useMask;
//# sourceMappingURL=use-mask.d.ts.map