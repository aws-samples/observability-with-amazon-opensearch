// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Method to filter out internal properties prefixed by "__"
 */
export var getExternalProps = function (props) {
    var externalPropNames = Object.keys(props).filter(function (propName) { return propName.indexOf('__') !== 0; });
    return externalPropNames.reduce(function (acc, propName) {
        acc[propName] = props[propName];
        return acc;
    }, {});
};
//# sourceMappingURL=external-props.js.map