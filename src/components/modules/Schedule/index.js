import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import { agenda } from '../../../assets';

const Schedule = () => {
  const navigation = useNavigation();
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
          marginTop: 30,
        }}
      >
        <Layout
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F06C63',
            width: 100,
            backgroundColor: 'transparent',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 15,
            }}
          >
            Agenda
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
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginRight: 20,
          marginTop: 10,
          backgroundColor: 'transparent',
        }}
      >
        <Layout>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 9,
            }}
          >
            Sua próxima consulta
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 9,
            }}
          >
            25 outubro 2020 14:30
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 12,
            }}
          >
            Dr. Fernando Lima
          </Text>
        </Layout>

        <Image
          source={agenda}
          resizeMode="cover"
          style={{ height: 60, width: 60 }}
        />
      </Layout>
      <Layout
        style={{
          alignItems: 'center',
          marginTop: 10,
          backgroundColor: 'transparent',
        }}
      >
        <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#F06C63"
            style={{ width: 15, height: 15 }}
          />
          <Text
            style={{
              color: '#ADDACD',
              fontFamily: 'AcuminPro-Regular',
              fontSize: 15,
            }}
          >
            OUTUBRO 2020
          </Text>

          <Icon
            name="arrow-ios-forward-outline"
            fill="#F06C63"
            style={{ width: 15, height: 15 }}
          />
        </Layout>
      </Layout>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          marginHorizontal: 25,
          marginTop: 10,
        }}
      >
        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            22
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            ter
          </Text>
        </Layout>
        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            23
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            qua
          </Text>
        </Layout>
        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            24
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            qui
          </Text>
        </Layout>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailSchedule');
          }}
        >
          <Layout
            style={{
              backgroundColor: '#F06C63',
              width: 40,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#ADDACD',
                fontFamily: 'AcuminPro-Bold',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              25
            </Text>
            <Text
              style={{
                color: '#ADDACD',
                fontFamily: 'AcuminPro-Bold',
                fontSize: 10,
              }}
            >
              sex
            </Text>
          </Layout>
        </TouchableOpacity>

        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            26
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            sab
          </Text>
        </Layout>
        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            27
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            dom
          </Text>
        </Layout>
        <Layout
          style={{
            backgroundColor: '#ADDACD',
            width: 40,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            28
          </Text>
          <Text
            style={{
              color: '#F06C63',
              fontFamily: 'AcuminPro-Bold',
              fontSize: 10,
            }}
          >
            seg
          </Text>
        </Layout>
      </Layout>
    </>
  );
};

export default Schedule;
