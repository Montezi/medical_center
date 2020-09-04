import React from 'react';

import { Layout, Text, Button, ButtonGroup } from '@ui-kitten/components';

const Home = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Hello Medical Talk!</Text>
      <Text category="h2">Hello Medical Talk!</Text>
      <Text category="h3">Hello Medical Talk!</Text>
      <Text category="h4">Hello Medical Talk!</Text>
      <Text category="h5">Hello Medical Talk!</Text>
      <ButtonGroup style={{ margin: 2 }} status="primary">
        <Button>Butão</Button>
      </ButtonGroup>
      <ButtonGroup style={{ margin: 2 }} status="warning">
        <Button>Butão</Button>
      </ButtonGroup>
      <ButtonGroup style={{ margin: 2 }} status="success">
        <Button>Butão</Button>
      </ButtonGroup>
      <ButtonGroup style={{ margin: 2 }} status="info">
        <Button>Butão</Button>
      </ButtonGroup>
      <ButtonGroup style={{ margin: 2 }} status="danger">
        <Button>Butão</Button>
      </ButtonGroup>
      <ButtonGroup style={{ margin: 2 }} status="basic">
        <Button>Butão</Button>
      </ButtonGroup>
    </Layout>
  );
};

export default Home;
