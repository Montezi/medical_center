/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, SafeAreaView, TouchableOpacity } from 'react-native';

import { Drawer, DrawerItem, Text, Icon, Layout } from '@ui-kitten/components';
import { userActions } from '../../store/ducks/user.ducks';

import {
  logout,
  pasta,
  estetoscopio,
  agenda,
  maleta,
  avatar,
} from '../../assets';

import DrawerHeader from '../../components/modules/HeaderDrawer';

import styles from './styles';

const Header = () => {
  return (
    <DrawerHeader
      avatar={avatar}
      name="Ana Medrado"
      cellphone="+55 46 999999999"
    />
  );
};
const Schedule = () => (
  <Image source={agenda} style={styles.image} resizeMode="cover" />
);
const History = () => <Image source={pasta} style={styles.image} />;
const Doctor = () => <Image source={estetoscopio} style={styles.image} />;
const Hospital = () => <Image source={maleta} style={styles.image} />;
const Logout = () => <Image source={logout} style={styles.image} />;

const DrawerContent = ({ ...props }) => {
  const dispatch = useDispatch();
  const { setAuthenticate } = userActions;

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const logoutFunc = () => {
    dispatch(setAuthenticate(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      >
        <Layout style={styles.containerIcon}>
          <Icon name="close" fill="#F06C63" style={styles.icon} />
        </Layout>
      </TouchableOpacity>
      <Drawer
        header={Header}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>AGENDA</Text>}
          accessoryLeft={Schedule}
          onPress={() => props.navigation.navigate('Schedule')}
          style={styles.item}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>HISTÓRICO MÉDICO</Text>}
          accessoryLeft={History}
          onPress={() => props.navigation.navigate('History')}
          style={styles.item}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>MÉDICOS</Text>}
          accessoryLeft={Doctor}
          onPress={() => props.navigation.navigate('Doctor')}
          style={styles.item}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>CLINÍCAS E HOSPITAIS</Text>}
          accessoryLeft={Hospital}
          onPress={() => props.navigation.navigate('Hospital')}
          style={styles.item}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>SAIR</Text>}
          accessoryLeft={Logout}
          onPress={logoutFunc}
          style={styles.item}
        />
      </Drawer>
    </SafeAreaView>
  );
};

export default DrawerContent;
