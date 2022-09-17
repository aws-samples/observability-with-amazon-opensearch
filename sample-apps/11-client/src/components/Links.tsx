
import { BreadcrumbGroup } from "@cloudscape-design/components";

function Links() {

  return (
    <BreadcrumbGroup
      className="with-link"
      items={[
        {
          text: "AWS Workshops",
          href: "https://workshops.aws"
        },
        {
          text: "Microservice Observability with Amazon OpenSearch Service",
          href: "#"
        }
      ]}
      ariaLabel="Breadcrumbs"
    />
  )
}

export default Links;
