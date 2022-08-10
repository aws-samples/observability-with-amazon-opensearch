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
/** The kind of metric. */
export var MetricKind;
(function (MetricKind) {
    MetricKind[MetricKind["COUNTER"] = 0] = "COUNTER";
    MetricKind[MetricKind["UP_DOWN_COUNTER"] = 1] = "UP_DOWN_COUNTER";
    MetricKind[MetricKind["VALUE_RECORDER"] = 2] = "VALUE_RECORDER";
    MetricKind[MetricKind["SUM_OBSERVER"] = 3] = "SUM_OBSERVER";
    MetricKind[MetricKind["UP_DOWN_SUM_OBSERVER"] = 4] = "UP_DOWN_SUM_OBSERVER";
    MetricKind[MetricKind["VALUE_OBSERVER"] = 5] = "VALUE_OBSERVER";
    MetricKind[MetricKind["BATCH_OBSERVER"] = 6] = "BATCH_OBSERVER";
})(MetricKind || (MetricKind = {}));
export var MetricKindValues = Object.values(MetricKind);
/** The kind of aggregator. */
export var AggregatorKind;
(function (AggregatorKind) {
    AggregatorKind[AggregatorKind["SUM"] = 0] = "SUM";
    AggregatorKind[AggregatorKind["LAST_VALUE"] = 1] = "LAST_VALUE";
    AggregatorKind[AggregatorKind["HISTOGRAM"] = 2] = "HISTOGRAM";
})(AggregatorKind || (AggregatorKind = {}));
//# sourceMappingURL=types.js.map