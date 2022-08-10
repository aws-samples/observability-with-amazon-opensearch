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
var styles_selectors_js_1 = require("../../../segmented-control/styles.selectors.js");
var SegmentedControlWrapper = /** @class */ (function (_super) {
    __extends(SegmentedControlWrapper, _super);
    function SegmentedControlWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentedControlWrapper.prototype.findSegments = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.segment);
    };
    SegmentedControlWrapper.prototype.findSelectedSegment = function () {
        return this.findByClassName(styles_selectors_js_1.default.selected);
    };
    SegmentedControlWrapper.rootSelector = styles_selectors_js_1.default.root;
    return SegmentedControlWrapper;
}(dom_1.ComponentWrapper));
exports.default = SegmentedControlWrapper;
//# sourceMappingURL=index.js.map