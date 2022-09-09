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
var styles_selectors_js_1 = require("../../../internal/components/option/styles.selectors.js");
var OptionWrapper = /** @class */ (function (_super) {
    __extends(OptionWrapper, _super);
    function OptionWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionWrapper.prototype.findLabel = function () {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.findByClassName(styles_selectors_js_1.default.label);
    };
    OptionWrapper.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_1.default.description);
    };
    OptionWrapper.prototype.findLabelTag = function () {
        return this.findByClassName(styles_selectors_js_1.default['label-tag']);
    };
    OptionWrapper.prototype.findTags = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.tag);
    };
    OptionWrapper.rootSelector = styles_selectors_js_1.default.option;
    return OptionWrapper;
}(dom_1.ComponentWrapper));
exports.default = OptionWrapper;
//# sourceMappingURL=option.js.map