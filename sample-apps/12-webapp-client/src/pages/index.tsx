import type { NextPage } from 'next'

import Container from '@cloudscape-design/components/container'
import Header from '@cloudscape-design/components/header'
import SpaceBetween from '@cloudscape-design/components/space-between'

import ClientRender from '../components/client-render'

const Home: NextPage = () => {

  return (
    <ClientRender>
      <SpaceBetween size="m">
        <Header variant="h1">o11y Shop</Header>
          <Container>
            <SpaceBetween size="s">
              <span>Observability webapp</span>
            </SpaceBetween>
          </Container>
      </SpaceBetween>
    </ClientRender>
  )
}

export default Home
