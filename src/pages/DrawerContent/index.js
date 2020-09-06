/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// import { DrawerActions, useNavigation } from '@react-navigation/native';

import {
  Drawer,
  DrawerItem,
  Text,
  Divider,
  Icon,
  Avatar,
  Layout,
  Button,
} from '@ui-kitten/components';

import { logout, pasta, estetoscopio, agenda, maleta } from '../../assets';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
  },
});
// import { Container } from './styles';
const Header = (props) => (
  <Layout style={{ alignItems: 'center', paddingTop: 20 }}>
    <TouchableOpacity onPress={() => {}}>
      <Icon
        name="close"
        fill="#F06C63"
        style={{ width: 30, height: 30, marginLeft: 230 }}
      />
    </TouchableOpacity>

    <Avatar
      style={{
        margin: 8,
        borderWidth: 3,
        borderColor: '#F06C63',
        height: 100,
        width: 100,
      }}
      size="giant"
      source={require('../../assets/avatar.png')}
    />
    <Text
      status="primary"
      style={{ fontSize: 18, fontFamily: 'AcuminPro-Bold', marginTop: 5 }}
    >
      Ana Medrado
    </Text>
    <Text
      status="success"
      style={{
        fontSize: 13,
        fontFamily: 'AcuminPro-Regular',
        borderRadius: 50,
      }}
    >
      +55 46 999999999
    </Text>
    <Button
      size="tiny"
      status="primary"
      style={{ marginTop: 5, borderRadius: 20 }}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 9,
          fontFamily: 'AcuminPro-Regular',
        }}
      >
        EDITAR
      </Text>
    </Button>
    <Divider />
  </Layout>
);
const Schedule = () => (
  <Image source={agenda} style={styles.image} resizeMode="cover" />
);
const History = () => <Image source={pasta} style={styles.image} />;
const Doctor = () => <Image source={estetoscopio} style={styles.image} />;
const Hospital = () => <Image source={maleta} style={styles.image} />;
const Logout = () => <Image source={logout} style={styles.image} />;

const DrawerContent = ({ ...props }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <SafeAreaView>
      <Drawer
        header={Header}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>AGENDA</Text>}
          accessoryLeft={Schedule}
          onPress={() => props.navigation.navigate('Schedule')}
          style={{ paddingBottom: 25, paddingTop: 25 }}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>HISTÓRICO MÉDICO</Text>}
          accessoryLeft={History}
          onPress={() => props.navigation.navigate('History')}
          style={{ paddingBottom: 25, paddingTop: 25 }}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>MÉDICOS</Text>}
          accessoryLeft={Doctor}
          onPress={() => props.navigation.navigate('Doctor')}
          style={{ paddingBottom: 25, paddingTop: 25 }}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>CLINÍCAS E HOSPITAIS</Text>}
          accessoryLeft={Hospital}
          onPress={() => props.navigation.navigate('Hospital')}
          style={{ paddingBottom: 25, paddingTop: 25 }}
        />
        <DrawerItem
          title={(evaProps) => <Text {...evaProps}>SAIR</Text>}
          accessoryLeft={Logout}
          onPress={() => props.navigation.navigate('Home')}
          style={{ paddingBottom: 25, paddingTop: 25 }}
        />
      </Drawer>
    </SafeAreaView>
  );
};

export default DrawerContent;
