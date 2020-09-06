/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
// import Login from './Login';
import DrawerContent from './DrawerContent';
import Schedule from './Schedule';
import Hospital from './Hospital';
import History from './History';
import Doctor from './Doctor';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// };

const MainNavigator = () => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Drawer.Navigator
      drawerStyle={{ width: '90%' }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Schedule" component={Schedule} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Doctor" component={Doctor} />
      <Drawer.Screen name="Hospital" component={Hospital} />
    </Drawer.Navigator>
  );
};

export default function Routes() {
  return <NavigationContainer>{MainNavigator()}</NavigationContainer>;
}
