export function sanitizeAttributes(attributes) {
    var out = {};
    if (attributes == null || typeof attributes !== 'object') {
        return out;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++) {
        var _b = _a[_i], k = _b[0], v = _b[1];
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
export function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
    var type;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
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