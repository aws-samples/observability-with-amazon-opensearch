# Microservice Observability with Amazon OpenSearch Service Workshop

Amazon OpenSearch Service’s Trace Analytics functionality allows you to go beyond simple monitoring to understand not just what events are happening, but why they are happening. In this workshop, learn how to instrument, collect, and analyze metrics, traces, and log data all the way from user front ends to service backends and everything in between. Put this together with Amazon OpenSearch Service, AWS Distro for OpenTelemetry, FluentBit, and Data Prepper.

## Architecture
![architecture](/assets/arch.jpg)

## Instructions 🚀
Detailed Workshop instructions should be followed in this [guide](https://catalog.us-east-1.prod.workshops.aws/workshops/1abb648b-2ef8-442c-a731-efbcb69c1e1e).

## (For Information Only) Manual Instrumentation to collect traces

As our sample microservice application is built using Python and Java, we have used OpenTelemetry Python packages to manually instrument our code.

In manual instrumentation, developers need to add trace capture code to the application. It provides customization in terms of capturing traces for a custom code block, name various components in OpenTelemetry like traces and spans, add attributes, events and handle specific exception within the code.

Following are dependencies installed using pip. This could be found in the requirement.txt within each microservice under sample-apps.
```
opentelemetry-exporter-otlp==1.20.0
opentelemetry-instrumentation-flask==0.41b0
opentelemetry-instrumentation-mysql==0.41b0
opentelemetry-instrumentation-requests==0.41b0
opentelemetry-instrumentation-logging==0.41b0
opentelemetry-sdk==1.20.0
```
Lets take a sample microservice ```sample-apps/08-paymentservice/paymentService.py``` and try to understand the instrumentation specific code.

Import dependent packages in the code.
```
from opentelemetry import trace
from opentelemetry.instrumentation.logging import LoggingInstrumentor
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import (
    ConsoleSpanExporter,
    SimpleSpanProcessor,
)
```
Configure ```TraceProvider``` and set it for the application. This includes exporting the logs to AWS Distro for OpenTelemetry Collector via OTLP protocol over port 55680.
```
trace.set_tracer_provider(
    TracerProvider(
        resource=Resource.create(
            {
                "service.name": "payment",
                "service.instance.id": str(id(app)),
                "telemetry.sdk.name": "opentelemetry",
                "telemetry.sdk.language": "python",
                "telemetry.sdk.version": pkg_resources.get_distribution("opentelemetry-sdk").version,
                "host.hostname": socket.gethostname(),
            }
        )
    )
)
tracerProvider = trace.get_tracer_provider()
tracer = tracerProvider.get_tracer(__name__)
tracerProvider.add_span_processor(
    SimpleSpanProcessor(ConsoleSpanExporter())
)
otlp_exporter = OTLPSpanExporter(endpoint="{}:55680".format(OTLP), insecure=True)
tracerProvider.add_span_processor(
    SimpleSpanProcessor(otlp_exporter)
)
```

Use ```LoggingInstrumentor``` to instrument application to inject trace id, span id and service name within logs for correlation purpose.
```
LoggingInstrumentor().instrument(set_logging_format=True)
```
```FlaskInstrumentor``` track web request in Flask application. It supports Flask specific feature such as - 
•	The Flask url rule pattern is used as the Span name.
•	The ```http.route``` Span attribute is set so that one can see which URL rule matched a request.
```
FlaskInstrumentor().instrument_app(app)
```
Trace HTTP requests made by the Python requests library
```
RequestsInstrumentor().instrument(tracer_provider=tracerProvider)
```
To capture the work done within a block, start a span with a name and put the code block within the span as shown using
```
 ...
 with tracer.start_as_current_span("checkout"):
    ...
```
The full python function looks like this - 
```
@app.route("/checkout", methods=["POST", "GET"])
def payment():
    errorRate = random.randint(0,99)
    if errorRate < ERROR_RATE_THRESHOLD:
        logs('Payment', 'Checkout operation failed - Service Unavailable: 503')
        logger.error('Payment - Checkout operation failed - Service Unavailable: 503')
        raise Error('Checkout Failed - Service Unavailable', status_code=503)
    else:
        with tracer.start_as_current_span("checkout"):
            rawData = request.form
            data = {}
            for itemId in rawData.keys():
                data[itemId] = sum([-val for val in rawData.getlist(itemId, type=int)])

            soldInventorySession = requests.Session()
            soldInventorySession.mount("http://", HTTPAdapter(max_retries=retry_strategy))
            soldInventoryUpdateResponse = soldInventorySession.post(
                "http://{}:80/update_inventory".format(INVENTORY),
                data=data,
            )
            soldInventorySession.close()
            if soldInventoryUpdateResponse.status_code == 200:
                logs('Payment', 'Customer successfully checked out cart')
                logger.info('Payment - Customer successfully checked out cart')
                return "success"
            else:
                failedItems = soldInventoryUpdateResponse.json().get("failed_items")
                return make_response(
                    "Failed to checkout following items: {}".format(','.join(failedItems)),
                    soldInventoryUpdateResponse.status_code)
```
Similarly other application services are instrumented to capture trace data from application.
