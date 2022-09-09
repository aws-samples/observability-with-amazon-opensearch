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
var utils_1 = require("@cloudscape-design/test-utils-core/utils");
var tile_1 = require("./tile");
var styles_selectors_js_1 = require("../../../tiles/styles.selectors.js");
var TilesWrapper = /** @class */ (function (_super) {
    __extends(TilesWrapper, _super);
    function TilesWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TilesWrapper.prototype.findItems = function () {
        return this.findAllByClassName(styles_selectors_js_1.default['tile-container']).map(function (r) { return new tile_1.default(r.getElement()); });
    };
    TilesWrapper.prototype.findInputByValue = function (value) {
        var safeValue = (0, utils_1.escapeSelector)(value);
        return this.find("input[value=\"".concat(safeValue, "\"]"));
    };
    TilesWrapper.prototype.findItemByValue = function (value) {
        var toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(".".concat(tile_1.default.rootSelector, "[data-value=\"").concat(toReplace, "\"]"), tile_1.default);
    };
    TilesWrapper.rootSelector = styles_selectors_js_1.default.root;
    return TilesWrapper;
}(selectors_1.ComponentWrapper));
exports.default = TilesWrapper;
//# sourceMappingURL=index.js.map