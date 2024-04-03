import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QrKodAlan from './screens/qrKodAlan';
import A from './screens/1';
import B from './screens/2';
import C from './screens/3';
import D from './screens/4';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false, tabBarShowLabel: false,
    tabBarStyle: { height: 80 }
  }}>
    <Tab.Screen name="qrKodAlan" component={QrKodAlan}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
            <Image source={require('./icons/qrLogo.png')} resizeMode='contain' style={{ width: 40, height: 40, tintColor: focused ? null : '#293644' }} />
          </View>
        )
      }} />
    <Tab.Screen name="A" component={A}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
            <Image source={require('./icons/map-pin.png')} resizeMode='contain' style={{ width: 40, height: 40, tintColor: focused ? '#F4690B' : null }} />
          </View>
        )
      }} />
    <Tab.Screen name="B" component={B}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' ,marginLeft:5}}>
            <Image source={require('./icons/macro.png')} resizeMode='contain' style={{ width: 40, height: 40, tintColor: focused ? '#F4690B' : null }} />
          </View>
        ),
      }} />
    <Tab.Screen name="C" component={C}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
            <Image source={require('./icons/basket.png')} resizeMode='contain' style={{ width: 40, height: 40, tintColor: focused ? '#F4690B' : null }} />
          </View>
        )
      }} />
    <Tab.Screen name="D" component={D}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15, backgroundColor: '#F4690B', borderWidth: 4, borderRadius: 22, padding: 10, borderColor: '#fff', elevation: 2, top: -25 }}>
            <Image source={require('./icons/repeat.png')} resizeMode='contain' style={{ width: 40, height: 40, tintColor: focused ? '#F4690B' : null }} />
          </View>
        ),
      }} />
  </Tab.Navigator >
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;