/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import {
  Platform,
  NativeModules,
  TouchableHighlight,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { Layout } from '@ui-kitten/components';

import DropdownAlert from 'react-native-dropdownalert';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/ducks/user.ducks';

import { BackgroundLogin, LogoVertical } from '../../assets';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import * as S from './styled';
import InputComponent from '../../components/Input';
import { register } from '../../services/user.service';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT;

const Login = () => {
  const dispatch = useDispatch();
  const { setUser, setAuthenticate } = userActions;

  const navigation = useNavigation();

  const dropDownAlertRef = useRef();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async (values) => {
    setEmail('');
    setPassword('');
    try {
      const res = await register(values);
      dispatch(setUser(res));
      dispatch(setAuthenticate(true));
    } catch (err) {
      let message = err;
      if (err.code === 'auth/email-already-exists') {
        message = 'Email já existe';
      }
      if (err.code === 'auth/email-already-in-use') {
        message = 'Email já existe';
      }
      if (err.code === 'auth/invalid-email') {
        message = 'Email invalido';
      }
      if (err.code === 'auth/weak-password') {
        message = 'Senha é inválida, no mínimo 6 caracteres';
      }

      dropDownAlertRef.current.alertWithType('error', 'Erro', message);
    }
  };

  return (
    <S.Layout paddingTop={STATUSBAR_HEIGHT}>
      <ImageBackground
        source={BackgroundLogin}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        <S.Logo source={LogoVertical} />
        <S.Title category="h3" status="primary">
          Cadastrar
        </S.Title>

        <Layout style={{ backgroundColor: 'transparent' }}>
          <InputComponent
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
          <InputComponent
            placeholder="Senha"
            password
            accessoryRight
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </Layout>

        <S.Button
          status="success"
          onPress={() => {
            onSubmit({ email, password });
          }}
        >
          <S.Typography uppercase color="#FFF" fSize="25px">
            Cadastre-se
          </S.Typography>
        </S.Button>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <S.Typography margin>Já é Cadastrado? Acesse Aqui</S.Typography>
        </TouchableHighlight>

        <SocialLogin register />
      </ImageBackground>
      <DropdownAlert ref={dropDownAlertRef} />
    </S.Layout>
  );
};

export default Login;
