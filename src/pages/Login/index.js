/* eslint-disable no-use-before-define */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  NativeModules,
} from 'react-native';

import { Layout, Text, Button, ButtonGroup } from '@ui-kitten/components';
import { BackgroundLogin, LogoVertical } from '../../assets';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT;

const Login = () => {
  const navigation = useNavigation();

  return (
    <Layout style={styles.container} level="1">
      <ImageBackground source={BackgroundLogin} style={styles.image}>
        <Image source={LogoVertical} style={{ width: 205, height: 180 }} />
        <Text style={styles.title} status="primary">
          acessar
        </Text>

        <ButtonGroup style={styles.button} status="success">
          <Button
            style={styles.containerButton}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.textButton}>entrar</Text>
          </Button>
        </ButtonGroup>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 'auto',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  textButton: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontFamily: 'AcuminPro-Bold',
  },
  button: {
    marginTop: 20,
  },
  containerButton: {
    width: 317,
    height: 53,
    borderRadius: 12,
  },
});

export default Login;
