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
var select_1 = require("../select");
var styles_selectors_js_1 = require("../../../internal/components/filtering-token/styles.selectors.js");
var FilteringTokenWrapper = /** @class */ (function (_super) {
    __extends(FilteringTokenWrapper, _super);
    function FilteringTokenWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilteringTokenWrapper.prototype.findLabel = function () {
        return this.findByClassName(styles_selectors_js_1.default['token-content']);
    };
    FilteringTokenWrapper.prototype.findRemoveButton = function () {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-button']);
    };
    FilteringTokenWrapper.prototype.findTokenOperation = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default.select), select_1.default);
    };
    FilteringTokenWrapper.rootSelector = styles_selectors_js_1.default.root;
    return FilteringTokenWrapper;
}(selectors_1.ComponentWrapper));
exports.default = FilteringTokenWrapper;
//# sourceMappingURL=filtering-token.js.map