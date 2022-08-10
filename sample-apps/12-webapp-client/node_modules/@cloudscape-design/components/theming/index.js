// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { applyTheme as coreApplyTheme } from '@cloudscape-design/theming-runtime';
import { preset } from '../internal/generated/theming';
export function applyTheme(_a) {
    var theme = _a.theme;
    return coreApplyTheme({
        override: theme,
        preset: preset
    });
}
//# sourceMappingURL=index.js.map