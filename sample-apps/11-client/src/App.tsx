import { useEffect, useState } from "react";
import Layout from "@cloudscape-design/components/app-layout";
import {
  Container,
  ContentLayout,
  Header,
  Link,
  SpaceBetween,
  TextContent,
  Wizard
} from "@cloudscape-design/components";
import {
  Cards,
  Links,
  Payment,
  Status,
  Tools
} from "./components";

export default function App() {

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [finished, setFinished] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('/login')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }, []);

  const handleTotal = (num: number) => {
    fetch('/create-order')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setTotal(num)
  };

  const handlePay = async (bool: boolean) => {
    await fetch('/pay-order')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
    setLoading(false)
    setPaid(bool)
  };

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
                  o11y Shop
                </Header>
              </SpaceBetween>
            }
          >
            {
              finished
                ? (
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
                      submitButton: "Finish",
                      optional: "optional"
                    }}
                    onCancel={() => {
                      setActiveStepIndex(0)
                      setTotal(0)
                      setLoading(false);
                    }}
                    onNavigate={({ detail }) => {
                      setActiveStepIndex(detail.requestedStepIndex)
                      setLoading(true);
                    }}
                    onSubmit={() => {
                      setFinished(false);
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
                              <Status />
                            </SpaceBetween>
                          </Container>
                        ),
                      }
                    ]}
                  />
                )
                : (
                  <Container
                    header={
                      <Header
                        variant="h2"
                        description="After some rounds, go check your logs and traces."
                      >
                        Done!
                      </Header>
                    }
                  >
                    Make sure to reload and explore several times to generate enough data.
                  </Container>
                )
            }

            <TextContent className="with-link mt5">
              © {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Made with {" "}
              <a
                href="https://cloudscape.design/"
                rel="noopener noreferrer"
                target="_blank">
                <strong>Cloudscape</strong> Design System
              </a>

            </TextContent>

          </ContentLayout >
        }
        footerSelector="#footer"
      />
    </>
  );
}