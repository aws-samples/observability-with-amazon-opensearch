import * as React from 'react';
interface PropertyDescription {
    componentName: string;
    controlledProp: string;
    changeHandler: string;
}
/**
 * This hook allows you to make a component that can be used both in controlled mode and uncontrolled mode.
 * Pass in your component's props, and then implement your component as if it was only controlled.
 * When calling onChange callbacks (or the equivalent for your property), you need to call both the callback returned by this function
 * as well as the callback provided in your component's props.
 *
 * A component determines its mode (either controlled or uncontrolled) on the first render and keeps it for its lifetime. The mode cannot
 * be switched later.
 *
 *
 * Example usage:
 * ```jsx
 * const [checked, setChecked] = useControllable(
 *     props,
 *     props.defaultEnabled ?? false,
 *     {
 *        componentName: 'MyCheckboxComponent',
 *        controlledProp: 'enabled',
 *        changeHandler: 'onCheckedStatusChange'
 *     }
 * )
 *
 * return
 *  <input
 *   type="checkbox"
 *   checked={checked}
 *   onChange={event => {
 *    setChecked(event.target.checked);
 *    fireNonCancelableEvent(props.onCheckedStatusChange, { checked: event.target.checked })
 *   }} />
 * ```
 *
 * @param controlledValue value for the controlled mode
 * @param handler update handler for controlled mode
 * @param defaultValue initial value for uncontrolled mode
 * @param description property metadata
 */
export declare function useControllable<ValueType>(controlledValue: ValueType, handler: ((...args: any[]) => unknown) | undefined, defaultValue: ValueType, { componentName, changeHandler, controlledProp }: PropertyDescription): readonly [ValueType, (newValue: React.SetStateAction<ValueType>) => void];
export {};
//# sourceMappingURL=index.d.ts.map