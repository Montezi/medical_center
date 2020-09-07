import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Layout, Icon, Text, Button } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import { modalAtendente } from '../../../assets';

const ModalAlert = ({ isOpen, onPressVideo, onPressChat, close }) => {
  return (
    <Modal isVisible={isOpen}>
      <Layout
        style={{
          height: 500,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={close}>
          <Layout style={{ marginLeft: 10, marginTop: 20 }}>
            <Icon
              name="close"
              fill="#F06C63"
              style={{ width: 30, height: 30 }}
            />
          </Layout>
          <Layout
            style={{
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 35,
              justifyContent: 'center',
            }}
          >
            <Image
              source={modalAtendente}
              resizeMode="cover"
              style={{ height: 100, width: 200 }}
            />
          </Layout>
          <Layout style={{ alignItems: 'center' }}>
            <Text style={{ color: '#F06C63', fontSize: 22, marginBottom: 12 }}>
              Olá Ana!
            </Text>
            <Text
              style={{
                fontFamily: 'AcuminPro-Regular',
                color: '#ADDACD',
                fontSize: 19,
                textAlign: 'center',
                marginHorizontal: 20,
                marginBottom: 40,
              }}
            >
              Para marcar uma consulta ou tirar duvidas você pode escolher uma
              forma de atendimento que seja mais agradável, facilitando o
              atendimento.
            </Text>
          </Layout>
        </TouchableOpacity>

        <Layout
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onPress={onPressVideo}
            status="danger"
            style={{ marginRight: 15 }}
          >
            <Text style={{ color: '#F06C63', fontSize: 22 }}>VIDEO</Text>
          </Button>
          <Button onPress={onPressChat} status="danger">
            <Text style={{ color: '#F06C63', fontSize: 22 }}>CHAT</Text>
          </Button>
        </Layout>
      </Layout>
    </Modal>
  );
};
ModalAlert.propTypes = {
  isOpen: PropTypes.bool,
  onPressChat: PropTypes.func,
  onPressVideo: PropTypes.func,
  close: PropTypes.func,
};
ModalAlert.defaultProps = {
  isOpen: false,
  onPressVideo: () => {},
  onPressChat: () => {},
  close: () => {},
};

export default ModalAlert;
