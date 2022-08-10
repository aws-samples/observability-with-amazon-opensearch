// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// these styles needed to be imported for every public component
import './styles.css.js';
import { PACKAGE_VERSION } from '../environment';
// expose version info, so it can be checked using the browser devtools
if (typeof window !== 'undefined') {
    if (!window.awsuiVersions) {
        window.awsuiVersions = {};
    }
    if (!window.awsuiVersions.components) {
        window.awsuiVersions.components = [];
    }
    window.awsuiVersions.components.push(PACKAGE_VERSION);
}
export function getBaseProps(props) {
    var baseProps = {};
    Object.keys(props).forEach(function (prop) {
        if (prop === 'id' || prop === 'className' || prop.match(/^data-/)) {
            baseProps[prop] = props[prop];
        }
    });
    return baseProps;
}
//# sourceMappingURL=index.js.map