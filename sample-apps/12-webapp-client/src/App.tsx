import Layout from "@cloudscape-design/components/app-layout";
import { SpaceBetween, Header, Link, Button, Alert, ContentLayout, Container } from "@cloudscape-design/components";
import { Cards, Links, Tools } from "./components";

export default function App() {

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
    const req = await fetch('/cancel-order')
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

                {/* <Alert>This is a generic alert.</Alert> */}
              </SpaceBetween>
            }
          >
            <Container
              header={
                <Header
                  description="Container description"
                  variant="h2"
                >
                  Your one stop shop for Observability
                </Header>
              }
            >

              <Cards />
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
              <p
                id="footer"
              >
                © {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.
              </p>

            </Container>
          </ContentLayout >
        }
        footerSelector="#footer"
      />
    </>
  );
}