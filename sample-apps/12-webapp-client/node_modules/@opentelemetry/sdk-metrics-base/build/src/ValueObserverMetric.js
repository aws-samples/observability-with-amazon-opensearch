"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObserverMetric = void 0;
const BaseObserverMetric_1 = require("./BaseObserverMetric");
const types_1 = require("./export/types");
/** This is a SDK implementation of Value Observer Metric. */
class ValueObserverMetric extends BaseObserverMetric_1.BaseObserverMetric {
    constructor(name, options, processor, resource, instrumentationLibrary, callback) {
        super(name, options, processor, resource, types_1.MetricKind.VALUE_OBSERVER, instrumentationLibrary, callback);
    }
}
exports.ValueObserverMetric = ValueObserverMetric;
//# sourceMappingURL=ValueObserverMetric.js.map