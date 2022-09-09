// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
var counter = 0;
export function generateUniqueId(prefix) {
    return "".concat(prefix ? prefix : '').concat(counter++, "-").concat(Date.now(), "-").concat(Math.round(Math.random() * 10000));
}
export function useUniqueId(prefix) {
    var idRef = useRef(null);
    if (!idRef.current) {
        idRef.current = generateUniqueId(prefix);
    }
    return idRef.current;
}
//# sourceMappingURL=index.js.map