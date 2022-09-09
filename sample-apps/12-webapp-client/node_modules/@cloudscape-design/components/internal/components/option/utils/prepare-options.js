// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { flattenOptions } from './flatten-options';
import { filterOptions } from './filter-options';
import { generateTestIndexes } from '../../options-list/utils/test-indexes';
export function prepareOptions(options, filteringType, filteringText) {
    var _a = flattenOptions(options), flatOptions = _a.flatOptions, parentMap = _a.parentMap;
    var filteredOptions = filteringType !== 'auto' ? flatOptions : filterOptions(flatOptions, filteringText);
    generateTestIndexes(filteredOptions, parentMap.get.bind(parentMap));
    return { filteredOptions: filteredOptions, parentMap: parentMap };
}
//# sourceMappingURL=prepare-options.js.map