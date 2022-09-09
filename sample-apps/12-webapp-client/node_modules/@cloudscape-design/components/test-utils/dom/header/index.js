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
var styles_selectors_js_1 = require("../../../header/styles.selectors.js");
var HeaderWrapper = /** @class */ (function (_super) {
    __extends(HeaderWrapper, _super);
    function HeaderWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderWrapper.prototype.findHeadingText = function () {
        return this.findByClassName(styles_selectors_js_1.default['heading-text']);
    };
    HeaderWrapper.prototype.findCounter = function () {
        return this.findByClassName(styles_selectors_js_1.default.counter);
    };
    HeaderWrapper.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_1.default.description);
    };
    HeaderWrapper.prototype.findInfo = function () {
        return this.findByClassName(styles_selectors_js_1.default.info);
    };
    HeaderWrapper.prototype.findActions = function () {
        return this.findByClassName(styles_selectors_js_1.default.actions);
    };
    HeaderWrapper.rootSelector = styles_selectors_js_1.default.root;
    return HeaderWrapper;
}(dom_1.ComponentWrapper));
exports.default = HeaderWrapper;
//# sourceMappingURL=index.js.map