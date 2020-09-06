import React from 'react';
import PropTypes from 'prop-types';

import { Text, Divider, Avatar, Layout, Button } from '@ui-kitten/components';

import styles from './styles';

const HeaderDrawer = ({ name, cellphone, avatar }) => {
  return (
    <Layout style={styles.container}>
      <Avatar style={styles.avatar} size="giant" source={avatar} />
      <Text status="primary" style={styles.name}>
        {name}
      </Text>
      <Text status="success" style={styles.phone}>
        {cellphone}
      </Text>
      <Button size="tiny" status="primary" style={styles.button}>
        <Text style={styles.textButton}>EDITAR</Text>
      </Button>
      <Divider />
    </Layout>
  );
};
HeaderDrawer.propTypes = {
  name: PropTypes.string.isRequired,
  cellphone: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
};

export default HeaderDrawer;
