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
var styles_selectors_js_1 = require("../../../help-panel/styles.selectors.js");
var HelpPanelWrapper = /** @class */ (function (_super) {
    __extends(HelpPanelWrapper, _super);
    function HelpPanelWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelpPanelWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    HelpPanelWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    HelpPanelWrapper.prototype.findFooter = function () {
        return this.findByClassName(styles_selectors_js_1.default.footer);
    };
    HelpPanelWrapper.rootSelector = styles_selectors_js_1.default['help-panel'];
    return HelpPanelWrapper;
}(selectors_1.ComponentWrapper));
exports.default = HelpPanelWrapper;
//# sourceMappingURL=index.js.map