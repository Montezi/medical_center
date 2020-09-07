import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Layout, Tab, TabView } from '@ui-kitten/components';

import { doutor } from '../../../assets';

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'AcuminPro-Regular',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
});

const TabViewLazyLoading = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="Médicos">
        <Layout style={styles.tabContainer}>
          <Image source={doutor} resizeMode="cover" style={{ width: '100%' }} />
        </Layout>
      </Tab>
      <Tab title="Hospitais">
        <Layout style={styles.tabContainer}>
          <Image source={doutor} resizeMode="cover" style={{ width: '100%' }} />
        </Layout>
      </Tab>
      <Tab title="Laboratórios">
        <Layout style={styles.tabContainer}>
          <Image source={doutor} resizeMode="cover" style={{ width: '100%' }} />
        </Layout>
      </Tab>
    </TabView>
  );
};
export default TabViewLazyLoading;
