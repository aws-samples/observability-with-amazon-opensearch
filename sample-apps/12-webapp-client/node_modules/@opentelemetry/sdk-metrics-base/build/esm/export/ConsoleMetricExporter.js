/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ExportResultCode } from '@opentelemetry/core';
/**
 * This is implementation of {@link MetricExporter} that prints metrics data to
 * the console. This class can be used for diagnostic purposes.
 */
/* eslint-disable no-console */
var ConsoleMetricExporter = /** @class */ (function () {
    function ConsoleMetricExporter() {
    }
    ConsoleMetricExporter.prototype.export = function (metrics, resultCallback) {
        for (var _i = 0, metrics_1 = metrics; _i < metrics_1.length; _i++) {
            var metric = metrics_1[_i];
            console.log(metric.descriptor);
            console.log(metric.labels);
            var point = metric.aggregator.toPoint();
            if (typeof point.value === 'number') {
                console.log('value: ' + point.value);
            }
            else if (typeof point.value.buckets === 'object') {
                var histogram = point.value;
                console.log("count: " + histogram.count + ", sum: " + histogram.sum + ", buckets: " + histogram.buckets);
            }
            else {
                console.log(point.value);
            }
        }
        return resultCallback({ code: ExportResultCode.SUCCESS });
    };
    ConsoleMetricExporter.prototype.shutdown = function () {
        // By default does nothing
        return Promise.resolve();
    };
    return ConsoleMetricExporter;
}());
export { ConsoleMetricExporter };
//# sourceMappingURL=ConsoleMetricExporter.js.map