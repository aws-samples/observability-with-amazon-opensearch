// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { KeyCode } from '../../../keycode';
var isSpecialCommand = function (keyCode) {
    return keyCode > 7 && keyCode < 47 && keyCode !== KeyCode.space;
};
var isClipboardCommand = function (ctrlKey, metaKey) { return ctrlKey || metaKey; };
export var isCommand = function (keyCode, ctrlKey, metaKey) {
    return isSpecialCommand(keyCode) || isClipboardCommand(ctrlKey, metaKey);
};
export var isDigit = function (char) { return !isNaN(parseInt(char, 10)); };
//# sourceMappingURL=keys.js.map