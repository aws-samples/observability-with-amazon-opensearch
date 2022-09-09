"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var styles_selectors_js_1 = require("../../../tutorial-panel/styles.selectors.js");
var styles_selectors_js_2 = require("../../../tutorial-panel/components/tutorial-list/styles.selectors.js");
var styles_selectors_js_3 = require("../../../tutorial-panel/components/tutorial-detail-view/styles.selectors.js");
var link_1 = require("../link");
var tutorial_1 = require("./tutorial");
var button_1 = require("../button");
var expandable_section_1 = require("../expandable-section");
var TutorialPanelWrapper = /** @class */ (function (_super) {
    __extends(TutorialPanelWrapper, _super);
    function TutorialPanelWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorialPanelWrapper.prototype.findTutorials = function () {
        return this.findAllByClassName(styles_selectors_js_2.default['tutorial-box']).map(function (item) { return new tutorial_1.default(item.getElement()); });
    };
    TutorialPanelWrapper.prototype.findDownloadLink = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['download-link']), link_1.default);
    };
    TutorialPanelWrapper.prototype.findTaskList = function () {
        return this.findAllByClassName(styles_selectors_js_3.default.task).map(function (item) { return new TutorialTaskWrapper(item.getElement()); });
    };
    TutorialPanelWrapper.prototype.findDismissButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default['dismiss-button']), button_1.default);
    };
    TutorialPanelWrapper.prototype.findCompletionScreenTitle = function () {
        return this.findByClassName(styles_selectors_js_3.default['completion-screen-title']);
    };
    TutorialPanelWrapper.prototype.findCompletionScreenDescription = function () {
        return this.findByClassName(styles_selectors_js_3.default['completion-screen-description']);
    };
    TutorialPanelWrapper.prototype.findFeedbackLink = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default['feedback-link']), link_1.default);
    };
    TutorialPanelWrapper.rootSelector = styles_selectors_js_1.default['tutorial-panel'];
    return TutorialPanelWrapper;
}(dom_1.ComponentWrapper));
exports.default = TutorialPanelWrapper;
var TutorialTaskWrapper = /** @class */ (function (_super) {
    __extends(TutorialTaskWrapper, _super);
    function TutorialTaskWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorialTaskWrapper.prototype.findTitle = function () {
        return this.findByClassName(styles_selectors_js_3.default['task-title']);
    };
    TutorialTaskWrapper.prototype.findStepsTitle = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default['expandable-section-wrapper']), expandable_section_1.default).findHeader();
    };
    TutorialTaskWrapper.prototype.findSteps = function () {
        return this.findAllByClassName(styles_selectors_js_3.default['step-title']);
    };
    return TutorialTaskWrapper;
}(dom_1.ComponentWrapper));
//# sourceMappingURL=index.js.map