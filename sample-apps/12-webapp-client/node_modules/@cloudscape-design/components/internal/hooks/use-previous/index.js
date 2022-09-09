// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef, useEffect } from 'react';
/**
 * This hook gives the value of any variable from the previous render invocation
 */
export var usePrevious = function (value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
//# sourceMappingURL=index.js.map