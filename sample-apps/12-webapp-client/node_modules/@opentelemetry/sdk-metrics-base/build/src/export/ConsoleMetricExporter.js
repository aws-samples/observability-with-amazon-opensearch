"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleMetricExporter = void 0;
const core_1 = require("@opentelemetry/core");
/**
 * This is implementation of {@link MetricExporter} that prints metrics data to
 * the console. This class can be used for diagnostic purposes.
 */
/* eslint-disable no-console */
class ConsoleMetricExporter {
    export(metrics, resultCallback) {
        for (const metric of metrics) {
            console.log(metric.descriptor);
            console.log(metric.labels);
            const point = metric.aggregator.toPoint();
            if (typeof point.value === 'number') {
                console.log('value: ' + point.value);
            }
            else if (typeof point.value.buckets === 'object') {
                const histogram = point.value;
                console.log(`count: ${histogram.count}, sum: ${histogram.sum}, buckets: ${histogram.buckets}`);
            }
            else {
                console.log(point.value);
            }
        }
        return resultCallback({ code: core_1.ExportResultCode.SUCCESS });
    }
    shutdown() {
        // By default does nothing
        return Promise.resolve();
    }
}
exports.ConsoleMetricExporter = ConsoleMetricExporter;
//# sourceMappingURL=ConsoleMetricExporter.js.map