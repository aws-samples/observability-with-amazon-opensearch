import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { HeaderProps } from './interfaces';
import { SomeRequired } from '../internal/types';
interface InternalHeaderProps extends SomeRequired<HeaderProps, 'variant'>, InternalBaseComponentProps {
    __disableActionsWrapping?: boolean;
}
export default function InternalHeader({ variant, headingTagOverride, children, actions, counter, description, info, __internalRootRef, __disableActionsWrapping, ...restProps }: InternalHeaderProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map