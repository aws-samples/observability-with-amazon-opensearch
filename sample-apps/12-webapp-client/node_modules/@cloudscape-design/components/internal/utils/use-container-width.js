import { useContainerQuery } from '../hooks/container-queries';
export default function useContainerWidth(defaultValue, threshold) {
    if (defaultValue === void 0) { defaultValue = 0; }
    if (threshold === void 0) { threshold = 1; }
    var _a = useContainerQuery(function (rect, prev) {
        if (prev === null) {
            return rect.width;
        }
        return Math.abs(prev - rect.width) >= threshold ? rect.width : prev;
    }), width = _a[0], ref = _a[1];
    return [width !== null && width !== void 0 ? width : defaultValue, ref];
}
//# sourceMappingURL=use-container-width.js.map