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
var styles_selectors_js_1 = require("../../../annotation-context/annotation/styles.selectors.js");
var styles_selectors_js_2 = require("../../../popover/styles.selectors.js");
var button_1 = require("../button");
var AnnotationWrapper = /** @class */ (function (_super) {
    __extends(AnnotationWrapper, _super);
    function AnnotationWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationWrapper.prototype.findNextButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['next-button']), button_1.default);
    };
    AnnotationWrapper.prototype.findPreviousButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['previous-button']), button_1.default);
    };
    AnnotationWrapper.prototype.findFinishButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['finish-button']), button_1.default);
    };
    AnnotationWrapper.prototype.findStepCounter = function () {
        return this.findByClassName(styles_selectors_js_1.default['step-counter-content']);
    };
    AnnotationWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    AnnotationWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    AnnotationWrapper.prototype.findDismissButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['dismiss-control']), button_1.default);
    };
    AnnotationWrapper.rootSelector = styles_selectors_js_1.default.annotation;
    return AnnotationWrapper;
}(dom_1.ComponentWrapper));
exports.default = AnnotationWrapper;
//# sourceMappingURL=index.js.map