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
var styles_selectors_js_1 = require("../../../grid/styles.selectors.js");
var GridWrapper = /** @class */ (function (_super) {
    __extends(GridWrapper, _super);
    function GridWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a column from the grid for a given index.
     * @param columnIndex 1-based index of the column to return.
     */
    GridWrapper.prototype.findColumn = function (columnIndex) {
        return this.find(".".concat(styles_selectors_js_1.default['grid-column'], ":nth-child(").concat(columnIndex, ") > div"));
    };
    GridWrapper.rootSelector = styles_selectors_js_1.default.grid;
    return GridWrapper;
}(dom_1.ComponentWrapper));
exports.default = GridWrapper;
//# sourceMappingURL=index.js.map