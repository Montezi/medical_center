/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { BackgroundLogin, LogoVertical } from '../../assets';

const Login = () => {
  return (
    <Layout style={styles.container} level="1">
      <ImageBackground source={BackgroundLogin} style={styles.image}>
        <Image source={LogoVertical} style={{ width: 182, height: 186 }} />
        <Text style={styles.title}>Acessar</Text>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#F06C63',
    marginTop: 20,
  },
});

export default Login;
