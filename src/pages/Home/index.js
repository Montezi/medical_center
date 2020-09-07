import React from 'react';
import {
  TouchableOpacity,
  Platform,
  NativeModules,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';

import { Layout, Icon, Input } from '@ui-kitten/components';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { LogoHorizontal, BackgroundLogin } from '../../assets';
import TabViewLazyLoading from '../../components/modules/TabViewLazyLoading';
import Speciality from '../../components/modules/Speciality';
import Schedule from '../../components/modules/Schedule';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 60 : StatusBarManager.HEIGHT;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();

  const search = () => (
    <Icon
      name="search-outline"
      fill="#F06C63"
      style={{ width: 20, height: 20 }}
    />
  );

  return (
    <Layout style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
      <ImageBackground
        source={BackgroundLogin}
        style={{
          flex: 1,
          width: windowWidth,
          height: windowHeight,
          resizeMode: 'cover',
        }}
      >
        <Layout style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 24 }}
          >
            <Icon
              name="menu-outline"
              fill="#F06C63"
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Image
            source={LogoHorizontal}
            resizeMode="cover"
            style={{ width: 160, height: 40, marginLeft: 60 }}
          />
        </Layout>
        <Input
          value=""
          placeholder=""
          onChangeText={() => {}}
          status="primary"
          accessoryRight={search}
          style={{
            backgroundColor: '#FFFFFF',
            marginHorizontal: 30,
            marginVertical: 30,
          }}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
            backgroundColor: 'transparent',
          }}
          showsVerticalScrollIndicator={false}
        >
          <Layout style={{ marginBottom: 20 }}>
            <TabViewLazyLoading />
          </Layout>
          <Speciality />
          <Schedule />
        </ScrollView>
      </ImageBackground>
    </Layout>
  );
};

export default Home;
