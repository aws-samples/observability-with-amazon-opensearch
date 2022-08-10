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
exports.OTLP_SPAN_KIND_MAPPING = exports.OTLPExporterError = exports.opentelemetryProto = void 0;
const api_1 = require("@opentelemetry/api");
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
var opentelemetryProto;
(function (opentelemetryProto) {
    let metrics;
    (function (metrics) {
        let v1;
        (function (v1) {
            let AggregationTemporality;
            (function (AggregationTemporality) {
                // UNSPECIFIED is the default AggregationTemporality, it MUST not be used.
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
                // DELTA is an AggregationTemporality for a metric aggregator which reports
                // changes since last report time. Successive metrics contain aggregation of
                // values from continuous and non-overlapping intervals.
                //
                // The values for a DELTA metric are based only on the time interval
                // associated with one measurement cycle. There is no dependency on
                // previous measurements like is the case for CUMULATIVE metrics.
                //
                // For example, consider a system measuring the number of requests that
                // it receives and reports the sum of these requests every second as a
                // DELTA metric:
                //
                //   1. The system starts receiving at time=t_0.
                //   2. A request is received, the system measures 1 request.
                //   3. A request is received, the system measures 1 request.
                //   4. A request is received, the system measures 1 request.
                //   5. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+1 with a value of 3.
                //   6. A request is received, the system measures 1 request.
                //   7. A request is received, the system measures 1 request.
                //   8. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0+1 to
                //      t_0+2 with a value of 2.
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
                // CUMULATIVE is an AggregationTemporality for a metric aggregator which
                // reports changes since a fixed start time. This means that current values
                // of a CUMULATIVE metric depend on all previous measurements since the
                // start time. Because of this, the sender is required to retain this state
                // in some form. If this state is lost or invalidated, the CUMULATIVE metric
                // values MUST be reset and a new fixed start time following the last
                // reported measurement time sent MUST be used.
                //
                // For example, consider a system measuring the number of requests that
                // it receives and reports the sum of these requests every second as a
                // CUMULATIVE metric:
                //
                //   1. The system starts receiving at time=t_0.
                //   2. A request is received, the system measures 1 request.
                //   3. A request is received, the system measures 1 request.
                //   4. A request is received, the system measures 1 request.
                //   5. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+1 with a value of 3.
                //   6. A request is received, the system measures 1 request.
                //   7. A request is received, the system measures 1 request.
                //   8. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+2 with a value of 5.
                //   9. The system experiences a fault and loses state.
                //   10. The system recovers and resumes receiving at time=t_1.
                //   11. A request is received, the system measures 1 request.
                //   12. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_1 to
                //      t_0+1 with a value of 1.
                //
                // Note: Even though, when reporting changes since last report time, using
                // CUMULATIVE is valid, it is not recommended. This may cause problems for
                // systems that do not use start_time to determine when the aggregation
                // value was reset (e.g. Prometheus).
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
            })(AggregationTemporality = v1.AggregationTemporality || (v1.AggregationTemporality = {}));
        })(v1 = metrics.v1 || (metrics.v1 = {}));
    })(metrics = opentelemetryProto.metrics || (opentelemetryProto.metrics = {}));
    let trace;
    (function (trace) {
        let v1;
        (function (v1) {
            let ConstantSampler;
            (function (ConstantSampler) {
                let ConstantDecision;
                (function (ConstantDecision) {
                    ConstantDecision[ConstantDecision["ALWAYS_OFF"] = 0] = "ALWAYS_OFF";
                    ConstantDecision[ConstantDecision["ALWAYS_ON"] = 1] = "ALWAYS_ON";
                    ConstantDecision[ConstantDecision["ALWAYS_PARENT"] = 2] = "ALWAYS_PARENT";
                })(ConstantDecision = ConstantSampler.ConstantDecision || (ConstantSampler.ConstantDecision = {}));
            })(ConstantSampler = v1.ConstantSampler || (v1.ConstantSampler = {}));
            let Span;
            (function (Span) {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                let SpanKind;
                (function (SpanKind) {
                    SpanKind[SpanKind["SPAN_KIND_UNSPECIFIED"] = 0] = "SPAN_KIND_UNSPECIFIED";
                    SpanKind[SpanKind["SPAN_KIND_INTERNAL"] = 1] = "SPAN_KIND_INTERNAL";
                    SpanKind[SpanKind["SPAN_KIND_SERVER"] = 2] = "SPAN_KIND_SERVER";
                    SpanKind[SpanKind["SPAN_KIND_CLIENT"] = 3] = "SPAN_KIND_CLIENT";
                    SpanKind[SpanKind["SPAN_KIND_PRODUCER"] = 4] = "SPAN_KIND_PRODUCER";
                    SpanKind[SpanKind["SPAN_KIND_CONSUMER"] = 5] = "SPAN_KIND_CONSUMER";
                })(SpanKind = Span.SpanKind || (Span.SpanKind = {}));
            })(Span = v1.Span || (v1.Span = {}));
        })(v1 = trace.v1 || (trace.v1 = {}));
    })(trace = opentelemetryProto.trace || (opentelemetryProto.trace = {}));
    let common;
    (function (common) {
        let v1;
        (function (v1) {
            let ValueType;
            (function (ValueType) {
                ValueType[ValueType["STRING"] = 0] = "STRING";
                ValueType[ValueType["INT"] = 1] = "INT";
                ValueType[ValueType["DOUBLE"] = 2] = "DOUBLE";
                ValueType[ValueType["BOOL"] = 3] = "BOOL";
            })(ValueType = v1.ValueType || (v1.ValueType = {}));
        })(v1 = common.v1 || (common.v1 = {}));
    })(common = opentelemetryProto.common || (opentelemetryProto.common = {}));
})(opentelemetryProto = exports.opentelemetryProto || (exports.opentelemetryProto = {}));
/**
 * Interface for handling error
 */
class OTLPExporterError extends Error {
    constructor(message, code, data) {
        super(message);
        this.name = 'OTLPExporterError';
        this.data = data;
        this.code = code;
    }
}
exports.OTLPExporterError = OTLPExporterError;
/**
 * Mapping between api SpanKind and proto SpanKind
 */
exports.OTLP_SPAN_KIND_MAPPING = {
    [api_1.SpanKind.INTERNAL]: opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_INTERNAL,
    [api_1.SpanKind.SERVER]: opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_SERVER,
    [api_1.SpanKind.CLIENT]: opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_CLIENT,
    [api_1.SpanKind.PRODUCER]: opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_PRODUCER,
    [api_1.SpanKind.CONSUMER]: opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_CONSUMER,
};
//# sourceMappingURL=types.js.map