// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { findUpUntil } from './utils/dom';
export var isMotionDisabled = function (element) {
    var _a;
    return !!findUpUntil(element, function (node) { return node.classList.contains('awsui-motion-disabled'); }) ||
        (window.matchMedia && ((_a = window.matchMedia('(prefers-reduced-motion: reduce)')) === null || _a === void 0 ? void 0 : _a.matches));
};
//# sourceMappingURL=motion.js.map