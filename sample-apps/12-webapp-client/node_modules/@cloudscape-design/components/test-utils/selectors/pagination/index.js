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
var styles_selectors_js_1 = require("../../../pagination/styles.selectors.js");
var PaginationWrapper = /** @class */ (function (_super) {
    __extends(PaginationWrapper, _super);
    function PaginationWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationWrapper.prototype.findCurrentPage = function () {
        return this.findByClassName(styles_selectors_js_1.default['button-current']);
    };
    PaginationWrapper.prototype.findPageNumbers = function () {
        return this.findAllByClassName(styles_selectors_js_1.default['page-number']);
    };
    /**
     * Returns a page number for a given index.
     *
     * @param index 1-based index of the page number to return.
     */
    PaginationWrapper.prototype.findPageNumberByIndex = function (index) {
        // we need to skip the "previous page" button
        var pageIndex = index + 1;
        return this.find("li:nth-child(".concat(pageIndex, ") .").concat(styles_selectors_js_1.default.button));
    };
    PaginationWrapper.prototype.findPreviousPageButton = function () {
        return this.find("li:first-child .".concat(styles_selectors_js_1.default.button));
    };
    PaginationWrapper.prototype.findNextPageButton = function () {
        return this.find("li:last-child .".concat(styles_selectors_js_1.default.button));
    };
    PaginationWrapper.rootSelector = styles_selectors_js_1.default.root;
    return PaginationWrapper;
}(selectors_1.ComponentWrapper));
exports.default = PaginationWrapper;
//# sourceMappingURL=index.js.map