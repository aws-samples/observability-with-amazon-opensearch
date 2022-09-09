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
var styles_selectors_js_1 = require("../../../internal/components/options-list/styles.selectors.js");
var OptionsListWrapper = /** @class */ (function (_super) {
    __extends(OptionsListWrapper, _super);
    function OptionsListWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionsListWrapper.rootSelector = styles_selectors_js_1.default['options-list'];
    return OptionsListWrapper;
}(dom_1.ElementWrapper));
exports.default = OptionsListWrapper;
//# sourceMappingURL=options-list.js.map