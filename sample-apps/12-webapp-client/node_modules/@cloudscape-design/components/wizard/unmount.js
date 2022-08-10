import { __extends } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
var Unmount = /** @class */ (function (_super) {
    __extends(Unmount, _super);
    function Unmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Unmount.prototype.componentWillUnmount = function () {
        this.props.onUnmount();
    };
    Unmount.prototype.render = function () {
        return this.props.children;
    };
    return Unmount;
}(React.Component));
export default Unmount;
//# sourceMappingURL=unmount.js.map