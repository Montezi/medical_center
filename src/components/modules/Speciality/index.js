import React from 'react';
import { Image } from 'react-native';
import { Layout, Icon, Text } from '@ui-kitten/components';
// import { Container } from './styles';
import {
  cardio,
  especialidade,
  especialidade2,
  especialidade3,
} from '../../../assets';

const Speciality = () => {
  return (
    <>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#00000009',
          marginHorizontal: 20,
          backgroundColor: 'transparent',
          marginBottom: 20,
        }}
      >
        <Layout
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F06C63',
            width: 100,
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 15,
            }}
          >
            Especialidades
          </Text>
        </Layout>
        <Layout
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 10,
            }}
          >
            VER TODAS
          </Text>
          <Icon
            name="arrow-ios-forward-outline"
            fill="#F06C63"
            style={{ width: 10, height: 10 }}
          />
        </Layout>
      </Layout>
      <Layout
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Image
          source={especialidade}
          resizeMode="cover"
          style={{ width: 67, height: 67 }}
        />
        <Image
          source={especialidade2}
          resizeMode="cover"
          style={{ width: 67, height: 67 }}
        />
        <Image
          source={especialidade3}
          resizeMode="cover"
          style={{ width: 67, height: 67 }}
        />
        <Image
          source={cardio}
          resizeMode="cover"
          style={{ width: 67, height: 67 }}
        />
      </Layout>
    </>
  );
};

export default Speciality;
