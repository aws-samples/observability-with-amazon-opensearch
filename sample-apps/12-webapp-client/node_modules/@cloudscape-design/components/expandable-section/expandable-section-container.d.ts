import React from 'react';
import { ExpandableSectionProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
interface ExpandableSectionContainerProps extends InternalBaseComponentProps {
    className?: string;
    header: React.ReactNode;
    children?: React.ReactNode;
    variant: ExpandableSectionProps.Variant;
    expanded: boolean | undefined;
    disableContentPaddings: boolean | undefined;
}
export declare const ExpandableSectionContainer: ({ className, children, header, variant, expanded, disableContentPaddings, __internalRootRef, ...rest }: ExpandableSectionContainerProps) => JSX.Element;
export {};
//# sourceMappingURL=expandable-section-container.d.ts.map