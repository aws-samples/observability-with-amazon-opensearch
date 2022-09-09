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
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var styles_selectors_js_1 = require("../../../tutorial-panel/components/tutorial-list/styles.selectors.js");
var button_1 = require("../button");
var index_js_1 = require("../index.js");
var link_1 = require("../link");
var TutorialItemWrapper = /** @class */ (function (_super) {
    __extends(TutorialItemWrapper, _super);
    function TutorialItemWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorialItemWrapper.prototype.findStartButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default.start), button_1.default);
    };
    TutorialItemWrapper.prototype.findLearnMoreLink = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['learn-more-link']), link_1.default);
    };
    TutorialItemWrapper.prototype.findExpandButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['expand-button']), button_1.default);
    };
    TutorialItemWrapper.prototype.findCollapseButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['collapse-button']), button_1.default);
    };
    TutorialItemWrapper.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_1.default['tutorial-description']);
    };
    TutorialItemWrapper.prototype.findTitle = function () {
        return this.findByClassName(styles_selectors_js_1.default.title);
    };
    TutorialItemWrapper.prototype.findCompleted = function () {
        return this.findByClassName(styles_selectors_js_1.default.completed);
    };
    TutorialItemWrapper.prototype.findPrerequisitesAlert = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['prerequisites-alert']), index_js_1.AlertWrapper);
    };
    TutorialItemWrapper.rootSelector = styles_selectors_js_1.default['tutorial-box'];
    return TutorialItemWrapper;
}(selectors_1.ComponentWrapper));
exports.default = TutorialItemWrapper;
//# sourceMappingURL=tutorial.js.map