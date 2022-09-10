import { useEffect, useState } from "react";
import Layout from "@cloudscape-design/components/app-layout";
import { SpaceBetween, Header, Link, Button, Alert, ContentLayout, Container, Wizard, TextContent } from "@cloudscape-design/components";
import { Cards, Links, Tools } from "./components";

export default function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data)
      setCurrentTime(data.time);
    });
  }, []);

  const [
    activeStepIndex,
    setActiveStepIndex
  ] = useState(0);

  const checkout = async (e: any) => {
    const req = await fetch('/checkout')
      .then(res => res.json())
      .then(data => console.log(data))

    console.log(req)
  }

  const createOrder = async (e: any) => {
    const req = await fetch('/create-order')
      .then(res => res.json())
      .then(data => console.log(data))

    console.log(req)
  }

  const statusOrder = async (e: any) => {
    const req = await fetch('/order')
      .then(res => res.json())
      .then(data => console.log(data))

    console.log(req)
  }

  const cancelOrder = async (e: any) => {
    const req = await fetch('http://order-service.order-service.svc.cluster.local:80/clear_order')
      .then(res => res.json())
      .then(data => console.log(data))

    console.log(req)
  }

  const payOrder = async (e: any) => {
    const req = await fetch('/pay-order')
      .then(res => res.json())
      .then(data => console.log(data))

    console.log(req)
  }

  return (
    <>
      <Layout
        breadcrumbs={
          <Links />
        }
        tools={
          <Tools />
        }
        navigationHide
        content={
          <ContentLayout
            header={
              <SpaceBetween size="m" >
                <Header
                  className="with-link"
                  description="Your one-stop shop for Observability"
                  info={
                    <Link
                      href="https://catalog.us-east-1.prod.workshops.aws/workshops/1abb648b-2ef8-442c-a731-efbcb69c1e1e/en-US"
                      rel="noopener noreferrer"
                      target="_blank"
                    >Info
                    </Link>
                  }
                  variant="h1"
                >
                  o11y Shop  <p>The current time is {currentTime}.</p>
                </Header>

                {/* <Alert>This is a generic alert.</Alert> */}
              </SpaceBetween>
            }
          >
            {/* <Container
              header={
                <Header
                  description="Container description"
                  variant="h2"
                >
                  Your one stop shop for Observability
                </Header>
              }
            > */}

            <Wizard
              i18nStrings={{
                stepNumberLabel: stepNumber =>
                  `Step ${stepNumber}`,
                collapsedStepsLabel: (stepNumber, stepsCount) =>
                  `Step ${stepNumber} of ${stepsCount}`,
                skipToButtonLabel: (step, stepNumber) =>
                  `Skip to ${step.title}`,
                cancelButton: "Cancel",
                previousButton: "Previous",
                nextButton: "Next",
                submitButton: "Launch instance",
                optional: "optional"
              }}
              onNavigate={({ detail }) =>
                setActiveStepIndex(detail.requestedStepIndex)
              }
              activeStepIndex={activeStepIndex}
              steps={[
                {
                  title: "Choose instance type",
                  content: (
                    <Cards />
                  )
                },
                {
                  title: "Add storage",
                  content: (
                    <Container
                      header={
                        <Header variant="h2">
                          Form container header
                        </Header>
                      }
                    >
                      <SpaceBetween direction="vertical" size="l">
                      </SpaceBetween>
                    </Container>
                  ),
                  isOptional: true
                },
                {
                  title: "Configure security group",
                  content: (
                    <Container
                      header={
                        <Header variant="h2">
                          Form container header
                        </Header>
                      }
                    >
                      <SpaceBetween direction="vertical" size="l">
                      </SpaceBetween>
                    </Container>
                  ),
                  isOptional: true
                },
                {
                  title: "Review and launch",
                  content: (
                    <SpaceBetween size="xs">
                      <Header
                        variant="h3"
                        actions={
                          <Button
                            onClick={() => setActiveStepIndex(0)}
                          >
                            Edit
                          </Button>
                        }
                      >
                        Step 1: Instance type
                      </Header>
                      <Container
                        header={
                          <Header variant="h2">
                            Container title
                          </Header>
                        }
                      >
                      </Container>
                    </SpaceBetween>
                  )
                }
              ]}
            />
            <SpaceBetween size="m" >
              <div className="to-the-right">
                <Button
                  variant="primary"
                  onClick={checkout}
                >
                  Checkout
                </Button>
                <Button
                  variant="primary"
                  onClick={createOrder}
                >
                  Create
                </Button>
                <Button
                  variant="primary"
                  onClick={statusOrder}
                >
                  Order
                </Button>
                <Button
                  variant="primary"
                  onClick={payOrder}
                >
                  Pay
                </Button>
                <Button
                  variant="primary"
                  onClick={cancelOrder}
                >
                  Cancel
                </Button>
              </div>

              <TextContent className="with-link">
                © {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Made with {" "}
                <a
                  href="https://cloudscape.design/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <strong>Cloudscape</strong> Design System
                </a>

              </TextContent>

            </SpaceBetween>

            {/* </Container> */}
          </ContentLayout >
        }
        footerSelector="#footer"
      />
    </>
  );
}