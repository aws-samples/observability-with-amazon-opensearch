// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
export function createSingletonHandler(factory) {
    var listeners = [];
    var callback = function (value) {
        unstable_batchedUpdates(function () {
            for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                var listener = listeners_1[_i];
                listener(value);
            }
        });
    };
    var cleanup;
    return function useSingleton(listener) {
        useEffect(function () {
            if (listeners.length === 0) {
                cleanup = factory(callback);
            }
            listeners.push(listener);
            return function () {
                listeners.splice(listeners.indexOf(listener), 1);
                if (listeners.length === 0) {
                    cleanup();
                    cleanup = undefined;
                }
            };
            // register handlers only on mount
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    };
}
export function createSingletonState(_a) {
    var factory = _a.factory, initialState = _a.initialState;
    var useSingleton = createSingletonHandler(factory);
    var value = initialState;
    return function useSingletonState() {
        var _a = useState(value), state = _a[0], setState = _a[1];
        useSingleton(function (newValue) {
            value = newValue;
            setState(newValue);
        });
        return state;
    };
}
//# sourceMappingURL=index.js.map