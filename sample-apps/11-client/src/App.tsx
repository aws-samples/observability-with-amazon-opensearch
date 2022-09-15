import { useEffect, useState } from "react";
import Layout from "@cloudscape-design/components/app-layout";
import { SpaceBetween, Header, Link, Button, Alert, ContentLayout, Container, Wizard, TextContent } from "@cloudscape-design/components";
import { Cards, Links, Payment, Tools } from "./components";

export default function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const handleTotal = (num: number) => {
    setTotal(num)
  }

  const handlePay = (bool: boolean) => {
    setLoading(false)
    setPaid(bool)
  }

  const handleTest = () => {
    console.log('create-order')
    fetch('/create-order').then(res => res.json()).then(data => {
      console.log(data)
    });
  }

  const [
    activeStepIndex,
    setActiveStepIndex
  ] = useState(0);


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
                  o11y Shop  <span>The current time is {currentTime}.</span>
                </Header>
              </SpaceBetween>
            }
          >
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
                submitButton: "Checkout",
                optional: "optional"
              }}
              onCancel={() => {
                setActiveStepIndex(0)
                setTotal(0)
                setLoading(false)
              }}
              onNavigate={({ detail }) => {
                setActiveStepIndex(detail.requestedStepIndex)
                setLoading(true)
              }}
              activeStepIndex={activeStepIndex}
              isLoadingNextStep={loading}
              steps={[
                {
                  title: "Select your products",
                  content: (
                    <Cards handleTotal={handleTotal} />
                  )
                },
                {
                  title: "Complete your checkout",
                  content: (
                    <Container
                      header={
                        <Header variant="h2">
                          Payment
                        </Header>
                      }
                    >
                      <SpaceBetween direction="vertical" size="l">
                        <Payment total={total} handlePay={handlePay} />
                      </SpaceBetween>
                    </Container>
                  )
                },
                {
                  title: "Check status",
                  content: (
                    <Container
                      header={
                        <Header variant="h2">
                          Order status
                        </Header>
                      }
                    >
                      <SpaceBetween direction="vertical" size="l">
                      </SpaceBetween>
                    </Container>
                  ),
                }
              ]}
            />

            <TextContent className="with-link mt5">
              <Button onClick={handleTest}>Test</Button>
              © {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Made with {" "}
              <a
                href="https://cloudscape.design/"
                rel="noopener noreferrer"
                target="_blank">
                <strong>Cloudscape</strong> Design System
              </a>

            </TextContent>

            {/* </Container> */}
          </ContentLayout >
        }
        footerSelector="#footer"
      />
    </>
  );
}