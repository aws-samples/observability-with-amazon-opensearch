// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { KeyCode } from '../internal/keycode';
import { fireNonCancelableEvent } from '../internal/events';
import { Segment } from './segment';
import styles from './styles.css.js';
export default function InternalSegmentedControl(_a) {
    var selectedId = _a.selectedId, options = _a.options, label = _a.label, ariaLabelledby = _a.ariaLabelledby, onChange = _a.onChange;
    var segmentByIdRef = useRef({});
    var selectedOptions = (options || []).filter(function (option) {
        return option.id === selectedId;
    });
    var currentSelectedOption = selectedOptions.length ? selectedOptions[0] : null;
    var enabledSegments = (options || []).filter(function (option) { return !option.disabled; });
    var moveHighlight = function (event, activeIndex) {
        var _a;
        if (event.keyCode !== KeyCode.right && event.keyCode !== KeyCode.left) {
            return;
        }
        var nextIndex = activeIndex;
        if (event.keyCode === KeyCode.right) {
            nextIndex = activeIndex + 1 === enabledSegments.length ? 0 : activeIndex + 1;
        }
        else if (event.keyCode === KeyCode.left) {
            nextIndex = activeIndex === 0 ? enabledSegments.length - 1 : activeIndex - 1;
        }
        var nextSegmentId = enabledSegments[nextIndex].id;
        (_a = segmentByIdRef.current[nextSegmentId]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (React.createElement("div", { className: clsx(styles['segment-part'], styles["segment-count-".concat(options === null || options === void 0 ? void 0 : options.length)]), "aria-label": label, "aria-labelledby": ariaLabelledby, role: "toolbar" }, options &&
        options.map(function (option, index) {
            var isActive = selectedId === option.id;
            var enabledSegmentIndex = enabledSegments.indexOf(option);
            var tabIndex = isActive ? 0 : -1;
            if (currentSelectedOption === null && enabledSegmentIndex === 0) {
                tabIndex = 0;
            }
            return (React.createElement(Segment, { key: index, id: option.id, disabled: !!option.disabled, iconName: option.iconName, iconAlt: option.iconAlt, iconUrl: option.iconUrl, iconSvg: option.iconSvg, text: option.text, isActive: isActive, tabIndex: tabIndex, ref: function (node) {
                    if (node) {
                        segmentByIdRef.current[option.id] = node;
                    }
                    else {
                        delete segmentByIdRef.current[option.id];
                    }
                }, onClick: function () {
                    if (selectedId !== option.id) {
                        fireNonCancelableEvent(onChange, { selectedId: option.id });
                    }
                }, onKeyDown: function (event) { return moveHighlight(event, enabledSegmentIndex); } }));
        })));
}
//# sourceMappingURL=internal-segmented-control.js.map