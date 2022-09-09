import { BaseComponentProps } from '../internal/base-component';
export interface SpaceBetweenProps extends BaseComponentProps {
    /**
     * Defines the direction in which the content is laid out.
     */
    direction?: SpaceBetweenProps.Direction;
    /**
     * Defines the spacing between the individual items of the content.
     */
    size: SpaceBetweenProps.Size;
    /**
     * Content of this component.
     */
    children?: React.ReactNode;
}
export declare namespace SpaceBetweenProps {
    type Direction = 'vertical' | 'horizontal';
    type Size = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}
//# sourceMappingURL=interfaces.d.ts.map