/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as theme from './custom-theme.json';
import Routes from './src/pages/routes';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Routes />
      </ApplicationProvider>
    </>
  );
};

export default App;
