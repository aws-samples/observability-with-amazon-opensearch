// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useState } from 'react';
export function usePopover() {
    var _a = useState('closed'), state = _a[0], setState = _a[1];
    var isPopoverOpen = state !== 'closed';
    var isPopoverPinned = state === 'pinned';
    var showPopover = useCallback(function () { return setState('open'); }, []);
    var pinPopover = useCallback(function () { return setState('pinned'); }, []);
    var dismissPopover = useCallback(function () { return setState('closed'); }, []);
    return { isPopoverOpen: isPopoverOpen, isPopoverPinned: isPopoverPinned, showPopover: showPopover, pinPopover: pinPopover, dismissPopover: dismissPopover };
}
//# sourceMappingURL=use-popover.js.map