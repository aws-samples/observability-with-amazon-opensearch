# Client calling various operations in Sample App
from sys import argv
from flask import Flask, jsonify, render_template
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

import os, pkg_resources, socket, requests, logging

OTLP = os.getenv("OTLP") if os.getenv("OTLP") is not None else "localhost"
ORDER = os.getenv("ORDER") if os.getenv("ORDER") is not None else "localhost"
INVENTORY = os.getenv("INVENTORY") if os.getenv("INVENTORY") is not None else "localhost"
PAYMENT = os.getenv("PAYMENT") if os.getenv("PAYMENT") is not None else "localhost"
AUTH = os.getenv("AUTH") if os.getenv("AUTH") is not None else "localhost"
SLEEP_TIME_IN_SECONDS = os.getenv("SLEEP_TIME_IN_SECONDS") if os.getenv("SLEEP_TIME_IN_SECONDS") is not None else 1

DB_NAME = 'APM'
HOST = os.getenv("MYSQL_HOST") if os.getenv("MYSQL_HOST") is not None else "localhost"
PORT = int(os.getenv("MYSQL_PORT")) if os.getenv("MYSQL_PORT") is not None else 3306

app = Flask(__name__, static_url_path='', static_folder='build', template_folder='build')


@app.route("/")
def my_index():
    return render_template("index.html")


@app.route("/cancel-order")
def cancelOrder():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_cancel_order") as cancel_order_trace_group:
            trace_id=get_hexadecimal_trace_id(cancel_order_trace_group.get_span_context().trace_id)
            cancelOrderAPIRequest = delete("http://{}:80/clear_order".format(ORDER))
            assert cancelOrderAPIRequest.status_code == 200
            return get_ref_link("Cancel", "success", trace_id)
    except:
        return get_ref_link("Cancel", "failed", trace_id)


@app.route("/checkout")
def checkout():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_checkout") as checkout_trace_group:
            trace_id = get_hexadecimal_trace_id(checkout_trace_group.get_span_context().trace_id)
            checkoutAPIRequest = post(
                "http://{}:80/checkout".format(PAYMENT),
                data=[
                    ("Metrics", 1),
                    ("ConfigMngmt", 2),
                    ("ThreatDetector", 3),
                ]
            )
            assert checkoutAPIRequest.status_code == 200
            return get_ref_link("Checkout", "success", trace_id)
    except:
        return get_ref_link("Checkout", "failed", trace_id)

@app.route("/create-order")   
def createOrder():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_create_order") as create_order_trace_group:
            trace_id = get_hexadecimal_trace_id(create_order_trace_group.get_span_context().trace_id)
            updateOrderAPIRequest = post(
                "http://{}:80/update_order".format(ORDER),
                 data=[
                    ("Metrics", 1),
                    ("ConfigMngmt", 2),
                    ("ThreatDetector", 3),
                ]
            )
            assert updateOrderAPIRequest.status_code == 200
            return get_ref_link("Create", "success", trace_id)
    except:
        return get_ref_link("Create", "failed", trace_id)

        
@app.route("/delivery-status")
def deliveryStatus():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_delivery_status") as delivery_status_trace_group:
            trace_id = get_hexadecimal_trace_id(delivery_status_trace_group.get_span_context().trace_id)
            getOrderAPIRequest = get("http://{}:80/get_order".format(ORDER))
            assert getOrderAPIRequest.status_code == 200
            return get_ref_link("Status", "success", trace_id)
    except:
        return get_ref_link("Status", "failed", trace_id)


@app.route("/login") 
def load_main_screen():
    setupDB()
    # Client attempts login with authentication.
    with tracer.start_as_current_span("load_main_screen"):
        # No retry because if error occurs we want to throw it to Kibana.
        loginSession = requests.Session()
        loginAPIResponse = loginSession.get(
            "http://{}:80/server_request_login".format(AUTH)
        )
        loginSession.close()
        if loginAPIResponse.status_code != 200:
            loginAPIResponse.raise_for_status()
            

@app.route("/pay-order")        
def payOrder():
    trace_id = None
    try:
        with tracer.start_as_current_span("client_pay_order") as pay_order_trace_group:
            trace_id = get_hexadecimal_trace_id(pay_order_trace_group.get_span_context().trace_id)
            payOrderAPIRequest = post("http://{}:80/pay_order".format(ORDER))
            assert payOrderAPIRequest.status_code == 200
            return get_ref_link("Pay", "success", trace_id)
    except:
        return get_ref_link("Pay", "failed", trace_id)



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
    allowed_methods=["HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS", "TRACE"]
)


def getDBCnx():
    cnx = mysql.connector.connect(user="root", host=HOST, port=PORT, database=DB_NAME)
    return cnx


def closeCursorAndDBCnx(cursor, cnx):
    cursor.close()
    cnx.close()


def setupDB():
    INSERT_ROWS_CMD = """INSERT INTO Inventory_Items (ItemId, TotalQty)
                           VALUES (%(ItemId)s, %(Qty)s) ON DUPLICATE KEY UPDATE TotalQty = TotalQty + %(Qty)s"""
    data = [
        {"ItemId": "Metrics", "Qty": 40},
        {"ItemId": "ConfigMngmt", "Qty": 100},
        {"ItemId": "ThreatDetector", "Qty": 60},
    ]

    cnx = getDBCnx()
    cursor = cnx.cursor()

    for item in data:
        cursor.execute(INSERT_ROWS_CMD, item)
        cnx.commit()

    closeCursorAndDBCnx(cursor, cnx)


def cleanupDB():
    DELETE_INVENTORY = "DELETE FROM Inventory_Items;"

    cnx = getDBCnx()
    cursor = cnx.cursor()

    cursor.execute(DELETE_INVENTORY)
    cnx.commit()

    closeCursorAndDBCnx(cursor, cnx)

def get_ref_link(operation, status, trace_id):
    return jsonify(
      status=status,
      operation=operation,
      traceId=trace_id
    )

def get_hexadecimal_trace_id(trace_id: int) -> str:
    return bytes(bytearray.fromhex("{:032x}".format(trace_id))).hex()

logging.getLogger('werkzeug').disabled = True
app.run(host="0.0.0.0", port=5000)
cleanupDB()