import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import { useCallback, useRef } from 'react';
import { Transition as ReactTransitionGroupTransition, } from 'react-transition-group';
import { useReducedMotion } from '../../hooks/use-visual-mode';
/**
 * This component is a wrapper around the CSSTransition component.
 *
 * It provides a second parameter in its rendering function that must be
 * attached to the node that is transitioning.
 */
export function Transition(_a) {
    var isIn = _a["in"], children = _a.children, _b = _a.exit, exit = _b === void 0 ? true : _b, _c = _a.onStatusChange, onStatusChange = _c === void 0 ? function () { return void 0; } : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, transitionChangeDelay = _a.transitionChangeDelay, rest = __rest(_a, ["in", "children", "exit", "onStatusChange", "disabled", "transitionChangeDelay"]);
    var transitionRootElement = useRef(null);
    // the initial state of the transition should be either 'exited' or 'entered' depending
    // on the `in` property, this mimicks how internally the Transition component works here:
    // https://github.com/reactjs/react-transition-group/blob/6cbd6aaedaf8e9472007640b429ddb48c6c24158/src/Transition.js#L121
    var _e = useState(isIn ? 'entered' : 'exited'), transitionState = _e[0], setTransitionState = _e[1];
    var motionDisabled = useReducedMotion(transitionRootElement) || disabled;
    var addTransitionEndListener = useCallback(function (done) {
        var node = transitionRootElement.current;
        if (node === null) {
            return;
        }
        var listener = function (e) {
            if (e.target === node) {
                node.removeEventListener('transitionend', listener);
                node.removeEventListener('animationend', listener);
                done();
            }
        };
        node.addEventListener('transitionend', listener);
        node.addEventListener('animationend', listener);
    }, []);
    return (React.createElement(ReactTransitionGroupTransition, __assign({ addEndListener: addTransitionEndListener, timeout: motionDisabled ? 0 : undefined, "in": isIn, nodeRef: transitionRootElement, exit: exit, onEnter: function (isAppearing) {
            if (!isAppearing) {
                setTransitionState('enter');
                onStatusChange('enter');
            }
        }, onEntering: function (isAppearing) {
            var _a;
            if (!isAppearing) {
                // This line forces the browser to recalculate the layout because we want the starting state in the 'enter' style
                // to be applied before the animation starts.
                void ((_a = transitionRootElement.current) === null || _a === void 0 ? void 0 : _a.offsetHeight);
                if (transitionChangeDelay === null || transitionChangeDelay === void 0 ? void 0 : transitionChangeDelay.entering) {
                    setTimeout(function () {
                        setTransitionState('entering');
                        onStatusChange('entering');
                    }, transitionChangeDelay === null || transitionChangeDelay === void 0 ? void 0 : transitionChangeDelay.entering);
                }
                else {
                    setTransitionState('entering');
                    onStatusChange('entering');
                }
            }
        }, onEntered: function (isAppearing) {
            if (!isAppearing) {
                setTransitionState('entered');
                onStatusChange('entered');
            }
        }, onExit: function () {
            setTransitionState('exit');
            onStatusChange('exit');
        }, onExiting: function () {
            setTransitionState('exiting');
            onStatusChange('exiting');
        }, onExited: function () {
            setTransitionState('exited');
            onStatusChange('exited');
        } }, rest), function () { return children(transitionState, transitionRootElement); }));
}
//# sourceMappingURL=index.js.map