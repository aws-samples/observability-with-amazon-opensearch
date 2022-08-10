// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useState } from 'react';
var defaultCtx = { state: { view: 'utilities', data: null }, setState: function () { } };
export var ViewContext = createContext(defaultCtx);
export var useNavigate = function () {
    var setState = useContext(ViewContext).setState;
    var navigate = function (view, data) {
        setState({ view: view, data: data });
    };
    return navigate;
};
export var Route = function (_a) {
    var view = _a.view, element = _a.element;
    var state = useContext(ViewContext).state;
    if (view === state.view) {
        if (typeof element === 'function') {
            return element(state.data);
        }
        return React.createElement(React.Fragment, null, element);
    }
    return null;
};
var Router = function (_a) {
    var children = _a.children;
    var _b = useState({ view: 'utilities', data: null }), state = _b[0], setState = _b[1];
    return React.createElement(ViewContext.Provider, { value: { state: state, setState: setState } }, children);
};
export default Router;
//# sourceMappingURL=router.js.map