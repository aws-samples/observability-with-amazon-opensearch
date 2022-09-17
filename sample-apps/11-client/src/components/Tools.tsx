import { HelpPanel, Icon } from "@cloudscape-design/components";

function Tools() {
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
        <h3>Next Steps</h3>
        <p>
          After this step, please continue the workshop in the <a
            href="https://catalog.us-east-1.prod.workshops.aws/workshops/1abb648b-2ef8-442c-a731-efbcb69c1e1e/en-US/050-step3"
            rel="noopener noreferrer"
            target="_blank"
            title="Microservice Observability with Amazon OpenSearch Service Workshop Step 3"
          ><strong>Step 3:</strong> Enable searching logs</a>.
        </p>
      </div>
    </HelpPanel>
  )
}

export default Tools;
