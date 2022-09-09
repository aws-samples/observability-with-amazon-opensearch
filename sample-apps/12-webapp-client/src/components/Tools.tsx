import { HelpPanel, Icon } from "@cloudscape-design/components";

export default function Tools() {
  return (
    <HelpPanel
      header={
        <h2>Info</h2>
      }
      footer={
        <div>
          <h3>
            Learn more <Icon name="external" />
          </h3>
          <ul>
            <li>
              <a
                href="https://aws.amazon.com/opensearch-service/the-elk-stack/what-is-opensearch/"
                rel="noopener noreferrer"
                target="_blank">
                What is OpenSearch?
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/opensearch-service/features/observability/"
                rel="noopener noreferrer"
                target="_blank">
                Observability features
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/opensearch-service/pricing/"
                rel="noopener noreferrer"
                target="_blank">
                Amazon OpenSearch pricing
              </a>
            </li>
            <li>
              <a
                href="https://opensearch.org/"
                rel="noopener noreferrer"
                target="_blank">
                OpenSearch
              </a>
            </li>
          </ul>
        </div>
      }
    >
      <div>
        <p>
          Securely unlock real-time search, monitoring, and analysis of business and operational data.
        </p>
        <h3>Heading</h3>
        <p>
          Text
        </p>
        <h5>Terms</h5>
        <dl>
          <dt>
            Logs
          </dt>
          <dd>
            This is its description.
          </dd>
          <dt>
            Tracing
          </dt>
          <dd>
            This is its description
          </dd>
          <dt>
            Metrics
          </dt>
          <dd>
            This is its description
          </dd>
        </dl>
      </div>
    </HelpPanel>
  )
}
