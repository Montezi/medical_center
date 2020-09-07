/* eslint-disable no-return-assign */
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
import { login } from '../../services/user.service';

import * as S from './styled';
import InputComponent from '../../components/Input';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT;

const Login = () => {
  const dispatch = useDispatch();
  const { setUser, setAuthenticate } = userActions;

  const dropDownAlertRef = useRef(null);

  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async (values) => {
    setEmail('');
    setPassword('');
    try {
      const res = await login(values);
      dispatch(setUser(res));
      dispatch(setAuthenticate(true));
    } catch (err) {
      let message = '';
      if (err.code === 'auth/user-not-found') {
        message = 'Usuário não encontrado';
      }

      if (err.code === 'auth/wrong-password') {
        message = 'Usuário ou senha incorretos!';
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
          Acessar
        </S.Title>

        <Layout style={{ backgroundColor: 'transparent' }}>
          <InputComponent
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholderStyle={{ color: '#FF0000' }}
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
            Entrar
          </S.Typography>
        </S.Button>

        <SocialLogin />

        <S.BoxRow>
          <S.Typography>Novo por aqui? </S.Typography>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <S.Typography underline>Cadastre-se </S.Typography>
          </TouchableHighlight>
        </S.BoxRow>
      </ImageBackground>
      <DropdownAlert
        inactiveStatusBarStyle="dark-content"
        ref={dropDownAlertRef}
      />
    </S.Layout>
  );
};

export default Login;
