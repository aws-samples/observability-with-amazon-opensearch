// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef } from 'react';
import { useTelemetry } from '../use-telemetry';
import { PACKAGE_VERSION } from '../../environment';
export var COMPONENT_METADATA_KEY = '__awsuiMetadata__';
/**
 * This hook is used for components which are exported to customers. The returned __internalRootRef needs to be
 * attached to the (internal) component's root DOM node. The hook takes care of attaching the metadata to this
 * root DOM node and emits the telemetry for this component.
 */
export default function useBaseComponent(componentName) {
    var elementRef = useRef(null);
    useTelemetry(componentName);
    useComponentMetadata(componentName, elementRef);
    return {
        __internalRootRef: elementRef
    };
}
function useComponentMetadata(componentName, elementRef) {
    useEffect(function () {
        if (elementRef.current && !Object.prototype.hasOwnProperty.call(elementRef.current, COMPONENT_METADATA_KEY)) {
            var node = elementRef.current;
            var metadata = {
                name: componentName,
                version: PACKAGE_VERSION
            };
            Object.freeze(metadata);
            Object.defineProperty(node, COMPONENT_METADATA_KEY, {
                value: metadata,
                writable: false
            });
        }
        // Some component refs change dynamically. E.g. The Modal component where
        // the content gets rendered conditionally inside a Portal.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef.current]);
}
//# sourceMappingURL=index.js.map