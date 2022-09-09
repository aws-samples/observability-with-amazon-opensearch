
import { BreadcrumbGroup } from "@cloudscape-design/components";

export default function Links() {

  return (
    <BreadcrumbGroup
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
