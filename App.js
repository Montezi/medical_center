import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          {' '}
          Hello Medical Talk!{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
