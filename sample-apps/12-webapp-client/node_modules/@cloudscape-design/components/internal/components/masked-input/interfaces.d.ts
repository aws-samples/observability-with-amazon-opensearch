import { BaseChangeDetail } from '../../../input/interfaces';
import { InternalInputProps } from '../../../input/internal';
import { BaseComponentProps } from '../../base-component';
import { FormFieldValidationControlProps } from '../../context/form-field-context';
import { MaskArgs } from './utils/mask-format';
export interface MaskedInputProps extends InternalInputProps, FormFieldValidationControlProps, BaseComponentProps {
    /**
     * Mask config definition to describe segments and seperators
     */
    mask: MaskArgs;
    /**
     * Autofixes values provided to the Mask based on the minValue/maxValue specified in the mask.
     */
    autofix?: boolean;
    /**
     * Disable value autocompletion when input is blurred
     */
    disableAutocompleteOnBlur?: boolean;
}
export declare namespace MaskedInputProps {
    type ChangeDetail = BaseChangeDetail;
    interface Ref {
        /**
         * Sets input focus onto the UI control.
         */
        focus(): void;
    }
}
//# sourceMappingURL=interfaces.d.ts.map