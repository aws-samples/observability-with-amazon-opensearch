import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalAutosuggest from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
var Autosuggest = React.forwardRef(function (_a, ref) {
    var _b = _a.filteringType, filteringType = _b === void 0 ? 'auto' : _b, _c = _a.statusType, statusType = _c === void 0 ? 'finished' : _c, _d = _a.disableBrowserAutocorrect, disableBrowserAutocorrect = _d === void 0 ? false : _d, props = __rest(_a, ["filteringType", "statusType", "disableBrowserAutocorrect"]);
    var baseComponentProps = useBaseComponent('Autosuggest');
    var externalProps = getExternalProps(props);
    return (React.createElement(InternalAutosuggest, __assign({ filteringType: filteringType, statusType: statusType, disableBrowserAutocorrect: disableBrowserAutocorrect }, externalProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Autosuggest, 'Autosuggest');
export default Autosuggest;
//# sourceMappingURL=index.js.map