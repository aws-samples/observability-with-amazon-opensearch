"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAttributeValue = exports.sanitizeAttributes = void 0;
function sanitizeAttributes(attributes) {
    const out = {};
    if (attributes == null || typeof attributes !== 'object') {
        return out;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const [k, v] of Object.entries(attributes)) {
        if (isAttributeValue(v)) {
            if (Array.isArray(v)) {
                out[k] = v.slice();
            }
            else {
                out[k] = v;
            }
        }
    }
    return out;
}
exports.sanitizeAttributes = sanitizeAttributes;
function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValue(val);
}
exports.isAttributeValue = isAttributeValue;
function isHomogeneousAttributeValueArray(arr) {
    let type;
    for (const element of arr) {
        // null/undefined elements are allowed
        if (element == null)
            continue;
        if (!type) {
            if (isValidPrimitiveAttributeValue(element)) {
                type = typeof element;
                continue;
            }
            // encountered an invalid primitive
            return false;
        }
        if (typeof element === type) {
            continue;
        }
        return false;
    }
    return true;
}
function isValidPrimitiveAttributeValue(val) {
    switch (typeof val) {
        case 'number':
            return true;
        case 'boolean':
            return true;
        case 'string':
            return true;
    }
    return false;
}
//# sourceMappingURL=attributes.js.map