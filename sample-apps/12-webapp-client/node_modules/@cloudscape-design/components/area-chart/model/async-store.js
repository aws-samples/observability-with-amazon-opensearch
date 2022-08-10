// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useLayoutEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { usePrevious } from '../../internal/hooks/use-previous';
var AsyncStore = /** @class */ (function () {
    function AsyncStore(state) {
        this._listeners = [];
        this._state = state;
    }
    AsyncStore.prototype.get = function () {
        return this._state;
    };
    AsyncStore.prototype.set = function (cb) {
        var _this = this;
        var prevState = this._state;
        var newState = cb(prevState);
        this._state = newState;
        unstable_batchedUpdates(function () {
            for (var _i = 0, _a = _this._listeners; _i < _a.length; _i++) {
                var _b = _a[_i], selector = _b[0], listener = _b[1];
                if (selector(prevState) !== selector(newState)) {
                    listener(newState, prevState);
                }
            }
        });
    };
    AsyncStore.prototype.subscribe = function (selector, listener) {
        var _this = this;
        this._listeners.push([selector, listener]);
        return function () { return _this.unsubscribe(listener); };
    };
    AsyncStore.prototype.unsubscribe = function (listener) {
        for (var index = 0; index < this._listeners.length; index++) {
            var _a = this._listeners[index], storedListener = _a[1];
            if (storedListener === listener) {
                this._listeners.splice(index, 1);
                break;
            }
        }
    };
    return AsyncStore;
}());
export default AsyncStore;
export function useReaction(store, selector, effect) {
    useLayoutEffect(function () {
        var unsubscribe = store.subscribe(selector, function (newState, prevState) {
            return effect(selector(newState), selector(prevState));
        });
        return unsubscribe;
    }, 
    // ignoring selector and effect as they are expected to stay constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store]);
}
export function useSelector(store, selector) {
    var _a = useState(selector(store.get())), state = _a[0], setState = _a[1];
    useReaction(store, selector, function (newState) {
        setState(newState);
    });
    // When store changes we need the state to be updated synchronously to avoid inconsistencies.
    var prevStore = usePrevious(store);
    if (prevStore !== null && prevStore !== store) {
        return selector(store.get());
    }
    return state;
}
//# sourceMappingURL=async-store.js.map