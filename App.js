/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import SplashScreen from 'react-native-splash-screen';
import { store, persistor } from './src/store';
import * as theme from './custom-theme.json';
import * as mapping from './mapping.json';
import Routes from './src/pages/routes';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider
            {...eva}
            theme={{ ...eva.light, ...theme }}
            customMapping={mapping}
          >
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <Routes />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
