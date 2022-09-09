// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useContext } from 'react';
var DropdownContext = React.createContext({
    position: 'bottom-right'
});
export function DropdownContextProvider(_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? 'bottom-right' : _b;
    return React.createElement(DropdownContext.Provider, { value: { position: position } }, children);
}
export function useDropdownContext() {
    return useContext(DropdownContext);
}
//# sourceMappingURL=context.js.map