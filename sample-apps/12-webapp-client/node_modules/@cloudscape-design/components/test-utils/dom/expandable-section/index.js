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
var styles_selectors_js_1 = require("../../../expandable-section/styles.selectors.js");
var styles_selectors_js_2 = require("../../../container/styles.selectors.js");
var ExpandableSectionWrapper = /** @class */ (function (_super) {
    __extends(ExpandableSectionWrapper, _super);
    function ExpandableSectionWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpandableSectionWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    ExpandableSectionWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    ExpandableSectionWrapper.prototype.findExpandedContent = function () {
        return this.find(":scope > .".concat(styles_selectors_js_1.default['content-expanded'], ", :scope > .").concat(styles_selectors_js_2.default.content, " > .").concat(styles_selectors_js_1.default['content-expanded']));
    };
    ExpandableSectionWrapper.prototype.findExpandIcon = function () {
        return this.findByClassName(styles_selectors_js_1.default['icon-container']);
    };
    ExpandableSectionWrapper.rootSelector = styles_selectors_js_1.default.root;
    return ExpandableSectionWrapper;
}(dom_1.ComponentWrapper));
exports.default = ExpandableSectionWrapper;
//# sourceMappingURL=index.js.map