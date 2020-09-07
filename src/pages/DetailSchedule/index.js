import React, { useState } from 'react';
import {
  TouchableOpacity,
  Platform,
  NativeModules,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';

import { Layout, Icon, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import {
  LogoHorizontal,
  BackgroundLogin,
  doctor,
  mapa,
  calendar,
} from '../../assets';
import ModalAlert from '../../components/modules/ModalAlert';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 60 : StatusBarManager.HEIGHT;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailSchedule = () => {
  const navigation = useNavigation();

  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
      <ModalAlert
        isOpen={openModal}
        close={() => setOpenModal(false)}
        onPressVideo={() => {}}
      />
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
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Icon
              name="arrow-ios-back-outline"
              fill="#F06C63"
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <Image
            source={LogoHorizontal}
            resizeMode="cover"
            style={{ width: 160, height: 40, marginLeft: 60 }}
          />
        </Layout>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
            backgroundColor: 'transparent',
            marginLeft: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Layout
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginTop: 30,
              justifyContent: 'center',
            }}
          >
            <Layout>
              <Layout style={{ flexDirection: 'row' }}>
                <Image
                  source={calendar}
                  resizeMode="cover"
                  style={{ height: 48, width: 59 }}
                />
                <Layout style={{ marginLeft: 16 }}>
                  <Text style={{ color: '#ADDACD', fontSize: 22 }}>
                    Dr. José
                  </Text>
                  <Text
                    style={{
                      color: '#ADDACD',
                      fontSize: 12,
                      fontFamily: 'AcuminPro-Regular',
                    }}
                  >
                    Reumatologista
                  </Text>
                </Layout>
              </Layout>
              <Layout style={{ width: 150, marginTop: 12 }}>
                <Text
                  style={{
                    color: '#ADDACD',
                    fontSize: 12,
                    fontFamily: 'AcuminPro-Regular',
                  }}
                >
                  O médico é graduado pela Universidade Federal da Grande
                  Dourados e possui residência médica em Clínica Médica e
                  Imunologia Clínica e Alergia. Ele atua como Médico
                  Imunologista e Alergista no Hospital das Clínicas da
                  Universidade de São Paulo(USP) e Médico Emergencista no
                  Hospital do Servidor Público Estadual de São Paulo.
                </Text>
              </Layout>
            </Layout>
            <Image source={doctor} />
          </Layout>
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#00000009',
              marginHorizontal: 10,
              backgroundColor: 'transparent',
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Layout
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#F06C63',
                width: 70,
              }}
            >
              <Text
                style={{
                  color: '#F06C63',
                  fontFamily: 'AcuminPro-Regular',
                  fontSize: 15,
                }}
              >
                Endereço
              </Text>
            </Layout>
          </Layout>
          <Layout style={{ alignItems: 'center' }}>
            <Image source={mapa} />
            <Text
              style={{
                color: '#F06C63',
                fontFamily: 'AcuminPro-Bold',
                fontSize: 22,
              }}
            >
              R$ 250,00
            </Text>
            <Text style={{ fontSize: 15 }}>CONSULTA PRESENCIAL</Text>
          </Layout>
          <Button
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
              marginHorizontal: 10,
              marginVertical: 20,
            }}
            status="danger"
            size="medium"
            onPress={() => {
              setOpenModal(true);
            }}
          >
            <Text
              style={{
                color: '#F06C63',
                fontFamily: 'AcuminPro-Bold',
                fontSize: 22,
              }}
            >
              FALAR COM ATENDENTE
            </Text>
          </Button>
          <Button
            style={{ marginHorizontal: 10 }}
            status="success"
            onPress={() => {
              navigation.navigate('Schedule');
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'AcuminPro-Bold',
                fontSize: 22,
              }}
            >
              MARCAR CONSULTA
            </Text>
          </Button>
        </ScrollView>
      </ImageBackground>
    </Layout>
  );
};

export default DetailSchedule;
