// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// When updating the list of key codes, don't forget
// to modify corresponding list in test-utils
// to avoid failing unit tests
export var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["pageUp"] = 33] = "pageUp";
    KeyCode[KeyCode["pageDown"] = 34] = "pageDown";
    KeyCode[KeyCode["end"] = 35] = "end";
    KeyCode[KeyCode["home"] = 36] = "home";
    KeyCode[KeyCode["backspace"] = 8] = "backspace";
    KeyCode[KeyCode["space"] = 32] = "space";
    KeyCode[KeyCode["down"] = 40] = "down";
    KeyCode[KeyCode["left"] = 37] = "left";
    KeyCode[KeyCode["right"] = 39] = "right";
    KeyCode[KeyCode["up"] = 38] = "up";
    KeyCode[KeyCode["escape"] = 27] = "escape";
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["tab"] = 9] = "tab";
    KeyCode[KeyCode["shift"] = 16] = "shift";
    KeyCode[KeyCode["control"] = 17] = "control";
    KeyCode[KeyCode["alt"] = 18] = "alt";
    KeyCode[KeyCode["meta"] = 91] = "meta";
})(KeyCode || (KeyCode = {}));
//# sourceMappingURL=keycode.js.map