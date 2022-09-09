import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { useUniqueId } from '../../hooks/use-unique-id';
import { KeyCode } from '../../keycode';
import LiveRegion from '../live-region/index';
import ApplicationController from './application-controller';
import FocusOutline from './focus-outline';
import focusSvgElement from '../../utils/focus-svg-element';
var DEFAULT_PLOT_FOCUS_OFFSET = 3;
var DEFAULT_ELEMENT_FOCUS_OFFSET = 3;
/**
  An extension for the SVG to be used for charts. It includes a controller element to
  handle the focus and keyboard interactions in a way that is supported by screen readers.

  The application mimics the aria-activedescendant behavior which is unsupported by Safari. The
  activeElementRef is the pointer to the secondary-focus element and activeElementKey denotes when
  the focus transition was made.

  Alternatively, ariaLiveRegion can be used to make announcements.
*/
export default forwardRef(ChartPlot);
function ChartPlot(_a, ref) {
    var _b;
    var width = _a.width, height = _a.height, transform = _a.transform, offsetTop = _a.offsetTop, offsetBottom = _a.offsetBottom, offsetLeft = _a.offsetLeft, offsetRight = _a.offsetRight, ariaLabel = _a.ariaLabel, ariaLabelledby = _a.ariaLabelledby, ariaRoleDescription = _a.ariaRoleDescription, ariaDescription = _a.ariaDescription, ariaDescribedby = _a.ariaDescribedby, activeElementKey = _a.activeElementKey, activeElementRef = _a.activeElementRef, ariaLiveRegion = _a.ariaLiveRegion, isClickable = _a.isClickable, isPrecise = _a.isPrecise, children = _a.children, onMouseDown = _a.onMouseDown, onKeyDown = _a.onKeyDown, onFocus = _a.onFocus, onBlur = _a.onBlur, _c = _a.focusOffset, focusOffset = _c === void 0 ? DEFAULT_PLOT_FOCUS_OFFSET : _c, _d = _a.activeElementFocusOffset, activeElementFocusOffset = _d === void 0 ? DEFAULT_ELEMENT_FOCUS_OFFSET : _d, restProps = __rest(_a, ["width", "height", "transform", "offsetTop", "offsetBottom", "offsetLeft", "offsetRight", "ariaLabel", "ariaLabelledby", "ariaRoleDescription", "ariaDescription", "ariaDescribedby", "activeElementKey", "activeElementRef", "ariaLiveRegion", "isClickable", "isPrecise", "children", "onMouseDown", "onKeyDown", "onFocus", "onBlur", "focusOffset", "activeElementFocusOffset"]);
    var svgRef = useRef(null);
    var applicationRef = useRef(null);
    var plotClickedRef = useRef(false);
    var _e = useState(false), isPlotFocused = _e[0], setPlotFocused = _e[1];
    var _f = useState(false), isApplicationFocused = _f[0], setApplicationFocused = _f[1];
    var internalDescriptionId = useUniqueId('awsui-chart-plot__description');
    var ariaDescriptionId = [ariaDescription && internalDescriptionId, ariaDescribedby].filter(Boolean).join(' ');
    useImperativeHandle(ref, function () { return ({
        svg: svgRef.current,
        focusPlot: function () { return focusSvgElement(svgRef.current); },
        focusApplication: function () { return applicationRef.current.focus(); }
    }); });
    var onPlotMouseDown = function (event) {
        onMouseDown && onMouseDown(event);
        // Record the click was made for the application focus handler.
        plotClickedRef.current = true;
    };
    var onPlotFocus = function (event) {
        if (event.target === svgRef.current && !plotClickedRef.current) {
            setPlotFocused(true);
        }
        // The click should focus the underling application bypassing the svg.
        else if (plotClickedRef.current) {
            applicationRef.current.focus();
        }
    };
    var onPlotBlur = function (event) {
        if (event.target === svgRef.current) {
            setPlotFocused(false);
        }
    };
    // Once one of the expected keys is pressed the focus is delegated to the application controller.
    var onPlotKeyDown = function (event) {
        if (isPlotFocused) {
            // Delegate the focus to the application if one of the expected keys was pressed.
            var codes = [KeyCode.space, KeyCode.enter, KeyCode.up, KeyCode.left, KeyCode.right, KeyCode.down];
            if (codes.indexOf(event.keyCode) !== -1) {
                applicationRef.current.focus();
            }
        }
    };
    var onApplicationFocus = function (event) {
        onFocus && onFocus(event, plotClickedRef.current ? 'mouse' : 'keyboard');
        // "Release" the click reference to not affect the next call of this handler.
        plotClickedRef.current = false;
        setApplicationFocused(true);
    };
    var onApplicationBlur = function (event) {
        onBlur && onBlur(event);
        setApplicationFocused(false);
    };
    var onApplicationKeyDown = onKeyDown;
    var plotFocusable = !isApplicationFocused;
    var plotTabIndex = plotFocusable ? 0 : -1;
    var plotAria = !isApplicationFocused
        ? {
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby,
            'aria-describedby': ariaDescriptionId,
            'aria-roledescription': ariaRoleDescription
        }
        : {};
    return (React.createElement(React.Fragment, null,
        React.createElement("svg", __assign({}, restProps, { focusable: plotFocusable, tabIndex: plotTabIndex, role: "application", "aria-hidden": "false" }, plotAria, { ref: svgRef, width: width, height: height, style: {
                marginTop: offsetTop,
                marginBottom: offsetBottom,
                marginLeft: offsetLeft,
                marginRight: offsetRight
            }, className: clsx(styles.root, (_b = {},
                _b[styles.clickable] = isClickable,
                _b[styles.precise] = isPrecise,
                _b)), onMouseDown: onPlotMouseDown, onFocus: onPlotFocus, onBlur: onPlotBlur, onKeyDown: onPlotKeyDown }),
            React.createElement(FocusOutline, { elementRef: svgRef, elementKey: isPlotFocused, offset: focusOffset }),
            React.createElement("g", { transform: transform, role: "group" },
                React.createElement(ApplicationController, { activeElementKey: activeElementKey || null, activeElementRef: activeElementRef, ref: applicationRef, onFocus: onApplicationFocus, onBlur: onApplicationBlur, onKeyDown: onApplicationKeyDown }),
                ariaDescription && plotFocusable && (React.createElement("desc", { "aria-hidden": "true", id: internalDescriptionId }, ariaDescription)),
                children,
                React.createElement(FocusOutline, { elementRef: activeElementRef, elementKey: isApplicationFocused && activeElementKey, offset: activeElementFocusOffset }))),
        React.createElement(LiveRegion, null, ariaLiveRegion)));
}
//# sourceMappingURL=index.js.map