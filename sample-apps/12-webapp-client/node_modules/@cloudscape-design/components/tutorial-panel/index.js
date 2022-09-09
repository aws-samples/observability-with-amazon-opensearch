import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useContext } from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import TutorialList from './components/tutorial-list';
import TutorialDetailView from './components/tutorial-detail-view';
import { hotspotContext } from '../annotation-context/context';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
var defaultFilteringFunction = function (tutorial, searchTerm) {
    var _a;
    if (searchTerm === '') {
        return true;
    }
    return ((_a = tutorial.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(searchTerm.toLowerCase())) !== -1;
};
export default function TutorialPanel(_a) {
    var i18nStrings = _a.i18nStrings, loading = _a.loading, tutorials = _a.tutorials, onFeedbackClick = _a.onFeedbackClick, downloadUrl = _a.downloadUrl, 
    // Filtering is not available in the Beta release.
    //filteringFunction: customFilteringFunction,
    restProps = __rest(_a, ["i18nStrings", "loading", "tutorials", "onFeedbackClick", "downloadUrl"]);
    var __internalRootRef = useBaseComponent('TutorialPanel').__internalRootRef;
    var baseProps = getBaseProps(restProps);
    var context = useContext(hotspotContext);
    //const filteringFunction = customFilteringFunction ?? defaultFilteringFunction;
    var filteringFunction = defaultFilteringFunction;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({}, baseProps, { className: clsx(baseProps.className, styles['tutorial-panel']), ref: __internalRootRef }), context.currentTutorial ? (React.createElement(TutorialDetailView, { i18nStrings: i18nStrings, tutorial: context.currentTutorial, onExitTutorial: context.onExitTutorial, currentStepIndex: context.currentStepIndex, onFeedbackClick: onFeedbackClick })) : (React.createElement(TutorialList, { i18nStrings: i18nStrings, tutorials: tutorials, loading: loading, onStartTutorial: context.onStartTutorial, filteringFunction: filteringFunction, downloadUrl: downloadUrl })))));
}
applyDisplayName(TutorialPanel, 'TutorialPanel');
//# sourceMappingURL=index.js.map