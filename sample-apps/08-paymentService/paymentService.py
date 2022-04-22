# PaymentService running on port 8084

from flask import Flask, jsonify, request, make_response
import logging
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
from Error import Error
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import os, pkg_resources, socket, requests, random, json

logger = logging.getLogger(__name__)

ERROR_RATE_THRESHOLD = 100

app = Flask(__name__)

OTLP = os.getenv("OTLP") if os.getenv("OTLP") is not None else "localhost"
INVENTORY = os.getenv("INVENTORY") if os.getenv("INVENTORY") is not None else "localhost"
LOGS = os.getenv("LOGS") if os.getenv("LOGS") is not None else "localhost"

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

LoggingInstrumentor().instrument(set_logging_format=True)
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument(tracer_provider=tracerProvider)

retry_strategy = Retry(
    total=2,
    status_forcelist=[401, 401.1, 429, 503],
    method_whitelist=["HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS", "TRACE"]
)

@app.errorhandler(Error)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

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

def logs(serv=None, mes=None):
    create_log_data = {'service': serv, 'message': mes}
    url = "http://{}:80/logs".format(LOGS)
    response = requests.post(
        url, data=json.dumps(create_log_data),
        headers={'Content-Type': 'application/json'}
    )
    assert response.status_code == 200
    return "success"

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0")
