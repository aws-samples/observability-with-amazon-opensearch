// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as React from 'react';
import { isDevelopment } from '../../is-development';
import { warnOnce } from '../../logging';
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
export function useControllable(controlledValue, handler, defaultValue, _a) {
    var componentName = _a.componentName, changeHandler = _a.changeHandler, controlledProp = _a.controlledProp;
    // The decision whether a component is controlled or uncontrolled is made on its first render and cannot be changed afterwards.
    var isControlled = React.useState(controlledValue !== undefined)[0];
    if (isDevelopment) {
        // Print a warning if the component switches between controlled and uncontrolled mode.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(function () {
            if (isControlled && handler === undefined) {
                warnOnce(componentName, "You provided a `".concat(controlledProp, "` prop without an `").concat(changeHandler, "` handler. This will render a non-interactive component."));
            }
        }, [handler, isControlled, componentName, changeHandler, controlledProp]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(function () {
            var isControlledNow = controlledValue !== undefined;
            if (isControlled !== isControlledNow) {
                var initialMode = isControlled ? 'controlled' : 'uncontrolled';
                var modeNow = isControlledNow ? 'controlled' : 'uncontrolled';
                warnOnce(componentName, "A component tried to change ".concat(initialMode, " '").concat(controlledProp, "' property to be ").concat(modeNow, ". ") +
                    "This is not supported. Properties should not switch from ".concat(initialMode, " to ").concat(modeNow, " (or vice versa). ") +
                    "Decide between using a controlled or uncontrolled mode for the lifetime of the component. " +
                    "More info: https://fb.me/react-controlled-components");
            }
        }, [isControlled, controlledProp, componentName, controlledValue]);
    }
    // This is the value that is used if the component is uncontrolled.
    var _b = React.useState(defaultValue), valueState = _b[0], setValue = _b[1];
    var _c = React.useState(false), valueHasBeenSet = _c[0], setValueHasBeenSet = _c[1];
    // We track changes to the defaultValue
    var currentUncontrolledValue = valueHasBeenSet ? valueState : defaultValue;
    var setUncontrolledValue = React.useCallback(function (newValue) {
        setValue(newValue);
        setValueHasBeenSet(true);
    }, [setValue, setValueHasBeenSet]);
    if (isControlled) {
        return [controlledValue, defaultCallback];
    }
    else {
        return [currentUncontrolledValue, setUncontrolledValue];
    }
}
function defaultCallback() {
    return void 0;
}
//# sourceMappingURL=index.js.map