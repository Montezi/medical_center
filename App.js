/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import Routes from './src/pages/routes';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Routes />
    </ApplicationProvider>
  );
};

export default App;
