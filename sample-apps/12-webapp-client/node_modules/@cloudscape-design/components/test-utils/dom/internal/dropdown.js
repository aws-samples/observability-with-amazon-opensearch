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
var styles_selectors_js_1 = require("../../../internal/components/dropdown/styles.selectors.js");
var DropdownWrapper = /** @class */ (function (_super) {
    __extends(DropdownWrapper, _super);
    function DropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownWrapper.prototype.findOpenDropdown = function () {
        return this.find(".".concat(styles_selectors_js_1.default.dropdown, "[data-open=true]"));
    };
    DropdownWrapper.rootSelector = styles_selectors_js_1.default.root;
    return DropdownWrapper;
}(dom_1.ElementWrapper));
exports.default = DropdownWrapper;
//# sourceMappingURL=dropdown.js.map