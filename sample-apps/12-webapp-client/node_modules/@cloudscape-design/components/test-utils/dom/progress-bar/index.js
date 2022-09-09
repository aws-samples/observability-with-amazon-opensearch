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
var styles_selectors_js_1 = require("../../../progress-bar/styles.selectors.js");
var ProgressBarWrapper = /** @class */ (function (_super) {
    __extends(ProgressBarWrapper, _super);
    function ProgressBarWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarWrapper.prototype.findPercentageText = function () {
        return this.findByClassName(styles_selectors_js_1.default.percentage);
    };
    ProgressBarWrapper.prototype.findResultButton = function () {
        var _a;
        return ((_a = this.findByClassName(styles_selectors_js_1.default['result-button'])) === null || _a === void 0 ? void 0 : _a.findButton()) || null;
    };
    /**
     * Returns the result text.
     *
     * @param status
     *
     * [optional] Status of the result text. It can be aither "error" or "succes".
     * If not specified, the method returns the result text that is currently displayed, independently of the result status.
     */
    ProgressBarWrapper.prototype.findResultText = function (status) {
        var statusClassName = status ? ".".concat(styles_selectors_js_1.default["result-container-".concat(status)], " ") : '';
        return this.find("".concat(statusClassName, ".").concat(styles_selectors_js_1.default['result-text']));
    };
    ProgressBarWrapper.rootSelector = styles_selectors_js_1.default.root;
    return ProgressBarWrapper;
}(dom_1.ComponentWrapper));
exports.default = ProgressBarWrapper;
//# sourceMappingURL=index.js.map