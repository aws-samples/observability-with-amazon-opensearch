// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { KeyCode } from '../../keycode';
import { createSingletonState } from '../use-singleton-handler';
var useFocusSingleton = createSingletonState({
    initialState: false,
    factory: function (setIsKeyboard) {
        var handleMousedown = function () { return setIsKeyboard(false); };
        var handleKeydown = function (event) {
            // we do not want to highlight focused element
            // when special keys are pressed
            var isSpecialKey = [KeyCode.shift, KeyCode.alt, KeyCode.control, KeyCode.meta].indexOf(event.keyCode) > -1;
            if (!isSpecialKey) {
                setIsKeyboard(true);
            }
        };
        document.addEventListener('mousedown', handleMousedown);
        document.addEventListener('keydown', handleKeydown);
        return function () {
            document.removeEventListener('mousedown', handleMousedown);
            document.removeEventListener('keydown', handleKeydown);
        };
    }
});
export default function useFocusVisible() {
    var visible = useFocusSingleton();
    return visible ? { 'data-awsui-focus-visible': visible } : {};
}
//# sourceMappingURL=index.js.map