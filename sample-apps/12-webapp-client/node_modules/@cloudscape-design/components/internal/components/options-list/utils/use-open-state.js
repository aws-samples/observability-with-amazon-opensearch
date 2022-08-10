// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
export var useOpenState = function (_a) {
    var onOpen = _a.onOpen, onClose = _a.onClose;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var openDropdown = function () {
        if (!isOpen) {
            setIsOpen(true);
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
    };
    var closeDropdown = function () {
        if (isOpen) {
            setIsOpen(false);
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    };
    var toggleDropdown = function () {
        if (isOpen) {
            closeDropdown();
        }
        else {
            openDropdown();
        }
    };
    return { isOpen: isOpen, openDropdown: openDropdown, closeDropdown: closeDropdown, toggleDropdown: toggleDropdown };
};
//# sourceMappingURL=use-open-state.js.map