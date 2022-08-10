// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var PromiseCancelledSignal = /** @class */ (function () {
    function PromiseCancelledSignal() {
    }
    return PromiseCancelledSignal;
}());
export { PromiseCancelledSignal };
/**
 * Wrap and provide a handle for a promise to provide cancellation information inside
 * callbacks. Takes a similar approach to how an AbortController works in modern fetch.
 *
 * @see https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */
export function makeCancellable(promise) {
    var cancelled = false;
    var wrapped = promise.then(function (value) {
        if (cancelled) {
            throw new PromiseCancelledSignal();
        }
        return value;
    }, function (err) {
        if (cancelled) {
            throw new PromiseCancelledSignal();
        }
        throw err;
    });
    return {
        promise: wrapped,
        cancel: function () {
            cancelled = true;
        },
        isCancelled: function () { return cancelled; }
    };
}
//# sourceMappingURL=promises.js.map