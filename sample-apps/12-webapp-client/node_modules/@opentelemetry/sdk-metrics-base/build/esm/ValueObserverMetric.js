var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseObserverMetric } from './BaseObserverMetric';
import { MetricKind } from './export/types';
/** This is a SDK implementation of Value Observer Metric. */
var ValueObserverMetric = /** @class */ (function (_super) {
    __extends(ValueObserverMetric, _super);
    function ValueObserverMetric(name, options, processor, resource, instrumentationLibrary, callback) {
        return _super.call(this, name, options, processor, resource, MetricKind.VALUE_OBSERVER, instrumentationLibrary, callback) || this;
    }
    return ValueObserverMetric;
}(BaseObserverMetric));
export { ValueObserverMetric };
//# sourceMappingURL=ValueObserverMetric.js.map