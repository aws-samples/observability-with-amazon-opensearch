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
var styles_selectors_js_1 = require("../../../token-group/styles.selectors.js");
var option_1 = require("../internal/option");
var TokenWrapper = /** @class */ (function (_super) {
    __extends(TokenWrapper, _super);
    function TokenWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenWrapper.prototype.findOption = function () {
        return this.findComponent(".".concat(option_1.default.rootSelector), option_1.default);
    };
    TokenWrapper.prototype.findLabel = function () {
        return this.findOption().findLabel();
    };
    TokenWrapper.prototype.findDismiss = function () {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-button']);
    };
    TokenWrapper.rootSelector = styles_selectors_js_1.default.token;
    return TokenWrapper;
}(dom_1.ComponentWrapper));
exports.default = TokenWrapper;
//# sourceMappingURL=token.js.map