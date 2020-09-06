/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image } from 'react-native';

import { Layout, Text, Button } from '@ui-kitten/components';
import { google, facebook } from '../assets';

const SocialLogin = ({ register }) => {
  const navigation = useNavigation();

  const googleIcon = () => (
    <Image source={google} style={{ width: 25, height: 17 }} />
  );
  const facebookIcon = () => (
    <Image source={facebook} style={{ width: 25, height: 25 }} />
  );

  const loginSocial = (social) => {
    console.log(social);
    navigation.navigate('Home');
  };

  return (
    <Layout style={styles.container} level="1">
      <Button
        onPress={() => {
          loginSocial('facebook');
        }}
        style={styles.button}
        size="large"
        accessoryLeft={facebookIcon}
      >
        <Text style={styles.textButton}>
          {register ? 'Cadastrar-se' : 'Entrar'} com o facebook
        </Text>
      </Button>
      <Button
        onPress={() => {
          loginSocial('google');
        }}
        style={styles.button}
        accessoryLeft={googleIcon}
        size="large"
      >
        <Text style={styles.textButton}>
          {register ? 'Cadastrar-se' : 'Entrar'} com o Google
        </Text>
      </Button>
    </Layout>
  );
};

SocialLogin.propTypes = {
  register: PropTypes.bool,
};

SocialLogin.defaultProps = {
  register: false,
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textButton: {
    fontSize: 15,
    color: '#EE6C63',
    fontFamily: 'Roboto-Thin',
  },
  button: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 0.5,
  },
  containerButton: {
    width: 317,
    height: 53,
    borderRadius: 12,
  },
});

export default SocialLogin;
