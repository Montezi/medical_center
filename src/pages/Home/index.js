import React from 'react';

import { Layout, Text, Button, ButtonGroup } from '@ui-kitten/components';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Hello Medical Talk!</Text>
      <Text category="h2">Hello Medical Talk!</Text>
      <Text category="h3">Hello Medical Talk!</Text>
      <Text category="h4">Hello Medical Talk!</Text>
      <Text category="h5">Hello Medical Talk!</Text>
      <ButtonGroup style={{ margin: 2 }} status="primary">
        <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          Menu
        </Button>
      </ButtonGroup>
    </Layout>
  );
};

export default Home;
