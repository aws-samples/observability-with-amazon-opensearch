import './styles.css.js';
export interface BaseComponentProps {
    /**
     * Adds the specified classes to the root element of the component.
     * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
     */
    className?: string;
    /**
     * Adds the specified ID to the root element of the component.
     * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
     */
    id?: string;
}
export declare function getBaseProps(props: BaseComponentProps): BaseComponentProps;
//# sourceMappingURL=index.d.ts.map