import time
from flask import Flask
# Client calling various operations in Sample App

from sys import argv
from requests import delete, get, post
import mysql.connector
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import (
    ConsoleSpanExporter,
    SimpleSpanProcessor,
)
from opentelemetry.sdk.resources import Resource
from opentelemetry.instrumentation.logging import LoggingInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from urllib3.util.retry import Retry

import os, pkg_resources, socket, requests

OTLP = os.getenv("OTLP") if os.getenv("OTLP") is not None else "localhost"
ORDER = os.getenv("ORDER") if os.getenv("ORDER") is not None else "localhost"
INVENTORY = os.getenv("INVENTORY") if os.getenv("INVENTORY") is not None else "localhost"
PAYMENT = os.getenv("PAYMENT") if os.getenv("PAYMENT") is not None else "localhost"
AUTH = os.getenv("AUTH") if os.getenv("AUTH") is not None else "localhost"
SLEEP_TIME_IN_SECONDS = os.getenv("SLEEP_TIME_IN_SECONDS") if os.getenv("SLEEP_TIME_IN_SECONDS") is not None else 1

DB_NAME = 'APM'
HOST = os.getenv("MYSQL_HOST") if os.getenv("MYSQL_HOST") is not None else "localhost"
PORT = int(os.getenv("MYSQL_PORT")) if os.getenv("MYSQL_PORT") is not None else 3306


trace.set_tracer_provider(
    TracerProvider(
        resource=Resource.create(
            {
                "service.name": "frontend-client",
                "host.hostname": socket.gethostname(),
                "telemetry.sdk.name": "opentelemetry",
                "telemetry.sdk.language": "python",
                "telemetry.sdk.version": pkg_resources.get_distribution("opentelemetry-sdk").version,
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
RequestsInstrumentor().instrument(tracer_provider=tracerProvider)

retry_strategy = Retry(
    total=2,
    status_forcelist=[401, 401.1, 429, 503],
    method_whitelist=["HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS", "TRACE"]
)

def get_hexadecimal_trace_id(trace_id: int) -> str:
    return bytes(bytearray.fromhex("{:032x}".format(trace_id))).hex()


app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/create-order')
def createOrder():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_create_order") as create_order_trace_group:
            trace_id = get_hexadecimal_trace_id(create_order_trace_group.get_span_context().trace_id)
            updateOrderAPIRequest = post(
                "http://{}:80/update_order".format(ORDER),
                data=[
                    ("apple", 1),
                    ("orange", 3),
                    ("banana", 2)
                ]
            )
            assert updateOrderAPIRequest.status_code == 200
            return get_ref_link("Create", "success", trace_id)
    except:
        return get_ref_link("Create", "failed", trace_id)

app.run(debug=True)