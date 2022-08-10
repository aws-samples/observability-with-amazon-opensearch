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
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
export var SemanticAttributes = {
    /**
    * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
    *
    * Note: This may be different from `faas.id` if an alias is involved.
    */
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    /**
    * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
    */
    DB_SYSTEM: 'db.system',
    /**
    * The connection string used to connect to the database. It is recommended to remove embedded credentials.
    */
    DB_CONNECTION_STRING: 'db.connection_string',
    /**
    * Username for accessing the database.
    */
    DB_USER: 'db.user',
    /**
    * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
    */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    /**
    * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
    *
    * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
    */
    DB_NAME: 'db.name',
    /**
    * The database statement being executed.
    *
    * Note: The value may be sanitized to exclude sensitive information.
    */
    DB_STATEMENT: 'db.statement',
    /**
    * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
    *
    * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
    */
    DB_OPERATION: 'db.operation',
    /**
    * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
    *
    * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
    */
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
    * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
    * The fetch size used for paging, i.e. how many rows will be returned at once.
    */
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    /**
    * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
    */
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_CASSANDRA_TABLE: 'db.cassandra.table',
    /**
    * Whether or not the query is idempotent.
    */
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    /**
    * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
    */
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    /**
    * The ID of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    /**
    * The data center of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    /**
    * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
    * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
    */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
    * The collection being accessed within the database stated in `db.name`.
    */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_SQL_TABLE: 'db.sql.table',
    /**
    * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    */
    EXCEPTION_TYPE: 'exception.type',
    /**
    * The exception message.
    */
    EXCEPTION_MESSAGE: 'exception.message',
    /**
    * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    */
    EXCEPTION_STACKTRACE: 'exception.stacktrace',
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */
    EXCEPTION_ESCAPED: 'exception.escaped',
    /**
    * Type of the trigger on which the function is executed.
    */
    FAAS_TRIGGER: 'faas.trigger',
    /**
    * The execution ID of the current function execution.
    */
    FAAS_EXECUTION: 'faas.execution',
    /**
    * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    */
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    /**
    * Describes the type of the operation that was performed on the data.
    */
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    /**
    * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_DOCUMENT_TIME: 'faas.document.time',
    /**
    * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    */
    FAAS_DOCUMENT_NAME: 'faas.document.name',
    /**
    * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_TIME: 'faas.time',
    /**
    * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
    */
    FAAS_CRON: 'faas.cron',
    /**
    * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    */
    FAAS_COLDSTART: 'faas.coldstart',
    /**
    * The name of the invoked function.
    *
    * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
    */
    FAAS_INVOKED_NAME: 'faas.invoked_name',
    /**
    * The cloud provider of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
    */
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    /**
    * The cloud region of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
    */
    FAAS_INVOKED_REGION: 'faas.invoked_region',
    /**
    * Transport protocol used. See note below.
    */
    NET_TRANSPORT: 'net.transport',
    /**
    * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
    */
    NET_PEER_IP: 'net.peer.ip',
    /**
    * Remote port number.
    */
    NET_PEER_PORT: 'net.peer.port',
    /**
    * Remote hostname or similar, see note below.
    */
    NET_PEER_NAME: 'net.peer.name',
    /**
    * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
    */
    NET_HOST_IP: 'net.host.ip',
    /**
    * Like `net.peer.port` but for the host port.
    */
    NET_HOST_PORT: 'net.host.port',
    /**
    * Local hostname or similar, see note below.
    */
    NET_HOST_NAME: 'net.host.name',
    /**
    * The internet connection type currently being used by the host.
    */
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    /**
    * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
    */
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    /**
    * The name of the mobile carrier.
    */
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    /**
    * The mobile carrier country code.
    */
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    /**
    * The mobile carrier network code.
    */
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    /**
    * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
    */
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    /**
    * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
    */
    PEER_SERVICE: 'peer.service',
    /**
    * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
    */
    ENDUSER_ID: 'enduser.id',
    /**
    * Actual/assumed role the client is making the request under extracted from token or application security context.
    */
    ENDUSER_ROLE: 'enduser.role',
    /**
    * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    */
    ENDUSER_SCOPE: 'enduser.scope',
    /**
    * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
    */
    THREAD_ID: 'thread.id',
    /**
    * Current thread name.
    */
    THREAD_NAME: 'thread.name',
    /**
    * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
    */
    CODE_FUNCTION: 'code.function',
    /**
    * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
    */
    CODE_NAMESPACE: 'code.namespace',
    /**
    * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    */
    CODE_FILEPATH: 'code.filepath',
    /**
    * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
    */
    CODE_LINENO: 'code.lineno',
    /**
    * HTTP request method.
    */
    HTTP_METHOD: 'http.method',
    /**
    * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
    *
    * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
    */
    HTTP_URL: 'http.url',
    /**
    * The full request target as passed in a HTTP request line or equivalent.
    */
    HTTP_TARGET: 'http.target',
    /**
    * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is empty or not present, this attribute should be the same.
    */
    HTTP_HOST: 'http.host',
    /**
    * The URI scheme identifying the used protocol.
    */
    HTTP_SCHEME: 'http.scheme',
    /**
    * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
    */
    HTTP_STATUS_CODE: 'http.status_code',
    /**
    * Kind of HTTP protocol used.
    *
    * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
    */
    HTTP_FLAVOR: 'http.flavor',
    /**
    * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
    */
    HTTP_USER_AGENT: 'http.user_agent',
    /**
    * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    /**
    * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    /**
    * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    /**
    * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    /**
    * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
    *
    * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
    */
    HTTP_SERVER_NAME: 'http.server_name',
    /**
    * The matched route (path template).
    */
    HTTP_ROUTE: 'http.route',
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would identify the network-level peer, which may be a proxy.
    */
    HTTP_CLIENT_IP: 'http.client_ip',
    /**
    * The keys in the `RequestItems` object field.
    */
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    /**
    * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    */
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    /**
    * The JSON-serialized value of the `ItemCollectionMetrics` response field.
    */
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    /**
    * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    /**
    * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    /**
    * The value of the `ConsistentRead` request parameter.
    */
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    /**
    * The value of the `ProjectionExpression` request parameter.
    */
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    /**
    * The value of the `Limit` request parameter.
    */
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    /**
    * The value of the `AttributesToGet` request parameter.
    */
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    /**
    * The value of the `IndexName` request parameter.
    */
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    /**
    * The value of the `Select` request parameter.
    */
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    /**
    * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    /**
    * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    /**
    * The value of the `ExclusiveStartTableName` request parameter.
    */
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    /**
    * The the number of items in the `TableNames` response parameter.
    */
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    /**
    * The value of the `ScanIndexForward` request parameter.
    */
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    /**
    * The value of the `Segment` request parameter.
    */
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    /**
    * The value of the `TotalSegments` request parameter.
    */
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    /**
    * The value of the `Count` response parameter.
    */
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    /**
    * The value of the `ScannedCount` response parameter.
    */
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    /**
    * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    */
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    /**
    * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    /**
    * A string identifying the messaging system.
    */
    MESSAGING_SYSTEM: 'messaging.system',
    /**
    * The message destination name. This might be equal to the span name but is required nevertheless.
    */
    MESSAGING_DESTINATION: 'messaging.destination',
    /**
    * The kind of message destination.
    */
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    /**
    * A boolean that is true if the message destination is temporary.
    */
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    /**
    * The name of the transport protocol.
    */
    MESSAGING_PROTOCOL: 'messaging.protocol',
    /**
    * The version of the transport protocol.
    */
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    /**
    * Connection string.
    */
    MESSAGING_URL: 'messaging.url',
    /**
    * A value used by the messaging system as an identifier for the message, represented as a string.
    */
    MESSAGING_MESSAGE_ID: 'messaging.message_id',
    /**
    * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
    */
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    /**
    * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
    */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    /**
    * The compressed size of the message payload in bytes.
    */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    /**
    * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
    */
    MESSAGING_OPERATION: 'messaging.operation',
    /**
    * RabbitMQ message routing key.
    */
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    /**
    * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
    *
    * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
    */
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    /**
    * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
    */
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    /**
    * Client Id for the Consumer or Producer that is handling the message.
    */
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    /**
    * Partition the message is sent to.
    */
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    /**
    * A boolean that is true if the message is a tombstone.
    */
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    /**
    * A string identifying the remoting system.
    */
    RPC_SYSTEM: 'rpc.system',
    /**
    * The full (logical) name of the service being called, including its package name, if applicable.
    *
    * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
    */
    RPC_SERVICE: 'rpc.service',
    /**
    * The name of the (logical) method being called, must be equal to the $method part in the span name.
    *
    * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
    */
    RPC_METHOD: 'rpc.method',
    /**
    * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
    */
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    /**
    * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
    */
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    /**
    * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
    */
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    /**
    * `error.code` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    /**
    * `error.message` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
};
// Enum definitions
export var DbSystemValues;
(function (DbSystemValues) {
    /** Some other SQL database. Fallback only. See notes. */
    DbSystemValues["OTHER_SQL"] = "other_sql";
    /** Microsoft SQL Server. */
    DbSystemValues["MSSQL"] = "mssql";
    /** MySQL. */
    DbSystemValues["MYSQL"] = "mysql";
    /** Oracle Database. */
    DbSystemValues["ORACLE"] = "oracle";
    /** IBM Db2. */
    DbSystemValues["DB2"] = "db2";
    /** PostgreSQL. */
    DbSystemValues["POSTGRESQL"] = "postgresql";
    /** Amazon Redshift. */
    DbSystemValues["REDSHIFT"] = "redshift";
    /** Apache Hive. */
    DbSystemValues["HIVE"] = "hive";
    /** Cloudscape. */
    DbSystemValues["CLOUDSCAPE"] = "cloudscape";
    /** HyperSQL DataBase. */
    DbSystemValues["HSQLDB"] = "hsqldb";
    /** Progress Database. */
    DbSystemValues["PROGRESS"] = "progress";
    /** SAP MaxDB. */
    DbSystemValues["MAXDB"] = "maxdb";
    /** SAP HANA. */
    DbSystemValues["HANADB"] = "hanadb";
    /** Ingres. */
    DbSystemValues["INGRES"] = "ingres";
    /** FirstSQL. */
    DbSystemValues["FIRSTSQL"] = "firstsql";
    /** EnterpriseDB. */
    DbSystemValues["EDB"] = "edb";
    /** InterSystems Caché. */
    DbSystemValues["CACHE"] = "cache";
    /** Adabas (Adaptable Database System). */
    DbSystemValues["ADABAS"] = "adabas";
    /** Firebird. */
    DbSystemValues["FIREBIRD"] = "firebird";
    /** Apache Derby. */
    DbSystemValues["DERBY"] = "derby";
    /** FileMaker. */
    DbSystemValues["FILEMAKER"] = "filemaker";
    /** Informix. */
    DbSystemValues["INFORMIX"] = "informix";
    /** InstantDB. */
    DbSystemValues["INSTANTDB"] = "instantdb";
    /** InterBase. */
    DbSystemValues["INTERBASE"] = "interbase";
    /** MariaDB. */
    DbSystemValues["MARIADB"] = "mariadb";
    /** Netezza. */
    DbSystemValues["NETEZZA"] = "netezza";
    /** Pervasive PSQL. */
    DbSystemValues["PERVASIVE"] = "pervasive";
    /** PointBase. */
    DbSystemValues["POINTBASE"] = "pointbase";
    /** SQLite. */
    DbSystemValues["SQLITE"] = "sqlite";
    /** Sybase. */
    DbSystemValues["SYBASE"] = "sybase";
    /** Teradata. */
    DbSystemValues["TERADATA"] = "teradata";
    /** Vertica. */
    DbSystemValues["VERTICA"] = "vertica";
    /** H2. */
    DbSystemValues["H2"] = "h2";
    /** ColdFusion IMQ. */
    DbSystemValues["COLDFUSION"] = "coldfusion";
    /** Apache Cassandra. */
    DbSystemValues["CASSANDRA"] = "cassandra";
    /** Apache HBase. */
    DbSystemValues["HBASE"] = "hbase";
    /** MongoDB. */
    DbSystemValues["MONGODB"] = "mongodb";
    /** Redis. */
    DbSystemValues["REDIS"] = "redis";
    /** Couchbase. */
    DbSystemValues["COUCHBASE"] = "couchbase";
    /** CouchDB. */
    DbSystemValues["COUCHDB"] = "couchdb";
    /** Microsoft Azure Cosmos DB. */
    DbSystemValues["COSMOSDB"] = "cosmosdb";
    /** Amazon DynamoDB. */
    DbSystemValues["DYNAMODB"] = "dynamodb";
    /** Neo4j. */
    DbSystemValues["NEO4J"] = "neo4j";
    /** Apache Geode. */
    DbSystemValues["GEODE"] = "geode";
    /** Elasticsearch. */
    DbSystemValues["ELASTICSEARCH"] = "elasticsearch";
    /** Memcached. */
    DbSystemValues["MEMCACHED"] = "memcached";
    /** CockroachDB. */
    DbSystemValues["COCKROACHDB"] = "cockroachdb";
})(DbSystemValues || (DbSystemValues = {}));
export var DbCassandraConsistencyLevelValues;
(function (DbCassandraConsistencyLevelValues) {
    /** all. */
    DbCassandraConsistencyLevelValues["ALL"] = "all";
    /** each_quorum. */
    DbCassandraConsistencyLevelValues["EACH_QUORUM"] = "each_quorum";
    /** quorum. */
    DbCassandraConsistencyLevelValues["QUORUM"] = "quorum";
    /** local_quorum. */
    DbCassandraConsistencyLevelValues["LOCAL_QUORUM"] = "local_quorum";
    /** one. */
    DbCassandraConsistencyLevelValues["ONE"] = "one";
    /** two. */
    DbCassandraConsistencyLevelValues["TWO"] = "two";
    /** three. */
    DbCassandraConsistencyLevelValues["THREE"] = "three";
    /** local_one. */
    DbCassandraConsistencyLevelValues["LOCAL_ONE"] = "local_one";
    /** any. */
    DbCassandraConsistencyLevelValues["ANY"] = "any";
    /** serial. */
    DbCassandraConsistencyLevelValues["SERIAL"] = "serial";
    /** local_serial. */
    DbCassandraConsistencyLevelValues["LOCAL_SERIAL"] = "local_serial";
})(DbCassandraConsistencyLevelValues || (DbCassandraConsistencyLevelValues = {}));
export var FaasTriggerValues;
(function (FaasTriggerValues) {
    /** A response to some data source operation such as a database or filesystem read/write. */
    FaasTriggerValues["DATASOURCE"] = "datasource";
    /** To provide an answer to an inbound HTTP request. */
    FaasTriggerValues["HTTP"] = "http";
    /** A function is set to be executed when messages are sent to a messaging system. */
    FaasTriggerValues["PUBSUB"] = "pubsub";
    /** A function is scheduled to be executed regularly. */
    FaasTriggerValues["TIMER"] = "timer";
    /** If none of the others apply. */
    FaasTriggerValues["OTHER"] = "other";
})(FaasTriggerValues || (FaasTriggerValues = {}));
export var FaasDocumentOperationValues;
(function (FaasDocumentOperationValues) {
    /** When a new object is created. */
    FaasDocumentOperationValues["INSERT"] = "insert";
    /** When an object is modified. */
    FaasDocumentOperationValues["EDIT"] = "edit";
    /** When an object is deleted. */
    FaasDocumentOperationValues["DELETE"] = "delete";
})(FaasDocumentOperationValues || (FaasDocumentOperationValues = {}));
export var FaasInvokedProviderValues;
(function (FaasInvokedProviderValues) {
    /** Alibaba Cloud. */
    FaasInvokedProviderValues["ALIBABA_CLOUD"] = "alibaba_cloud";
    /** Amazon Web Services. */
    FaasInvokedProviderValues["AWS"] = "aws";
    /** Microsoft Azure. */
    FaasInvokedProviderValues["AZURE"] = "azure";
    /** Google Cloud Platform. */
    FaasInvokedProviderValues["GCP"] = "gcp";
})(FaasInvokedProviderValues || (FaasInvokedProviderValues = {}));
export var NetTransportValues;
(function (NetTransportValues) {
    /** ip_tcp. */
    NetTransportValues["IP_TCP"] = "ip_tcp";
    /** ip_udp. */
    NetTransportValues["IP_UDP"] = "ip_udp";
    /** Another IP-based protocol. */
    NetTransportValues["IP"] = "ip";
    /** Unix Domain socket. See below. */
    NetTransportValues["UNIX"] = "unix";
    /** Named or anonymous pipe. See note below. */
    NetTransportValues["PIPE"] = "pipe";
    /** In-process communication. */
    NetTransportValues["INPROC"] = "inproc";
    /** Something else (non IP-based). */
    NetTransportValues["OTHER"] = "other";
})(NetTransportValues || (NetTransportValues = {}));
export var NetHostConnectionTypeValues;
(function (NetHostConnectionTypeValues) {
    /** wifi. */
    NetHostConnectionTypeValues["WIFI"] = "wifi";
    /** wired. */
    NetHostConnectionTypeValues["WIRED"] = "wired";
    /** cell. */
    NetHostConnectionTypeValues["CELL"] = "cell";
    /** unavailable. */
    NetHostConnectionTypeValues["UNAVAILABLE"] = "unavailable";
    /** unknown. */
    NetHostConnectionTypeValues["UNKNOWN"] = "unknown";
})(NetHostConnectionTypeValues || (NetHostConnectionTypeValues = {}));
export var NetHostConnectionSubtypeValues;
(function (NetHostConnectionSubtypeValues) {
    /** GPRS. */
    NetHostConnectionSubtypeValues["GPRS"] = "gprs";
    /** EDGE. */
    NetHostConnectionSubtypeValues["EDGE"] = "edge";
    /** UMTS. */
    NetHostConnectionSubtypeValues["UMTS"] = "umts";
    /** CDMA. */
    NetHostConnectionSubtypeValues["CDMA"] = "cdma";
    /** EVDO Rel. 0. */
    NetHostConnectionSubtypeValues["EVDO_0"] = "evdo_0";
    /** EVDO Rev. A. */
    NetHostConnectionSubtypeValues["EVDO_A"] = "evdo_a";
    /** CDMA2000 1XRTT. */
    NetHostConnectionSubtypeValues["CDMA2000_1XRTT"] = "cdma2000_1xrtt";
    /** HSDPA. */
    NetHostConnectionSubtypeValues["HSDPA"] = "hsdpa";
    /** HSUPA. */
    NetHostConnectionSubtypeValues["HSUPA"] = "hsupa";
    /** HSPA. */
    NetHostConnectionSubtypeValues["HSPA"] = "hspa";
    /** IDEN. */
    NetHostConnectionSubtypeValues["IDEN"] = "iden";
    /** EVDO Rev. B. */
    NetHostConnectionSubtypeValues["EVDO_B"] = "evdo_b";
    /** LTE. */
    NetHostConnectionSubtypeValues["LTE"] = "lte";
    /** EHRPD. */
    NetHostConnectionSubtypeValues["EHRPD"] = "ehrpd";
    /** HSPAP. */
    NetHostConnectionSubtypeValues["HSPAP"] = "hspap";
    /** GSM. */
    NetHostConnectionSubtypeValues["GSM"] = "gsm";
    /** TD-SCDMA. */
    NetHostConnectionSubtypeValues["TD_SCDMA"] = "td_scdma";
    /** IWLAN. */
    NetHostConnectionSubtypeValues["IWLAN"] = "iwlan";
    /** 5G NR (New Radio). */
    NetHostConnectionSubtypeValues["NR"] = "nr";
    /** 5G NRNSA (New Radio Non-Standalone). */
    NetHostConnectionSubtypeValues["NRNSA"] = "nrnsa";
    /** LTE CA. */
    NetHostConnectionSubtypeValues["LTE_CA"] = "lte_ca";
})(NetHostConnectionSubtypeValues || (NetHostConnectionSubtypeValues = {}));
export var HttpFlavorValues;
(function (HttpFlavorValues) {
    /** HTTP 1.0. */
    HttpFlavorValues["HTTP_1_0"] = "1.0";
    /** HTTP 1.1. */
    HttpFlavorValues["HTTP_1_1"] = "1.1";
    /** HTTP 2. */
    HttpFlavorValues["HTTP_2_0"] = "2.0";
    /** SPDY protocol. */
    HttpFlavorValues["SPDY"] = "SPDY";
    /** QUIC protocol. */
    HttpFlavorValues["QUIC"] = "QUIC";
})(HttpFlavorValues || (HttpFlavorValues = {}));
export var MessagingDestinationKindValues;
(function (MessagingDestinationKindValues) {
    /** A message sent to a queue. */
    MessagingDestinationKindValues["QUEUE"] = "queue";
    /** A message sent to a topic. */
    MessagingDestinationKindValues["TOPIC"] = "topic";
})(MessagingDestinationKindValues || (MessagingDestinationKindValues = {}));
export var MessagingOperationValues;
(function (MessagingOperationValues) {
    /** receive. */
    MessagingOperationValues["RECEIVE"] = "receive";
    /** process. */
    MessagingOperationValues["PROCESS"] = "process";
})(MessagingOperationValues || (MessagingOperationValues = {}));
export var RpcGrpcStatusCodeValues;
(function (RpcGrpcStatusCodeValues) {
    /** OK. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["OK"] = 0] = "OK";
    /** CANCELLED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["CANCELLED"] = 1] = "CANCELLED";
    /** UNKNOWN. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["UNKNOWN"] = 2] = "UNKNOWN";
    /** INVALID_ARGUMENT. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    /** DEADLINE_EXCEEDED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    /** NOT_FOUND. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["NOT_FOUND"] = 5] = "NOT_FOUND";
    /** ALREADY_EXISTS. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    /** PERMISSION_DENIED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    /** RESOURCE_EXHAUSTED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    /** FAILED_PRECONDITION. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    /** ABORTED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["ABORTED"] = 10] = "ABORTED";
    /** OUT_OF_RANGE. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    /** UNIMPLEMENTED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    /** INTERNAL. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["INTERNAL"] = 13] = "INTERNAL";
    /** UNAVAILABLE. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    /** DATA_LOSS. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["DATA_LOSS"] = 15] = "DATA_LOSS";
    /** UNAUTHENTICATED. */
    RpcGrpcStatusCodeValues[RpcGrpcStatusCodeValues["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
})(RpcGrpcStatusCodeValues || (RpcGrpcStatusCodeValues = {}));
//# sourceMappingURL=SemanticAttributes.js.map