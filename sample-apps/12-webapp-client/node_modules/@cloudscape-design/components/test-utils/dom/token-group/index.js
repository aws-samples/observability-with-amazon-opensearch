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
var styles_selectors_js_2 = require("../../../space-between/styles.selectors.js");
var token_1 = require("./token");
var TokenGroupWrapper = /** @class */ (function (_super) {
    __extends(TokenGroupWrapper, _super);
    function TokenGroupWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenGroupWrapper.prototype.findTokens = function () {
        return this.findAllByClassName(token_1.default.rootSelector).map(function (tokenElement) { return new token_1.default(tokenElement.getElement()); });
    };
    /**
     * Returns a token from the group for a given index.
     *
     * @param tokenIndex 1-based index of the token to return.
     */
    TokenGroupWrapper.prototype.findToken = function (tokenIndex) {
        return this.findComponent(".".concat(styles_selectors_js_2.default.child, ":nth-child(").concat(tokenIndex, ") > .").concat(token_1.default.rootSelector), token_1.default);
    };
    /**
     * Returns the token toggle button.
     */
    TokenGroupWrapper.prototype.findTokenToggle = function () {
        return this.findByClassName(styles_selectors_js_1.default.toggle);
    };
    TokenGroupWrapper.rootSelector = styles_selectors_js_1.default.root;
    return TokenGroupWrapper;
}(dom_1.ComponentWrapper));
exports.default = TokenGroupWrapper;
//# sourceMappingURL=index.js.map