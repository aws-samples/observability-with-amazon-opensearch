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
var radio_button_1 = require("../radio-group/radio-button");
var styles_selectors_js_1 = require("../../../tiles/styles.selectors.js");
var TileWrapper = /** @class */ (function (_super) {
    __extends(TileWrapper, _super);
    function TileWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileWrapper.prototype.findRadioButton = function () {
        return new radio_button_1.default(this.getElement());
    };
    TileWrapper.prototype.findLabel = function () {
        return this.findRadioButton().findLabel();
    };
    TileWrapper.prototype.findDescription = function () {
        return this.findRadioButton().findDescription();
    };
    TileWrapper.prototype.findImage = function () {
        return this.findByClassName(styles_selectors_js_1.default.image);
    };
    TileWrapper.prototype.findNativeInput = function () {
        return this.findRadioButton().findNativeInput();
    };
    TileWrapper.rootSelector = styles_selectors_js_1.default['tile-container'];
    return TileWrapper;
}(dom_1.ElementWrapper));
exports.default = TileWrapper;
//# sourceMappingURL=tile.js.map