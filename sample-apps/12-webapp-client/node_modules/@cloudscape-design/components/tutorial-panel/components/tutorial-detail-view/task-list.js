import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.css.js';
import { InternalButton } from '../../../button/internal';
import InternalBox from '../../../box/internal';
import InternalSpaceBetween from '../../../space-between/internal';
import { Task } from './task';
import { getStepInfo } from '../../../annotation-context/index.js';
export function TaskList(_a) {
    var _b;
    var tasks = _a.tasks, onExitTutorial = _a.onExitTutorial, currentGlobalStepIndex = _a.currentGlobalStepIndex, i18nStrings = _a.i18nStrings;
    var currentTaskIndex = getStepInfo(tasks, currentGlobalStepIndex !== null && currentGlobalStepIndex !== void 0 ? currentGlobalStepIndex : 0).taskIndex;
    var _c = useState((_b = {}, _b[currentTaskIndex] = true, _b)), expandedTasks = _c[0], setExpandedTasks = _c[1];
    var onToggleExpand = useCallback(function (stepIndex) {
        setExpandedTasks(function (prevTasks) {
            var _a;
            return (__assign(__assign({}, prevTasks), (_a = {}, _a[stepIndex] = !prevTasks[stepIndex], _a)));
        });
    }, []);
    // When the user progresses to a different task, all tasks except this one are collapsed.
    useEffect(function () {
        var _a;
        setExpandedTasks((_a = {}, _a[currentTaskIndex] = true, _a));
    }, [currentTaskIndex]);
    return (React.createElement(InternalSpaceBetween, { size: "xxl" },
        React.createElement("ol", { className: styles['tutorial-list'] }, tasks.map(function (task, index) {
            var _a;
            return (React.createElement(Task, { task: task, key: index, taskIndex: index, currentTaskIndex: currentTaskIndex, expanded: (_a = expandedTasks[index]) !== null && _a !== void 0 ? _a : false, onToggleExpand: onToggleExpand, i18nStrings: i18nStrings }));
        })),
        React.createElement(InternalBox, { margin: { top: 'xxxs' } },
            React.createElement(InternalButton, { onClick: onExitTutorial, formAction: "none", className: styles['dismiss-button'] }, i18nStrings.dismissTutorialButtonText))));
}
//# sourceMappingURL=task-list.js.map